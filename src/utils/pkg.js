import { readFileSync } from "fs"

/** @type import("type-fest").PackageJson | null */
const cachedPkgJson = null

/**
 * @returns import("type-fest").PackageJson | null
 */
export const getPkgJson = () => {
  if (cachedPkgJson != null) return cachedPkgJson

  try {
    const contents = readFileSync("./package.json", { encoding: "utf8" })

    return JSON.parse(contents)
  } catch {
    // eslint-disable-next-line no-console
    console.error("Could not load package.json :(")
    return null
  }
}

/**
 * @param {string} pkg
 * @return {boolean}
 */
export const isPackageInstalled = (pkg) => {
  const pkgJson = getPkgJson()

  if (pkgJson == null) return false

  return [
    ...Object.keys(pkgJson.dependencies ?? {}),
    ...Object.keys(pkgJson.devDependencies ?? {}),
    ...Object.keys(pkgJson.peerDependencies ?? {}),
  ].includes(pkg)
}

/**
 * @param {string[]} packages
 * @return {boolean}
 */
export const assertPackagesInstalled = (packages) => {
  for (const pkg of packages) {
    if (!isPackageInstalled(pkg)) {
      throw new Error(`'${pkg}' is required but not installed!`)
    }
  }
}

/**
 * @param {string} pkg
 * @return {string | null}
 */
export const getPackageVersion = (pkg) => {
  const pkgJson = getPkgJson()

  if (pkgJson == null) return null

  if (pkgJson.dependencies && Object.keys(pkgJson.dependencies).includes(pkg)) {
    return pkgJson.dependencies[pkg]
  }

  if (pkgJson.devDependencies && Object.keys(pkgJson.devDependencies).includes(pkg)) {
    return pkgJson.devDependencies[pkg]
  }

  if (pkgJson.peerDependencies && Object.keys(pkgJson.peerDependencies).includes(pkg)) {
    return pkgJson.peerDependencies[pkg]
  }

  return null
}

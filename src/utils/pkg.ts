import { PackageJson } from "type-fest"
import { readFileSync } from "fs"

const cachedPkgJson: PackageJson | null = null

export const getPkgJson = (): PackageJson | null => {
  if (cachedPkgJson != null) return cachedPkgJson

  try {
    const contents = readFileSync("./package.json", { encoding: "utf-8" })

    return JSON.parse(contents)
  } catch (_) {
    console.error("Could not load package.json :(")
    return null
  }
}

export const isPackageInstalled = (pkg: string) => {
  const pkgJson = getPkgJson()

  if (pkgJson == null) return false

  return [
    ...Object.keys(pkgJson.dependencies ?? {}),
    ...Object.keys(pkgJson.devDependencies ?? {}),
    ...Object.keys(pkgJson.peerDependencies ?? {}),
  ].includes(pkg)
}

export const getPackageVersion = (pkg: string) => {
  const pkgJson = getPkgJson()

  if (pkgJson == null) return null

  if (pkgJson.dependencies && Object.keys(pkgJson.dependencies).includes(pkg)) {
    return pkgJson.dependencies[pkg] as string
  }

  if (
    pkgJson.devDependencies &&
    Object.keys(pkgJson.devDependencies).includes(pkg)
  ) {
    return pkgJson.devDependencies[pkg] as string
  }

  if (
    pkgJson.peerDependencies &&
    Object.keys(pkgJson.peerDependencies).includes(pkg)
  ) {
    return pkgJson.peerDependencies[pkg] as string
  }

  return null
}
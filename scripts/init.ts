import { mkdir, rm } from "node:fs/promises"

async function downloadFonts() {
  const fontURL = "https://github.com/orioncactus/pretendard/releases/download/v1.3.9/PretendardGOV-1.3.9.zip"
  const zipSha256 = "080266d2faa8911b0e239b367405fdbcb2b4e17b22067e40aeb34a6c3fca0ac4"
  const fontsDir = "./assets/fonts/pretendard"
  const zipPath = "./assets/fonts.zip"

  console.log("Downloading fonts...")

  const arrayBuffer = await (await fetch(fontURL)).arrayBuffer()

  const hasher = new Bun.CryptoHasher("sha256")
  hasher.update(arrayBuffer)
  const hash = hasher.digest("hex")
  if (hash !== zipSha256) throw new Error(`SHA256 mismatch! Expected ${zipSha256}, got ${hash}`)

  await Bun.write(zipPath, arrayBuffer, { createPath: true })
  await mkdir(fontsDir, { recursive: true })
  await Bun.spawn(["unzip", "-o", zipPath, "-d", fontsDir]).exited
  await rm(zipPath)
}

if (import.meta.main) {
  await downloadFonts()

  console.log("Done!")
}

const fs = require("fs-extra");
const path = require("path");

const sourceDir = path.resolve(__dirname, "../src/app/features/base");
const destinationDir = path.resolve(__dirname, "../public/examples/base");

async function copyAndTransform(src, dest) {
  const stats = await fs.stat(src);

  if (stats.isDirectory()) {
    await fs.ensureDir(dest);
    const entries = await fs.readdir(src);

    for (const entry of entries) {
      const srcPath = path.join(src, entry);
      const destPath = path.join(
        dest,
        entry.endsWith(".ts") ? entry.replace(/\.ts$/, ".ts.txt") : entry
      );
      await copyAndTransform(srcPath, destPath);
    }
  } else if (stats.isFile()) {
    const transformedPath = src.endsWith(".ts")
      ? dest.replace(/\.ts$/, ".ts.txt")
      : dest;
    await fs.copy(src, transformedPath);
  }
}

async function startCopy() {
  try {
    // 1. Eliminar la carpeta de destino anterior
    await fs.remove(destinationDir);
    console.log(`🧹 Carpeta anterior eliminada: ${destinationDir}`);

    // 2. Copiar y transformar archivos
    await copyAndTransform(sourceDir, destinationDir);
    console.log(`✅ Carpeta copiada y archivos .ts renombrados a .ts.txt`);
  } catch (error) {
    console.error("❌ Error durante el proceso:", error);
  }
}

startCopy();

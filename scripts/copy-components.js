const fs = require("fs-extra");
const path = require("path");

// Ruta de origen: carpeta completa que quieres copiar
const sourceDir = path.resolve(__dirname, "../src/app/features/base");

// Ruta destino: donde se copiará la carpeta
const destinationDir = path.resolve(__dirname, "../public/examples/base");

async function copyBaseFeaturesFolder() {
  try {
    await fs.copy(sourceDir, destinationDir);
    console.log(`✅ Carpeta copiada:\n${sourceDir} → ${destinationDir}`);
  } catch (err) {
    console.error("❌ Error al copiar la carpeta:", err);
  }
}

copyBaseFeaturesFolder();

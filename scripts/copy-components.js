const fs = require("fs-extra");
const path = require("path");

const folderPath = path.resolve(
  __dirname,
  "../src/app/features/signal/components/signal-example"
);

const name = "signal-example";

const extensions = [".component.ts"];

for (const ext of extensions) {
  const source = path.join(folderPath, `${name}${ext}`);
  const destination = path.join(folderPath, `${name}${ext}.txt`);

  if (fs.existsSync(source)) {
    let content = fs.readFileSync(source, "utf-8");
    fs.writeFileSync(destination, content);
    console.log(`✅ Copiado: ${source} → ${destination}`);
  } else {
    console.warn(`⚠️ No existe: ${source}`);
  }
}

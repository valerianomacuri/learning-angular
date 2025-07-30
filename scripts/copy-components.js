const fs = require("fs-extra");
const path = require("path");

const names = ["component", "signal", "ng-if", "ng-for"];
const ext = ".component.ts";
const components = names.map((name) => ({
  name,
  folderPath: path.resolve(
    __dirname,
    `../src/app/features/base/components/${name}-example`
  ),
}));

for (const { folderPath, name } of components) {
  const source = path.join(folderPath, `${name}-example${ext}`);
  const destination = path.join(folderPath, `${name}-example${ext}.txt`);

  if (fs.existsSync(source)) {
    let content = fs.readFileSync(source, "utf-8");
    fs.writeFileSync(destination, content);
    console.log(`✅ Copiado: ${source} → ${destination}`);
  } else {
    console.warn(`⚠️ No existe: ${source}`);
  }
}

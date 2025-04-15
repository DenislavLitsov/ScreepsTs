const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");

function moveJsFilesToRoot(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      moveJsFilesToRoot(fullPath);
      fs.rmdirSync(fullPath); // Remove folder after processing
    } else if (path.extname(file) === ".js") {
      const newPath = path.join(buildDir, file);
      fs.renameSync(fullPath, newPath);
    }
  }
}

moveJsFilesToRoot(buildDir);
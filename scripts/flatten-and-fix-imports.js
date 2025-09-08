const fs = require('fs');
const path = require('path');

function getAllFiles(dir, root) {
    let files = [];
    console.log(`Reading files in directory: ${dir}`);
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files = files.concat(getAllFiles(fullPath, root));
        } else {
            if (dir !== root) files.push(fullPath);
        }
    }
    return files;
}

function moveFilesToRoot(files, root) {
    for (const file of files) {
        const dest = path.join(root, path.basename(file));
        fs.renameSync(file, dest);
    }
}

function deleteSubfolders(dir, root) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory() && fullPath !== root) {
            fs.rmSync(fullPath, { recursive: true, force: true });
        }
    }
}

function fixImports(root) {
    const files = fs.readdirSync(root).filter(f => f.endsWith('.ts') || f.endsWith('.js'));
    for (const file of files) {
        const filePath = path.join(root, file);
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace ES6 imports like './subfolder/file' or './subfolder/file.ts' with './file'
        content = content.replace(/(from\s+['"]\.\/(.+?)\/(.+?)(\.ts)?['"])/g, (match, p1, sub, file, ext) => {
            return `from './${file}'`;
        });
        // Replace CommonJS require statements like require('./subfolder/file') or require('./subfolder/file.js') with require('./file')
        content = content.replace(/(require\(['"]\.\/(.+?)\/(.+?)(\.js|\.ts)?['"]\))/g, (match, p1, sub, file, ext) => {
            return `require('./${file}')`;
        });
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

function flattenAndFixImports(targetPath) {
    const root = path.resolve(targetPath);
    const files = getAllFiles(root, root);
    moveFilesToRoot(files, root);
    deleteSubfolders(root, root);
    fixImports(root);
    console.log('Done!');
}

if (require.main === module) {
    const targetPath = process.argv[2];
    console.log(`Target path: ${targetPath}`);
    if (!targetPath) {
        console.error('Usage: node flatten-and-fix-imports.js <path>');
        process.exit(1);
    }
    flattenAndFixImports(targetPath);
}

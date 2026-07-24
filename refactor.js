const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (dirPath.endsWith('.js') || dirPath.endsWith('.jsx')) {
        callback(dirPath);
      }
    }
  });
}

function refactorImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Replace Assets imports
  // Could be from "../../../Assets/profile.png" or "../../Assets/..."
  content = content.replace(/from\s+["'][\.\/]+Assets\/(.*?)["']/g, 'from "@/assets/$1"');
  content = content.replace(/import\s+(.*?)\s+from\s+["'][\.\/]+Assets\/(.*?)["']/g, 'import $1 from "@/assets/$2"');

  // 2. Replace Component imports
  // Layout components
  content = content.replace(/from\s+["'][\.\/]+Component\/(Navbar|Footer)["']/g, 'from "@/components/layout/$1"');
  // Home components
  content = content.replace(/from\s+["'][\.\/]+Component\/([^"']+)["']/g, 'from "@/components/home/$1"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated imports in: ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src'), refactorImports);
console.log('Refactoring complete.');

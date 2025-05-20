// postinstall.js
const fs = require('fs');
const path = require('path');

const styledJsxPkgPath = path.join(__dirname, 'node_modules', 'styled-jsx', 'package.json');

if (!fs.existsSync(styledJsxPkgPath)) {
  fs.writeFileSync(
    styledJsxPkgPath,
    JSON.stringify({ name: 'styled-jsx', version: '5.1.1' }, null, 2)
  );
}

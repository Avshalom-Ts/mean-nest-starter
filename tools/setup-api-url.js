const fs = require('fs');
const path = require('path');

const apiUrl = process.env.API_URL || 'http://localhost:4200/api';
const mode = process.env.NODE_ENV || 'development';
const content = `
export const environment = {
  production: ${mode === 'production'},
  apiUrl: '${apiUrl}',
};
`;

const outputPath = path.join(
  path.resolve(__dirname, '..'),
  'apps',
  'coco-fe',
  'src',
  'environments',
  `environment.${mode}.ts`
);

fs.writeFileSync(outputPath, content);

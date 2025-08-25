const fs = require('fs');
const path = require('path');

// Read the environment variables
const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTH_DOMAIN;
const projectId = process.env.PROJECT_ID;
const storageBucket = process.env.STORAGE_BUCKET;
const messagingSenderId = process.env.MESSAGING_SENDER_ID;
const appId = process.env.APP_ID;
const measurementId = process.env.MEASUREMENT_ID;

// Read the index.html file
const indexPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(indexPath, 'utf8');

// Replace the placeholder values with actual environment variables
htmlContent = htmlContent.replace(/"API_KEY"/g, `"${apiKey}"`);
htmlContent = htmlContent.replace(/"AUTH_DOMAIN"/g, `"${authDomain}"`);
htmlContent = htmlContent.replace(/"PROJECT_ID"/g, `"${projectId}"`);
htmlContent = htmlContent.replace(/"STORAGE_BUCKET"/g, `"${storageBucket}"`);
htmlContent = htmlContent.replace(/"MESSAGING_SENDER_ID"/g, `"${messagingSenderId}"`);
htmlContent = htmlContent.replace(/"APP_ID"/g, `"${appId}"`);
// Handle measurementId specially - if undefined, use empty string
const measurementIdValue = measurementId || "";
htmlContent = htmlContent.replace(/"MEASUREMENT_ID"/g, `"${measurementIdValue}"`);

// Write the updated content back to index.html
fs.writeFileSync(indexPath, htmlContent);

console.log('Build completed: Environment variables injected into index.html');

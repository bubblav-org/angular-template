const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';

// Read env files (for local development and CI builds)
const envLocalPath = path.join(__dirname, '.env.local');
let websiteId = '';

// Check if env var is set (e.g. production build on Vercel/CI)
if (process.env.ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID) {
  websiteId = process.env.ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID;
} else {
  // Fall back to .env.local (local dev), then .env.production (Cloudflare/CI build)
  for (const envFile of ['.env.local', '.env.production']) {
    const envPath = path.join(__dirname, envFile);
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      const match = content.match(/ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID=(.+)/);
      if (match) {
        websiteId = match[1].trim().replace(/^["']|["']$/g, '');
        break;
      }
    }
  }
}

// Determine if this is a production build
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('--configuration=production');

// Generate environment.ts file (for development)
const devEnvContent = `export const environment = {
  production: false,
  bubblavWebsiteId: '${websiteId}',
};
`;

const devTargetPath = path.join(__dirname, './src/environments/environment.ts');
fs.writeFile(devTargetPath, devEnvContent, (err) => {
  if (err) {
    console.error(err);
    throw err;
  } else {
    console.log(successColor, `${checkSign} Successfully generated environment.ts with bubblavWebsiteId="${websiteId}"`);
  }
});

// Generate environment.prod.ts file (for production)
const prodEnvContent = `export const environment = {
  production: true,
  bubblavWebsiteId: '${websiteId}',
};
`;

const prodTargetPath = path.join(__dirname, './src/environments/environment.prod.ts');
fs.writeFile(prodTargetPath, prodEnvContent, (err) => {
  if (err) {
    console.error(err);
    throw err;
  } else {
    console.log(successColor, `${checkSign} Successfully generated environment.prod.ts with bubblavWebsiteId="${websiteId}"`);
  }
});

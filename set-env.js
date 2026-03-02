const fs = require('fs');
const path = require('path');

// Read .env.local file
const envLocal = path.resolve(__dirname, '.env.local');
if (fs.existsSync(envLocal)) {
  const content = fs.readFileSync(envLocal, 'utf-8');
  const match = content.match(/ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID=(.+)/);
  if (match) {
    console.log(match[1].trim());
  } else {
    console.log('');
  }
} else {
  console.log('');
}

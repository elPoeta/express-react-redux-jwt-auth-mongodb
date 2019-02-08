const app = require('./app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, error => {
  if (error) {
    console.log('ERROR!!! ', error);
  }
  console.log(`Server listen on port ${PORT}`);
});


/*

{
  "name": "mern_shopping_list",
  "version": "1.0.0",
  "description": "Shopping list built with the MERN stack",
  "main": "server.js",
  "scripts": {
    "client-install": "npm install --prefix client",
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
  },
  "author": "Leonardo Tosetto",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.18.3",
    "concurrently": "^3.6.0",
    "express": "^4.16.3",
    "mongoose": "^5.1.6"
  },
  "devDependencies": {
    "nodemon": "^1.17.5"
  }
}
*/
# Expree JS API Key Demo

A demo of how API with keys work.

## Usage:
1. Clone this repository
2. Create `.env` file containing something like `PORT=3500`
3. Run `npm install`
4. Run `npm run server`

## Dependencies installed
*You don't have to install these dependencies as it is handled by npm install, below are just list of dependecies I used*

- **Express.js** – `npm install express`
- **Cors** – `npm install express cors`
- **Nodemon** – `npm install nodemon --save-dev`
- **DotENV** – `npm install dotenv`

## Dependencies configuration
- Updated `package.json` configuration:
```
"scripts": {
  "server": "nodemon index.js"
},
```
## Install && Config && Deploy
### Install
  Init:
  * mkdir/cd ProjectCatalog
  * npm init
  * npm i egg --save
  * npm i egg-bin --save--dev
  * npm run dev

  Add egg-bin:
  1. Edit Port -> package.json:  "scripts": {"dev": "egg-bin dev"}
	2. Open Brower -> http://localhost:7001
### Config
  1. package.json
    Edit Port -> package.json:  "scripts": {"dev": "egg-bin dev --port PORT"}
  2. config/plugin.js
    Enable Plugin -> 
  3. config/config.default.js

### Deploy


	

 

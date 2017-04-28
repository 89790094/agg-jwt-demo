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

    - Edit Port -> package.json:  "scripts": {"dev": "egg-bin dev --port PORT"}
    - 
  2. config/plugin.js

    - Enable Plugin(cnpm i PlugName --save)
      * Mongoose/mongodb
        > mysql: {enable: true,package: 'egg-mongoose'}
      * Mysql
        > mysql: {enable: true,package: 'egg-mysql'}
      * Validate
        > mysql: {enable: true,package: 'egg-validate'}
      * Sequelize/(mysql, mariadb, postgres, mssql)
        > sequelize:{enable: true,package: 'egg-sequelize'}
      * Schedule
        > schedule:{package: 'egg-schedule'}
      * Jwt
        > jwt:{enable: true,package: 'egg-jwt'}
        
  3. config/config.default.js

    - Add Cookies Keys -> keys:'your key'
    - 
### Deploy


	

 

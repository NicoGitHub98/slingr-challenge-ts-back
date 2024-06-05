# Shopping List

This app is a containerized backend for a small [shopping list webapp](https://github.com/NicoGitHub98/slingr-challenge-ts-front). It handles a simple CRUD for groceries to buy.

The app is built using Node + TypeScript + Express + Sequelize + Postgres.

To run the app you must first install dependencies: 
```
npm i
```
Then build:
```
npm run build
```
Finally:
```
npm start
```

If you wish to use it with docker, you will need to install it and then build the images with `docker compose`. However, you can dissmiss the docker part and install a postgres db in your local enviroment, in this case, you will need to edit the `.env` file to suit your needs.

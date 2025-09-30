
## How to run without using a other device
npx expo start --web


## Build the database 
From root: docker-compose up

## Start the backend
cd backend -> npm run dev

## Seed the database from the Seed.ts file
npm run seed

## To migrate schema into database:
npm run migrate:dev
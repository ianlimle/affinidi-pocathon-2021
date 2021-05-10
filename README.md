# affinidi-pocathon-2021
KYC data as Verifiable Credentials for insurance policy documents

## How to run
```
$ git clone 
```
1. From a terminal, enter into `affinidi-hackathon-issuer` folder, install dependencies and packages, copy the `.env.example` into a new `.env` file
```
$ cd affinidi-hackathon-issuer/
$ npm install
$ cp .env.example .env
```
2. Populate credentials in `.env` according to `.env.example`
3. Run `npm start`
4. Start a new terminal, enter into `affinidi-hackathon-holder` folder, install dependencies and packages, copy the `.env.example` into a new `.env` file
```
$ cd ../affinidi-hackathon-holder/
$ npm install
$ cp .env.example .env
```
5. Populate credentials in `.env` according to `.env.example`
6. Run `npm start`
7. Start a new terminal, enter into `affinidi-hackathon-telegram-bot-verifier` folder, install dependencies and packages, copy the `.env.example` into a new `.env` file
```
$ cd ../affinidi-hackathon-telegram-bot-verifier/
$ npm install
$ cp .env.example .env
```
8. Populate credentials in `.env` according to `.env.example`
9. Run `npm run dev`
10. Start `localhost:3000/application` in your browser

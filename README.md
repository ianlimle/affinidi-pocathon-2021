# affinidi-pocathon-2021
KYC data as Verifiable Credentials for insurance policy documents

## How to run
```
$ git clone git@github.com:ianlimle/affinidi-pocathon-2021.git
```
1. Clone the repository
```
$ sudo apt update
$ sudo apt install nodejs
$ sudo apt install npm
$ nodejs -v
```
2. Install `nodejs` and `npm`, verify the installation version of `nodejs`
3. From a terminal, enter into `affinidi-hackathon-issuer` folder, install dependencies and packages, copy the `.env.example` into a new `.env` file
```
$ cd affinidi-hackathon-issuer/
$ npm install
$ cp .env.example .env
```
4. Populate credentials in `.env` according to `.env.example`
5. Run `npm start`
6. Start a new terminal, enter into `affinidi-hackathon-holder` folder, install dependencies and packages, copy the `.env.example` into a new `.env` file
```
$ cd ../affinidi-hackathon-holder/
$ npm install
$ cp .env.example .env
```
7. Populate credentials in `.env` according to `.env.example`
8. Run `npm start`
9. Start a new terminal, enter into `affinidi-hackathon-telegram-bot-verifier` folder, install dependencies and packages, copy the `.env.example` into a new `.env` file
```
$ cd ../affinidi-hackathon-telegram-bot-verifier/
$ npm install
$ cp .env.example .env
```
10. Populate credentials in `.env` according to `.env.example`
11. Run `npm run dev`
12. Start `localhost:3000/application` in your browser

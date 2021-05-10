# affinidi-pocathon-2021
An AI chatbot-enabled messaging platform facilitating transfer of Know-Your-Customer data as Verifiable Credentials and performing KYC verification before releasing sensitive policy documents.

## Proof-of-Concept Design 
![Proof-of-Concept Design](https://user-images.githubusercontent.com/33076925/117628610-ef76db00-b1ab-11eb-8f12-e79d9e10e2bb.png)

## How to run
1. Clone the repository
```
$ git clone git@github.com:ianlimle/affinidi-pocathon-2021.git
```
2. Install `nodejs` and `npm`, verify the installation version of `nodejs`
```
$ sudo apt update
$ sudo apt install nodejs
$ sudo apt install npm
$ nodejs -v
```
3. From a terminal, enter into `affinidi-hackathon-issuer` folder, install dependencies and packages, copy the `.env.example` into a new `.env` file
```
$ cd affinidi-hackathon-issuer/
$ npm install
$ cp .env.example .env
```
4. Populate credentials in `.env` according to `.env.example`
5. Run `npm start` in the terminal
6. Start a new terminal, enter into `affinidi-hackathon-holder` folder, install dependencies and packages, copy the `.env.example` into a new `.env` file
```
$ cd ../affinidi-hackathon-holder/
$ npm install
$ cp .env.example .env
```
7. Populate credentials in `.env` according to `.env.example`
8. Run `npm start` in the terminal
9. Start a new terminal, enter into `affinidi-hackathon-telegram-bot-verifier` folder, install dependencies and packages, copy the `.env.example` into a new `.env` file
```
$ cd ../affinidi-hackathon-telegram-bot-verifier/
$ npm install
$ cp .env.example .env
```
10. Populate credentials in `.env` according to `.env.example`
11. Run `npm run dev` in the terminal
12. Start `localhost:3000/application` in your browser

# affinidi-pocathon-2021
KYC data as Verifiable Credentials for insurance policy documents

## How to run
1. Enter into `affinidi-hackathon-issuer` folder and copy the `.env.example` into a new `.env` file
```
$ cd affinidi-hackathon-issuer/
$ cp .env.example .env
```
2. Populate credentials in `.env` according to `.env.example`
3. Run `npm start`
4. Enter into `affinidi-hackathon-holder` folder and copy the `.env.example` into a new `.env` file
```
$ cd affinidi-hackathon-holder/
$ cp .env.example .env
```
5. Populate credentials in `.env` according to `.env.example`
6. Run `npm start`
7. Enter into `affinidi-hackathon-telegram-bot-verifier` folder and copy the `.env.example` into a new `.env` file
```
$ cd affinidi-hackathon-telegram-bot-verifier/
$ cp .env.example .env
```
8. Populate credentials in `.env` according to `.env.example`
9. Run `npm run dev`
10. Start `localhost:3000/application` in your browser

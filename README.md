## Auction Frontend

- Online Auction App

## Description

- Purpose: This project is to build an online auction system.
- Overview: This project is built with NextJS, ReactJS, TailwindCSS, SocketIO, and Cypress.
- Key Feature:
  - User can register, login, logout, and update profile.
  - Create a new item.
  - Get the list of completed/ongoing bid items.
  - Bid on an item.
  - Can bid in each 5s and for published items (each user).
  - After bid time. fail auction user’s money need to be payback.

# Make sure you prepare API for app

Contact with taivu180597@gmail.com to get source API and run it on your local machine.
or you can change NEXT_PUBLIC_API_URI in .env file to https://api-auction.vat-info.online

## Reference

```bash
Node: 16.18.0, npm: 8.19.2, Yarn: 1.22.19
Next: 13.1.6, React: 18.2.0
Cypress: 12.14.0
```

## Code Style and Standards

```bash
https://github.com/airbnb/javascript
https://github.com/airbnb/javascript/tree/master/react
```

## Install

```bash
# Install node_modules
`npm install`
## Add package
`npm install <package>`
# for dev
`npm install <dev_package> --save-dev
```

## For develop

```bash
# 1. Change .env.example => .env
# 2. Run local API or change NEXT_PUBLIC_API_URI
# 3. Start app with dev
`npm run dev`
```

## For production

```bash
# 1. Change .env.example => .env
# 2. Run local API or change NEXT_PUBLIC_API_URI
# 3. Build app
`npm run build`
# 4. Start app with start
`npm run start`
```

## For test

```bash
# Test e2e
# 1. Run check CI/CD
`npm run e2e:headless`
# 2. Run to develop
`npm run e2e`

# Test component
# 1. Run check CI/CD
`npm run component:headless`
# 2. Run to develop
`npm run component`
```

## For lint

```bash
`npm run lint`
```

## Process github

```bash
#1. Checkout branch develop and pull latest
`git checkout develop`
`git pull origin develop`
#2. Create new branch
`git checkout -b "<name>[<numberticket>]<title>"`
#3. Commit
`git commit -m "<type>[#<numberticket>] <Message>"`
type     | Mean
-------- | --------
feat     | Introduces a new feature to the codebase.
fix      | Patches a bug in your codebase.
docs     | Introduces changes to the documentation.
chore    | Introduces a small change of the tools, script no production code change.
test     | Usually adding missing tests, refactoring tests; no production code change.
style    | Usually using for format code no production code change.
refactor | Refactoring production code, eg. renaming a variable name of meet.
release  | Release the changes to production.
#4. Create PR + add teamate reivew (Michael, doanlecong, tina or tai)
```

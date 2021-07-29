# RRS Web Application
Serverless, Next.js, React.js, Redux, SCSS, jest, storybook, eslint, prettier, postcss, babel, webpack

## Installation

Make sure you have Node >=v10.16.x and NPM >=v6.4.x versions installed.

1) `cd` to the root directory that you use to store your codebase.<br><br>
2) clone the express app<br>`git clone git@github.com:RoadRunnerSports/rrs-web-app.git`<br><br>
3) `npm install` to install all the required node packages<br><br>
4) To map local server to subdomain, edit your hosts file (on mac it should be located at `/etc/hosts`)<br>Add the following to your machine's hosts file.
```
  127.0.0.1	local.roadrunnersports.com
  ::1 local.roadrunnersports.com
```

## Scripts

### `npm run dev`
- Runs the local Next.js server in development mode, by default the server runs on port 3000
- Use `npm run dev -- -p 8080` to change the port.
- This allows you to code and see your changes in real-time.

### `npm run build`
- Builds the application
- Note:- This will not server the application, use `npm run start` or `npm run dev` to run the application

### `npm run start`
Builds the application and serves it locally in  **production**  mode.

### `npm run test`
Uses the  **[Jest](https://facebook.github.io/jest/)**. To run unit and integration tests. 

### `npm run test:coverage`
Runs jest tests and collects code coverage, The code coverage report can be found in `./coverage/lcov-report/index.html`
### `npm run test:watch`
Watches your test files for changes. If a change to a test file is detected, the tests in that file are run.

### `npm run lint`
- Lints the project to enforce the proper coding style.
- The lint command internally runs `eslint`, `prettier` and `stylelint` and validate the coding standards

### `npm run lint:fix`
- Uses the linter to automatically fix some coding style issues.
- Note:- THis will not fix everything automatically.

### `npm run storybook`
- Builds storybook and runs storybook application in different port
- Isolated React components can be tested in storybook

### `npm run storybook:export`
- Exports storybook as a documentation

### `npm run sls:offline`
- Application will be served in serverless mode
- Note  `npm run build` should be done before running this command

### `npm run re-init`
- Cleans babel cache, removes node_modules and install it fresh 

## Code Commit
On every commit the git hooks will automatically runs and look for any lint errors, <br> All lint errors must be fixed inorder to commit some changes

## Code Push
Unit testing, Code coverage and storybook will be validate before pushing the code to git remote branch.<br> Failures in test cases, code coverage or storybook issues will block pushing the code to remote branch

## Pipeline Validations
Everytime when you create a PR Git Actions will be triggered automatically and the code changes will be validated, The validation includes
- Lint errors
- Unit test cases and code coverage
- Code build
## Builds

### Dev
This happens automatically whenever you merge a PR into develop branch

### QA
- Build should be triggered manually

### Prod
- 
### Hotfix
- 
## Connecting ATG API
By default the frontend application connections to development.roadrunnersports.com<br>
Incase if you need to connect to different API endpoint, This can be changed in /src/constants/RestEndpoints.js 
# Angular Template

This is an Angular Starter Repo that I was inspired to build thanks to [wlucha](https://github.com/wlucha/angular-starter) on Github. I wanted to have an Angular Repo that has all of my desired tooling installed, that I could simply copy/paste for starting new projects...

But it turns out it is easier said than done. I would have used [wlucha's angular starter](https://github.com/wlucha/angular-starter) but Storybook won't run out of the box. As much as it seems like NPM allows you to simply download any packages you want into a project and have them run flawlessly, that is not how it works in the real world. Dependencies can and _will_ conflict with each other making it (very) difficult for them to play nice with each other. But after investing a lot more time than I thought I would need to, it works!

### In this Repo we have

✅ Latest Angular 20<br>
✅ Angular Material<br>
✅ Tailwind CSS Integration<br>
✅ Unit Testing with Jest<br>
✅ End-to-End Testing with Cypress<br>
✅ Component Examples with Storybook<br>
✅ ESLint for linting<br>
✅ Prettier for formatting<br>
✅ Husky for git hooks (run prettier and eslint pre-commit, run tests pre-push)
✅ Git Actions - make sure the app builds and e2e tests pass when a branch is pushed up to the remote, or a PR is raised to "main" or "development".

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Instructions

Clone this repo and then use `npm` commands to install the dependencies. Yarn/PNPM will not work out of the box, they are better package managers but you will have to do some tinkering if you want to use them instead. Also the `--force` flag is required to install because there are dependency conflicts unfortunately due to Storybook.

##### Install the dependencies

```bash
npm install --force
```

Once the server is running, open your browser and navigate to http://localhost:4200/. The application will automatically reload whenever you modify any of the source files.

##### Run the app

```bash
npm run start
```

##### Build and Run Storybook

```bash
npm run storybook
```

##### Run Jest Unit Tests

```bash
npm run test
```

##### Running Cypress for the very first time

You may need to run the below `npx` command the first time to initialize cypress after npm install. Then you can use `npm run e2e`.

```bash
npx cypress run
```

## Development server

To start a local development server, run:

```bash
ng serve
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

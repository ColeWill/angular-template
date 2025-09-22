# Angular Template

This is an Angular Starter Repo that I was inspired to build thanks to [wlucha](https://github.com/wlucha/angular-starter) on Github. I wanted to have an Angular Repo that has all of my desired tooling installed, that I could simply copy/paste for starting new projects...

But it turns out it is easier said than done. I would have used [wlucha's angular starter](https://github.com/wlucha/angular-starter) but Storybook won't run out of the box. As much as it seems like NPM allows you to simply download any packages you want into a project and have them run flawlessly, that is not how it works in the real world. Dependencies can and _will_ conflict with each other making it (very) difficult for them to play nice with each other. But after investing more time than I thought I would need, it works!

### In this Repo we have

✅ Latest Angular 20<br>
✅ Angular Material<br>
✅ Tailwind CSS Integration<br>
✅ Unit Testing with Jest<br>
✅ End-to-End Testing with Cypress<br>
✅ Component Examples with Storybook<br>
✅ ESLint for linting<br>
✅ Prettier for formatting<br>
✅ Husky for git hooks (run prettier and eslint pre-commit, run tests pre-push)<br>
✅ Git Actions - make sure the app builds and e2e tests pass when a branch is pushed up to the remote, or a PR is raised to "main" or "development".

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Instructions

Clone this repo and then use `npm` commands to install the dependencies. `Yarn or PNPM` will not work out of the box, they are better package managers but you will have to a lot of tinkering if you want to use them instead. Also the `--force` flag is required to install because there are dependency conflicts due to Storybook (thanks storybook!).

### Install the dependencies

```bash
npm install --force
```

Once the server is running, open your browser and navigate to http://localhost:4200/. The application will automatically reload whenever you modify any of the source files.

## Run the app

```bash
npm run start
```

#### Build and Run Storybook

```bash
npm run storybook
```

#### Run Jest Unit Tests

```bash
npm run test
```

#### Run End-to-End Tests with Cypress

```bash
npm run e2e
```

#### Running Cypress for the very first time

You may need to run the below `npx` command the first time to initialize cypress after npm install. Then you can use `npm run e2e`.

```bash
npx cypress run
```

#### Run Linting

```bash
npm run lint
```

##### Format Code with Prettier

```bash
npm run prettier
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

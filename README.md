# ServerlessConfApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Speaker notes:

This project is for the Serverless Dubai conference September 2018, it will be used as a practical example for a 20 minutes talk. Lots of things can be improved, but I kept as much as I could for the time given.

Angular 6 is a framework to build Single Page Application for the web, even though now it can be used to make hybrid apps. It uses TypeScript (last supported version 2.9.2).

Angular CLI is a tool to help you kickstart your application by using a variety of commands.

Here are the setup commands I used for this project:

```
npm install -g @angular/cli
ng new serverless-conf-app
cd serverless-conf-app
ng serve
```

I then proceed to add a service and a pipe:

```
ng g service giphy
ng g pipe safe
```

After writing some custom code, I manage to fix the tests to run:

```
ng test
ng e2e
```

Once this is working, we run into the usual problem with SPA: SEO. If you run now a: `curl http://localhost:4200` you will see an empty page with some JS. This is where Angular Universal comes into place:

```
ng add @ng-toolkit/universal
npm run build:prod
npm run server
curl http://localhost:8080
```

TADA ! We now have the full HTML being rendered.

Beware though if you use object such as `Window` or `localStorage`, there is a [trick](https://github.com/maciejtreder/ng-toolkit/blob/master/schematics/universal/README.md#working-with-window-and-localstorage-objects).

I invite you all to follow this [project](https://github.com/maciejtreder/ng-toolkit) as it offers much more such as: PWA and Serverless.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

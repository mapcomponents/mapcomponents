# MapComponents monorepo

### create a new version

Using lerna for this as there is no nx feature for simultaneous versioning of multiple packages.

```shell
  npx lerna version patch --force-publish
```

```shell
  npx lerna version minor --force-publish
```

```shell
  npx lerna version major --force-publish
```

### Standard NX readme - TODO replace with project specific info

## Sync `package.json` files with Syncpack

Keep your dependencies consistent across your monorepo using [Syncpack](https://github.com/JamieMason/syncpack):

### List mismatched dependency versions

```bash
  npx syncpack list-mismatches
```

### Automatically fix mismatched versions

```bash
  npx syncpack fix-mismatches
```


## Depcheck can be used to find unused dependencies

go to your package directory and run:

```sh
  npx depcheck --skip-missing
```

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Run tasks

To run the dev server for your app, use:

```sh
  npx nx serve MapComponents
```

To create a production bundle:

```sh
  npx nx build MapComponents
```

To see all available targets to run for a project, run:

```sh
  npx nx show project MapComponents
```

To run any task from any package, run:

```sh
  npx nx run {package-name}:{task-name}
```

To run all tasks in parallel, use:

```sh
  npx nx run-many --target={task-name} --all
```


These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
  npx nx g @nx/react:application --directory=apps/my-app --name=my-app --no-interactive --e2eTestRunner=none

```

To generate a new library, use:

```sh
  npx nx g @nx/react:library --directory=libs/my-lib --bundler=vite --name=my-lib --importPath=@mapcomponents/my-lib --no-interactive

```

Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to use the generator form.

<mark> Nx uses project.json for its own configuration—keep its name simple, like my-app.
For publishing, you need a package.json with a full package name, e.g. @mapcomponents/my-app.
Both files are needed, but serve different purposes. </mark>

### Things to know lib generation
This is a hint of things you should change to integrate your library into the monorepo correctly

<mark>If you use the command as shown at the upper section ^, then the generation will be successful</mark>

- go to your `tsconfig.base.json` (in your root directory) under the property `"paths"` and change `"@mapcomponents/my-lib": ["libs/my-lib/src/index.ts"],` -> to `"@mapcomponents/my-lib/*": ["libs/my-lib/src/*"],`
- go to your `package.json` in your new library and set the `main` property to `src/index.ts`


## Import from other packages in this monorepo

Instead of using relative paths to import from other packages in this monorepo, you can use the package name as an alias.
Ensure that nx added the alias correctly to the `tsconfig.base.json` file.

Should look like this:

```json
{
  "compilerOptions": {
    "paths": {
      "@mapcomponents/deck-gl/*": ["libs/deck-gl/src/*"],
      "@mapcomponents/ra-geospatial/*": ["libs/mapbox/src/*"],
      "@mapcomponents/{app/lib name}/*": ["path/{app/lib name}/src/*"]
    }
  }
}
```

Also don't forget to set the type to `module` in the `package.json` of the package you want to import from:

```json
{
	"name": "@mapcomponents/{app/lib name}",
	"version": "0.0.1",
	"type": "module",
	"...": "..."
}
```

Then you can import from other packages like this:

```ts
import {component} from '@mapcomponents/{app/lib name}/path/to/component';
```
You also need to ensure that the `tsconfig.lib/app.json` file in the current package has the other package included.
Example:
```json
{
  "rest of the tsconfig.lib/app.json": "...",
  "include": ["src/**/*", "../path/to/package/src/**/*"]
}
```
## Add storybook to an existing project

```sh
  npx nx g @nx/react:storybook-configuration --project=my-lib --generateStories=false --interactionTests=false --no-interactive
```

#### Storybook config hint:
- Remove file `tsconfig.storybook.json`
- Go to the tsconfig.json and remove under `references` the entry to `tsconfig.storybook.json`
```json
{
  "path": "./tsconfig.storybook.json"
}
```

## Add cypress component testing to an existing project
Before running the command. Got to the project.json and add the following to the `"targets"` parameter

```json
{
  "build": {
    "executor": "@nx/vite:build",
    "options": {
      "outputPath": "dist/libs/my-lib"
    }
  }
}
```
```sh
  npx nx g @nx/react:cypress-component-configuration --project=my-lib --build-target=my-lib:build --no-interactive
```

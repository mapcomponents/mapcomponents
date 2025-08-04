# MapComponents monorepo

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
  npx nx serve {package-name}
```

To create a production bundle:

```sh
  npx nx build {package-name}
```

To see all available targets to run for a project, run:

```sh
  npx nx show project {package-name}
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

## Import from other packages in this monorepo

Instead of using relative paths to import from other packages in this monorepo, you can use the package name as an alias.
Ensure that nx added the alias correctly to the `tsconfig.base.json` file.

Should look like this:

```json
{
  "compilerOptions": {
    "paths": {
      "@mapcomponents/deck-gl": ["libs/deck-gl/src/index.ts"],
      "@mapcomponents/ra-geospatial": ["libs/ra-geospatial/src/index.ts"],
      "@mapcomponents/{app/lib name}": ["path/{app/lib name}/src/index.ts"]
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
import {component} from '@mapcomponents/{app/lib name}';
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
### Add Storybook to [storybook-composition](https://nx.dev/technologies/test-tools/storybook/recipes/storybook-composition-setup) 
## Add cypress component testing to an existing project
Before running the command. Got to the `project.json` and add the following to the `"targets"` parameter

```json
{
  "targets": {
    "build": {
      "executor": "@nx/vite:build",
      "options": {
        "outputPath": "dist/libs/my-lib"
      }
    }
  }
}
```
```sh
  npx nx g @nx/react:cypress-component-configuration --project=my-lib --build-target=my-lib:build --no-interactive
```

## Increase version and pulish

<mark>Make sure not to forget this flag</mark> `--skip-publish`
```sh
  npx nx release --skip-publish
```
<mark>Make sure to replace "This was a version bump only, there were no code changes." with the related changes in the CHANGELOG.md</mark>

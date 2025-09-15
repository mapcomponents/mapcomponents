## How to write the root changelog

**You only need to change the root changelog. There is a script that will migrate all the changes of
the root changelog to each package or app. Here some rules that you should follow that the migration
process will work.**

## 1. Release first:

Before you change the changelog create a release with this command: `npx nx release --skip-publish`
Nx will write the last commits in the root change log. **Check if all commits are listed and
don't forget to push and push the tags! If the new entry does not follow the following rules, the
migration process won't work**

## 2. Version label should look like this [vX.X.X] e.g. [v1.6.0]

## 3. Sort changes to packages

Consider to list all the changes under the package the changes regarding. **Always write the
regarding package lable like this @mapcomponents/{package/app name} if a change is made on root or
is not assignable then write @mapcomponents/root**

## 4. Only use the following keywords to categorise your changes

- Added
- Fixed
- Changed
- Removed

**Always write a headline for a category when there is a commit for it. Use '##' for the headline of
the category**

## 5. Commit message

To keep it organised the commit message is split in three parts

1. The first seven digits of the commit ID
2. The regarding category but written in the **imperative**
3. The commit message

### Example

```markdown
- 1234567: add example of 5.Commit message to HowToChangelog.md
```

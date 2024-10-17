# Force UI Contributing Guide

Thank you for your interest in contributing to @bsf/force-ui! Please feel free to put up a PR for any issue, feature request or enhancement.

## Development Setup

Force UI is using npm workspaces and you need to execute the following commands after clonning the repository.

1. Install dependencies

```bash
npm install
```

2. Run the project in a terminal

```bash
npm run dev
```

3. Run the project storybook in another terminal

```bash
npm run storybook
```

4. Viewing the Storybook

Open http://localhost:6006 in the browser

## Force UI Structure & Architechture

Force UI library follows the Atomic Design Pattern to structure the library.

**Atomic Development**
The five distinct levels of atomic design — atoms > molecules > organisms > templates > pages — map incredibly well to React’s component-based architecture.

**Atoms:**
Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

**Molecules:**
Grouping atoms together, such as combining a button, input and form label to build functionality.

**Organisms:**
Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

**Templates:**
Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

**Pages:**
An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.


File Structure
Since React follows a component-based architecture, it’s pretty common to organise your components based on the type, rather than feature. All the components are inside of the components folder.

This folder includes the folowing files:
1. index.jsx
2. Component js files
3. readme.md file having the documentation for that component
4. stories.js file having the storybook story for that component

## Reporting Issues & Features Requests

If you notice any bugs in the code, see some code that can be improved, or have features you would like to be added, please create a [bug report](https://github.com/brainstormforce/force-ui/issues/new) or a [feature request](https://github.com/brainstormforce/force-ui/issues/new)!

If you want to open a PR that fixes a bug or adds a feature, then we can't thank you enough!

## Working on Issues

Please feel free to take on any issue that's currently open. Just send a comment in order to let us know you're working on it so we can assign that specific issue to you.

## Opening a Pull Request

What we ask you, is that before working on a large change, it is best to open an issue first to discuss it with the maintainers or if an issue was already opened, comment your intention of opening up a PR. All this can be discussed on the slack channel [#force-ui](https://brainstormforce.slack.com/archives/C0783G47NGK)

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

### Branch Types

1. **feature/version/branch** - New implementation code that is required for product development. Everything that is not considered a defect and brings value is considered a feature. Example: **feature/react/gbxb-483-enable-ssr**
2. **bug/version/branch** - Defects, either flagged by the QA team or any of the parties involved in the project, missing functionality or wrongly implemented functionality, they all fall into the “bug” category. Branches that solve such defects should be prefixed with the **bug** prefix. Example: **bug/react/gbxb-483-enable-ssr**
3. **docs/version/branch** — Any work that relates to project-level and code-level documentation. Whether it is work related to the project **README**, or code-level documentation, branches that host this type of work should use this prefix. Example: **docs/react/gbxb-483-enable-ssr**

### Commit Formatting

Every file changed should have its own commit message, please don't do one commit for multiple changes.

### Submitting a Pull Request

1. Each PR should be compared with the **dev** branch not with the **master**.
2. For @bsf/force-ui add **@vrundakansara** as a reviewer.
4. Once your PR approved we'll merge it to the **staging** branch and you'll become one of the contributors to the @bsf/force-ui library. 🥳

## Branches Explained

As you can see we have multiple branches:

- **master**: This branch stores the latest stable version of @bsf/force-ui.
- **staging**: This is the **pre-release** branch of @bsf/force-ui, and this is where everything is happening before releasing on master
- **dev**: This is the **development** branch of @bsf/force-ui, and this is where development is happening before moving to UAT.
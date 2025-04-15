<!--
 *              Copyright (c) 2025 Visa, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 -->
# Nova contribution guidelines

- [Ticketing and Branching](#branching)
- [Workshop documentation](#documenting)
- [Working in Nova styles](#working)
- [Committing](#committing)
- [Build Process](#build-process)
- [Closing](#closing)

## <a name="branching"></a>Create a branch or use ticket to branch from
We welcome contributions from the community! Here are the steps to contribute to our library:

### Internal, Visa users
   - Find the ticket related to the issue you are wanting to solve or create a [Jira ticket](https://bookmarks.visa.com/vpds-general-create-ticket) and provide the necessary information.
   - Create a branch from this ticket using the relevant branch type.
   - Be sure to follow the steps and processes laid out in our CONTRIBUTE.md file and reference the [Working in Nova styles](#working) section below to get started.
   - Once the issue is resolved and tests are added, open a PR to development on Bitbucket.
   - Our team will provide feedback and merge it once approved.

### External, public users
   - Find the ticket related to the issue you are wanting to solve or create a [GitHub issue](https://github.com/your-repo-url/issues) and provide the necessary information.
   - Fork our repository on GitHub.
   - Clone your forked repository to your local machine.
   - Create a branch from the Github issue you created.
   - Be sure to follow the steps and processes laid out in our CONTRIBUTE.md file and reference the [Working in Nova styles](#working) section below to get started.
   - Once the issue is resolved and tests are added, open a PR to our main branch on GitHub.
   - Our team will review your pull request, provide feedback, and merge it once approved.

Thank you for contributing to our project! Your contributions help make our library better for everyone.

## <a name="documenting"></a>Code documentation in Nova workshops
Nova workshops have strict rules for documentation because the documentation found here is also reflected in our Home Experience (HX) site.
- Work with our Content team as much as possible to create and refine documentation around any components, features, examples, and etc.
- Wherever possible, code documentation comments should be sentence case. This means it should include a capital first letter and the correct ending punctuation.
- Component property descriptions should have plural verbs (ie allow**s**, emit**s**, provide**s**)

## <a name="working"></a>Working in Nova styles
Changes to Nova styles must consider our design, content, and a11y guidelines. All tests should pass and any new features should receive tests as well.

### Repository Structure
The project is organized into two main directories: `workspaces/styles/` and `workspaces/workshop/`.

`workspaces/styles`:
This directory contains the core of Nova styles including abstracts, base elements, components, and themes.

### Component library
Our component library is located in `workspaces/styles/components`.

Each component is accompanied by:

- A markdown file which contains example usage for the component.
- SCSS files, `_vars.scss` and `index.scss`, which define the component's styles.

If you are looking to add or update a component, this is where you will work.

### Documentation site
`workspaces/workshop`:
This folder contains the React app used for the Nova styles documentation site. It’s where you can find the interface that displays all the components and themes.

### Available Scripts
Here are the scripts that are available for you to use during development:

#### `npm start`
Runs the app in development mode and opens it in your browser at http://localhost:5173.
The page will reload automatically when you make changes. You may also see any lint errors in the console.

#### `npm build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

This command will also expose the components metadata for it to be consumed by our documentation application. More below.

#### `npm run generate:component`
Create new component scss route. This command will prompt the developer for information related to the component, and then it would create needed files under `./src/scss/components/`, and would automatically reflect the route on the application side.

#### `npm run generate:theme`
Create new theme scss. This command will prompt the developer for information related to the theme (to be expanded soon), and then it would create needed files under `./src/scss/themes/`.

#### `npm run generate:exports`
Auto-generate `src/scss/components/_index.scss` file, which re-exports all existing component modules. This is useful after a component module is deleted manually.

#### `npm run generate:env`
Add environment variable to enable Vite to refresh once data.json file has been updated. This is accomplished by setting the following key value pair in your environment variable manually, or by running the command above.

```
echo "FAST_REFRESH=false" >>  .env
```

This should be run after `npm install` for development mode.

#### `npm start:local`
In order to consume and test the project's data endpoint locally, be sure to run this command to serve the content from the locally-generated production build.

When running in dev mode (`npm start`) react router prevents this endpoint (raw json file) from being reached. However, the file is being copied to the `build/` directory when `npm build` is executed. Thus, the server-hosted json file becomes accessible. This command serves the file similarly, but locally for test and development of docs site. Runs on http://localhost:3333.

### Documentation
A raw JSON document will be exposed for documentation. The schema is as follows:

```json
{
  "name": "vpds-styles",
  "version": "0.1.0",
  "datetime": "2022/04/04 16:38:41:4380",
  "entries": {
    "abstracts": {},
    "base": {},
    "components": {},
    "themes": {},
    "variables": {}
  }
}
```
The keys under `"entries"` object reflects the scss structure under `./src/scss/` and provides the documentation generated by css-docs-generator. For more info, see https://www.npmjs.com/package/css-docs-generator.

## <a name="committing"></a>Committing

This library follows the [Conventional Commit specification](https://conventionalcommits.org/).

- [Commit message format](#format)
- [Type](#type)
- [Scope](#scope)
- [Description](#description)
- [Body](#body)
- [Footer](#footer)
- [Breaking changes](#breaking)
- [Jira ticket number](#jira)
- [Frequent code committers](#frequent)
- [IDE or Code Editor users](#ide)
- [Git CLI users](#cli)

### <a name="format"></a>Commit message format

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### <a name="type"></a>Type

Use one of the following.
[Read here](https://github.com/styles/styles/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
for more semantics and background on each type.

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

### <a name="scope"></a>Scope

In relevance to this repo, the scope could be the component
or asset name (eg. `avatar`), or it could be another
relevant item (eg. `readme`, `api`).

```shell script
chore(api): updates signature in dev docs
```

### <a name="description"></a>Description

Prefer to use action verbs and keep the entire line at or
below 72 characters. Some examples below.

```shell script
feat(checkbox): adds simplification to functional logic
```

```shell script
fix(radio): removes the double check issue
```

### <a name="body"></a>Body

One or more free-form paragraphs one blank line after the
description. We recommend using unordered lists for easy
readability.

```shell script
fix(radio): removes the double check issue

- undoes the previous single check solution
- prevents future instances from happening
```

### <a name="footer"></a>Footer

One or more footers can be provided one blank line after the
body. The footer can be indicated by either a `:<space>` or
`<space>#` separator, followed by a string value. Breaking
changes can be communicated here as,
`BREAKING CHANGE: This is important.`. Reviews can be
indicated here as, `Design-reviewed-by: Designer Name`. Jira
tickets on closing commits need to be indicated as,
`#VDS-2095`.

```shell script
fix(radio): removes the double check issue

- undoes the previous single check solution
- prevents future instances from happening

BREAKING CHANGE: This is important.
Authored-by: Thirumalaa Srinivas
Accessibility-reviewed-by: Erik Thomas
#VDS-2095
```

### <a name="breaking"></a>Breaking changes

The best way so far, seems to be with using the phrase in
the footer as shown below. 

The
`<type>[optional scope]!: <description>` method seems to
throw errors on `commitlint`. Relevant rule added
`subject-exclamation-mark` do not seeem to make an impact,
yet.

```bash
fix(readme): retries convention details in dev commit docs

BREAKING CHANGE: retries this
#VDS-2095
```

### <a name="jira"></a>Ticket number

It's best to add the ticket (Jira ticket or Github issue) number during the final commit
of the bug fix or feature. The below examples use Jira tickets.

```bash
fix(readme): updates section in dev commit docs

#VDS-2095
```

It shows up as closing the ticket in the change log.

```markdown
# 4.2.0 (2021-08-09)

## Features

- readme: updates section in dev commit docs (78ec2cd),
  closes #VDS-2095
```

### <a name="frequent"></a>For frequent code committers.

The below practice ensures a crisp `CHANGELOG.md` for the
developer community to grok.

- Please use `chore` and `refactor` for most of your
  commits.
- If it's a bug fix or feature, save `fix` or `feat` for the
  final or critical commit.
- Use the ticket number in footer `#VDS-2095` for (hopefully
  or approximately) the last commit.

### <a name="ide"></a>For UI users in IDE or Code Editors.

This could be one of, but not limited to, SourceTree,
VSCode, WebStorm, SublimeText, Atom, IntelliJ.

```bash
docs(readme): updates documentation

#VDS-100
```

### <a name="cli"></a>For git CLI users.

```bash
git commit -m "docs(readme): updates documentation" -m "#VDS-100"
```

## <a name="build-process"></a> Build Process

| Stage            | Steps                     |
| ---------------- | ------------------------- |
| 1                | Install Packages          |
| 2                | Prebuild Lib              |
| 3                | Build Lib                 |
| 4                | Prebuild Docs             |
| 5                | Test, Postbuild           |
| 6                | Build Docs                |
| 7 (Only on main) | Build Docs (Versioned)    |
| 8                | Deploy UI, Deploy Package |

## <a name="closing"></a> Closing

Remember that your commit messages are going to be used in
creating the `CHANGELOG.md` file. So, please use thoughtful
commit messages.

When in doubt, keep PR's small. To give a PR the best chance
of getting accepted, don't bundle more than one feature or
bug fix per pull request. It's always best to create two
smaller PRs than one big one.

When adding new features or modifying existing, please
include tests to confirm the new behavior.
<!--
 *              © 2025 Visa
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

# Visa Product Design System - Nova styles

- [About](#about)
- [Security](#security)
- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Why Nova styles?](#why-nova-styles)
- [Testing](#testing)
- [Maintainers](#maintainers)
- [Thanks](#thanks)
- [Contributing](#contributing)
- [License](#license)

## <a name="about"></a>Nova styles

> Accessible Visa Product Design System components built for styles

Nova styles is a comprehensive library of accessible components designed to align with the Visa Product Design System. It provides developers with a set of reusable UI elements that can be easily integrated into applications. With Nova styles, developers can quickly build visually consistent and user-friendly interfaces that adhere to accessibility best practices.

### Key Features

- **Wide range of components**: Includes buttons, form elements, navigation menus, and more.
- **Customizable**: Allows extensive theming and customization.
- **Accessibility**: Adheres to accessibility best practices to ensure inclusive user experiences.

Whether you are building a small project or a large-scale application, Nova styles offers a robust foundation for creating visually appealing and accessible user interfaces.

## <a name="security"></a>Security

Our package follows security best practices and ensures the safety of user data. It relies on a minimal number of dependencies, minimizing potential vulnerabilities.

## <a name="install"></a>Install

Available through the [NPM](https://www.npmjs.com/).

**NPM:**

```sh
npm install @visa/nova-styles
```

**PNPM:**

```sh
pnpm install @visa/nova-styles
```

**Yarn:**

```sh
yarn add @visa/nova-styles
```

**Bun:**

```sh
bun add @visa/nova-styles
```

### Dependencies

View our package.json for the most up-to-date dependencies, including peer dependencies and dev dependencies.

## <a name="usage"></a>Usage

### Step 1: Install Nova styles

Reference our [install guidelines](#install).

### Step 2: Import Nova styles

Once Nova styles is installed, you need to import it in your project. This process might look different depending on whether you're using HTML, React, or Angular. Follow the instructions for your setup below.

#### HTML

If you’re working with standard HTML, add a link to the Nova styles CSS file in your HTML file by replacing the actual path where the Nova styles files are located.

```html
<link rel="stylesheet" href="path/to/nova-styles/styles.css" />
<link rel="stylesheet" href="path/to/nova-styles/themes/visa-light/index.css" />
```

### Step 3: Add icons (optional)

You can use Nova CSS to add icons to your web applications. Use individual SVGs for specific icons or SVG sprites to efficiently load and reuse a full set of icons across your app.

#### Installing @visa/nova-icons-svg

```sh
npm install @visa/nova-icons-svg
```

#### Installing @visa/nova-icons-sprite

```sh
npm install @visa/nova-icons-sprite
```

#### SVGs

SVG stands for Scalable Vector Graphics, which is an image format based on XML for creating two-dimensional graphics. The key feature of SVGs is their scalability, allowing them to be resized without losing quality. This makes them ideal for the web, where images need to look good on various screen sizes and resolutions. Additionally, SVGs are often much smaller in size compared to JPEGs and PNGs.

```html
<svg
  class="v-icon v-icon-generic v-icon-tiny v-icon-checkmark"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    class="v-icon-primary"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7205 3.29397C13.3331 2.90266 12.7519 2.90266 12.3644 3.29397L5.97141 9.75049L3.64668 7.40266C3.25923 7.01136 2.67805 7.01136 2.29059 7.40266C1.90314 7.79397 1.90314 8.38092 2.29059 8.77223L5.1965 11.707C5.58396 12.0983 6.16514 12.0983 6.55259 11.707L13.6236 4.56571C14.108 4.27223 14.108 3.58744 13.7205 3.29397Z"
  />
</svg>
```

#### SVG sprites

A sprite is a collection of SVG icons combined into a single file. This method is commonly used to enable a single server request for all icons, making it the most efficient way to access a large number of icons, especially if many are likely to be used during a session.

##### Using SVG sprites

Import and use icons sprite from @visa/nova-icons-sprite. This will add all of the icons as a sprite into your project and then reference them as needed. It’s up to you if you’d like to use the Visa sprite, the Generic sprite, or both.

```html
<svg
  class="v-icon v-icon-generic v-icon-tiny v-icon-calendar"
  height="16px"
  width="16px"
>
  <use href="#calendar--tiny" xlink:href="#calendar--tiny" />
</svg>
```

### Step 4: Use the components

After adding icons, you’re ready to use styles components by copying and pasting the example code into your application. Check out any of our components to give it a try.

## <a name="why-nova-styles"></a>Why Nova styles?

### Light Weight

We've reduced our library to basic markup components and functional hooks for a lighter, simpler, and more flexible experience.

### Building Blocks

No more waiting on feature requests. We provide the building blocks for you to easily create and customize your own components.

### Built For Developers

Nova styles is sleek and unobtrusive. Our beautifully designed components allow any developer to create stunning apps with ease.

## <a name="testing"></a>Testing

### Our Approach

We conduct rigorous testing using Jest to ensure our components are accessible and meet our high standards. We use Axe for comprehensive accessibility testing and snapshot testing to minimize regression. Each component undergoes individual unit testing based on its API, followed by integration testing using examples to ensure seamless interaction.

Our goal is to achieve 100% test coverage for all components. Our pipeline safeguards against merging any code that fails our tests. While we have hundreds of tests providing us with full code coverage, we recognize that there is always room for improvement. We are constantly working to improve our testing suite.

## <a name="maintainers"></a>Maintainers

This project is maintained by the Visa Product Design System engineering team. If you need to get in touch please reach out to us via any of our options on our support page.

## <a name="thanks"></a>Thanks

Thanks to all those who have contributed and to the Visa Product Design team for all of the hours and thought that have gone into making the design system as easy to use as possible.

## <a name="contributing"></a>Contributing

SEE CONTRIBUTING.md

## <a name="license"></a>License

SEE LICENSE IN LICENSE

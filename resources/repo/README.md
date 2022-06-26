<p align="center">
  <!-- Update log -->
  <img alt="partic11e logo" height="70" src="./logo.svg" />
</p>

<p align="center">
  <!-- Library description -->
</p>

<h1 align="center">{{org}} - {{repo}}</h1>

<p align="center">
  <!-- Module description -->
</p>

<p align="center">
  <!-- Project links  -->
</p>

<p align="center">
  <sub>Built with ❤ by {{copyrightHolder}} and <a href="https://github.com/{{org}}/{{repo}}/graphs/contributors">contributors</a></sub>
</p>

<p align="center">
  <!-- Badges -->
  <a href="CODE_OF_CONDUCT.md">
    <img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=flat-square" />
  </a>
  <a href="https://github.com/{{org}}/{{repo}}/commits/main">
    <img alt="Last GitHub commit" src="https://img.shields.io/github/last-commit/{{org}}/{{repo}}.svg?style=flat-square" />
  </a>
  <a href="https://github.com/{{org}}/{{repo}}/releases">
    <img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/{{org}}/{{repo}}?style=flat-square" />
  </a>
</p>

<!-- TOC -->

## Table of contents

- [Features](#features)
  - ...
- [Installation](#installation)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

[(to top)](#table-of-contents)

- ...

## Installation

[(to top)](#table-of-contents)

To install, you simply need to re-export the library features with your
`deps.ts` file.

```ts
export * from "https://denopkg.com/{{org}}/{{repo}}/mod.ts";
//  or specific features
```

and then import them from your `deps.ts` file into the files they are needed.

```ts
import { version } from "../deps.ts";
//  or other features
```

You can specify a specific release or branch in the re-export:

**Export from a specific release**\
`export * from "https://denopkg.com/{{org}}/{{repo}}@v0.1.0-alpha/mod.ts"`

**Export from a specific branch**\
`export * from "https://denopkg.com/{{org}}/{{repo}}@dev-fix-06145/mod.ts"`

**Export the latest release**\
`export * from "https://denopkg.com/{{org}}/{{repo}}@latest/mod.ts"`

> **Note that if no version is specified in the re-export, then it will pull
> from the main branch, which as we always release on a merge with the main.**

## Examples

[(to top)](#table-of-contents)

```ts
```

## Contributing

[(to top)](#table-of-contents)

Contributions are welcome! Take a look at our [contributing guidelines](CONTRIBUTING.md) to get
started.

## License

[(to top)](#table-of-contents)

The MIT License (MIT) {{copyrightYear}} &middot; {{copyrightHolder}}. Refer to [LICENSE](LICENSE)
for details.

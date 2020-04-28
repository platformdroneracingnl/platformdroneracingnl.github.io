[![Netlify Status](https://api.netlify.com/api/v1/badges/af83681b-2a84-44e9-a437-0b62e62bf011/deploy-status)](https://app.netlify.com/sites/pdrnl/deploys) ![Github Pages](https://github.com/platformdroneracingnl/platformdroneracingnl.github.io/workflows/Github%20Pages/badge.svg)

# PDRNL Documentation

This is the source for the [PDRNL documentation](https://platformdroneracingnl.github.io/).
If you make adjustments, always do this with a branch that comes from the `docs` branch and with a **Pull Request**, the `master` branch is automatically updated and contains the static website.

## Updating the docs

Documentation is build using [Docusaurus](https://docusaurus.io/docs/en/doc-markdown.html).

### Preparing environment

Running the documentation locally requires [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) to be installed. Inside a cloned fork of this repository, run:

```bash
cd website
yarn
```

This will install [docusaurus](https://www.npmjs.com/package/docusaurus) amongst other things.

### Running docs locally

```bash
cd website
yarn run start
```

It will start a server at [localhost:3000](http://localhost:3000). You will need to navigate to the `next` version of the docs to see your changes applied. To do so click on the version number in the header and select `next` -> `Documentation`.

### Adding a page

- Create new page in `website/docs/`
- Add new doc to `website/sidebars.json`

You will need to restart the server when creating a new file or make changes to `sidebars.json`. If you're updating a document, you will only need to refresh your browser to get the latest changes.
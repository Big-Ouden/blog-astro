<div align="center">
    <img src="assets/banner.png"></img> </br>
    <img alt="GitHub License" src="https://shieldsio.bigouden.org/github/license/Big-Ouden/blog-astro?style=for-the-badge">
    <img alt="GitHub repo size" src="https://shieldsio.bigouden.org/github/repo-size/Big-Ouden/blog-astro?style=for-the-badge"></img>
    <a href="https://belier.iiens.net"><img alt="Personnal blog link" src="https://shieldsio.bigouden.org/badge/MY-BLOG-yellow?style=for-the-badge"></img></a></br>
    <img alt="GitHub last commit" src="https://shieldsio.bigouden.org/github/last-commit/Big-Ouden/blog-astro?display_timestamp=author&style=for-the-badge">
    <p>
    My personal blog propulsed by <a href="https://astro.build/">Astro</a>
    </p>
</div>



## Project Structure

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run lint`         | Run lint test     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `./redeploy.sh` | Deploy website in container (for VPS with traefik)                     |




# Module Architecture

Dux Refine adopts an application-based development architecture, where each directory represents an independent module. The `index.js` file within each module directory is used as the entry configuration. The framework initializes and loads corresponding routes, resources, multilingual support, and other configurations based on these entry configurations. As long as there is an `index.{js,ts,jsx,tsx}` file within a subdirectory of the `pages` directory, it will be treated as a standalone module.

:::tip
The advantage of this architecture lies in its modularity and low coupling. Multiple modules can easily be shared or removed between projects. Also, there's no specific directory structure within a module, allowing you to customize it according to your needs.
:::

Below are two directory structure approaches. You can choose either one based on your preference:

## Portal-Style Structure

Divide different portals into separate modules, each containing the functionality of that portal. This approach is suitable for simpler projects that don't require complex structures.

```sh
.
├── pages # Page files
│   └── admin # Admin portal
│       ├── category # Category page
│       ├── article # Article page
│       ├── role # Role page
│       ├── user # User page
│       └── index.tsx # Module configuration
│   └── store # Store portal
│       ├── category # Category page
│       ├── article # Article page
│       ├── role # Role page
│       ├── user # User page
│       └── index.tsx # Module configuration
```

## Application-Style Structure

Divide related features into modules, and further categorize them based on different portals within each module. This approach is suitable for more complex projects, providing clear functionality grouping and management.

```sh
.
├── pages # Page files
│   └── manage # Management module
│       ├── admin # Admin portal
│       │   ├── role # Role
│       │   └── user # User
│       ├── store # Store portal
│       │   ├── role # Role
│       │   └── user # User
│       └── index.tsx # Module configuration
│   └── content # Content module
│       ├── admin # Admin portal
│       │   ├── category # Category page
│       │   └── article # Article page
│       ├── store # Store portal
│       │   ├── category # Category page
│       │   └── article # Article page
│       └── index.tsx # Module configuration
```

If your project doesn't require or won't require support for multiple portals in the future, I recommend going with the single-portal structure:

```sh
.
├── pages # Page files
│   └── manage # Management module
│       ├── role # Role
│       └── user # User
│       └── index.tsx # Module configuration
│   └── content # Content module
│       ├── category # Category page
│       └── article # Article page
│       └── index.tsx # Module configuration
```
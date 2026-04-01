# Eastar's Website

A modern, fast, and responsive personal website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **React 19** - Latest React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Responsive Design** - Works on all devices
- **GitHub Pages** - Automated deployment

## 📦 Project Structure

```
Eastar-s-website/
├── client/
│   ├── index.html
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── index.css
│       └── pages/
│           ├── Home.tsx
│           └── NotFound.tsx
├── vite.config.ts
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml
```

## 🛠️ Development

### Prerequisites

- Node.js 16+
- pnpm (or npm/yarn)

### Installation

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Configuration

- **Base Path**: `/Eastar-s-website/`
- **Repository**: `chenzx060115-commits/Eastar-s-website`
- **Branch**: `main`
- **Deploy Branch**: `gh-pages`

### Automatic Deployment

Every push to the `main` branch triggers an automatic build and deployment to GitHub Pages.

### Manual Deployment

```bash
pnpm build
# Deploy the dist folder to GitHub Pages
```

## 📝 License

MIT

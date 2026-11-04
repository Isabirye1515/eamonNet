process.env.BABEL_ENV = "production";

const fs = require("fs");
const path = require("path");
const Module = require("module");
const crypto = require("crypto");
const babel = require("@babel/core");
const React = require("react");
const { renderToString } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");

const projectRoot = path.resolve(__dirname, "..");
const sourceRoot = path.join(projectRoot, "src");
const buildRoot = path.join(projectRoot, "build");
const mediaRoot = path.join(buildRoot, "static", "media");
const mediaFiles = fs.readdirSync(mediaRoot);
const routes = [
  {
    path: "/",
    title: "Eamon Dreads Solutions | Dreadlock Salon in Kampala",
    description:
      "Visit Eamon Dreads Solutions, a dreadlock salon in Kampala, Uganda, for installation, maintenance, repair, styling, extensions, and scalp care.",
  },
  {
    path: "/services",
    title: "Dreadlock Services in Kampala | Eamon Dreads",
    description:
      "Explore dreadlock installation, maintenance, repair, extensions, and styling at Eamon Dreads Solutions in Kampala, Uganda.",
  },
  {
    path: "/offers",
    title: "Why Choose Eamon Dreads | Kampala",
    description:
      "Learn about the personalized dreadlock care, experienced stylists, and welcoming salon experience at Eamon Dreads in Kampala.",
  },
  {
    path: "/gallery",
    title: "Dreadlock Styles Gallery | Eamon Dreads Kampala",
    description:
      "Browse dreadlock styles from the Eamon Dreads portfolio and find inspiration for your next look in Kampala.",
  },
  {
    path: "/blog",
    title: "Dreadlock Stories and Inspiration | Eamon Dreads",
    description:
      "See recent dreadlock styles, salon work, and updates from Eamon Dreads Solutions in Kampala.",
  },
  {
    path: "/contact",
    title: "Contact Eamon Dreads | Kampala",
    description:
      "Contact Eamon Dreads in Kampala about dreadlock styling, maintenance, repairs, and appointments.",
  },
];

const assetExtensions = [".jpg", ".jpeg", ".png", ".webp", ".svg"];
const sourceExtensions = [".js", ".jsx"];
const defaultJsLoader = Module._extensions[".js"];

function loadSourceModule(module, filename) {
  if (!filename.startsWith(sourceRoot + path.sep)) {
    return defaultJsLoader(module, filename);
  }

  const { code } = babel.transformFileSync(filename, {
    babelrc: false,
    configFile: false,
    envName: "production",
    presets: [[require.resolve("babel-preset-react-app"), { runtime: "automatic" }]],
  });
  module._compile(code, filename);
}

for (const extension of sourceExtensions) {
  Module._extensions[extension] = loadSourceModule;
}

for (const extension of [".css", ".scss", ...assetExtensions]) {
  require.extensions[extension] = (module, filename) => {
    module.exports = assetExtensions.includes(extension) ? filename : {};
  };
}

const App = require(path.join(sourceRoot, "App.js")).default;
const htmlTemplate = fs.readFileSync(path.join(buildRoot, "index.html"), "utf8");
const rootMarker = '<div id="root"></div>';

if (!htmlTemplate.includes(rootMarker)) {
  throw new Error("The production template does not contain the expected React root.");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderPage(route) {
  const renderedMarkup = renderToString(
    React.createElement(
      StaticRouter,
      { location: route.path },
      React.createElement(App)
    )
  );
  const emotionStyleTags = [];
  const emotionCss = [];
  const appMarkup = renderedMarkup.replace(
    /<style data-emotion="([^"]+)"[^>]*>([\s\S]*?)<\/style>/g,
    (styleTag, emotionIds, css) => {
      emotionStyleTags.push(`<style data-emotion="${emotionIds}"></style>`);
      emotionCss.push(css);
      return "";
    }
  );
  const css = emotionCss.join("");
  const cssHash = crypto.createHash("sha256").update(css).digest("hex").slice(0, 12);
  const cssFilename = `prerender-${cssHash}.css`;
  const cssPath = path.join(buildRoot, "static", "css", cssFilename);
  const cssHref = `/static/css/${cssFilename}`;
  const destination =
    route.path === "/"
      ? path.join(buildRoot, "index.html")
      : path.join(buildRoot, route.path.slice(1), "index.html");
  let html = htmlTemplate;

  html = html.replace(rootMarker, `<div id="root">${appMarkup}</div>`);
  html = html.replace(
    "</head>",
    `<link rel="stylesheet" href="${cssHref}" />${emotionStyleTags.join("")}</head>`
  );
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  );

  fs.writeFileSync(cssPath, css);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html);
  console.log(`Prerendered ${route.path}`);
}

for (const route of routes) {
  renderPage(route);
}

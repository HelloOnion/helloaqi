const fs = require("fs");
const path = require("path");

function moveFiles() {
  const buildDir = path.join(process.cwd(), "out");
  const nextDir = path.join(buildDir, "_next");
  const staticDir = path.join(buildDir, "static");

  // Create static directory
  if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
  }

  // Copy _next contents to static
  if (fs.existsSync(nextDir)) {
    fs.cpSync(nextDir, staticDir, { recursive: true });
    fs.rmSync(nextDir, { recursive: true });
  }

  // Update paths in HTML files
  const htmlFiles = fs.readdirSync(buildDir).filter((f) => f.endsWith(".html"));
  htmlFiles.forEach((file) => {
    const filePath = path.join(buildDir, file);
    let content = fs.readFileSync(filePath, "utf8");
    content = content.replace(/\/_next\//g, "/static/");
    fs.writeFileSync(filePath, content);
  });
}

moveFiles();

import { access, cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const websiteRoot = path.resolve(__dirname, "..");
const defaultAssetsRoot = path.resolve(websiteRoot, "..");
const assetsSourceRoot = process.env.LANELOAF_ASSETS_ROOT
  ? path.resolve(process.env.LANELOAF_ASSETS_ROOT)
  : defaultAssetsRoot;

const appStoreSource = path.join(assetsSourceRoot, "AppStore", "Store");
const signalGlowSource = path.join(
  assetsSourceRoot,
  "AppStore",
  "Exports",
  "framed",
  "signal-glow"
);

const assetsRoot = path.join(websiteRoot, "public", "assets");
const storeDestination = path.join(assetsRoot, "store");
const signalGlowDestination = path.join(assetsRoot, "signal-glow");

async function copyFolder(source, destination) {
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  await cp(source, destination, { recursive: true });
}

async function exists(pathname) {
  try {
    await access(pathname);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(assetsRoot, { recursive: true });

  const hasStoreSource = await exists(appStoreSource);
  const hasSignalGlowSource = await exists(signalGlowSource);

  if (hasStoreSource && hasSignalGlowSource) {
    await copyFolder(appStoreSource, storeDestination);
    await copyFolder(signalGlowSource, signalGlowDestination);
    process.stdout.write("Prepared website assets in public/assets.\n");
    return;
  }

  process.stdout.write(
    "Source screenshots not found. Using existing public/assets files in this repo.\n"
  );
}

main().catch((error) => {
  process.stderr.write(`prepare-assets failed: ${error.message}\n`);
  process.exit(1);
});


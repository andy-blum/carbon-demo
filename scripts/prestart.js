import { glob } from "glob";
import { writeFile } from "fs/promises"

const cibm = "@carbon/ibmdotcom-web-components/es/components"
const cwc = "@carbon/web-components/es/components";

(async () => {
  const cibm_components = await glob('./node_modules/@carbon/ibmdotcom-web-components/es/components/*/index.js');
  const cibm_imports = cibm_components
    .map(path => path.split('/').at(-2))
    .map(cmp => `import "${cibm}/${cmp}/index.js";`)
    .join('\n');

  const cwc_components = await glob('./node_modules/@carbon/web-components/es/components/*/index.js');
  const cwc_imports = cwc_components
    .map(path => path.split('/').at(-2))
    .map(cmp => `import "${cwc}/${cmp}/index.js";`)
    .join('\n');

  await writeFile('components.js', [...cwc_imports, "\n", ...cibm_imports]);
})();

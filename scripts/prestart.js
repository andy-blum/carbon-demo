import { glob } from "glob";
import { writeFile } from "fs/promises";

const cibm = "https://1.www.s81c.com/common/carbon-for-ibm-dotcom/version";
const cwc = "https://1.www.s81c.com/common/carbon/web-components/version";

(async () => {
  const cibm_pkg = await fetch('https://registry.npmjs.org/@carbon/ibmdotcom-web-components').then(r => r.json());
  const cibm_version = cibm_pkg["dist-tags"]["v1-latest"];

  const cibm_components = await glob('./node_modules/@carbon/ibmdotcom-web-components/es/components/*/index.js');
  const cibm_imports = cibm_components
    .map(path => path.split('/').at(-2))
    .map(cmp => `import "${cibm}/v${cibm_version}/${cmp}.min.js";`)
    .join('\n');


  const cwc_pkg = await fetch('https://registry.npmjs.org/@carbon/web-components').then(r => r.json());
  const cwc_version = cwc_pkg["dist-tags"]["v1-latest"];

  const cwc_components = await glob('./node_modules/@carbon/web-components/es/components/*/index.js');
  const cwc_imports = cwc_components
    .map(path => path.split('/').at(-2))
    .map(cmp => `import "${cwc}/v${cwc_version}/${cmp}.min.js";`)
    .join('\n');

  await writeFile('components.js', [...cwc_imports, ...cibm_imports]);
})();

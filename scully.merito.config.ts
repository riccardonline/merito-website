import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "merito",
  outDir: './dist/static',
  routes: {
  },
  puppeteerLaunchOptions: { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
};

import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const tsconfig = require('../tsconfig.json');

function webpackAlias() {
  const { baseUrl, paths } = tsconfig.compilerOptions;
  return Object.keys(paths).reduce((acc, key) => {
    const [p] = paths[key];
    acc[key] = path.resolve(__dirname, `${baseUrl}${p}`);
    return acc;
  }, {});
}

const alias = webpackAlias();

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = { ...config.resolve.alias, ...alias };
    }
    return config;
  },
};
export default config;

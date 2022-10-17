import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defu } from 'defu';
import { defineNuxtModule, addPlugin } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "device-module",
    configKey: "device",
    compatibility: {
      nuxt: "^3.0.0-rc.5 || ^2.16.0",
      bridge: true
    }
  },
  defaults: {
    enabled: true,
    defaultUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
    refreshOnResize: false
  },
  setup(options, nuxt) {
    if (options.enabled) {
      nuxt.options.runtimeConfig.public.device = defu(nuxt.options.runtimeConfig.public.device, {
        enabled: options.enabled,
        defaultUserAgent: options.defaultUserAgent,
        refreshOnResize: options.refreshOnResize
      });
      const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
      nuxt.options.build.transpile.push(runtimeDir);
      addPlugin(resolve(runtimeDir, "plugin"));
      nuxt.hook("imports:dirs", (dirs) => {
        dirs.push(resolve(runtimeDir, "composables"));
      });
    }
  }
});

export { module as default };

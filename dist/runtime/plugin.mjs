import { defineNuxtPlugin, useRuntimeConfig, useRequestHeaders } from "#app";
import { reactive } from "vue";
import generateFlags from "./generateFlags.mjs";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const DEFAULT_USER_AGENT = config.public.device.defaultUserAgent;
  const REFRESH_ON_RESIZE = config.public.device.refreshOnResize;
  if (nuxtApp.ssrContext) {
    const headers = useRequestHeaders();
    const userAgent2 = headers["user-agent"] || DEFAULT_USER_AGENT;
    const flags2 = reactive(generateFlags(headers, userAgent2));
    return {
      provide: {
        device: flags2
      }
    };
  }
  const userAgent = navigator.userAgent || DEFAULT_USER_AGENT;
  const flags = reactive(generateFlags({}, userAgent));
  if (REFRESH_ON_RESIZE) {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        const newFlags = generateFlags({}, navigator.userAgent || DEFAULT_USER_AGENT);
        Object.entries(newFlags).forEach((entry) => {
          const [key, value] = entry;
          flags[key] = value;
        });
      }, 50);
    });
  }
  return {
    provide: {
      device: flags
    }
  };
});

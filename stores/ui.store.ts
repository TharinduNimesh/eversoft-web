import { defineStore } from "pinia";

export const useUIStore = defineStore("uiStore", {
  state: () => ({
    color: "blue",
  }),
  actions: {
    setColor(color: string) {
      const config: any = useAppConfig();
      config.ui.primary = color;
      localStorage.setItem("color-theme", color);
    },
  },
});

import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebarStore", {
  state: () => ({
    isOpen: false,
    openedSubRoute: "",
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    setOpenedSubRoute(subRoute: string) {
      if (this.openedSubRoute == subRoute) {
        this.openedSubRoute = "";
        return;
      }
      this.openedSubRoute = subRoute;
    },
  },
});

export default defineAppConfig({
  ui: {
    primary: "blue",
    gray: "zinc",
    icons: {
      dynamic: true, // use icones directly from icones.js.org
    },
    button: {
      default: {
        size: "lg",
      },
      font: "font-bold uppercase"
    },
    input: {
      default: {
        size: "lg",
        color: "gray",
      },
      color: {
        gray: {
          outline: "dark:bg-[#1d1d1f]",
        },
      },
    },
    dropdown: {
      background: "dark:bg-secondary-bkg",
      item: {
        base: "dark:hover:bg-primary-bkg/70"
      }
    },
    popover: {
      background: "dark:bg-secondary-bkg",
    }
  },
});

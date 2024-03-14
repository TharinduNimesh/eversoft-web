export default defineAppConfig({
  ui: {
    primary: "blue",
    gray: "cool",
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
  },
});

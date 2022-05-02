// import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import icons from "@/icons";

Vue.use(Vuetify);
const opts = {
  icons: {
    iconfont: "mdi", // default - only for display purposes
    values: icons,
  },
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: {
          base: "#13ABA3",
          'lighten1': "#28AFA6",
          "lighten2": "#228d88",
          "lighten3": "#e4f5f5",
          "lighten4": "#eafcf8",
        },
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
        background: "#f9f9f9"
      },
    },
  },
};

export default new Vuetify(opts);

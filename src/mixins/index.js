import dayjs from "dayjs";
import Vue from "vue";

Vue.mixin({
  computed: {
    getMasterData() {
      return this.$store.getters.getMasterData
    }
  },
  methods: {
    numberFormat: (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    dayjs(date, format = "YYYY/MM/DD") {
      return dayjs(date).format(format);
    },
    capitalizeFirstLetter: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    showAlert(error, status = true) {
      let errorText = null;
      if (typeof error === "string") {
        errorText = error;
      } else {
        errorText =
          this.$t(error?.data?.message) ||
          this.$t(error?.data?.errors?.message);
      }
      this.$store.commit("showAlert", {
        text: errorText,
        successStatus: status,
      });
    },
  },
  filters: {
    dayjs(date, format = "YYYY/MM/DD") {
      return dayjs(date).format(format);
    },
  },
});

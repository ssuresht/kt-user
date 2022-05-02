<template>
  <v-app
    class="font-Noto-Sans"
    :style="{ background: $vuetify.theme.themes[currentTheme].background }"
  >
    <v-overlay z-index="14" :value="apiProcessing">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <Navbar></Navbar>
    <v-main>
      <ModalDialog />
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import ModalDialog from "@/components/common/ModalDialog.vue";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
export default {
  name: "App",
  data() {
    return {
      apiProcessing: false,
    };
  },
  components: { Navbar, Footer, ModalDialog },
  mounted() {
    this.$store.dispatch("GET_MASTER_DATA");
  },
  created() {
    this.apiProcessing = this.$store.state.apiProcessing;
  },
  computed: {
    currentTheme() {
      return this.$vuetify.theme.isDark ? "dark" : "light";
    },
  },
  watch: {
    "$store.state.apiProcessing": function () {
      this.apiProcessing = this.$store.state.apiProcessing;
    },
  },
};
</script>

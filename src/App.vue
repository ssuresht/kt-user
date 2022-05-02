<template>
  <v-app
    class="font-Noto-Sans"
    :style="{ background: $vuetify.theme.themes[currentTheme].background }"
  >

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
  components: { Navbar, Footer, ModalDialog },
  mounted() {
    this.$store.dispatch('GET_MASTER_DATA')
  },
  computed: {
    currentTheme() {
      return this.$vuetify.theme.isDark ? "dark" : "light";
    },
  },
};
</script>

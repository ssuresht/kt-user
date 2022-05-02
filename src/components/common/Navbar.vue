<template>
  <v-app-bar class="navbar" app :elevation="0" color="white">
    <v-card flat height="56px" class="full-width">
      <div class="d-flex justify-space-between pt-3">
        <v-img
          max-height="40px"
          max-width="62px"
          class="ml-3 contain cursor-pointer"
          :contain="true"
          lazy
          :src="require('@/assets/images/logo-with-text.svg')"
          @click="scrollToTop"
        ></v-img>
        <template v-if="$route.name === 'Top'">
          <div class="d-flex align-center justify-center">
            <v-btn
              width="111px"
              height="32px"
              outlined
              color="primary"
              v-if="$vuetify.breakpoint.mdAndUp"
              class="font-12px mr-6"
              >採用ご担当者様</v-btn
            >

            <v-icon
              v-if="isLoggedIn"
              v-ripple
              @click="$router.push('/mypage')"
              size="33px"
              >$account</v-icon
            >
            <v-icon v-if="!isLoggedIn" v-ripple @click="launchLogin" size="33px"
              >$account</v-icon
            >
          </div>
        </template>
        <template v-else>
          <v-btn
            v-if="$route.name === 'TemporalTop'"
            @click="$router.push({ name: 'Welcome' })"
            width="171px"
            height="36px"
            rounded
            outlined
            color="primary"
            ><v-icon class="pt-1 pr-n1" left>$logoIcon</v-icon
            ><span class="font-12px fw-600 pl-n3">採用ご担当者様</span></v-btn
          >
          <v-btn
            v-if="$route.name === 'Welcome'"
            @click="$router.push({ name: 'TemporalTop' })"
            width="171px"
            height="36px"
            rounded
            outlined
            color="primary"
            ><v-icon class="pt-1 pr-n1" left>$logoIcon</v-icon
            ><span class="font-12px fw-600 pl-n3">学生向けページへ</span></v-btn
          >
        </template>
      </div>
    </v-card>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",

  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    launchLogin() {
      this.$store.commit("showModal", {
        component: "LoginModal",
        width: "981px",
        height: "448px",
        dense: true,
      });
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 10 !important;
}
</style>

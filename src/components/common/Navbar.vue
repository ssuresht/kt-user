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
          @click="$router.push({name: 'Top'})"
        ></v-img>

         <div class="d-flex">
        <template v-if="$route.name === 'Top'">
          <div class="d-flex align-center justify-center">
            <v-btn
              width="111px"
              height="32px"
              outlined
              color="primary"
              @click="$router.push({name: 'Welcome'})"
              v-if="$vuetify.breakpoint.mdAndUp"
              class="font-12px mr-6"
              >採用ご担当者様</v-btn
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
          <div v-if="isSearch" class="mx-3 search d-flex justify-center align-center" @click="$router.push({name: 'Internships'})">
            <v-icon size="18">$search</v-icon>
          </div>
        </template>
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
    isSearch(){
      return this.$route.name !== 'Internships' && this.$route.name !== 'Top'
    }
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
.search{
  background: #13aba3;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
}
</style>

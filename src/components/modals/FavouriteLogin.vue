<template>
  <div
    class="full-width d-flex flex-column align-center justify-start"
    :class="$vuetify.breakpoint.smAndDown ? '' : 'pb-25 pt-6'"
  >
    <div
      class="text-center text-1f2020 fw-400"
      :class="[$vuetify.breakpoint.smAndDown ? 'font-16px' : 'font-18px']"
    >
      お気に入りの追加は<br />
      ログイン後に可能です！
    </div>
    <v-btn
      :width="$vuetify.breakpoint.smAndDown ? '235px' : '352px'"
      :height="$vuetify.breakpoint.smAndDown ? '41px' : '58px'"
      color="primary"
      class="font-Noto-Sans-Medium"
      @click="launchLogin"
      :class="
        $vuetify.breakpoint.smAndDown
          ? 'font-14px mt-6 mb-5'
          : 'font-16px mt-8 mb-6'
      "
      >ログイン</v-btn
    >
    <div
      class="text-center text-3979d9 font-Noto-Sans-Medium mouse-pointer"
      :class="$vuetify.breakpoint.smAndDown ? 'font-14px' : 'font-16px'"
      @click="launchSignUp"
    >
      会員登録がお済でない方
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["hideModal"]),
    launchLogin() {
      this.hideModal();
      this.$store.commit("showModal", {
        component: "LoginModal",
        width: "981px",
        height: "448px",
        dense: true,
      });
    },
    launchSignUp() {
      this.hideModal();
      this.$store.commit("showModal", {
        component: "SignUpModal",
        width: "981px",
        height: "374px",
        dense: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.pb-25 {
  padding-bottom: 100px !important;
}
</style>

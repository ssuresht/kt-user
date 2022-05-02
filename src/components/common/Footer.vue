<template>
  <div>
    <v-card flat color="primary" class="borderradius-0">
      <div
        class="d-flex justify-center"
        :class="{
          'pt-7': $vuetify.breakpoint.smAndDown,
          'pt-12': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <router-link :to="{ name: 'Top' }">
          <v-img
            max-height="53px"
            max-width="102px"
            class="ml-3 contain"
            :contain="true"
            lazy
            :src="require('@/assets/images/white-logo-with-text.svg')"
          ></v-img>
        </router-link>
      </div>
      <div
        v-if="!$route.meta.hideFooterLink"
        class="text-fff"
        :class="{
          'mt-9': $vuetify.breakpoint.smAndDown,
          'mt-6 mb-10': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <div
          :class="{
            'text-center': $vuetify.breakpoint.smAndDown,
            'd-flex justify-center': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <div
            @click="goTo(footer.to)"
            class="footer-link"
            :to="{ name: 'Top' }"
            v-for="(footer, index) in footerLink"
            :key="index"
            :class="{
              'mt-3 font-14px': $vuetify.breakpoint.smAndDown,
              'mx-5 font-18px': $vuetify.breakpoint.mdAndUp,
            }"
          >
            {{ footer.name }}
          </div>
        </div>
      </div>
      <div
        class="text-center text-light-green"
        :class="{
          'pt-4 pb-7 font-10px': $vuetify.breakpoint.smAndDown,
          'pt-4 pb-12 font-14px': $vuetify.breakpoint.mdAndUp,
        }"
      >
        ©{{ getYear }} Copyright Kotonaru Inc.
      </div>
    </v-card>
  </div>
</template>

<script>
import dayjs from "@/plugins/dayjs";
export default {
  name: "Footer",
  data() {
    return {
      footerLink: [
        { name: "コラム", to: "Posts" },
        { name: "会社概要", to: "会社概要" },
        { name: "利用規約", to: "TermsofService" },
        { name: "プライバシーポリシー", to: "PrivacyPolicy" },
        { name: "お問い合わせ", to: "Contact" },
        { name: "インターン採用について", to: "Welcome" },
      ],
    };
  },
  computed: {
    getYear() {
      return dayjs().format("YYYY");
    },
  },
  methods: {
    goTo(to) {
      if (to === this.$route.name) {
        return;
      }
      if (to === "会社概要") {
        window.location.href = "https://kotonaru.notion.site/";
      }
      this.$router.push({ name: to });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-link {
  cursor: pointer;
}
</style>

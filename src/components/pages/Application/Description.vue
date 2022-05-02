<template>
  <div>
    <div class="container-div">
      <div
        :class="{
          'mx-6 px-2 mt-6': $vuetify.breakpoint.smAndDown,
          'mt-11 mx-auto': $vuetify.breakpoint.mdAndUp,
        }"
        class="benefits-background"
      >
        <div
          class="benefits-container"
          :class="{
            'mx-2 pb-6': $vuetify.breakpoint.smAndDown,
            'px-10 pb-7': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <div
            class="pt-5 fw-500"
            :class="{
              'font-14px pr-3': $vuetify.breakpoint.smAndDown,
              'font-18px': $vuetify.breakpoint.mdAndUp,
            }"
          >
            {{ getSingleInternship.title }}
          </div>
          <div
            class="d-flex"
            :class="{
              'mt-3': $vuetify.breakpoint.smAndDown,
              'mt-2': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <span
              class="company-log-box mr-2 d-flex"
              v-if="
                getSingleInternship.company &&
                  getSingleInternship.company.logo_img
              "
            >
              <img
                :src="
                  getSingleInternship.company &&
                  getSingleInternship.company.logo_img
                    ? getSingleInternship.company.logo_img
                    : '/img/company-logo.png'
                "
                onerror="this.src='/img/company-logo.png'"
                class="ma-auto"
              />
            </span>
            <span
              :class="{
                'font-14px ml-2': $vuetify.breakpoint.smAndDown,
                'font-16px ml-3 pt-2': $vuetify.breakpoint.mdAndUp,
              }"
            >
              {{
                getSingleInternship.company
                  ? getSingleInternship.company.name
                  : "-"
              }}
            </span>
          </div>
          <div
            :class="{
              'mt-2': $vuetify.breakpoint.smAndDown,
              'mt-4': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <div v-for="(text, index) in texts" :key="index">
              <div class="d-flex">
                <div
                  class="d-flex justify-center align-center"
                  :class="{
                    'title-container-mobile font-12px mt-2':
                      $vuetify.breakpoint.smAndDown,
                    'title-container-desktop font-16px mt-2':
                      $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  <span class="">{{ text.title }}</span>
                </div>
                <div
                  :class="{
                    'font-14px ml-2 pt-2': $vuetify.breakpoint.smAndDown,
                    'font-16px ml-3 pt-2': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  {{ text.content }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="email-class-container"
        :class="{
          'mx-6 mt-6': $vuetify.breakpoint.smAndDown,
          'mt-10 mx-auto': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <div class="email-class">
          <div class="d-flex">
            <span
              class="text-grey"
              :class="{
                'font-14px': $vuetify.breakpoint.smAndDown,
                'font-18px': $vuetify.breakpoint.mdAndUp,
              }"
              >ID ( メールアドレス )</span
            >
            <span
              v-if="$vuetify.breakpoint.mdAndUp"
              class="text-light-red font-14px pl-2 pt-1"
              >※このメールアドレス宛に企業からの連絡が届きます</span
            >
          </div>
          <div
            v-if="$vuetify.breakpoint.smAndDown"
            class="text-light-red font-13px pt-1"
          >
            ※このメールアドレス宛に企業からの連絡が届きます
          </div>
          <div
            :class="{
              'font-14px': $vuetify.breakpoint.smAndDown,
              'font-18px': $vuetify.breakpoint.mdAndUp,
            }"
          >
            {{ user ? user.obfuscate_email : '' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "JobDetailsDescription",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSingleInternship", "user"]),
    texts() {
      return [
        {
          title: "業界",
          content:
            this.getSingleInternship?.company?.business_industry?.name ?? "-",
        },
        {
          title: "職種",
          content: this.getSingleInternship?.work_category?.name ?? "-",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.container-div {
  width: 100% !important;
}
.benefits-background {
  background-color: #f4fdfc !important;
  max-width: 590px !important;
  max-height: 239px !important;
  border-radius: 12px !important;
  .benefits-container {
    width: 100% !important;
    height: 100% !important;
  }
}
.title-container-mobile {
  width: 47px !important;
  height: 25px !important;
  background-color: #e5e5e5;
  border-radius: 5px !important;
}
.title-container-desktop {
  width: 58px !important;
  height: 31px !important;
  background-color: #e5e5e5;
  border-radius: 5px !important;
}
.email-class-container {
  max-width: 590px !important;
  max-height: 239px !important;
  .email-class {
    width: 100% !important;
  }
}
.company-log-box {
  width: 40px;
  height: 40px;
  background-color: #f4326d;
  border-radius: 3px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>

<template>
  <div class="zindex-1">
    <v-card class="card" :height="getCardHeight" color="#f9f9f9" flat>
      <div
        class="landing-background"
        :class="{
          'landing-xs': $vuetify.breakpoint.xs,
          'landing-sm': $vuetify.breakpoint.sm,
          'landing-lg': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <!-- :style="{ bottom: scrollYPosition }" -->
        <div
          v-if="$vuetify.breakpoint.smAndUp"
          class="phone-image"
          :class="{
            'phone-image-sm ': $vuetify.breakpoint.sm,
            'phone-image-md': $vuetify.breakpoint.md,
            'phone-image-lg': $vuetify.breakpoint.lg,
            'phone-image-xl': $vuetify.breakpoint.xl,
          }"
        >
          <phone-image />
        </div>

        <div v-if="$vuetify.breakpoint.xs" class="phone-image phone-image-xs">
          <phone-mobile-image />
        </div>
      </div>

      <div
        class="center-content"
        :class="{
          'center-sm ': $vuetify.breakpoint.sm,
          'center-xs': $vuetify.breakpoint.xs,
          'center-md-and-up d-flex align-center': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <div
          :class="{
            'pt-10': $vuetify.breakpoint.xs,
            'pt-16 ': $vuetify.breakpoint.sm,
            'pt-16': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <div
            class="font-Noto-Sans-Medium text-1f2020"
            :class="{
              'font-14px': $vuetify.breakpoint.xs,
              'font-18px': $vuetify.breakpoint.sm,
              'font-24px': $vuetify.breakpoint.mdAndUp,
            }"
          >
            経営者様、採用ご担当者様へ
          </div>
          <h1>
            <v-card
              :width="topHeadingWidth"
              :height="topHeadingHeight"
              class="rounded-card d-flex align-center justify-center"
              :class="{
                'mt-3 rounded-xs': $vuetify.breakpoint.xs,
                'mt-4 rounded-sm': $vuetify.breakpoint.sm,
                'mt-7 rounded-md': $vuetify.breakpoint.mdAndUp,
              }"
            >
              <div
                :class="{
                  'pt-1 font-20px': $vuetify.breakpoint.xs,
                  'pt-1 font-24px': $vuetify.breakpoint.sm,
                  'font-48px ': $vuetify.breakpoint.mdAndUp,
                }"
                class="font-Noto-Sans-Bold pb-1"
              >
                <span class="text-1f2020">
                  日本中<span
                    :class="{
                      'font-38px ': $vuetify.breakpoint.mdAndUp,
                      'font-16px': $vuetify.breakpoint.smAndDown,
                    }"
                    >の</span
                  ></span
                ><span class="text-primary">可能性</span>
                <span
                  class="text-1f2020"
                  :class="{
                    'font-38px ': $vuetify.breakpoint.mdAndUp,
                    'font-16px': $vuetify.breakpoint.smAndDown,
                  }"
                  >と</span
                ><span class="text-1f2020">つながる、</span>
              </div>
            </v-card>
            <v-card
              :width="bottomHeadingWidth"
              :height="bottomHeadingHeight"
              class="d-flex align-center justify-center"
              :class="{
                'mt-2 rounded-xs': $vuetify.breakpoint.xs,
                'mt-3 rounded-sm': $vuetify.breakpoint.sm,
                'mt-3 rounded-md': $vuetify.breakpoint.mdAndUp,
              }"
            >
              <div
                :class="{
                  'pt-1 font-20px': $vuetify.breakpoint.xs,
                  'pt-1 font-24px': $vuetify.breakpoint.sm,
                  'font-48px ': $vuetify.breakpoint.mdAndUp,
                }"
                class="font-Noto-Sans-Bold pb-1"
              >
                <span class="text-purple">ニューノーマル</span
                ><span class="text-1f2020">
                  <span
                    :class="{
                      'font-38px ': $vuetify.breakpoint.mdAndUp,
                      'font-16px': $vuetify.breakpoint.smAndDown,
                    }"
                    >の</span
                  >
                  インターン</span
                >
              </div>
            </v-card>
          </h1>
          <div v-if="$vuetify.breakpoint.smAndUp">
            <div class="font-18px font-Noto-Sans-Medium mt-7 text-1f2020">
              コトナルでオンラインインターンの<br />
              募集をしませんか？
            </div>
            <v-btn
              class="mt-7"
              depressed
              :width="buttonWidth"
              :height="buttonHeight"
              href="https://forms.gle/ZwXcxbmXwG1Pj1Pt7"
              target="_blank"
              rounded
              color="#13aba3"
            >
              <span class="font-18px fw-500 text-fff">お問い合わせ</span>
            </v-btn>
          </div>
        </div>
      </div>
      <div v-if="$vuetify.breakpoint.xs" class="cta-xs">
        <div class="font-14px fw-500 mt-7">
          コトナルでオンラインインターンの<br />
          募集をしませんか？
        </div>
        <v-btn
          class="mt-7"
          depressed
          width="280px"
          height="40px"
          rounded
          color="#13aba3"
          href="https://forms.gle/ZwXcxbmXwG1Pj1Pt7"
          target="_blank"
        >
          <span class="font-14px fw-500 text-fff">お問い合わせ</span>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import PhoneImage from "@/components/other/PhoneImage";
import PhoneMobileImage from "@/components/pages/welcome/PhoneMobileImage";
export default {
  name: "LandingSection",
  components: {
    PhoneImage,
    PhoneMobileImage,
  },
  data() {
    return {
      // scrollYPosition: "-1%",
    };
  },
  mounted() {
    // window.addEventListener("scroll", () => {
    //   scrollY === 0
    //     ? (this.scrollYPosition = "-0.9%")
    //     : (this.scrollYPosition = "-" + (scrollY / 10).toString() + "%");
    // });
  },
  computed: {
    getCardHeight() {
      return this.$vuetify.breakpoint.xs ? "594px" : "700px";
    },
    topHeadingWidth() {
      return this.$vuetify.breakpoint.xs
        ? "310px"
        : this.$vuetify.breakpoint.sm
        ? "360px"
        : "651px";
    },
    bottomHeadingWidth() {
      return this.$vuetify.breakpoint.xs
        ? "330px"
        : this.$vuetify.breakpoint.sm
        ? "360px"
        : "681px";
    },
    buttonWidth() {
      return this.$vuetify.breakpoint.xs
        ? "40px"
        : this.$vuetify.breakpoint.sm
        ? "295px"
        : "318px";
    },
    buttonHeight() {
      return this.$vuetify.breakpoint.xs
        ? "293px"
        : this.$vuetify.breakpoint.sm
        ? "45px"
        : "54px";
    },

    topHeadingHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "44px" : "94px";
    },
    bottomHeadingHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "44px" : "94px";
    },
  },
};
</script>

<style lang="scss" scoped>
.zindex-1 {
  z-index: 1;
}
.white-board-card {
  position: relative;
  z-index: 10;
  margin-top: 130px;
}
.card {
  position: relative;
  z-index: 1;
  height: 95vh;
}
.phone-image-md {
  position: absolute;
  right: 0%;
  z-index: -1;
  bottom: -1%;
}
.phone-image-lg {
  position: absolute;
  right: 0%;
  z-index: -1;
  bottom: -7.4%;
}
.phone-image-sm {
  position: absolute;
  right: 0;
  bottom: -1.1%;
  z-index: 2;
}
.phone-image-xl {
  position: absolute;
  right: 24%;
  bottom: -1.1%;
  z-index: 2;
}
.phone-image-xs {
  position: absolute;
  bottom: -1.2% !important;
  z-index: 2;
  right: 0%;
}
.landing-background {
  right: 0;
  background: #7ae9e9;
  border-bottom-left-radius: 80px !important;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  z-index: 2;
}
.landing-lg {
  position: absolute;
  width: 75%;
  height: 600px;
}
.landing-xs {
  position: absolute;
  width: 87vw;
  height: 428px;
}
.landing-sm {
  position: absolute;
  width: 87%;
  height: 600px;
}
.center-content {
  position: relative;
  z-index: 4;
}
.center-md-and-up {
  height: 470px;
  margin-left: 13% !important;
  margin-right: 13% !important;
}
.center-sm {
  margin-left: 18px !important;
  margin-right: 40px !important;
}
.center-xs {
  margin-left: 18px !important;
  margin-right: 50px !important;
}
.cta-xs {
  position: absolute;
  z-index: 5;
  bottom: 7%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.rounded-md {
  border-radius: 20px !important;
}
.rounded-sm {
  border-radius: 15px !important;
}
.rouded-xs {
  border-radius: 10px !important;
}
</style>

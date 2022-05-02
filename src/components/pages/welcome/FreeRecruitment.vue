<template>
  <div class="zindex-1">
    <v-card rounded="0" flat :height="getHeight"></v-card>
    <v-card
      flat
      color="#f9f9f9"
      :min-height="backgroundHeight"
      class="relative"
    >
      <div
        :class="{
          'absolute-mobile': $vuetify.breakpoint.smAndDown,
          'absolute-desktop': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <free-recruitment-image />
      </div>
      <v-card
        rounded="xl"
        :class="{
          'card-mobile': $vuetify.breakpoint.smAndDown,
          'card-desktop': $vuetify.breakpoint.mdAndUp,
        }"
        :width="cardWidth"
        :height="cardHeight"
        color="#CEFBF8"
        flat
      >
        <div
          class="text-center font-Noto-Sans-Medium text-00332f"
          :class="{
            'font-20px pt-10': $vuetify.breakpoint.smAndDown,
            'font-48px pt-15': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <h2 class="sub-title">募集の掲載は無料です</h2>
        </div>
        <div
          v-if="$vuetify.breakpoint.mdAndUp"
          class="text-center font-16px fw-400 mt-4 text-00332f"
        >
          企業と学生との新しい出会いをコトナルがサポートいたします。<br />
          お気軽にお問い合わせください。
        </div>
        <div v-else class="text-center font-14px fw-400 mt-5">
          企業と学生との新しい出会いを<br />コトナルがサポートいたします。<br />
          お気軽にお問い合わせください。
        </div>
        <div class="d-flex justify-center font-Noto-Sans-Medium">
          <v-btn
            depressed
            :width="buttonWidth"
            :height="buttonHeight"
            target="_blank"
            href="https://forms.gle/ZwXcxbmXwG1Pj1Pt7"
            color="primary"
            rounded
            :class="{
              'mt-5': $vuetify.breakpoint.smAndDown,
              'mt-7': $vuetify.breakpoint.mdAndUp,
            }"
            >お問い合わせ</v-btn
          >
        </div>
        <div
          class="mt-1 text-center font-12px text-primary fw-400"
          :class="{
            'mb-10': $vuetify.breakpoint.smAndDown,
            'mb-16 pb-3': $vuetify.breakpoint.mdAndUp,
          }"
        >
          Googleフォームが開きます
        </div>
      </v-card>
      <v-card-actions
        class="justify-center"
        :class="{
          'button-mobile': $vuetify.breakpoint.smAndDown,
          'button-desktop': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-btn
          :ripple="false"
          class="fb-btn"
          width="230px"
          height="46px"
          depressed
          rounded
          color="white"
          @click="$router.push({ name: 'TemporalTop' })"
          ><v-icon class="pt-1 pr-n1" left>$logoIcon</v-icon
          ><span
            class="font-16px font-Noto-Sans-Medium text-primary pl-n3"
            :class="{ 'font-14px': $vuetify.breakpoint.xs }"
            >学生向けページへ</span
          ></v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import FreeRecruitmentImage from "@/components/other/FreeRecruitmentImage";
export default {
  name: "FreeRecruitment",
  components: {
    FreeRecruitmentImage,
  },
  computed: {
    getHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "140px" : "326px";
    },
    buttonHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "40px" : "54px";
    },
    buttonWidth() {
      return this.$vuetify.breakpoint.smAndDown ? "280px" : "318px";
    },
    cardWidth() {
      return this.$vuetify.breakpoint.xs
        ? "340px"
        : this.$vuetify.breakpoint.sm
        ? "500px"
        : "1000px";
    },
    cardHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "275px" : "367px";
    },
    backgroundHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "475px" : "658px";
    },
  },
};
</script>

<style scoped src="./FreeRecruitment.scss" lang="scss"/>

<style lang="scss" scoped>
.zindex-1 {
  z-index: 1;
}
.fb-btn {
  border: 1px solid #13aba3 !important;
}
.relative {
  position: relative;
}
.absolute-desktop {
  position: absolute;
  top: -46%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.absolute-mobile {
  position: absolute;
  top: -38.5%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.card-mobile {
  position: absolute;
  top: 11.4%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.card-desktop {
  position: absolute;
  top: 15.8%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.button-mobile {
  position: absolute;
  top: 77.4%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.button-desktop {
  position: absolute;
  top: 78%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.font-14px {
  font-size: 14px !important;
}
</style>

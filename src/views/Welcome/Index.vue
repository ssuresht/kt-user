<template>
  <div>
    <landing-section />
    <about-us />
    <online-work />
    <v-card
      color="#fff"
      min-height="144px"
      flat
      :class="{
        'pb-16 pb-4': $vuetify.breakpoint.mdAndUp,
      }"
      class=""
    >
      <div
        class="ml-4 text-center font-Noto-Sans-Medium pb-3"
        :class="{
          'font-18px pt-10': $vuetify.breakpoint.sm,
          'font-14px pt-10': $vuetify.breakpoint.xs,
          'font-24px pt-16': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <h2 class="sub-title">コトナルではどんな学生と出会えますか？</h2>
      </div>
      <div
        class="d-flex justify-center"
        :class="{
          'mt-8 pb-6': $vuetify.breakpoint.smAndDown,
          'mt-7': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-icon class="fluffy">$circularDropdownIcon</v-icon>
      </div>
    </v-card>
     <student-one />
   <student-two />
    <student-three />
    <faq />
    <free-recruitment />
  </div>
</template>

<script>
import Faq from "@/components/pages/welcome/Faq";
import StudentThree from "@/components/pages/welcome/StudentThree";
import StudentTwo from "@/components/pages/welcome/StudentTwo";
import StudentOne from "@/components/pages/welcome/StudentOne";
import OnlineWork from "@/components/pages/welcome/OnlineWork";
import LandingSection from "@/components/pages/welcome/LandingSection";
import AboutUs from "@/components/pages/welcome/About";
import FreeRecruitment from "@/components/pages/welcome/FreeRecruitment";
export default {
  name: "Welcome",
  components: {
    LandingSection,
    AboutUs,
    OnlineWork,
    StudentOne,
    StudentTwo,
    StudentThree,
    Faq,
    FreeRecruitment,
  },
};
</script>

<style scoped src="./Index.scss" lang="scss"/>

<style lang="scss" scoped>
.fluffy{
  animation: upanddown 2s infinite;
} 

@keyframes upanddown {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0px);
  }
}
  </style>

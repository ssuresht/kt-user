<template>
  <v-card min-height="612px" class="font-Noto-Sans relative zindex-1" flat>
    <v-row
    no-gutters
      :class="{
        'center-sm px-1': $vuetify.breakpoint.sm,
        'padding-40px' : $vuetify.breakpoint.smAndDown,
        'center-xs px-1': $vuetify.breakpoint.xs,
        'center-md-and-up px-1': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <v-col v-if="$vuetify.breakpoint.smAndDown" cols="12" md="6">
        <div
          :class="{
            'absolute-mobile': $vuetify.breakpoint.smAndDown,
            'absolute-desktop': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <logo-large-image />
        </div>
        <div class="text-section mb-10">
          <div class="d-flex justify-center">
            <div>
              <div
                class="text-primary font-16px font-Noto-Sans-Bold" :class="{'text-center':$vuetify.breakpoint.smAndDown}"
              >
                <h2 class="sub-title">「コトナル」とは？</h2>
              </div>
              <v-icon color="#B4DCDA" class="underline-icon">$underlineIcon</v-icon>
            </div>
          </div>
          <div
            class="mt-10 font-Noto-Sans-Medium"
            :class="{
              'font-14px': $vuetify.breakpoint.smAndDown,
              'font-18px fw-500': $vuetify.breakpoint.mdAndUp,
              'mx-300px-mobile' : $vuetify.breakpoint.xs
            }"
          >
            コトナルは、<span class="pink-text">日本初</span
            >の長期オンラインインターンのみを扱う検索サイトです。<br />
            オンラインインターンにおいて、学生はインターネット環境さえあれば日本中どこからでも参加できるので、学生の居住地や企業の立地に関わらない<span
              class="pink-text"
              >新しい出会い</span
            >を生み出すことができます。<br />
            働き方のニューノーマルが求められるこの時代に、コトナルは業界や企業の規模を問わず、日本中の可能性と繋がる<span
              class="pink-text"
              >新卒採用の新しいチャネル</span
            >になります。
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="d-flex justify-center" :class="{
            'mr-16 pr-10': $vuetify.breakpoint.mdAndUp,
          }">
          <about-image class="margin-48px about-image-z-index" />
        </div>
      </v-col>
      <v-col cols="12" md="6"  v-if="$vuetify.breakpoint.mdAndUp">
        <div
          :class="{
            'absolute-mobile': $vuetify.breakpoint.smAndDown,
            'absolute-desktop': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <logo-large-image />
        </div>
        <div class="text-section mt-16 pt-10 fw-700">
          <div class="d-flex justify-start">
            <div>
              <div
                class="text-primary font-Noto-Sans-Bold"
                :class="{
                  'font-16px': $vuetify.breakpoint.smAndDown,
                  'font-24px': $vuetify.breakpoint.mdAndUp,
                }"
              >
                <h2 class="sub-title">「コトナル」とは？</h2>
              </div>
              <v-icon color="#B4DCDA">$underlineIcon</v-icon>
            </div>
          </div>
          <div
            class="mt-10"
            :class="{
              'font-14px': $vuetify.breakpoint.smAndDown,
              'font-18px fw-500': $vuetify.breakpoint.mdAndUp,
            }"
          >
            コトナルは、<span class="pink-text">日本初</span
            >の長期オンラインインターンのみを扱う検索サイトです。<br />
            オンラインインターンにおいて、学生はインターネット環境さえあれば日本中どこからでも参加できるので、学生の居住地や企業の立地に関わらない<span
              class="pink-text"
              >新しい出会い</span
            >を生み出すことができます。<br />
            働き方のニューノーマルが求められるこの時代に、コトナルは業界や企業の規模を問わず、日本中の可能性と繋がる<span
              class="pink-text"
              >新卒採用の新しいチャネル</span
            >になります。
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import LogoLargeImage from "@/components/other/LogoLargeImage";
import AboutImage from "@/components/other/AboutImage.vue";
export default {
  name: "AboutUs",
  components: {
    LogoLargeImage,
    AboutImage,
  },
};
</script>

<style scoped src="./About.scss" lang="scss"/>

<style lang="scss" scoped>
.padding-40px{
  padding: 40px 0;
}
.mx-300px-mobile{
  max-width: 300px;
  margin: auto;
}
.zindex-1{
  z-index: 1;
}
.margin-48px{
  margin-top: 48px !important;
}
.center-md-and-up {
  margin-left: 13% !important;
  margin-right: 13% !important;
}
.center-sm {
  margin-left: 50px !important;
  margin-right: 50px !important;
}
.center-xs {
  margin-right: 15px;
  margin-left: 15px;
}
.relative {
  position: relative;
}
.absolute-desktop {
  position: absolute;
  top: -20%;
  right: 0;
  text-align: center;
  z-index: -1;
}
.absolute-mobile {
  position: absolute;
  bottom: 40%;
  z-index: -1;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.pink-text {
  color: #f4326d;
}
.text-section {
  z-index: 2;
}
.about-image-z-index{
  z-index: 10;
}
</style>

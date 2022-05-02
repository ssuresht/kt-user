<template>
  <div class="main-div">
    <div class="d-flex justify-center">
      <v-img
        :class="{
          'image-margin-mobile': $vuetify.breakpoint.smAndDown,
          'image-margin-desktop': $vuetify.breakpoint.mdAndUp,
        }"
        :width="imageWidth"
        :height="imageHeight"
        :contain="true"
        lazy
        :src="require('@/assets/images/logo-big.svg')"
      ></v-img>
    </div>
    <div
      class="text-center fw-700 text-light-grey-2"
      :class="{
        'mt-3 font-20px': $vuetify.breakpoint.smAndDown,
        'mt-16 font-30px': $vuetify.breakpoint.mdAndUp,
      }"
    >
      完全オンラインで長期インターン
    </div>
    <div class="d-flex justify-center fw-700">
      <v-card
        color="#FFFFFF"
        class="d-flex justify-center align-center white-card"
        :class="{
          'mt-6 font-30px': $vuetify.breakpoint.smAndDown,
          'mt-3 font-48px': $vuetify.breakpoint.mdAndUp,
        }"
        flat
        :height="cardHeight"
        :width="cardWidth"
      >
        <h1 class="main-title"><span class="text-primary pr-2">コトナル</span>近日公開！</h1>
      </v-card>
    </div>
    <div
      class="text-center text-primary fw-700"
      :class="{
        'about-mobile font-16px': $vuetify.breakpoint.smAndDown,
        'about-desktop font-24px': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <h2 class="sub-title">「コトナル」とは？</h2>
    </div>
    <div
      class="text-start"
      :class="{
        'about-description-mobile font-14px mt-4':
          $vuetify.breakpoint.smAndDown,
        'about-description-desktop font-18px mt-9': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <div>
        コトナルは、<span class="text-pink">日本初</span
        >の長期オンラインインターンのみを扱う検索サイトです。
      </div>
      <div class="mt-3">
        日本中の気になる企業のインターンに、<span class="text-pink"
          >自宅からでも、学校からでも参加</span
        >
        することができます。
      </div>
      <div class="mt-3">
        コトナルでは、インターン先の企業から自分を評価してもらうことができます。
        外から見た自分の評価された力や期待したい力を知ることで、自己分析に役立てたり<span
          class="text-pink"
        >
          新しい自分を発見</span
        >できたりするでしょう。
      </div>
    </div>
    <div
      class="text-center text-primary fw-700"
      :class="{
        'public-notice-mobile font-16px': $vuetify.breakpoint.smAndDown,
        'public-notice-desktop font-24px': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <h2 class="sub-title">公開のお知らせを受け取りましょう</h2>
    </div>
    <div
      :class="{
        'about-description-mobile font-14px mt-4':
          $vuetify.breakpoint.smAndDown,
        'about-description-desktop font-18px mt-9': $vuetify.breakpoint.mdAndUp,
      }"
      class="mt-3"
    >
      メールアドレスを登録すると、コトナル公開時にお知らせを受け取ることができます。<br />
      気になる企業のインターンにいち早く応募しましょう。
    </div>
    <div class="d-flex justify-center">
      <v-btn
        class="mt-3"
        color="primary"
        rounded
        href="https://forms.gle/ZbT3k76ymMrs59vp7"
        target="_blank"
        dark
        :class="{
          'font-14px mt-7': $vuetify.breakpoint.smAndDown,
          'font-16px mt-12': $vuetify.breakpoint.mdAndUp,
        }"
        :width="buttonWidth"
        :height="buttonHeight"
      >
        メールアドレスを登録する
      </v-btn>
    </div>
    <div
      class="text-center text-primary fw-700"
      :class="{
        'operating-company-mobile font-16px': $vuetify.breakpoint.smAndDown,
        'operating-company-desktop font-24px': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <h2 class="sub-title">運営会社</h2>
    </div>
    <div class="d-flex justify-center">
      <v-card
        :width="detailsWidth"
        flat
        color="transparent"
        :class="{ 'table-card-mobile': $vuetify.breakpoint.smAndDown }"
        class="table-card mt-7"
      >
        <v-row
          no-gutters
          v-for="(detail, index) in operatingCompanyDetails"
          :key="index"
        >
          <v-col cols="12" md="4"
            ><div
              :class="{
                'blue-col-mobile font-14px': $vuetify.breakpoint.smAndDown,
                'blue-col-desktop font-18px': $vuetify.breakpoint.mdAndUp,
                'blue-col-desktop-first':
                  $vuetify.breakpoint.mdAndUp && index === 0,
                'blue-col-desktop-last':
                  $vuetify.breakpoint.mdAndUp &&
                  index === operatingCompanyDetails.length - 1,
                'blue-col-desktop-except-last':
                  $vuetify.breakpoint.mdAndUp &&
                  index !== operatingCompanyDetails.length - 1,
              }"
            >
              {{ detail.name }}
            </div></v-col
          >
          <v-col cols="12" md="8"
            ><div
              :class="{
                'white-col-mobile font-14px': $vuetify.breakpoint.smAndDown,
                'white-col-desktop pl-6 font-18px': $vuetify.breakpoint.mdAndUp,
                'white-col-desktop-except-last':
                  $vuetify.breakpoint.mdAndUp &&
                  index !== operatingCompanyDetails.length - 1,
                'white-col-long-text':
                  $vuetify.breakpoint.smAndDown && index == 2,
              }"
            >
              <div v-if="detail.type == 'link'">
                <a class="anchor" :href="detail.detail" target="_blank">{{
                  detail.detail
                }}</a>
              </div>
              <div v-else-if="detail.type == 'longText'">
                <span v-if="$vuetify.breakpoint.mdAndUp">
                  東京都港区浜松町2丁目2番15号 浜松<br />町ダイヤビル2F
                </span>
                <span
                  class="long-text-mobile"
                  v-else-if="$vuetify.breakpoint.smAndDown"
                >
                  東京都港区浜松町2丁目2番15号 浜松町<br />ダイヤビル2F
                </span>
              </div>
              <div v-else>{{ detail.detail }}</div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "TemporalTop",
  data() {
    return {
      operatingCompanyDetails: [
        {
          name: "商号",
          detail: "株式会社kotonaru",
        },
        {
          name: "代表者",
          detail: "山口 王史",
        },
        {
          name: "本社所在地",
          detail: "東京都港区浜松町2丁目2番15号 浜松町ダイヤビル2F",
          type: "longText",
        },
        // {
        //   name: "電話番号",
        //   detail: "-",
        // },
        // {
        //   name: "メールアドレス",
        //   detail: "mail@kotonaru.co.jp",
        // },
        {
          name: "ホームページ",
          detail: "https://kotonaru.notion.site/",
          type: "link",
        },
      ],
    };
  },
  computed: {
    imageWidth() {
      return this.$vuetify.breakpoint.smAndDown ? "174px" : "343px";
    },
    imageHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "91px" : "180px";
    },
    cardWidth() {
      return this.$vuetify.breakpoint.smAndDown ? "300px" : "483px";
    },
    cardHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "60px" : "94px";
    },
    buttonHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "40px" : "46px";
    },
    buttonWidth() {
      return this.$vuetify.breakpoint.smAndDown ? "280px" : "269px";
    },
    detailsWidth() {
      return this.$vuetify.breakpoint.smAndDown ? "340px" : "523px";
    },
  },
};
</script>
<style lang="scss" src="./style.scss" scoped></style>

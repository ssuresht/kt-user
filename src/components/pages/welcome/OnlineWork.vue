<template>
  <v-card flat color="primary" 
    :class="{
        'py-10': $vuetify.breakpoint.smAndDown,
        'py-12': $vuetify.breakpoint.mdAndUp,
      }"
    class="zindex-1 borderradius-0">
    <div
      :class="{
        'pb-3': $vuetify.breakpoint.smAndDown,
        'pb-2': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <div
        class="d-flex justify-center text-fff font-Noto-Sans-Medium"
        :class="{
          'font-20px': $vuetify.breakpoint.sm,
          'font-16px': $vuetify.breakpoint.xs,
          'font-24px': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <h2 class="sub-title">{{ onlineWorkExample }}</h2>
      </div>
      <div class="d-flex justify-center">
          <v-icon class="yellow-underline">$yellowUnderlineIcon</v-icon>
      </div>
    </div> 
    <div 
      :class="{
        'mt-2': $vuetify.breakpoint.smAndDown,
        'mt-5': $vuetify.breakpoint.mdAndUp,
      }"
      class="d-flex justify-center" v-for="(example, index) in examples" :key="index">
      <v-card
        class="mx-3 example-card"
      
        flat
        min-height="50px"
        color="#fff"
        width="740px"
      >
        <div class="d-flex py-3 px-5">
          <v-icon class="hidden-sm-and-down">$tickIcon</v-icon>
          <div
            class="ml-4"
            :class="{
              'font-16px': $vuetify.breakpoint.sm,
              'font-13px': $vuetify.breakpoint.xs,
              'font-16px': $vuetify.breakpoint.mdAndUp,
            }"
          >
            {{example}}
          </div>
        </div>
      </v-card>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "OnlineWork",
  data() {
    return {
      onlineWorkExample: "オンラインのお仕事例",
      examples:[
          'サービス企画のための顧客調査設計とインタビューの実施',
          '企業向けアプリケーション開発 / 自社製品や社内ツールのシステム開発',
          'SNSで利用するコンテンツ企画と作成、およびデータ分析',
          '営業チームやマーケティングチームと一緒にディスカッションをして、方針、戦略を考える',
          '地域の魅力を発信する情報誌の編集手伝い'
      ]
    };
  },
};
</script>

<style scoped src="./OnlineWork.scss" lang="scss"/>

<style lang="scss" scoped>
.zindex-1{
  z-index: 1;
}
.example-card{
    border-radius: 30px !important;
}
/* .online-work-underlineicon > .v-icon__component {
    width: unset !important;
} */
</style>

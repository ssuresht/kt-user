<template>
  <div class="kotonaru-modal">
      <v-card color="#e5e5e5" :class="{'py-15': $vuetify.breakpoint.smAndUp , 'py-5 px-3': $vuetify.breakpoint.xs}" flat>
        <div class="mw-1000">
          <v-card color="#fff" flat :class="{'pt-6 pb-15': $vuetify.breakpoint.smAndUp, 'pt-4 pb-5': $vuetify.breakpoint.xs}">
            <div class="d-flex justify-end cursor-pointer" @click="$emit('closeKotonaruModal')"
             :class="{'pr-6': $vuetify.breakpoint.smAndUp, 'pr-3': $vuetify.breakpoint.xs}"
             >
              <v-icon>$close</v-icon>
            </div>
            <div class="font-Noto-Sans-Bold text-1f2020 text-center">
              <span :class="{'font-36px': $vuetify.breakpoint.smAndUp, 'font-20px': $vuetify.breakpoint.xs}">Kotonaru Power 8</span>
              <span class="pl-2" :class="{'font-20px': $vuetify.breakpoint.smAndUp, 'font-13px': $vuetify.breakpoint.xs}">について</span>
            </div >
            <div class="font-Noto-Sans-Medium text-center" :class="{'font-16px': $vuetify.breakpoint.smAndUp, 'font-12px': $vuetify.breakpoint.xs}">
            <span class="text-979797">あなたの</span>
            <span class="text-primary">評価された力</span>
            <span class="text-979797">と</span>
            <span class="text-purple">と期待したい力</span>
            </div>
            <Hero />
            <div class="box" :class="{'px-20 mt-15': $vuetify.breakpoint.smAndUp, 'px-5 mt-5': $vuetify.breakpoint.xs}">
              <v-container>
                <v-row class="d-flex justify-center">
                  <v-col v-for="(item,index) in boxData" :key="index" >
                   <div :style="{width : boxTitleWidth, height: '35px'}"
                   :class="{'font-16px': $vuetify.breakpoint.smAndUp,'font-14px': $vuetify.breakpoint.xs}"
                    class="font-Noto-Sans-Bold item-title text-fff d-flex justify-center align-center"> {{item.title}}
                   </div>
                   <div :style="{width: boxDescWidth, height: boxDescHeight}" class="item-desc text-000 px-3 py-3"
                   :class="{'font-14px': $vuetify.breakpoint.smAndUp, 'font-12px': $vuetify.breakpoint.xs}"
                   >
                    {{item.desc}}
                    </div>
                  </v-col>
                </v-row>
              </v-container>
              <div class="text-8e" :class="{'font-16px mt-10':$vuetify.breakpoint.smAndUp, 'font-14px mt-5': $vuetify.breakpoint.xs}">
              Kotonaru Power 8では「リーダーシップ」「大胆さ」「外向的」「創造性」「協調性」「綿密さ」「内省的」「論理性」の8項目であなたの力を表現します。
            <div class="mt-2"> 企業からあなたの最も評価された力と今後の成長に期待したい力のフィードバックを受けることができ、その結果が数値とコメントで反映されます。</div>
          <div class="mt-2">   複数インターンをするとフィードバックがたまり、あなたの力がさらにはっきりと分かるようになります。</div> 
         <div class="mt-2">   あなたのチャレンジに対するフィードバックから「なんとなく」やりたいと思っていたことが「カタチ」となり、新しい自分を発見できるでしょう。</div>
            </div>
            </div>
            <div>
           
            </div>

          </v-card>
        </div>
      </v-card>
  </div>
</template>

<script>
import Hero from './Hero.vue'
export default {
  components: {
    Hero
  },
  name: "Favourites",
  computed: {
    boxTitleWidth(){
      return this.$vuetify.breakpoint.smAndUp ? "165px" : "146px"
    },
    boxDescWidth(){
      return this.$vuetify.breakpoint.smAndUp ? "165px" : "146px"
    },
    boxDescHeight(){
      return this.$vuetify.breakpoint.smAndUp ? "148px" : "117px"
    }
  },
  data(){
    return{
      boxData: [
        {
          title: 'リーダーシップ',
          desc: '主体性を発揮し、目標の達成に向かってチームを牽引することができます。'
        },
        {
          title: '大胆さ',
          desc: '失敗や否定的な意見を恐れず、発言や行動をすることができます。'
        },
        {
          title: '外向性',
          desc: '興味関心が広く、行動的で社交的です。外の世界に対し、自らアプローチできます。。'
        },
        {
          title: '創造性',
          desc: '自分なりの考えや新しい視点でアイデアを出したり、切り口を変えた提案ができます。'
        },
        {
          title: '協調性',
          desc: 'チームメンバーの意見に注意深く耳を傾け、共感することで、誰もが同じ目標に向かって取り組む環境を作ります。'
        },
        {
          title: '綿密さ',
          desc: '詳細な点も把握し、決定や選択を行う際には、潜在的なリスクに注意を払い判断できます。。'
        },
        {
          title: '内省的',
          desc: '自分の発言や行動、その結果起きたことを振り返り、そこから学びを得ることができます。'
        },
        {
          title: '論理的',
          desc: '物事の構造を理解し、考えの妥当性を検証したり、筋道を立てた発言ができます。'
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.mw-1000{
  max-width: 1000px;
  margin: auto;
}
.item-title{
  background: #F9CB53;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.item-desc{
  background: #FFFBF2;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

</style>

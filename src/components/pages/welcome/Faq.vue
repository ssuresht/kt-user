<template>
  <div>
    <v-card flat min-height="375px" class="zindex-1 rounded-0">
      <div
        class="text-center text-purple font-Noto-Sans-Medium"
        :class="{
          'font-18px  headline-text-mobile center-sm': $vuetify.breakpoint.sm,
          'font-16px  headline-text-mobile center-sm': $vuetify.breakpoint.xs,
          'font-30px  headline-text':
            $vuetify.breakpoint.mdAndUp,
        }"
      >
        <h2 class="sub-title">FAQ</h2>
      </div>
      <div class="d-flex justify-center">
        <v-icon class="faq-underline">$pinkUnderLine</v-icon>
      </div>
      <div
        :class="{
          'pt-0': $vuetify.breakpoint.smAndDown,
          'pt-3': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-container>
          <div
            :class="{
              'px-14': $vuetify.breakpoint.sm,
              'px-17': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              :class="{
                'center-sm mt-6': $vuetify.breakpoint.smAndDown,
                'center-md-and-up mt-10': $vuetify.breakpoint.mdAndUp,
              }"
            >
              <div
                class="font-Noto-Sans-Medium d-flex "
                :class="{
                  'font-14px': $vuetify.breakpoint.smAndDown,
                  'font-18px': $vuetify.breakpoint.mdAndUp,
                }"
              >
                <span
                  :class="{
                    'font-16px ': $vuetify.breakpoint.smAndDown,
                    'font-20px': $vuetify.breakpoint.mdAndUp,
                  }"
                  class="text-primary pr-2"
                  >Q</span
                ><span class="text-1f2020">{{ faq.question }} </span>
              </div>
              <div
                class="fw-400 mt-10px"
                :class="{
                  'font-12px': $vuetify.breakpoint.smAndDown,
                  'font-16px': $vuetify.breakpoint.mdAndUp,
                }"
              >
              <div class="d-flex">
                <span
                  :class="{
                    'font-14px ': $vuetify.breakpoint.smAndDown,
                    'font-18px': $vuetify.breakpoint.mdAndUp,
                  }"
                  class="text-purple pl-1 pr-2 fw-600 "
                  >A</span
                ><span class="text-747474">{{ faq.answer }} </span>
                </div>
              </div>
            </div>
          </div>
        </v-container>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      faqs: [
        {
          question: "対面のインターンでも掲載できますか？",
          answer: "完全オンラインのインターンのみ掲載します。",
        },
        {
          question: "応募するインターンに条件はありますか？",
          answer:
            "時給制で、１ヶ月以上の長期オンラインインターンのみ掲載可能です。その他の条件はお気軽にご相談ください。",
        },
        {
          question: "他のインターン募集サイトと何が違いますか？",
          answer:
            "就職活動をしている学生だけでなく、全国の意欲のある１−２年生で、リテラシーの高い学生も集まっています。",
        },
        {
          question:
            "インターンが掲載されるまでどれくらいの時間がかかりますか？",
          answer:
            "お申し込みいただいてから掲載内容のすり合わせをさせて頂きます。２週間程度が目安です。",
        },
        {
          question: "インターンを採用した後は何か必要ですか？",
          answer:
            "学生の評価をお願いします。コトナルが御社にヒアリングをし、学生にフィードバックします。",
        },
        {
          question: "オンラインインターンのつくり方は相談できますか？",
          answer:
            "御社に最適な募集内容をコトナルがご提案させていただきます。お気軽にご相談ください。",
        },
        {
          question: "本当に無料ですか？",
          answer:
            "β版期間中は、完全無料です。有料化の際は、必ず事前にご連絡をします。",
        },
      ],
    };
  },
};
</script>

<style scoped src="./Faq.scss" lang="scss"></style>

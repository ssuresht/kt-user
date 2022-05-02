<template>
  <div>
    <v-card
      flat
      max-width="1000px"
      max-height="2041px"
      color="white"
      :class="{
        'mt-5 mx-3': $vuetify.breakpoint.smAndDown,
        'margin-top-desktop mx-auto': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <div
        class="text-center"
        :class="{
          'text-1f2020 font-16px fw-400 pt-7': $vuetify.breakpoint.smAndDown,
          'text-1f2020 font-24px fw-500 pt-11': $vuetify.breakpoint.mdAndUp,
        }"
      >
        応募内容確認
      </div>
      <job-details-description />
      <div
        :class="{
          'mx-6 pb-8 mb-8': $vuetify.breakpoint.smAndDown,
          'mx-auto padding-bottom-desktop': $vuetify.breakpoint.mdAndUp,
        }"
        class="container-width"
      >
        <v-form @submit.prevent="updateBasicInformation">
          <div class="d-flex justify-center text-1f2020 confirm-page">
            <div class="full-width">
              <div
                v-for="(field, index) in fields"
                :class="[index > 0 ? 'mt-7' : 'mt-10']"
                :key="index"
              >
                <div
                  class="mb-1 text-grey"
                  :class="{
                    'font-14px': $vuetify.breakpoint.smAndDown,
                    'font-18px': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  {{ field.label }}
                </div>
                <div
                  class="mb-2"
                  :class="{
                    'font-14px': $vuetify.breakpoint.smAndDown,
                    'font-16px': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  {{ field.value }}
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-lg-center text-1f2020">
            <div class="container-width">
              <div
                class="d-flex justify-center mt-10"
                :class="{
                  'flex-column': $vuetify.breakpoint.smAndDown,
                }"
              >
                <v-btn
                  depressed
                  color="grey"
                  rounded
                  :width="buttonWidth"
                  :height="buttonHeight"
                  class="text-fff fw-500 mb-5"
                  :class="{
                    'font-14px': $vuetify.breakpoint.smAndDown,
                    'font-16px mr-10': $vuetify.breakpoint.mdAndUp,
                  }"
                  >戻る</v-btn
                >
                <v-btn
                  depressed
                  color="primary"
                  rounded
                  :width="buttonWidth"
                  :height="buttonHeight"
                  class="fw-500 mb-5"
                  :class="{
                    'font-14px order-first': $vuetify.breakpoint.smAndDown,
                    'font-16px': $vuetify.breakpoint.mdAndUp,
                  }"
                  @click="updateBasicInformation"
                >
                  <v-icon left> mdi-send </v-icon
                  >このインターンに応募する</v-btn
                >
              </div>
            </div>
          </div>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script>
import JobDetailsDescription from "@/components/pages/Application/Description";
export default {
  name: "JobApplicationConfirm",
  components: {
    JobDetailsDescription,
  },
  computed: {
    buttonWidth() {
      return this.$vuetify.breakpoint.smAndDown ? "300px" : "286px";
    },
    buttonHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "41px" : "46px";
    },
  },
  data() {
    return {
      fields: null,
    };
  },
  created() {
    this.getBasicinformationFields();
  },
  methods: {
    updateBasicInformation() {
      this.$refs.observer.validate().then((success) => {
        if (!success) {
          return;
        }
      });
    },
    getBasicinformationFields() {
      this.fields = [
        {
          label: "氏名",
          value: "鈴木 太郎",
        },
        {
          label: "フリガナ",
          value: "スズキ タロウ",
        },
        {
          label: "学校名",
          value: "慶応義塾大学",
        },
        {
          label: "卒業予定",
          value: "2023年 3月",
        },
        {
          label: "一言アピール",
          value:
            "ITに興味があり、独学でPythonを学んでいます。IT企業で実際に働いている方々と交流したり、実務に取り組んだりする中で、自分の視野を広げたいと思っています。体育会系でバイタリティにも自信があります。画面越しでも伝わるくらいの気合でがんばります。よろしくお願いいたします！",
        },
      ];
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>

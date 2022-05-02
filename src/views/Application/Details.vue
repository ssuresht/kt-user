<template>
  <div>
    <v-card
      flat
      max-width="1000px"
      max-height="2041px"
      color="white"
      :class="{
        'mt-5 mx-3': $vuetify.breakpoint.xs,
        'margin-top-desktop mx-auto': $vuetify.breakpoint.smAndUp,
      }"
    >
      <div
        class="text-center fw-600"
        :class="{
          'text-1f2020 font-16px pt-7': $vuetify.breakpoint.smAndDown,
          'text-1f2020 font-24px pt-11': $vuetify.breakpoint.mdAndUp,
        }"
      >
        {{ $t("application-details") }}
      </div>
      <job-details-description />
      <div
        :class="{
          'mx-6 pb-8 mb-8': $vuetify.breakpoint.xs,
          'mx-auto padding-bottom-desktop': $vuetify.breakpoint.smAndUp,
        }"
        class="container-width"
      >
        <validation-observer ref="observer">
          <v-form @submit.prevent="updateBasicInformation">
            <basic-information-input :fields="fields" />
            <div class="d-flex justify-center text-1f2020">
              <div class="container-width">
                <div
                  class="d-flex justify-start font-18px"
                  :class="{
                    'font-14px ml-3 mt-2': $vuetify.breakpoint.smAndDown,
                    'font-18px mt-7': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  一言アピール
                </div>
                <div
                  class="appeal-text mt-3"
                  :class="{
                    'font-12px pb-5 pl-7 pr-8 pt-4':
                      $vuetify.breakpoint.smAndDown,
                    'font-16px pb-6 pl-9 pr-8 pt-6':
                      $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  求人応募時、企業担当者に公開されます。ご自身がどんな人間で、どのようにインターンで力を発揮できるかアピールしましょう。<br /><br />
                  例：<br />
                  ・私の強みは●●●です。この強みを生かして、▲▲▲にチャレンジしてみたいと考えています。<br />
                  ・これまでに、■■■を経験したことがあり、★★★をすることができます。<br />
                  ・将来✕✕✕の仕事をしたいと考えていて、そのために現在◆◆◆の勉強をしています。<br />
                </div>
                <v-textarea
                  class="mt-4"
                  :height="textareaHeight"
                  rounded
                  outlined
                  placeholder="一言アピール"
                  v-model="appealMessage"
                ></v-textarea>
                <div class="d-flex justify-center mt-5">
                  <v-btn
                    depressed
                    color="primary"
                    rounded
                    :width="buttonWidth"
                    :height="buttonHeight"
                    class="font-16px fw-500"
                    @click="updateBasicInformation"
                    >確認画面へ</v-btn
                  >
                </div>
              </div>
            </div>
          </v-form>
        </validation-observer>
      </div>
    </v-card>
  </div>
</template>

<script>
import JobDetailsDescription from "@/components/pages/Application/Description";
import BasicInformationInput from "@/components/common/BasicInformationInput.vue";
export default {
  name: "JobApplicationCreate",
  components: {
    JobDetailsDescription,
    BasicInformationInput,
  },
  computed: {
    textareaHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "250px" : "285px";
    },
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
      appealMessage: "",
      getAllEducationalFacility: [
        { name: "College Name", id: "342" },
        { name: "College Name", id: "345" },
        { name: "College Name", id: "346" },
      ],
      getGraduationYear: [
        { name: "2022年", id: "2" },
        { name: "2023年", id: "3" },
        { name: "2024年", id: "4" },
      ],
      getGraduationMonth: [
        { name: "3月", id: "4" },
        { name: "4月", id: "5" },
        { name: "5月", id: "6" },
      ],
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
    getAutoSuggestionText(item) {
      return `${item.name} / ${item.id}`;
    },
    getBasicinformationFields() {
      this.fields = [
        {
          label: "姓",
          name: "family_name",
          type: "text",
          placeholder: "姓",
          value: "山田",
          rules: "required:姓",
        },
        {
          label: "名",
          name: "first_name",
          type: "text",
          placeholder: "名",
          value: "太郎",
          rules: "required:名",
        },
        {
          label: "セイ",
          name: "family_name_furigana",
          type: "text",
          placeholder: "セイ",
          value: "ヤマダ",
          rules: "required:セイ",
        },
        {
          label: "メイ",
          name: "first_name_furigana",
          type: "text",
          placeholder: "メイ",
          value: "タロウ",
          rules: "required:メイ",
        },
        {
          label: "学校名",
          name: "education_facility_id",
          type: "autocomplete",
          placeholder: "学校名",
          row_class: "",
          item_value: "id",
          item_text: this.getAutoSuggestionText,
          items: this.getAllEducationalFacility,
          value: "",
          rules: "required",
        },
        {
          label: "卒業予定",
          name: "graduating_year",
          type: "dropdown",
          placeholder: "卒業予定",
          item_value: "id",
          item_text: "name",
          items: this.getGraduationYear,
          no_data_text: "",
          value: "2",
          rules: "required",
        },
        {
          label: null,
          name: "graduating_month",
          type: "dropdown",
          placeholder: "卒業予定",
          item_value: "id",
          item_text: "name",
          items: this.getGraduationMonth,
          no_data_text: "",
          value: "4",
          rules: "required",
        },
      ];
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>

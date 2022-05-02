<template>
  <div class="d-flex align-center justify-center white">
    <v-sheet
      color="white"
      :width="$vuetify.breakpoint.mdAndUp ? '510px' : '100%'"
      :class="$vuetify.breakpoint.mdAndUp ? 'pb-19' : 'pb-14'"
    >
      <div
        class="text-center"
        :class="
          $vuetify.breakpoint.mdAndUp
            ? 'font-30px fw-600 font-Noto-Sans-Medium'
            : 'font-16px fw-400'
        "
      >
        新規会員登録
      </div>
      <div
        class="text-center text-light-red"
        :class="
          $vuetify.breakpoint.mdAndUp
            ? 'font-16px mt-2 mb-11'
            : 'font-12px mt-3 mb-6'
        "
      >
        すべての項目に入力してください。
      </div>
      <div :class="$vuetify.breakpoint.mdAndUp ? '' : 'px-4'">
        <validation-observer ref="basicInformationInput">
          <v-form @submit.prevent="saveBasicInformation">
            <div
              v-for="(field, index) in fields"
              :key="index"
              :class="index === fields.length - 1 ? '' : 'mb-2'"
            >
              <div
                :class="
                  $vuetify.breakpoint.mdAndUp
                    ? 'd-flex align-center justify-start'
                    : 'd-block'
                "
              >
                <!-- label -->
                <div
                  class="ml-2 fw-400"
                  :class="
                    $vuetify.breakpoint.mdAndUp ? 'font-18px' : 'font-14px'
                  "
                  v-if="field.label"
                >
                  {{ field.label }}
                </div>
                <!-- hints -->
                <div
                  class="ml-2 fw-400 text-8e"
                  :class="
                    $vuetify.breakpoint.mdAndUp ? 'font-12px' : 'font-10px'
                  "
                  v-if="field.hintText"
                >
                  {{ field.hintText }}
                </div>
              </div>
              <validation-provider
                v-slot="{ errors }"
                :name="field.name"
                :vid="field.vid ? field.vid : null"
                :rules="field.rules"
              >
                <v-text-field
                  v-if="field.type === 'text' || field.type === 'password'"
                  rounded
                  :height="fieldHeight"
                  :error-messages="errors"
                  :error="errors.length !== 0"
                  :hide-details="errors.length <= 0"
                  v-model="field.value"
                  :type="field.type"
                  single-line
                  color="#13ABA3"
                  :class="{
                    'font-14px': $vuetify.breakpoint.smAndDown,
                    'font-16px': $vuetify.breakpoint.mdAndUp,
                  }"
                  outlined
                  class="mt-2"
                  dense
                  :placeholder="field.placeholder"
                ></v-text-field>

                <v-select
                  v-if="field.type == 'dropdown'"
                  outlined
                  dense
                  rounded
                  :height="fieldHeight"
                  class="mt-2"
                  :error-messages="errors"
                  :error="errors.length !== 0"
                  :hide-details="errors.length <= 0"
                  :items="field.items"
                  :item-text="field.item_text"
                  :item-value="field.item_value"
                  :placeholder="field.placeholder"
                  v-model="field.value"
                  :no-data-text="field.no_data_text"
                  append-icon="$greyExpansionDropdown"
                >
                  <template v-slot:append>
                    <div class="v-input__icon v-input__icon--append">
                      <span
                        aria-hidden="true"
                        class="v-icon notranslate theme--light error--text"
                      >
                        <v-icon
                          size="15px"
                          :class="$vuetify.breakpoint.mdAndUp ? 'mt-4' : 'mt-1'"
                          >$greyExpansionDropdown</v-icon
                        >
                      </span>
                    </div>
                  </template>
                </v-select>
              </validation-provider>
            </div>
            <div
              class="text-8e font-12px fw-400 px-1"
              :class="
                $vuetify.breakpoint.mdAndUp
                  ? 'mt-6 font-14px terms-agreement-desktop'
                  : 'mt-7 terms-agreement'
              "
            >
              同意して続行を選択することで、私は株式会社Kotonaruの
              <span class="font-12 text-3979d9"
                >利用規約、プライバシーポリシー</span
              >に同意し承諾します。
            </div>
            <div class="d-flex justify-center mt-7">
              <v-btn
                depressed
                color="primary"
                rounded
                width="300px"
                height="41px"
                class="font-14px d-md-none font-Noto-Sans-Medium"
                >同意して続行</v-btn
              >
              <v-btn
                depressed
                color="primary"
                rounded
                width="510px"
                height="58px"
                class="font-16px d-none d-md-block font-Noto-Sans-Medium"
                >同意して続行</v-btn
              >
            </div>
          </v-form>
        </validation-observer>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "BasicInformationModal",
  data() {
    return {
      fields: [
        {
          label: "姓",
          name: "family_name",
          type: "text",
          placeholder: "姓",
          value: "",
          rules: "required:姓",
        },
        {
          label: "名",
          name: "first_name",
          type: "text",
          placeholder: "名",
          value: "",
          rules: "required:名",
        },
        {
          label: "セイ",
          name: "family_name_furigana",
          type: "text",
          placeholder: "セイ",
          value: "",
          rules: "required:セイ",
        },
        {
          label: "メイ",
          name: "first_name_furigana",
          type: "text",
          placeholder: "メイ",
          value: "",
          rules: "required:メイ",
        },
        {
          label: "教育機関名",
          name: "educational_instituituib_name",
          type: "text",
          placeholder: "入力し、候補から選択してください",
          value: "",
          rules: "required:教育機関名",
        },
        {
          label: "学校名を入力してください",
          name: "school_name",
          type: "text",
          placeholder: "学校名",
          fontStyle: "text-8e8e8e",
          value: "",
          rules: "required:学校名を入力してください",
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
          value: null,
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
          value: null,
          rules: "required",
        },
        {
          label: "パスワード",
          name: "password",
          type: "password",
          vid: "confirmation",
          hintText: "半角英大小文字、半角数字を全て含み8文字以上入力して下さい",
          placeholder: "パスワード",
          value: null,
          rules: "required:パスワード|only_english_lang_allowed",
        },
        {
          label: "パスワード ( 確認用 )",
          name: "password",
          type: "password",
          placeholder: "パスワード",
          value: null,
          rules: "required|password_confirmed:confirmation",
        },
      ],
      getAllEducationalFacility: [
        { name: "College Name", id: "342" },
        { name: "College Name", id: "345" },
        { name: "College Name", id: "346" },
      ],
      getGraduationYear: [
        { name: "2022年", id: "1" },
        { name: "2023年", id: "4" },
        { name: "2024年", id: "2" },
      ],
      getGraduationMonth: [
        { name: "3月", id: "4" },
        { name: "4月", id: "5" },
        { name: "5月", id: "6" },
      ],
    };
  },
  computed: {
    fieldHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "41px" : "58px";
    },
  },
  methods: {
    saveBasicInformation() {
      this.$refs.basicInformationInput.validate().then((success) => {
        if (!success) {
          return;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container-width {
  max-width: 510px !important;
}
.hint-text {
  line-height: 14.8px;
}
.terms-agreement {
  line-height: 17.38px;
}
.terms-agreement-desktop {
  line-height: 20.27px;
}
.pb-19 {
  padding-bottom: 77px !important;
}
</style>

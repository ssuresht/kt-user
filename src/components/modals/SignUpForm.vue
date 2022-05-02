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
        <validation-observer ref="observer">
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
                  :class="{
                    'font-14px': $vuetify.breakpoint.smAndDown,
                    'font-18px': $vuetify.breakpoint.mdAndUp,
                    'text-8e': field.grey_label,
                  }"
                  v-if="field.label && !field.not_visible"
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
                  v-if="
                    (field.type === 'text' || field.type === 'password') &&
                    !field.not_visible
                  "
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
                  v-if="field.type == 'dropdown' && !field.not_visible"
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
                <v-autocomplete
                  v-if="field.type == 'facility_autocomplete'"
                  rounded
                  outlined
                  dense
                  color="#13ABA3"
                  class="mt-1 autocomplete"
                  :class="{
                    'font-14px': $vuetify.breakpoint.smAndDown,
                    'font-18px': $vuetify.breakpoint.mdAndUp,
                  }"
                  @change="autoCompleteChange(field.value)"
                  :height="fieldHeight"
                  :error-messages="errors"
                  :error="errors.length !== 0"
                  :hide-details="errors.length <= 0"
                  hide-selected
                  hide-no-data
                  :items="educationalFacilityList"
                  :item-text="field.item_text"
                  :item-value="field.item_value"
                  :placeholder="field.placeholder"
                  v-model="field.value"
                ></v-autocomplete>
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
              <span
                @click="$router.push({ name: 'TermsofService' })"
                class="font-12px pointer text-3979d9"
                >利用規約 </span
              >、<span
                @click="$router.push({ name: 'PrivacyPolicy' })"
                class="font-12px pointer text-3979d9"
                >プライバシーポリシー</span
              >に同意し承諾します。
            </div>
            <div class="d-flex justify-center mt-7">
              <v-btn
                @click="updateSignUp"
                depressed
                color="primary"
                rounded
                width="300px"
                height="41px"
                class="font-14px d-md-none font-Noto-Sans-Medium"
                >同意して続行</v-btn
              >
              <v-btn
                @click="updateSignUp"
                depressed
                color="primary"
                rounded
                width="510px"
                height="58px"
                class="font-16px d-none d-md-block font-Noto-Sans-Medium"
                >同意して続行</v-btn
              >
            </div>
            <div class="mb-1 mt-n1 text-left font-12px" v-if="error">
              <FlashMessage :error="error" />
            </div>
          </v-form>
        </validation-observer>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import dayjs from "@/plugins/dayjs.js";
import FlashMessage from "@/components/FlashMessage";
export default {
  name: "SignUpForm",
  components: {
    FlashMessage,
  },
  data() {
    return {
      error: null,
      yearList: Array.from({ length: 11 }, (_, i) =>
        dayjs().add(i, "year").format("YYYY年")
      ),
      monthList: Array.from({ length: 12 }, (_, i) => i + 1 + "月"),
      educationalFacilityList: null,
      newEducationalFacilityTypeList: [
        { id: 0, name: "大学" },
        { id: 1, name: "大学院" },
        { id: 2, name: "短期大学" },
        { id: 3, name: "専門学校" },
        { id: 4, name: "高校/高専" },
        { id: 5, name: "その他" },
      ],
      registerNewEducationalFacility: false,
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
          label: "学校名",
          name: "educatonal_facility_id",
          type: "facility_autocomplete",
          placeholder: "その他",
          item_text: "name",
          item_value: "id",
          value: null,
          rules: "required",
        },
        {
          not_visible: true,
          grey_label: true,
          label: "その他の学校名を入力してください",
          name: "new_educational_facility_name",
          type: "text",
          placeholder: "その他の学校名を入力してください",
          fontStyle: "text-8e8e8e",
          value: "",
          rules: "required:その他の学校名は必須です",
        },
        {
          not_visible: true,
          grey_label: true,
          label: "教育機関種別を選択してください",
          name: "new_educational_facility_type",
          type: "dropdown",
          placeholder: "教育機関種別を選択してください",
          item_value: "id",
          item_text: "name",
          items: this.newEducationalFacilityTypeList,
          fontStyle: "text-8e8e8e",
          value: "",
          rules: "required:教育機関種別は必須です。",
        },
        {
          label: "卒業予定",
          name: "graduate_year",
          type: "dropdown",
          placeholder: "卒業予定",
          item_value: "id",
          item_text: "name",
          items: this.yearList,
          no_data_text: "",
          value: "",
          rules: "required",
        },
        {
          label: "卒業予定",
          name: "graduate_month",
          type: "dropdown",
          placeholder: "卒業予定",
          item_value: "id",
          item_text: "name",
          items: this.monthList,
          no_data_text: "",
          value: "",
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
          rules:
            "required:パスワード|only_english_lang_allowed|verify_password",
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
    };
  },
  computed: {
    ...mapGetters(["getEducationFacilities", "userToSignupEmail"]),
    getFacilities() {
      return this.getEducationFacilities.map((facility) => {
        return {
          id: facility.id,
          name: facility.name,
        };
      });
    },
    fieldHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "41px" : "58px";
    },
  },
  async created() {
    await this.$store.dispatch("GET_EDUCATION__FACILITY_DATA").then(() => {
      this.educationalFacilityList = this.getEducationFacilities.map(
        (facility) => {
          return {
            id: facility.id,
            name: facility.name,
          };
        }
      );
      this.educationalFacilityList = [
        ...this.educationalFacilityList,
        { id: "education_facility_none", name: "その他" },
      ];
    });
    this.fields = this.fields.map((field) => {
      if (field.name == "graduate_year") {
        field.items = this.yearList.map((year) => {
          return {
            id: year.replace("年", ""),
            name: year,
          };
        });
      }
      if (field.name == "graduate_month") {
        field.items = this.monthList.map((month) => {
          return {
            id: month.replace("月", ""),
            name: month,
          };
        });
      }
      if (field.name == "new_educational_facility_type") {
        field.items = this.newEducationalFacilityTypeList;
      }
      return field;
    });
    if (!this.$route.query.token) {
      this.hideModal();
    }
  },
  methods: {
    ...mapMutations(["hideModal"]),
    updateSignUp() {
      this.$refs.observer.validate().then((valid) => {
        if (!valid) {
          return;
        }
      });
      if (!this.registerNewEducationalFacility) {
        const educationalFacilityId = this.fields.find(
          (f) => f.name == "educatonal_facility_id"
        ).value;
        this.saveToDB(educationalFacilityId);
      } else if (this.registerNewEducationalFacility) {
        const newFacility = {
          name: this.fields.find(
            (f) => f.name == "new_educational_facility_name"
          ).value,
          type: this.fields.find(
            (f) => f.name == "new_educational_facility_type"
          ).value,
        };
        this.$store
          .dispatch("FACILITIES_CREATE", newFacility)
          .then((createdFacility) => {
            const newEducationalFacilityId = createdFacility.data.data.data.id;
            this.saveToDB(newEducationalFacilityId);
          })
          .catch((err) => {
            this.error = err.data.errors.name[0];
          });
      }
    },
    saveToDB(educational_facility_id) {
      const studentData = {
        family_name: this.fields.find((f) => f.name == "family_name").value,
        first_name: this.fields.find((f) => f.name == "first_name").value,
        family_name_furigana: this.fields.find(
          (f) => f.name == "family_name_furigana"
        ).value,
        first_name_furigana: this.fields.find(
          (f) => f.name == "first_name_furigana"
        ).value,
        education_facility_id: educational_facility_id,
        status: 1,
        graduate_year: this.fields.find((f) => f.name == "graduate_year").value,
        graduate_month: this.fields.find((f) => f.name == "graduate_month")
          .value,
        password: this.fields.find((f) => f.name == "password").value,
        email_valid: this.userToSignupEmail,
      };
      this.$store.dispatch("AUTH_SIGNUP", { studentData }).then(() => {
        this.hideModal();
        this.$store
          .dispatch("AUTH_REQUEST", {
            email: studentData.email_valid,
            password: studentData.password,
          })
          .then(() => {
            this.$router.push({ name: "MyPageParent" });
          });
      });
    },
    autoCompleteChange(value) {
      if (value == "education_facility_none") {
        this.registerNewEducationalFacility = true;
        this.fields.find(
          (f) => f.name == "new_educational_facility_name"
        ).not_visible = false;
        this.fields.find(
          (f) => f.name == "new_educational_facility_type"
        ).not_visible = false;
      } else if (value != "education_facility_none") {
        this.registerNewEducationalFacility = false;
        this.fields.find(
          (f) => f.name == "new_educational_facility_name"
        ).not_visible = true;
        this.fields.find(
          (f) => f.name == "new_educational_facility_type"
        ).not_visible = true;
      }
    },
  },
  watch: {
    "$route.query.token": function () {
      if (!this.$route.query.token) {
        this.hideModal();
      }
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
.suggestion {
  background: gray;
}
.opacity-0 {
  opacity: 0;
}
.autocomplete {
  ::v-deep.v-input__icon--append {
    display: none !important;
  }
}
.pointer {
  cursor: pointer;
}
</style>

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
        <div class="d-flex justify-center text-1f2020 confirm-page">
          <div class="full-width">
            <div
              v-for="(field, index) in pageFieldsInputs"
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
                :to="{ name: 'JobApplicationCreate' }"
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
                @click="submitInfo"
              >
                <v-icon left> mdi-send </v-icon>このインターンに応募する</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import JobDetailsDescription from "@/components/pages/Application/Description";
import EducationFacility from "@/mixins/education_facility.mixins";
import { mapGetters } from "vuex";
export default {
  name: "JobApplicationConfirm",
  components: {
    JobDetailsDescription,
  },
  mixins: [EducationFacility],
  computed: {
    ...mapGetters(["getAppInfoStore", "getEducationFacilities"]),
    buttonWidth() {
      return this.$vuetify.breakpoint.smAndDown ? "300px" : "286px";
    },
    buttonHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "41px" : "46px";
    },
    user() {
      return this.$store.getters.user;
    },
  },
  data() {
    return {
      pageFieldsInputs: {},
      isConfirmedPage: true,
    };
  },
  mounted() {
    this.selfIntroduction = this.getAppInfoStore?.self_introduction;

    this.fields.forEach((element) => {
      element.value = this.getAppInfoStore[element.name];
      if ({}.hasOwnProperty.call(element, "addNewDataField")) {
        if (!element.value) {
          element.addNewDataField.trigger = true;
          element.addNewDataField.fields.forEach((item) => {
            item.value = this.getAppInfoStore[item.name];
          });
        }

      }
    });
    this.$nextTick(function() {
      this.getBasicinformationFields();
    });
  },
  methods: {
    submitInfo() {
      this.isSuccessPageRedirect = {
        value: true,
        name: "ApplicationCompleted",
      };

      this.submitInformations();
    },
    requestSuccessAction() {
      this.isSuccessPageRedirect.value = false;
      this.$store
        .dispatch("APPLICATION_STORE", this.getAppInfoStore)
        .then(() => {
          this.$router.push({ name: "ApplicationCompleted" });
        });
    },
    getBasicinformationFields() {
      let facilityName = this.getEducationFacilities.find(
        (i) => i.id == this.getAppInfoStore.education_facility_id
      )?.name;

      if (this.getAppInfoStore?.other_facility_name) {
        facilityName = this.getAppInfoStore.other_facility_name;
      }

      this.pageFieldsInputs = [
        {
          label: "氏名",
          value: `${this.getAppInfoStore?.family_name} ${this.getAppInfoStore?.first_name}`,
        },
        {
          label: "フリガナ",
          value: `${this.getAppInfoStore?.family_name_furigana} ${this.getAppInfoStore?.first_name_furigana}`,
        },
        {
          label: "学校名",
          value: facilityName,
        },
        {
          label: "卒業予定",
          value: `${this.getAppInfoStore?.graduate_year}年 ${this.getAppInfoStore?.graduate_month}月`,
        },
        {
          label: "一言アピール",
          value: this.getAppInfoStore?.self_introduction,
        },
      ];
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>

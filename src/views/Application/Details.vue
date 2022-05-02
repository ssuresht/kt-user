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
          <v-form @submit.prevent="confirmInputs">
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
                  v-model="selfIntroduction"
                ></v-textarea>
                <div class="d-flex justify-center mt-5">
                  <v-btn
                    depressed
                    color="primary"
                    rounded
                    type="submit"
                    :width="buttonWidth"
                    :height="buttonHeight"
                    class="font-16px fw-500"
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
import BasicInformationInput from "@/components/common/BasicInformationInput";
import EducationFacility from "@/mixins/education_facility.mixins"
import { mapGetters } from "vuex";
export default {
  name: "JobApplicationCreate",
  components: {
    JobDetailsDescription,
    BasicInformationInput,
  },
  mixins: [EducationFacility],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSingleInternship", "getStudent"]),
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
  created() {
    this.$nextTick(function() {
      if (!this.getSingleInternship?.id) {
        this.$router.go(-1);
      }
      this.selfIntroduction = this.getStudent?.self_introduction ?? ''
    })
  },
  methods: {
    confirmInputs() {
      this.$refs.observer.validate().then((success) => {
        if (!success) {
          return;
        }

        let data = {
          self_introduction: this.selfIntroduction,
          internship_post_id: this.getSingleInternship.id,
          student_id: this.getStudent.id,
          company_id: this.getSingleInternship?.company?.id,
        };

        this.fields.forEach((element) => {
          data[element.name] = element.value;
          if ({}.hasOwnProperty.call(element, 'addNewDataField')) {
            if (element.addNewDataField.trigger) {
              data[element.name] = null;
              element.addNewDataField.fields.forEach(item => {
                data[item.name] = item.value
              })
            }
          }
        });

        this.$store.commit("APPLICATION_INFO", data);
        this.$nextTick(function() {
          this.$router.push({ name: "ApplicationConfirm" });
        });
      });
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>

<template>
  <div class="font-Noto-Sans fw-400 text-1f2020">
    <validation-observer ref="observer">
      <v-form @submit.prevent="submit">
        <div
          class="text-center mt-1"
          :class="{
            'font-18px': $vuetify.breakpoint.mdAndUp,
            'font-16px': $vuetify.breakpoint.smAndDown,
          }"
        >
          インターンへの応募を辞退しますか？<br />
          選考結果やフィードバックを受け取ることができなくなります。
        </div>
        <div class="mt-13">
          <h6
            class="text-center fw-400"
            :class="{
              'font-18px': $vuetify.breakpoint.mdAndUp,
              'font-16px': $vuetify.breakpoint.smAndDown,
            }"
          >
            辞退の理由をお聞かせください
          </h6>
          <div class="radio-off-color d-flex justify-center">
            <v-radio-group v-model="radioGroup">
              <v-radio
                v-for="option in radioOptions"
                :key="option.id"
                :value="option.text"
                class="mb-3"
              >
                <template v-slot:label>
                  <span
                    class="fw-400 font-Noto-Sans text-1f2020"
                    :class="{
                      'font-16px': $vuetify.breakpoint.mdAndUp,
                      'font-14px': $vuetify.breakpoint.smAndDown,
                    }"
                    >{{ option.text }}</span
                  >
                </template>
              </v-radio>
            </v-radio-group>
          </div>
        </div>
        <div class="d-flex align-center flex-column justify-center">
          <v-btn
            type="submit"
            depressed
            color="primary"
            rounded
            :min-width="buttonWidth"
            :min-height="buttonHeight"
            class="fw-500 mt-2"
            :class="{
              'font-16px': $vuetify.breakpoint.mdAndUp,
              'font-14px': $vuetify.breakpoint.smAndDown,
            }"
            >辞退する</v-btn
          >

          <v-btn
            depressed
            color="transparent"
            rounded
            class="fw-500 primary--text mt-3"
            :class="{
              'font-16px': $vuetify.breakpoint.mdAndUp,
              'font-14px': $vuetify.breakpoint.smAndDown,
            }"
            >キャンセル</v-btn
          >
        </div>
      </v-form>
    </validation-observer>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "InternAttentionModal",
  data() {
    return {
      radioOptions: [
        {
          id: 1,
          text: "学業の兼ね合いで就業時間が合わなくなった",
        },
        {
          id: 2,
          text: "他に興味のあるインターンを見つけた",
        },
        {
          id: 3,
          text: "他のインターンに採用された",
        },
        {
          id: 4,
          text: "その他",
        },
      ],
      radioGroup: 1,
    };
  },
  computed: {
    buttonWidth() {
      return this.$vuetify.breakpoint.smAndDown ? "235px" : "352px";
    },
    buttonHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "41px" : "58px";
    },
    getSingleInternship() {
      return this.$store.getters.getSingleInternship
    }
  },
  methods: {
    ...mapMutations(["hideModal"]),
    submit() {
      this.$store
        .dispatch("APPLICATION_UPDATE", {
          cancel_reason: this.radioGroup,
          is_user_requested: '1', // To check user request at the backend side
          internship_post_id: this.$route.params.id,
          cancel_status: 1,
        })
        .then(() => {
          this.getSingleInternship.is_applied_applications = 0
          this.getSingleInternship.applications_count--
          this.hideModal();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.radio-off-color {
  ::v-deep .v-icon {
    color: #e5e5e5;
  }
}
</style>

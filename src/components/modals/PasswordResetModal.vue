<template>
  <div
    class="d-flex flex-column align-center jsutify-center px-4"
    :class="$vuetify.breakpoint.smAndDown ? 'pt-1' : 'pb-25 pt-6'"
  >
    <v-sheet
      color="transparent"
      class="full-width d-flex flex-column align-center jsutify-center"
      :width="$vuetify.breakpoint.smAndDown ? '300px' : '414px'"
    >
      <div
        class="text-center text-1f2020 font-Noto-Sans fw-600 mb-6"
        :class="$vuetify.breakpoint.smAndDown ? 'font-16px ' : 'font-18px'"
      >
        パスワード再設定
      </div>
      <div
        class="text-8e fw-400"
        :class="$vuetify.breakpoint.smAndDown ? 'font-12px' : 'font-14px'"
      >
        新しいパスワードを設定できます。<br />
        半角英大小文字、半角数字を全て含み8文字以上入力して下さい。
      </div>
      <validation-observer
        ref="basicInformationInput"
        class="full-width d-flex justify-center"
        :class="$vuetify.breakpoint.smAndDown ? 'mt-6 mb-4' : 'my-6'"
      >
        <v-form @submit.prevent="saveBasicInformation">
          <v-sheet
            color="transparent"
            :width="$vuetify.breakpoint.smAndDown ? '300px' : '352px'"
          >
            <validation-provider
              v-slot="{ errors }"
              name="パスワード"
              rules="required:パスワード|only_english_lang_allowed"
            >
              <v-text-field
                rounded
                :height="$vuetify.breakpoint.smAndDown ? '41px' : '58px'"
                :error-messages="errors"
                :error="errors.length !== 0"
                hide-details="auto"
                v-model="password"
                type="password"
                single-line
                color="#13ABA3"
                outlined
                :class="
                  $vuetify.breakpoint.smAndDown ? 'font-14px' : 'font-16px'
                "
                class="mb-3"
                dense
                placeholder="パスワード"
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="パスワード"
              vid="confirmation"
              rules="required:パスワード|password_confirmed:confirmation"
            >
              <v-text-field
                rounded
                :height="$vuetify.breakpoint.smAndDown ? '41px' : '58px'"
                :error-messages="errors"
                :error="errors.length !== 0"
                hide-details="auto"
                v-model="verifyPassword"
                type="password"
                single-line
                color="#13ABA3"
                outlined
                :class="
                  $vuetify.breakpoint.smAndDown ? 'font-14px' : 'font-16px'
                "
                dense
                placeholder="再度入力してください"
              ></v-text-field>
            </validation-provider>
            <v-btn
              color="primary"
              width="100%"
              @click="resetPassword"
              :height="$vuetify.breakpoint.smAndDown ? '41px' : '58px'"
              class="font-Noto-Sans-Medium"
              :class="
                $vuetify.breakpoint.smAndDown
                  ? 'font-14px mt-5'
                  : 'font-16px mt-4'
              "
              >送信</v-btn
            >
          </v-sheet>
        </v-form>
      </validation-observer>
      <div
        class="text-3979d9 text-center font-Noto-Sans-Medium mouse-pointer"
        :class="$vuetify.breakpoint.smAndDown ? 'font-14px' : 'font-16px'"
        @click="showLogin"
      >
        ログイン画面へ
      </div>
    </v-sheet>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      verifyPassword: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["hideModal"]),
    async resetPassword() {
      let token = this.$route.query.userPasswordResetToken;
      await this.$store
        .dispatch("AUTH_STUDENT_PASSWORD_RESET", {
          password: this.password,
          token: token,
        })
        .then(() => {
          this.hideModal();
        });
    },
    showLogin() {
      this.hideModal();
      this.$store.commit("showModal", {
        component: "LoginModal",
        width: "981px",
        height: "448px",
        dense: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.pb-25 {
  padding-bottom: 100px !important;
}
</style>

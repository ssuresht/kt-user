<template>
  <v-row
    class="position-relative"
    no-gutters
    :class="[$vuetify.breakpoint.lgAndUp ? 'desktop' : '']"
  >
    <div class="position-absolute bg-img"></div>
    <v-col lg="6"></v-col>
    <v-col
      cols="12"
      lg="6"
      :class="[$vuetify.breakpoint.lgAndUp ? 'pl-lg pt-6' : 'px-4']"
    >
      <v-sheet :width="$vuetify.breakpoint.lgAndUp ? '352px' : '100%'">
        <div
          class="text-center mb-6"
          :class="[
            $vuetify.breakpoint.lgAndUp
              ? 'fw-500 font-18px font-Noto-Sans-Medium '
              : 'fw-400 font-16px ',
          ]"
        >
          新規会員登録
        </div>
        <div
          :class="[
            $vuetify.breakpoint.lgAndUp
              ? 'text-8e font-14px fw-400 mb-3'
              : 'text-8e font-12px fw-400 mb-6',
          ]"
        >
          登録に使用するメールアドレスをご入力ください。
          会員登録ページへのリンクが記載されたメールを送信します。
        </div>
        <validation-observer ref="observer">
          <v-form @submit.prevent="sendEmailVerification">
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                :error-messages="errors"
                :error="errors.length !== 0"
                :hide-details="errors.length <= 0"
                rounded
                height="41px"
                v-model="field.value"
                single-line
                color="#13ABA3"
                class="font-16px"
                type="email"
                outlined
                dense
                placeholder="メールアドレス"
              ></v-text-field>
            </validation-provider>
            <v-btn
              width="100%"
              type="submit"
              height="41px"
              color="primary"
              class="mt-6"
              >送信</v-btn
            >
            <div class="pt-3 text-center font-12px" v-if="error">
              <FlashMessage :error="error" />
            </div>
            <div
              class="font-14px fw-500 text-3979d9 mt-5 text-center mouse-pointer"
              @click="launchLogin"
            >
              アカウントを持っています
            </div>
          </v-form>
        </validation-observer>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
import FlashMessage from "@/components/FlashMessage";
import { mapMutations } from "vuex";
export default {
  name: "SignUpModal",
  components: { FlashMessage },
  data() {
    return {
      field: {
        value: null,
        name: "email",
      },
      error: null,
    };
  },
  methods: {
    ...mapMutations(["hideModal"]),
    launchLogin() {
      this.hideModal();
      this.$store.commit("showModal", {
        component: "LoginModal",
        width: "981px",
        height: "448px",
        dense: true,
      });
    },
    sendEmailVerification() {
      this.error = null;
      this.$refs.observer.validate().then((valid) => {
        if (!valid) {
          return;
        }
        let email_invalid = this.field.value;
        this.$store
          .dispatch("AUTH_SEND_SIGNUP_EMAIL", { email_invalid })
          .then(() => {
            this.hideModal();
            this.$store.commit("showModal", {
              component: "EmailVerificationModal",
              width: "981px",
              height: "auto",
              dense: true,
            });        
          })
          .catch((err) => {
            this.error = err.data.errors.email_invalid[0];
          });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.desktop {
  padding-right: 130px;
  padding-bottom: 171px;
  z-index: 2;
  overflow: hidden;
  .bg-img {
    width: 981px;
    height: 427.8px;
    bottom: -5px;
    background-image: url("~@/assets/images/signup-lg.svg");
    z-index: -1;
  }
  .pl-lg {
    padding-left: 73px;
  }
}
</style>

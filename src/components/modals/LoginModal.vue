<template>
  <div class="full-width">
    <div
      class="position-absolute d-none d-lg-flex login-footer full-width"
    ></div>

    <v-row
      no-gutters
      :class="[$vuetify.breakpoint.lgAndUp ? 'desktop-size' : 'px-5']"
    >
      <v-col md="6" class="d-none d-lg-flex mt-7">
        <div class="d-flex align-center justify-end position-relative">
          <div class="position-absolute login-footer-text">
            <v-sheet
              width="195px"
              height="66px"
              color="transparent"
              class="fw-700 font-24px font-Noto-Sans-Bold text-center"
            >
              完全オンライン<span class="font-18px">で</span>長期インターン
            </v-sheet>
            <div class="font-Noto-Sans-Bold font-14px text-8e">
              やってみたい！をできるジブンに
            </div>
          </div>
          <v-img
            src="@/assets/images/login-lg.svg"
            width="342px"
            height="300px"
            :contain="true"
          ></v-img>
        </div>
      </v-col>
      <v-col cols="12" lg="6">
        <div class="d-flex justify-end">
          <v-sheet :width="$vuetify.breakpoint.lgAndUp ? '364px' : '100%'">
            <div
              class="text-center mb-6 mt-2"
              :class="[
                $vuetify.breakpoint.lgAndUp
                  ? 'font-18px fw-500 font-Noto-Sans-Medium'
                  : 'font-16px fw-400',
              ]"
            >
              ログイン
            </div>
            <validation-observer ref="observer">
              <v-form @submit.prevent="loginUser">
                <div
                  class="full-width"
                  :class="[$vuetify.breakpoint.largeAndUp ? 'px-2' : '']"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    :name="fields[0].name"
                    :rules="fields[0].rules"
                  >
                    <v-text-field
                      :error-messages="errors"
                      :error="errors.length !== 0"
                      :hide-details="errors.length <= 0"
                      rounded
                      height="41px"
                      v-model="fields[0].value"
                      single-line
                      color="#13ABA3"
                      class="font-16px"
                      type="email"
                      outlined
                      dense
                      :placeholder="fields[0].placeholder"
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    :name="fields[1].name"
                    :rules="fields[1].rules"
                  >
                    <v-text-field
                      :error-messages="errors"
                      :error="errors.length !== 0"
                      :hide-details="errors.length <= 0"
                      rounded
                      height="41px"
                      v-model="fields[1].value"
                      single-line
                      color="#13ABA3"
                      class="font-16px"
                      :class="[$vuetify.breakpoint.lgAndUp ? 'mt-5' : 'mt-2']"
                      :type="fields[1].type"
                      outlined
                      dense
                      :placeholder="fields[1].placeholder"
                    >
                      <template v-slot:append>
                        <v-icon
                          :size="$vuetify.breakpoint.lgAndUp ? '25px' : '22px'"
                          @click="
                            fields[1].type === 'password'
                              ? (fields[1].type = 'text')
                              : (fields[1].type = 'password')
                          "
                          >$passwordView</v-icon
                        >
                      </template>
                    </v-text-field>
                  </validation-provider>
                </div>
                <div class="my-3 ml-2 d-none d-lg-flex">
                  <div
                    class="font-14px fw-400 text-3979d9 mr-4 mouse-pointer"
                    @click="showForgotPassword"
                  >
                    パスワードを忘れた方
                  </div>
                  <v-checkbox
                    :ripple="false"
                    dense
                    :hide-details="true"
                    color="#AA158B"
                    v-model="fields[2].value"
                    class="pa-0 ma-0"
                  >
                    <template v-slot:label>
                      <div class="fw-400 font-14px pa-0">
                        次回から自動的にログイン
                      </div>
                    </template>
                  </v-checkbox>
                </div>
                <div class="mb-1 mt-n1 text-left font-12px" v-if="error">
                  <FlashMessage :error="error" />
                </div>
                <div class="flex-column mt-2 mb-5 ml-6 d-lg-none d-xl-none">
                  <div
                    class="font-14px fw-400 text-3979d9 mb-12 mouse-pointer"
                    @click="showForgotPassword"
                  >
                    パスワードを忘れた方
                  </div>
                  <div class="d-flex align-center justify-center">
                    <v-checkbox
                      :ripple="false"
                      dense
                      :hide-details="true"
                      color="#AA158B"
                      v-model="fields[2].value"
                      class="pa-0 ma-0"
                    >
                      <template v-slot:label>
                        <div class="fw-400 font-12px pa-0">
                          次回から自動的にログイン
                        </div>
                      </template>
                    </v-checkbox>
                  </div>
                </div>
                <v-btn
                  height="41px"
                  width="100%"
                  color="primary"
                  depressed
                  class="font-14px fw-500 font-Noto-Sans-Medium"
                  type="submit"
                  >ログイン</v-btn
                >
                <div
                  class="text-center font-14px font-Noto-Sans-Medium text-3979d9 mouse-pointer mt-5"
                  @click="launchSignUp"
                >
                  今すぐアカウントを作成
                </div>
              </v-form>
            </validation-observer>
          </v-sheet>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import FlashMessage from "@/components/FlashMessage";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "LoginModal",
  components: { FlashMessage },
  data() {
    return {
      fields: [
        {
          placeholder: "メールアドレス",
          value: "",
          rules: "required|email",
          name: "email",
        },
        {
          placeholder: "パスワード",
          value: "",
          type: "password",
          rules: "required",
          name: "password",
        },
        {
          name: "loginauto",
          value: false,
        },
      ],

      errors: "",
      error: "",
    };
  },
  created() {
    this.$store.dispatch("API_PROCESSING", false, { root: true });
  },
  computed: {
    ...mapGetters(["getApiProcessingStatus", "user"]),
  },
  methods: {
    ...mapMutations(["hideModal"]),
    showForgotPassword() {
      this.hideModal();
      this.$store.commit("showModal", {
        component: "ForgotPasswordModal",
        width: "900px",
        height: "357px",
        dense: true,
      });
    },
    loginUser() {
      console.log(this.fields);
      this.$refs.observer.validate().then((success) => {
        if (!success) {
          return;
        }
        let email = this.fields[0].value;
        let password = this.fields[1].value;

        this.$store
          .dispatch("AUTH_REQUEST", { email, password })
          .then(() => {
            if (
              this.$route.query.redirect &&
              this.$route.query.redirect !== ""
            ) {
              this.$router.push(`${this.$route.query.redirect}`);
            } else {
              this.hideModal();
              this.$router.push({ name: "MyPageParent" });
            }
          })
          .catch(() => {
            this.error = this.$t("validation.login.api_error_message");
          });
      });
    },

    launchSignUp() {
      this.hideModal();
      this.$store.commit("showModal", {
        component: "SignUpModal",
        width: "981px",
        height: "374px",
        dense: true,
      });
    },
  },
  // methods: {
  //   ...mapMutations(["hideModal"]),
  //   loginUser() {},
  //   launchSignUp() {
  //     this.hideModal();
  //     this.$store.commit("showModal", {
  //       component: "SignUpModal",
  //       width: "981px",
  //       height: "374px",
  //       dense: true,
  //     });
  //   },
  // },
};
</script>
<style lang="scss" scoped>
.desktop-size {
  padding-right: 130px;
  padding-left: 116px;
  margin-bottom: 135px;
}
.mobile-size {
  padding-left: 20px;
  padding-right: 20px;
}
.login-footer {
  bottom: 0%;
  z-index: 1px;
  height: 128px;
  background-image: url("~@/assets/images/login-footer.svg");
}
.login-footer-text {
  bottom: -40px;
  left: 55px;
  z-index: 2;
  &:first-child {
    line-height: 33.79px;
    margin-bottom: 2px;
    span {
      line-height: 25.34px;
    }
  }
}
</style>

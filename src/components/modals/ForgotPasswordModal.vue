<template>
  <div
    class="d-flex flex-column align-center jsutify-center px-3"
    :class="$vuetify.breakpoint.smAndDown ? 'pt-1' : 'pb-25 pt-6'"
  >
    <v-sheet
      color="transparent"
      class="full-width d-flex flex-column align-center px-3 jsutify-center"
      :width="$vuetify.breakpoint.smAndDown ? '300px' : '352px'"
    >
      <div
        class="text-center text-1f2020 font-Roboto-Medium"
        :class="
          $vuetify.breakpoint.smAndDown ? 'font-16px mb-4' : 'font-18px mb-6'
        "
      >
        パスワードを忘れましたか？
      </div>
      <div
        class="text-8e fw-400"
        :class="$vuetify.breakpoint.smAndDown ? 'font-12px' : 'font-14px'"
      >
        登録されたメールアドレスに、パスワードの再設定メールを送信します。
      </div>
      <validation-observer
        ref="basicInformationInput"
        class="full-width d-flex justify-center"
        :class="$vuetify.breakpoint.smAndDown ? 'mb-5' : 'mb-6'"
      >
        <v-form @submit.prevent="saveBasicInformation">
          <v-sheet
            color="transparent"
            :width="$vuetify.breakpoint.smAndDown ? '300px' : '352px'"
          >
            <validation-provider
              v-slot="{ errors }"
              name="メール"
              rules="required|email"
            >
              <v-text-field
                rounded
                :height="$vuetify.breakpoint.smAndDown ? '41px' : '58px'"
                :error-messages="errors"
                :error="errors.length !== 0"
                hide-details="auto"
                v-model="email"
                :type="email"
                single-line
                color="#13ABA3"
                outlined
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'my-6 font-14px'
                    : 'my-4 font-16px'
                "
                dense
                placeholder="メールアドレス"
              ></v-text-field>
            </validation-provider>
            <v-btn
              @click="submit(email)"
              color="primary"
              width="100%"
              :height="$vuetify.breakpoint.smAndDown ? '41px' : '58px'"
              class="font-Noto-Sans-Medium"
              :class="$vuetify.breakpoint.smAndDown ? 'font-14px' : 'font-16px'"
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
      email: null,
    };
  },
  methods: {
    ...mapMutations(["hideModal"]),
    showLogin() {
      this.hideModal();
      this.$store.commit("showModal", {
        component: "LoginModal",
        width: "981px",
        height: "448px",
        dense: true,
      });
    },
    
    submit (email) {
      
      console.log(email)
      this.$store
          .dispatch('AUTH_RESET', { email })
          .then(() => {
            this.hideModal();
            this.$store.commit("showModal", {
              component: "SignUpForm", 
              width: "900px",
              height: "auto",
              dense: true,
              fullHeight: true,
            });
          })
          .catch((err) => {
            this.error = err.data.errors.email_invalid[0];
          });
    }

  },
};
</script>
<style lang="scss" scoped>
.pb-25 {
  padding-bottom: 100px !important;
}
</style>

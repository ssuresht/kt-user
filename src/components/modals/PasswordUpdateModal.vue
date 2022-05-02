<template>
  <div>
    <div class="text-center text-1f2020 font-24px fw-500 mt-1">
      {{ $t("update_password") }}
    </div>
    <div class="d-flex justify-center mt-14">
      <div class="container-width">
        <div v-for="(field, index) in fields" :key="index">
          <div v-if="field.rightLabel" class="ml-2 d-flex justify-start">
            <div class="font-18px mt-3">{{ field.label }}</div>
            <div class="font-12px text-8e mt-4 ml-2">
              {{ field.rightLabel }}
            </div>
          </div>
          <div v-if="!field.rightLabel" class="font-18px mt-3 ml-2">
            {{ field.label }}
          </div>
        <validation-provider
                v-slot="{ errors }"
                :name="field.name"
                :rules="field.rules"
            >
              <v-text-field
                  autofocus
                  rounded
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
                  dense
                  :placeholder="field.placeholder"
              ></v-text-field>
            </validation-provider>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            @click="updatePassword"
            depressed
            color="primary"
            rounded
            type="submit"
            width="286px"
            height="46px"
            class="font-16px fw-500 mt-6"
            >{{ $t("send") }}</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PasswordUpdateModal",
 
  data() {
    return {
      fields: [
        {
          value: "",
          placeholder: "新しいパスワード",
          label: "パスワード",
          name:'password',
          type:"password",
          rightLabel:
            "半角英大小文字、半角数字を全て含み8文字以上入力して下さい",
           rules:"required|min:8|only_english_lang_allowed"
        },
        {
          value: "",
          placeholder: "再度パスワードを入力してください",
          label: "パスワード ( 確認用 )",
          type:"password",
          name:"confirm_password",
         rules:"password_confirmed:password|only_english_lang_allowed"
        },
      ],
    };
  },

   mounted() {
    console.log(this.user);
  },
    methods: {
       ...mapMutations(["hideModal"]),
      updatePassword() {
           const update_password = {
              password: this.fields.find((f) => f.name == "password") .value,
              confirm_password: this.fields.find((f) => f.name == "confirm_password").value,
           }
       this.$store.dispatch("STUDENT_PASSWORD_UPDATE",{ param: update_password}).then(() => {
            this.$root.$emit("refresh-profile-data");
            this.hideModal();
          });
    },
    ...mapMutations(["hideModal"]),
  },
};
</script>

<style lang="scss" scoped>
.container-width {
  width: 520px !important;
}
</style>

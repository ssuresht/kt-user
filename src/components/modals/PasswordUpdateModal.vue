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
          <v-text-field
            rounded
            height="58px"
            v-model="field.value"
            :hide-details="true"
            single-line
            color="#13ABA3"
            class="font-16px mt-2"
            outlined
            dense
            :placeholder="field.placeholder"
          ></v-text-field>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            @click="updatePassword"
            depressed
            color="primary"
            rounded
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
          rightLabel:
            "半角英大小文字、半角数字を全て含み8文字以上入力して下さい",
        },
        {
          value: "",
          placeholder: "再度パスワードを入力してください",
          label: "パスワード ( 確認用 )",
        },
      ],
    };
  },
    methods: {
    updatePassword() {
      this.hideModal();
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

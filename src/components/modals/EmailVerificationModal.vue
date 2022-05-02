<template>
  <div>
    <div
      class="text-center"
      :class="{
        'font-16px fw-400 mt-4': $vuetify.breakpoint.smAndDown,
        'font-18px fw-600 mt-2': $vuetify.breakpoint.mdAndUp,
      }"
    >
      会員登録用メールを送信しました
    </div>
    <div
      :class="{
        'text-left d-flex justify-center text-8e font-14px mt-4 margin-bottom':
          $vuetify.breakpoint.mdAndUp,
        'text-left d-flex justify-center text-8e font-12px mt-5 mb-14':
          $vuetify.breakpoint.smAndDown,
      }"
    >
      ご入力いただいたメールアドレス宛に、会員登録ペー<br />ジへのリンクを記載したメールを送信しました。<br />
      リンクの有効期限は24時間です。
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailVerificationModal",
};
</script>

<style lang="scss" scoped>
.margin-bottom {
  padding-bottom: 95px !important;
}
</style>

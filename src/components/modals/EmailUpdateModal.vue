<template>
  <div>
    <div class="text-center text-1f2020 font-24px fw-500 mt-1">
      {{ $t("update_email_address") }}
    </div>
    <div class="d-flex justify-center mt-12">
      <div class="container-width">
        <div class="font-18px mt-3 ml-1">{{ field.label }}</div>
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
        <div class="font-14px text-8e mt-4">
          新しいメールアドレスに届いたメールに記載されたリンクにアクセスすることでメールアドレスの更新が完了します。
        </div>
        <div class="d-flex justify-center">
          <v-btn
            @click="changeEmail"
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
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "EmailUpdateModal",
  computed: {
    ...mapGetters(["user", "getStudent"]),
  },
 
  data() {
    return {
      field: {
        value: "",
        placeholder: "新しいメールアドレス",
        label: "メールアドレス",
        name: "email_valid",
        type: "text",
        rules: "required:姓",
      },
    };
  },
  async created() {
    this.getDataFromApi();
  },
  methods: {
    changeEmail() {

       const update_email = {
          email_valid: this.field.value
        };
        console.log(update_email);
        this.$store
          .dispatch("STUDENT_UPDATE", {
            id: this.user.id,
            param: update_email,
          })
          .then(() => {
            this.$root.$emit("refresh-profile-data");
            this.hideModal();
          });

      // this.hideModal();
    },
    ...mapMutations(["hideModal"]),

    async getDataFromApi() {
      this.$store
        .dispatch("STUDENT_GET", { id: this.user.id })
        .then(() => {
          this.getModalFields();
        })
        .finally(() => (this.loading = false));
    },
    getModalFields() {
      this.field.value = this.getStudent[this.field.name] || "";
    },
  },
};
</script>

<style lang="scss" scoped>
.container-width {
  width: 510px !important;
}
</style>

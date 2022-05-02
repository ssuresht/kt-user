<template>
  <div>
    <div class="text-center text-1f2020 font-24px fw-500 mt-1">
      {{ $t("enter_appeal") }}
    </div>
    <div class="d-flex justify-center text-1f2020 mt-14">
      <div class="container-width">
        <div class="d-flex justify-start font-18px">一言アピール</div>
        <div class="appeal-text font-16px pl-9 pr-8 pt-6 mt-3">
          求人応募時、企業担当者に公開されます。ご自身がどんな人間で、どのようにインターンで力を発揮できるかアピールしましょう。<br /><br />
          例：<br />
          ・私の強みは●●●です。この強みを生かして、▲▲▲にチャレンジしてみたいと考えています。<br />
          ・これまでに、■■■を経験したことがあり、★★★をすることができます。<br />
          ・将来✕✕✕の仕事をしたいと考えていて、そのために現在◆◆◆の勉強をしています。<br />
        </div>
        <v-textarea
          class="mt-4"
          height="285px"
          rounded
          outlined
          :placeholder="field.placeholder"
          v-model="field.value"
        ></v-textarea>
        <div class="mb-1 mt-n1 text-left font-12px" v-if="error">
          <FlashMessage :error="error" />
        </div>
        <div class="d-flex justify-center mt-5">
          <v-btn
            depressed
            color="primary"
            rounded
            width="286px"
            height="46px"
            class="font-16px fw-500"
            @click="submitAppeal"
            >{{ $t("update") }}</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlashMessage from "@/components/FlashMessage";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "AppealModal",
  components: { FlashMessage },
  data() {
    return {
      field: {
        value: "",
        placeholder: "新しいメールアドレス",
        label: "メールアドレス",
        name: "self_introduction",
        type: "text",
        rules: "required:姓",
      },
      errors: "",
      error: "",
    };
  },
  async created() {
    this.getDataFromApi();
  },
  computed: {
    ...mapGetters(["user", "getStudent"]),
  },

  methods: {
    submitAppeal() {
    
        if (this.field.value.length > 0) {
          // console.log(this.field.value)
          this.$store.commit("showModal", {
            component: "AppealConfirmModal",
            width: "900px",
            height: "407px",
          });

          const update_self_introduction = {
            self_introduction: this.field.value,
          };

          this.$store
            .dispatch("STUDENT_UPDATE", {
              id: this.user.id,
              param: update_self_introduction,
            })
            .then(() => {
              this.$root.$emit("refresh-profile-data");
              this.hideModal();
            })
            .catch(() => {
              this.error = this.$t("validation.login.api_error_message");
            });
        }
    },

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
    ...mapMutations(["hideModal"]),
  },
};
</script>

<style lang="scss" scoped>
.container-width {
  width: 590px !important;
}
.appeal-text {
  width: 590px !important;
  min-height: 285px !important;
  background: #fffff5 !important;
  border-radius: 30px;
}
</style>

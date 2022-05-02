<template>
  <div>
    <div class="text-center text-1f2020 font-24px fw-500 mt-1">
      {{ $t("enter_appeal") }}
    </div>
    <div class="d-flex justify-center text-1f2020 mt-14">
      <div class="container-width">
        <div class="d-flex justify-start font-18px">一言アピール</div>

        <v-textarea
          class="mt-4"
          height="285px"
          rounded
          outlined
          placeholder="一言アピール"
          v-model="appealMessage"
        ></v-textarea>
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
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "AppealModal",
  data() {
    return {
      field: {
        value: "",
        placeholder: "新しいメールアドレス",
        label: "メールアドレス",
        name: "email",
        type: "text",
        rules: "required:姓",
      },
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
      if (this.appealMessage.length > 0) {
        this.$store.commit("showModal", {
          component: "AppealConfirmModal",
          width: "900px",
          height: "407px",
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

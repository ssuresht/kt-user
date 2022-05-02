<template>
  <div>
    <div class="text-center text-1f2020 font-18px fw-500 mt-8">
      {{ $t("appeal_confirmation_modal_title") }}
    </div>
    <div class="text-center text-8e font-14px mt-6">
      {{ $t("your_input_is_not_saved") }}
    </div>
    <div class="d-flex justify-center mt-12">
      <v-btn
        @click="hideModal"
        depressed
        width="352px"
        height="49px"
        color="primary"
        rounded
      >
        {{ $t("go_from_this_page") }}</v-btn
      >
    </div>
    <div
      @click="showAppealModal"
      class="text-center text-3979d9 font-14px mt-5 pointer"
    >
      このページから移動しない
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AppealConfirmDialog",
  methods: {
    showAppealModal() {
      this.$store.commit("showModal", {
        component: "AppealModal",
        width: "900px",
        height: "917",
      });
    },
    ...mapMutations(["hideModal"]),
  },
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>

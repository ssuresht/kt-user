<template>
  <div>
    <div class="text-center text-1f2020 font-24px">
      {{ $t("update_basic_information") }}
    </div>
    <div class="container-width mx-auto">
      <validation-observer ref="basicInformationInput">
        <v-form @submit.prevent="updateBasicInformation">
          <basic-information-input class="mt-14" :fields="fields" />
          <div class="d-flex justify-center mt-6">
            <v-btn
              depressed
              color="primary"
              rounded
              width="286px"
              height="46px"
              class="font-16px fw-500"
              type="submit"
              >{{ $t("update") }}</v-btn
            >
          </div>
        </v-form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import BasicInformationInput from "@/components/common/BasicInformationInput.vue";
import EducationFacility from "@/mixins/education_facility.mixins";
export default {
  name: "BasicInformationModal",
  components: {
    BasicInformationInput,
  },
  mixins: [EducationFacility],

};
</script>

<style lang="scss" scoped>
.container-width {
  max-width: 560px !important;
  max-height: 560px !important;
}
</style>

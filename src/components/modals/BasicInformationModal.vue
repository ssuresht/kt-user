<template>
  <div>
    <div class="text-center text-1f2020 font-24px mt-1">
      {{ $t("update_basic_information") }}
    </div>
    <div class="container-width mx-auto">
      <validation-observer ref="basicInformationInput">
        <v-form @submit.prevent="updateBasicInformation">
          <basic-information-input
            class="mt-14"
            :fields="fields"
            @selectChange="facilityChange"
          />
          <div class="d-flex justify-center mt-6">
            <v-btn
              @click="updateBasicInformation"
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
      <EducationFacilityModal
        :launch.sync="run_false"
        :item="editItem"
      ></EducationFacilityModal>
    </div>
  </div>
</template>

<script>
import BasicInformationInput from "@/components/common/BasicInformationInput.vue";
import EducationFacilityModal from "@/components/modals/EducationFacilityModal";
import { mapGetters } from "vuex";
export default {
  name: "BasicInformationModal",
  components: {
    EducationFacilityModal,
    BasicInformationInput,
  },
  computed: {
    ...mapGetters(["user", "getStudent", "getEducationFacilities"]),
    getFacilities() {
      return this.getEducationFacilities.map((facility) => {
        return {
          id: facility.id,
          name: facility.name,
        };
      });
    },
  },
  watch: {
    dialog: function (val) {
      if (!val) {
        this.education_facility_id = null;
        console.log(this.education_facility_id);
      }
    },
  },

  data() {
    return {
      yearList: Array.from({ length: 11 }, (_, i) => this.$moment().year() + i),
      monthList: Array.from({ length: 12 }, (_, i) => i + 1),
      editItem: null,
      fields: [
        {
          label: "姓",
          name: "family_name",
          type: "text",
          placeholder: "姓",
          value: "",
          rules: "required:姓",
        },
        {
          label: "名",
          name: "first_name",
          type: "text",
          placeholder: "名",
          value: "",
          rules: "required:名",
        },
        {
          label: "セイ",
          name: "family_name_furigana",
          type: "text",
          placeholder: "セイ",
          value: "",
          rules: "required:セイ",
        },
        {
          label: "メイ",
          name: "first_name_furigana",
          type: "text",
          placeholder: "メイ",
          value: "",
          rules: "required:メイ",
        },
        {
          label: "学校名",
          name: "education_facility_id",
          type: "autocomplete",
          placeholder: "学校名",
          row_class: "",
          item_value: "id",
          item_text: this.getAutoSuggestionText,
          items: this.getFacilities,
          change: "onChange",
          value: "id",
          rules: "required",
        },
        {
          label: "卒業予定",
          name: "graduate_year",
          type: "dropdown",
          placeholder: "卒業予定",
          item_value: "id",
          item_text: "name",
          items: this.yearList,
          no_data_text: "",
          value: "",
          rules: "required",
        },
        {
          label: "卒業予定",
          name: "graduate_month",
          type: "dropdown",
          placeholder: "卒業予定",
          item_value: "id",
          item_text: "name",
          items: this.monthList,
          no_data_text: "",
          value: "",
          rules: "required",
        },
      ],
      // family_name:'',
    };
  },

  async created() {
    this.getDataFromApi();
    await this.$store.dispatch("GET_EDUCATION__FACILITY_DATA");
  },
  methods: {
    async getDataFromApi() {
      this.$store
        .dispatch("STUDENT_GET", { id: this.user.id })
        .then(() => {
          this.getModalFields();
        })
        .finally(() => (this.loading = false));
    },

    facilityChange(e) {
      console.log(e)
      if (e == "education_facility_none") {
        console.log(e);
      }
    },

    updateBasicInformation() {
      this.$refs.basicInformationInput.validate().then((success) => {
        if (success) {
          const updateBasicInfo = {
            family_name: this.fields.find((f) => f.name == "family_name").value,
            first_name: this.fields.find((f) => f.name == "first_name").value,
            //  'first_name' :this.fields.find(f=>f.name == 'first_name').value
            //  'first_name' :this.fields.find(f=>f.name == 'first_name').value
            //  'first_name' :this.fields.find(f=>f.name == 'first_name').value
          };

          this.$store
            .dispatch("STUDENT_UPDATE", {
              id: this.user.id,
              param: updateBasicInfo,
            })
            .then(() => {
              this.basicInformationHeight = false;
            });
        }
      });
    },
    getAutoSuggestionText(item) {
      return `${item.name} `;
    },
    getModalFields() {
      this.fields = this.fields.map((field) => {
        field.value = this.getStudent[field.name] || "";
        if (field.name == "education_facility_id") {
          field.items = [
            ...this.getFacilities,
            { id: "education_facility_none", name: "その他" },
          ];
        }

        if (field.name == "graduate_year") {
          field.items = this.yearList;
        }
        if (field.name == "graduate_month") {
          field.items = this.monthList;
        }

        return field;
      });
      // console.log(this.fields);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-width {
  max-width: 510px !important;
}
</style>

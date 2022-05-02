import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      selfIntroduction: null,
      isConfirmedPage: false,
      isSuccessPageRedirect: {
        value: false,
        name: "",
      },
      yearList: Array.from({ length: 11 }, (_, i) => {
        return {
          value: new Date().getFullYear() + i,
          text: `${new Date().getFullYear() + i}年`,
        };
      }),
      monthList: Array.from({ length: 12 }, (_, i) => {
        return {
          value: i + 1,
          text: `${i + 1}月`,
        };
      }),
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
          noDataText: "その他",
          placeholder: "その他の学校名は必須です",
          row_class: "",
          item_value: "id",
          item_text: this.getAutoSuggestionText,
          items: this.getFacilities,
          change: "onChange",
          hideNoData: "その他",
          value: "id",
          addNewDataField: {
            trigger: false,
            fields: [
              {
                label: "姓",
                name: "other_facility_name",
                type: "text",
                placeholder: "姓",
                value: "",
                rules: "required",
              },
              {
                label: "卒業予定",
                name: "other_facility_type",
                type: "dropdown",
                placeholder: "教育機関種別は必須です",
                item_value: "id",
                item_text: "name",
                items: [],
                no_data_text: "",
                value: "",
                rules: "required:教育機関種別は必須です",
              },
            ],
          },
        },
        {
          label: "卒業予定",
          name: "graduate_year",
          type: "dropdown",
          placeholder: "卒業予定",
          item_value: "value",
          item_text: "text",
          items: [],
          no_data_text: "",
          value: "",
          rules: "required",
        },
        {
          label: "卒業予定",
          name: "graduate_month",
          type: "dropdown",
          placeholder: "卒業予定",
          item_value: "value",
          item_text: "text",
          items: [],
          no_data_text: "",
          value: "",
          rules: "required",
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "user",
      "getStudent",
      "getEducationFacilities",
      "getMasterData",
    ]),
    getFacilities() {
      return this.getEducationFacilities.map((facility) => {
        return {
          id: facility.id,
          name: facility.name,
        };
      });
    },
  },
  created() {
    /**
     * Don't load API for confirmation page!
     */
    if (!this.isConfirmedPage && this.user?.id) {
      this.getDataFromApi();
    }
  },
  methods: {
    ...mapMutations(["hideModal"]),
    async getDataFromApi() {
      Promise.all([
        this.$store.dispatch("STUDENT_GET", { id: this.user?.id }),
        this.$store.dispatch("GET_EDUCATION__FACILITY_DATA"),
      ]).then(() => {
        this.getModalFields();
      });
    },
    saveToDb(education_facility_id) {
      const updateBasicInfo = {
        family_name: this.fields.find((f) => f.name == "family_name").value,
        first_name: this.fields.find((f) => f.name == "first_name").value,
        family_name_furigana: this.fields.find(
          (f) => f.name == "family_name_furigana"
        ).value,
        first_name_furigana: this.fields.find(
          (f) => f.name == "first_name_furigana"
        ).value,
        education_facility_id: education_facility_id,
        year: this.fields.find((f) => f.name == "graduate_year").value,
        month: this.fields.find((f) => f.name == "graduate_month").value,
      };

      if (this.selfIntroduction) {
        updateBasicInfo.self_introduction = this.selfIntroduction;
      }

      this.$store
        .dispatch("STUDENT_UPDATE", {
          id: this.user?.id,
          param: updateBasicInfo,
        })
        .then(() => {
          this.requestSuccessAction();
        });
    },
    /**
     * This function could be defined for each component,
     * If not defined in component, then below function will be called.
     */
    requestSuccessAction() {
      this.$root.$emit("refresh-profile-data");
      this.hideModal();
    },
    updateBasicInformation() {
      this.$refs.basicInformationInput.validate().then((success) => {
        if (!success) {
          return;
        }

        this.submitInformations();
      });
    },
    submitInformations() {
      const educationFacility = this.fields.find(
        (f) => f.name == "education_facility_id"
      );
      if (
        !educationFacility.value &&
        educationFacility?.addNewDataField &&
        !!educationFacility?.addNewDataField?.trigger
      ) {
        const newFacility = {
          name: educationFacility?.addNewDataField.fields[0].value,
          type: educationFacility?.addNewDataField.fields[1].value,
        };
        this.$store
          .dispatch("FACILITIES_CREATE", newFacility)
          .then((createdFacility) => {
            educationFacility.value = createdFacility.data.data.data.id;
            this.saveToDb(educationFacility.value);
          });
      } else {
        this.saveToDb(educationFacility.value);
      }
    },
    getAutoSuggestionText(item) {
      return `${item.name} `;
    },
    getModalFields() {
      this.fields = this.fields.map((field) => {
        if (field.name == "education_facility_id") {
          field.items = [...this.getFacilities];
          field.items.push({
              id: 'other',
              name: 'その他'
          })
          field.addNewDataField.fields[1].items = this.getMasterData.educational_facility_type;
        }

        if (field.name == "graduate_year") {
          field.items = this.yearList;
        }

        if (field.name == "graduate_month") {
          field.items = this.monthList;
        }

        field.value = this.getStudent[field.name] || "";

        return field;
      });
      // console.log(this.fields);
    },
  },
};

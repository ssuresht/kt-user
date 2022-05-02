<template>
  <div>
    <div class="d-flex justify-center text-1f2020">
      <div class="container-width">
        <div v-for="(field, index) in fields" :key="index">
          <template v-if="field.type == 'text'">
            <div
              class="mb-2 mt-3 ml-1"
              :class="{
                'font-14px mt-2': $vuetify.breakpoint.smAndDown,
                'font-18px mt-4': $vuetify.breakpoint.mdAndUp,
              }"
            >
              {{ field.label }}
            </div>
            <validation-provider
              v-slot="{ errors }"
              :name="field.name"
              :rules="field.rules"
            >
              <v-text-field
                rounded
                :height="fieldHeight"
                :error-messages="errors"
                :error="errors.length !== 0"
                :hide-details="errors.length <= 0"
                v-model="field.value"
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
          </template>
          <template v-if="field.type == 'autocomplete'">
            <div class="full-width">
              <div
                class="font-18px mb-2 mt-3 ml-1"
                :class="{
                  'font-14px': $vuetify.breakpoint.smAndDown,
                  'font-18px': $vuetify.breakpoint.mdAndUp,
                }"
              >
                {{ field.label }}
              </div>
              <validation-provider
                v-slot="{ errors }"
                :name="field.name"
                :rules="field.rules"
              >
                <v-autocomplete
                  rounded
                  :height="fieldHeight"
                  outlined
                  dense
                  color="#13ABA3"
                  class="mt-1 autocomplete"
                  @change='$emit("selectChange",$event)'
                  :class="{
                    'font-14px': $vuetify.breakpoint.smAndDown,
                    'font-18px': $vuetify.breakpoint.mdAndUp,
                  }"
                  :error-messages="errors"
                  :error="errors.length !== 0"
                  :hide-details="errors.length <= 0"
                  hide-no-data
                  hide-selected
                  :items="field.items"
                  :item-text="field.item_text"
                  :item-value="field.item_value"
                  :placeholder="field.placeholder"
                  v-model="field.value"
                ></v-autocomplete>
              </validation-provider>
            </div>
          </template>
          <template v-if="field.type == 'dropdown'">
            <div class="full-width">
              <div
                class="font-18px mb-2 mt-3 ml-1"
                :class="{
                  'font-14px': $vuetify.breakpoint.smAndDown,
                  'font-18px': $vuetify.breakpoint.mdAndUp,
                }"
              >
                {{ field.label }}
              </div>
              <validation-provider
                v-slot="{ errors }"
                :name="field.name"
                :rules="field.rules"
              >
                <v-select
                  outlined
                  dense
                  rounded
                  :height="fieldHeight"
                  class="mt-1"
                  
                  :class="{
                    'select-mobile font-14px': $vuetify.breakpoint.smAndDown,
                    'select-desktop font-16px': $vuetify.breakpoint.mdAndUp,
                  }"
                  :error-messages="errors"
                  :error="errors.length !== 0"
                  :hide-details="errors.length <= 0"
                  :items="field.items"
                  :item-text="field.item_text"
                  :item-value="field.item_value"
                  :placeholder="field.placeholder"
                  v-model="field.value"
                  :no-data-text="field.no_data_text"
                >
                </v-select>
              </validation-provider>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicInformationInput",
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
  computed: {
    fieldHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "41px" : "58px";
    },
  },
};
</script>

<style lang="scss" scoped>
.container-width {
  width: 100% !important;
}
.autocomplete {
  ::v-deep.v-input__icon--append {
    display: none !important;
  }
}

.select-mobile {
  ::v-deep.v-input__icon.v-input__icon--append {
    margin-top: -2px !important;
  }
  ::v-deep svg {
    path {
      fill: #8e8e8e !important;
    }
  }
}
.select-desktop {
  ::v-deep.v-input__icon.v-input__icon--append {
    margin-top: 8px !important;
  }
  ::v-deep svg {
    path {
      fill: #8e8e8e !important;
    }
  }
}
</style>

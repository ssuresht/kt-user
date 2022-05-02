<template>
  <div>
    <div class="d-flex justify-center text-1f2020">
      <div class="container-width">
        <div v-for="(field, index) in fields" :key="index">
          <template v-if="field.type == 'text'">
            <div
                class="mb-2 ml-1"
                :class="{
                'font-14px mt-2': $vuetify.breakpoint.smAndDown,
                'font-18px mt-4': $vuetify.breakpoint.mdAndUp,
              }"
            >
              {{ field.label }} <span v-if="field.required_text" class="text-light-red" :class="{'font-14px': 
              $vuetify.breakpoint.smAndUp , 'font-12px': $vuetify.breakpoint.xs}">{{ field.required_text }}</span>
            </div>
            <validation-provider
                v-slot="{ errors }"
                :name="field.name"
                :rules="field.rules"
            >
              <v-text-field
                  autofocus
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

          <template v-if="field.type == 'textarea'">
            <div
                class="mb-2 mt-3 ml-1"
                :class="{
                'font-14px mt-2': $vuetify.breakpoint.smAndDown,
                'font-18px mt-4': $vuetify.breakpoint.mdAndUp,
              }"
            >
              {{ field.label }} <span v-if="field.required_text" class="text-light-red" :class="{'font-14px': 
              $vuetify.breakpoint.smAndUp , 'font-12px': $vuetify.breakpoint.xs}">{{ field.required_text }}</span>
            </div>
            <validation-provider
                v-slot="{ errors }"
                :name="field.name"
                :rules="field.rules"
            >
              <v-textarea
                  rounded
                  :height="textareaHeight"
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
              ></v-textarea>
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
                    :class="{
                    'font-14px': $vuetify.breakpoint.smAndDown,
                    'font-18px': $vuetify.breakpoint.mdAndUp,
                  }"
                    :error-messages="errors"
                    :error="errors.length !== 0"
                    :hide-details="errors.length <= 0"
                    :hide-no-data="!field.noDataText"
                    hide-selected
                    :items="field.items"
                    :item-text="field.item_text"
                    :item-value="field.item_value"
                    :placeholder="field.placeholder"
                    v-model="field.value"
                    @change="field.hasOwnProperty('addNewDataField') ? field.addNewDataField.trigger = false : null"
                >
                  <template v-slot:no-data>
                    <div
                        @click="field.addNewDataField.trigger = true; field.value = null; field.placeholder = field.noDataText;"
                        v-if="field.noDataText && (field.hasOwnProperty('addNewDataField') && field.addNewDataField.hasOwnProperty('trigger'))"
                        style="cursor: pointer; padding: 15px">
                      {{ field.noDataText }}
                    </div>
                  </template>
                </v-autocomplete>
              </validation-provider>
            </div>
          </template>
          <basic-information-input :fields="field.addNewDataField.fields"
                                   v-if="field.hasOwnProperty('addNewDataField') && !!field.addNewDataField.trigger"/>
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
    textareaHeight() {
      return this.$vuetify.breakpoint.smAndUp ? "318px" : "250px"
    }
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

<template>
  <v-menu
    offset-y
    max-width="450px"
    open-on-click
    allow-overflow
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-sheet
        width="30.4%"
        class="d-flex align-center flex-column justify-start text-truncate"
        height="100%"
        v-on="on"
        v-bind="attrs"
      >
        <div class="d-flex full-width justify-space-between align-center">
          <div class="text-1f2020 font-18px title">{{ title }}</div>
          <v-icon size="11px">$arrow</v-icon>
        </div>
        <div
          class="full-width d-flex align-center justify-start font-14px text-8e"
        >
          <div class="text-truncate">
            {{ commaSeparatedSelection }}
          </div>
        </div>
        <!-- <v-row no-gutters>
          <v-col cols="auto">
            <v-sheet height="40px" width="200px">
              <div class="text-1f2020 font-18px title">{{ title }}</div>
              <div class="font-14px text-8e text-8e8e8e text-truncate">
                {{ commaSeparatedSelection }}
              </div>
            </v-sheet>
          </v-col>
          <v-col>
            <div class="full-width blue mt-1 d-flex justify-end">
              <v-icon size="11px">$arrow</v-icon>
            </div>
          </v-col>
        </v-row> -->
      </v-sheet>
    </template>
    <v-sheet class="pa-4">
      <v-row no-gutters>
        <v-col
          cols="6"
          align-self="start"
          v-for="(option, index) in options"
          :key="index"
        >
          <v-checkbox
            class="search-checkbox"
            :label="option.title"
            v-model="option.checkbox"
            @change="addNewSelection"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-sheet>
  </v-menu>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
    },
    placeholder: {
      required: true,
    },
    options: {
      required: true,
    },
  },
  data() {
    return {
      commaSeparatedSelection: "",
    };
  },
  methods: {
    addNewSelection() {
      this.commaSeparatedSelection = "";
      this.options.forEach((element) => {
        if (element.checkbox) {
          if (this.commaSeparatedSelection.length > 0) {
            this.commaSeparatedSelection += "、" + element.title;
          } else {
            this.commaSeparatedSelection += element.title;
          }
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  line-height: 26.06px;
}
</style>

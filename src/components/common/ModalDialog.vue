<template>
  <v-dialog
    width="auto"
    :value="visible"
    @click:outside="hideModal"
    @keydown.esc="hideModal"
    :content-class="
      $vuetify.breakpoint.lgAndUp
        ? 'd-flex justify-center custom-dialog mt-110px'
        : 'd-flex justify-center custom-dialog mt-157px'
    "
    persistent
    overlay-color="#000000"
    overlay-opacity="0.5"
  >
    <v-card :width="getModalWidth" color="white" :min-height="getModalHeight">
      <v-card-title
        class="justify-end px-8"
        :class="[$vuetify.breakpoint.mdAndDown ? 'pt-4' : 'pt-9']"
      >
        <v-btn icon dark right @click="hideModal">
          <v-icon small right>$close</v-icon>
        </v-btn>
      </v-card-title>
      <component v-if="getModalDense" :is="component"></component>
      <v-card-text v-else>
        <component :is="component"></component>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from "vue";
import { mapMutations, mapGetters, mapState } from "vuex";
export default {
  name: "ModalDialog",
  computed: {
    ...mapGetters([
      "getModalComponent",
      "getModalHeight",
      "getModalWidth",
      "getModalDense",
    ]),
    ...mapState({
      visible: "modalVisible",
      modalComponent: "modalComponent",
    }),
  },
  data() {
    return {
      component: null,
    };
  },
  watch: {
    getModalComponent: {
      handler(componentName) {
        if (!componentName) return;
        Vue.component(componentName, () =>
          import(`@/components/modals/${componentName}`)
        );
        this.component = componentName;
      },
      immediate: true,
    },
  },
  methods: {
    ...mapMutations(["hideModal"]),
  },
};
</script>

<style scoped lang="scss">
::v-deep.v-dialog__content {
  display: none !important;
}
::v-deep.v-dialog__content.v-dialog__content--active {
  display: flex !important;
  justify-content: center !important;
}
::v-deep {
  .custom-dialog {
    align-self: flex-start;
  }
  .mt-157px {
    margin-top: 157px;
  }
  .mt-110px {
    margin-top: 110px;
  }
}
</style>

<template>
  <div class="position-absolute content">
    <v-row no-gutters align-items="center" class="">
      <v-col
        class="font-88px font-reem-kufi-medium text-ffd166"
        :class="[feature.number === 1 ? 'ml-7' : 'ml-12']"
      >
        <div class="">
          {{ feature.number }}
        </div>
      </v-col>
      <v-col cols="auto" class="ml-4 mt-3">
        <div class="font-18px mb-1 font-Noto-Sans-Medium fw-500 text-00332f">
          {{ feature.title }}
        </div>
        <v-sheet
          :width="feature.descriptionWidth"
          height="60px"
          class="d-flex align-start fw-400 font-14px text-8e"
          v-html="feature.description"
        >
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    feature: {
      required: true,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  top: 0%;
  z-index: 1;
  left: 0%;
  height: 100%;
}
</style>

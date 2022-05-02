<template>
  <div class="">
    <template v-if="$vuetify.breakpoint.mdAndDown">
      <v-card
        width="340px"
        outlined
        class="post-card"
        @click.stop="$router.push({ name: 'PostDetails', params: { id } })"
      >
        <div class="position-relative post-image">
          <v-img width="100%" height="110px" :src="img"> </v-img>
        </div>

        <v-card-title
          class="font-14px fw-500 pb-0 pt-2 pl-1 truncate-lines lines-2"
          >{{ title }}</v-card-title
        >
        <div class="d-flex align-center justify-start mt-4 ml-1 font-12px">
          <v-chip
            color="primary lighten-3"
            v-for="(tag, index) in tags"
            :key="index"
            class="mr-2 black--text"
            @click.stop="$emit('addTags', tag)"
            >{{ tag }}</v-chip
          >
        </div>
      </v-card>
    </template>
    <template v-else>
      <v-card
        width="402px"
        outlined
        class="post-card"
        @click.stop="$router.push({ name: 'PostDetails', params: { id } })"
      >
        <div class="position-relative post-image">
          <v-img width="100%" height="274px" :src="img"> </v-img>
        </div>

        <v-card-title class="font-16px fw-500 pb-0 pt-2 pl-1">{{
          title
        }}</v-card-title>
        <div class="d-flex align-center justify-start mt-4 ml-1 font-14px">
          <v-chip
            color="primary lighten-3"
            v-for="(tag, index) in tags"
            :key="index"
            class="mr-2 light--text"
            @click.stop="$emit('addTags', tag)"
            >{{ tag }}</v-chip
          >
        </div>
      </v-card>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      required: true,
    },
    img: {
      required: true,
      default: "",
    },
    tags: {
      required: true,
      type: Array,
    },
    title: {
      required: true,
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.post-card {
  border: none;
  background: transparent;
  .post-image .v-image {
    border-radius: 15px;
    @media (max-width: 767px) {
      border-radius: 10px;
    }
  }
  .light--text {
    color: #228d88 !important;
  }
}
</style>

<template>
  <div class="">
    <div class="text-center">
      <v-pagination
        v-on="$listeners"
        v-bind="$attrs"
        v-model="page"
        :length="totalPages"
        circle
        @input="getPaginatePage"
      ></v-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    totalPages: {
      type: [Number, String],
      default: 10,
      required: false,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    getPaginatePage(e) {
      this.$emit("pagination-data-update", e);
      this.$root.$emit("PaginatePageNumber", e);
    },
  },
};
</script>

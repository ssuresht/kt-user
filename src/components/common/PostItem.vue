<template>
  <div class="">
    <v-card
      :width="$vuetify.breakpoint.mdAndUp ? '402px' : '340px'"
      outlined
      class="post-card"
      @click.stop="$router.push({ name: 'PostDetails', params: { id: id } })"
    >
      <div class="position-relative post-image">
        <v-img
          width="100%"
          :height="$vuetify.breakpoint.mdAndUp ? '274px' : '110px'"
          :src="img"
        >
        </v-img>
      </div>

      <v-card-title
        class="fw-500 pb-0 pt-2 pl-1"
        :class="{
          'font-14px truncate-lines lines-2': $vuetify.breakpoint.smAndDown,
          'font-16px': $vuetify.breakpoint.mdAndUp,
        }"
        >{{ title }}</v-card-title
      >
      <div class="d-flex align-center justify-start mt-4 ml-1">
        <template v-for="(tag, index) in tags">
          <v-chip
            :key="index"
            color="primary lighten-3"
            v-if="tag.name"
            class="mr-2 light--text"
            :class="{
              'font-10px': $vuetify.breakpoint.smAndDown,
              'font-14px': $vuetify.breakpoint.mdAndUp,
            }"
            @click.stop="$emit('addTags', tag)"
            >{{ tag.name }}</v-chip
          >
        </template>
      </div>
      <div
        class="post-date font-14px mt-2 ml-1 text-b7b7b7"
        :class="{
          'font-12px': $vuetify.breakpoint.smAndDown,
          'font-14px': $vuetify.breakpoint.mdAndUp,
        }"
        v-if="date"
      >
        {{ dayjs(date, "YYYY年M月D日") }}
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
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
    date: {
      required: false,
      type: String,
    },
    id: {
      required: true,
      type: [Number, String],
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

<template>
  <div
    class="full-width d-flex align-center justify-center"
    :class="$vuetify.breakpoint.lgAndUp ? 'pt-16 mb-17' : 'pb-10 pt-11'"
  >
    <v-sheet
      color="transparent"
      :width="cardContainerWidth"
      class="d-flex flex-wrap"
      :class="alignmentClass"
      v-if="historiesList.length > 0"
    >
      <div
        class="mb-4"
        v-for="(internship, index) in historiesList"
        :key="index"
      >
        <div :class="cardSpacing(internship)">
          <PostCard
            :key="index"
            :showFavouriteButton="false"
            v-bind="{ internship: internship.internship_post }"
          ></PostCard>
          <div
            class="full-width d-flex align-center justify-space-between mt-4"
          >
            <div class="">応募 : {{ internship.updated_at }}</div>
            <div v-if="internship.status === 5" class="font-16px text-aa158b">
              辞退済み
            </div>
          </div>
        </div>
      </div>
    </v-sheet>
    <div
      class="full-width full-height d-flex align-center justify-center text-8e"
      :class="$vuetify.breakpoint.mdAndDown ? 'font-10px' : 'font-16px'"
      v-else
    >
      応募履歴はありません。
    </div>
  </div>
</template>
<script>
import PostCard from "@/components/common/PostCard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    PostCard,
  },
  async mounted() {
    await this.$store.dispatch("GET_APPLICATION_HISTORY");
  },
  computed: {
    ...mapGetters(["getHistories"]),
    historiesList() {
      let i = 2;
      return this.getHistories.map((history, index) => {
        let assignedI = -1;
        if (index + 1 === i) {
          assignedI = i;
          i += 3;
        }
        let temp = {
          internship_post: history.internship_post,
          status: history.status,
          updated_at: history.updated_at
            ? this.dayjs(history.updated_at, "YYYY年M月DD日")
            : null,

          i: assignedI,
        };
        return temp;
      });
    },
    cardContainerWidth() {
      if (this.$vuetify.breakpoint.width > 1439) {
        return "1300px";
      }
      if (this.$vuetify.breakpoint.lgAndUp) {
        return "950px";
      }
      if (this.$vuetify.breakpoint.width > 700) {
        return "700px";
      }
      return "100%";
    },
    alignmentClass() {
      if (this.$vuetify.breakpoint.width > 1439) {
        return "align-start justify-start";
      }
      if (this.$vuetify.breakpoint.width > 689) {
        return "align-start justify-space-between";
      }
      return "align-start justify-center";
    },
  },
  methods: {
    cardSpacing(internship) {
      if (this.$vuetify.breakpoint.width > 1439) {
        if (internship.i > 0) {
          return "mx-8";
        }
        return "";
      }
      return "";
    },
  },
};
</script>

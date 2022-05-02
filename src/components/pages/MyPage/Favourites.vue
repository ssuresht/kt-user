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
      v-if="favouriteList.length > 0"
    >
      <div
        class="mb-4"
        v-for="(internship, index) in favouriteList"
        :class="cardSpacing(internship)"
        :key="index"
      >
        <PostCard
          :key="index"
          v-bind="internship"
          @toggleFavourite="toggleFavourite(internship)"
        ></PostCard>
      </div>
    </v-sheet>
    <div
      class="full-width full-height d-flex align-center justify-center text-8e"
      :class="$vuetify.breakpoint.mdAndDown ? 'font-10px' : 'font-16px'"
      v-else
    >
      お気に入りはありません。
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
    await this.getListData();
  },
  computed: {
    ...mapGetters(["getFavouritesList"]),
    favouriteList() {
      let i = 2;
      return this.getFavouritesList.map((favourite, index) => {
        let assignedI = -1;
        if (index + 1 === i) {
          assignedI = i;
          i += 3;
        }
        let temp = {
          internship: favourite.internship,
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
    async getListData() {
      await this.$store.dispatch("GET_FAVOURITE_LIST");
    },
    async toggleFavourite({ internship }) {
      let data = {};
      data.internship_post_id = internship.id;
      data.is_favourite = !internship.is_favourite;
      await this.$store.dispatch("INTERNSHIP_GET_FAVOURITE", data);
      await this.getListData();
    },
    cardSpacing(post) {
      if (this.$vuetify.breakpoint.width > 1439) {
        if (post.i > 0) {
          return "mx-8";
        }
        return "";
      }
      return "";
    },
  },
};
</script>

<template>
  <div
    class="post-page full-width d-flex flex-column align-center justify-center"
  >
    <div
      class="text-center text-1f2020"
      :class="{
        'fw-500 font-16px pt-7': $vuetify.breakpoint.smAndDown,
        'fw-700 font-30px pt-11': $vuetify.breakpoint.mdAndUp,
      }"
    >
      コラム
    </div>
    <div
      class="subheading text-center text-1f2020 fw-400"
      :class="{
        'font-14px mt-3': $vuetify.breakpoint.smAndDown,
        'font-20px mt-5': $vuetify.breakpoint.mdAndUp,
      }"
    >
      就職活動関連のニュースからビジネスマナーまで、
      学生の皆様へのお役立ち記事をお届けします。
    </div>

    <!-- order selection -->
    <div class="full-width d-flex justify-start px-4 py-6 d-lg-none">
      <div class="text-center text-1f2020 fw-400 font-13px sort-label">
        並び替え
      </div>
      <v-btn
        width="auto"
        depressed
        class="font-14px"
        height="35px"
        x-small
        v-for="(item, index) in filters"
        :key="index"
        :class="[index > 0 ? 'ml-3' : 'ml-10']"
        :color="item.selected ? '#BCE8E5' : 'white'"
        @click="updateFilter(item)"
        >{{ item.title }}</v-btn
      >
    </div>

    <!-- order selection desktop -->
    <v-card
      flat
      color="transparent"
      max-width="1300px"
      class="justify-space-between full-width mt-15 mb-5 d-none ml-10 d-lg-flex"
    >
      <div class="d-flex justify-center align-center">
        <div class="text-center text-1f2020 fw-400 font-18px">並び替え</div>
        <v-btn
          width="auto"
          depressed
          class="font-16px"
          height="44px"
          v-for="(item, index) in filters"
          :key="index"
          :class="[index > 0 ? 'ml-3' : 'ml-15']"
          :color="item.selected ? '#BCE8E5' : 'white'"
          @click="updateFilter(item)"
          >{{ item.title }}</v-btn
        >
      </div>
    </v-card>
    <v-card
      flat
      color="transparent"
      max-width="1300px"
      class="full-width"
      :class="{
        'justify-start d-flex ml-8 mb-5': $vuetify.breakpoint.smAndDown,
        'justify-space-between d-lg-flex ml-10 mb-10':
          $vuetify.breakpoint.mdAndUp,
      }"
      v-if="tagSelected.length"
    >
      <div class="d-flex justify-center align-center">
        <div
          class="text-center text-1f2020 fw-400"
          :class="{
            'font-13px mr-4': $vuetify.breakpoint.smAndDown,
            'font-18px mr-6': $vuetify.breakpoint.mdAndUp,
          }"
        >
          選択中のタグ
        </div>
        <v-chip
          color="primary lighten-3"
          class="mr-2 black--text font-14px post-tags"
          close-icon="mdi-close"
          close
          v-for="(tag, index) in tagSelected"
          :key="index"
          @click:close="removeTag(tag)"
          >{{ tag.name }}</v-chip
        >
      </div>
    </v-card>
    <v-divider class="full-width mb-10 post-divider" horizontal></v-divider>
    <v-sheet
      color="transparent"
      :max-width="$vuetify.breakpoint.mdAndDown ? '100%' : '1300px'"
      :class="[$vuetify.breakpoint.mdAndDown ? 'px-4' : '']"
    >
      <v-row
        justify="center"
        justify-md="center"
        justify-lg="space-between"
        justify-xl="space-between"
        class="post-row"
      >
        <v-col cols="auto" v-for="(post, index) in getMediaList" :key="index">
          <PostItem
            v-ripple
            :key="index"
            @addTags="handleTags"
            v-bind="{
              ...post,
            }"
          ></PostItem>
        </v-col>
      </v-row>
    </v-sheet>
    <Pagination
      ref="pagination"
      :class="[$vuetify.breakpoint.lgAndUp ? 'my-16' : 'my-9']"
      :total-pages="
        getMediaListPagination ? getMediaListPagination.total_pages : 0
      "
      @pagination-data-update="updateData"
    ></Pagination>
  </div>
</template>
<script>
import PostItem from "@/components/common/PostItem.vue";
import Pagination from "@/components/common/Pagination.vue";
import { mapGetters } from "vuex";
export default {
  name: "PostList",
  components: {
    PostItem,
    Pagination,
  },

  data() {
    return {
      configuration: {
        page: 1,
        sort_by: "public_date",
        sort_by_order: "desc",
        is_draft: "N",
        paginate: 12,
        tag_search: [],
      },
      tagSelected: [],
      filters: [
        {
          title: "おすすめ順",
          selected: false,
        },
          {
          title: "新着順",
          selected: true,
        },
        {
          title: "人気順",
          selected: false,
        },
      ],
    };
  },
  async mounted() {
    await this.$store.dispatch("GET_ALL_MEDIA", this.configuration);
  },
  computed: {
    ...mapGetters(["getMediaListPagination", "getAllMediaList"]),
    getMediaList() {
      return this.getAllMediaList.map((media) => {
        return {
          id: media.id,
          img: media.seo_featured_image ?? "/img/post-3.png",
          title: media.title,
          tags: media.media_tags,
        };
      });
    },
  },
  methods: {
    async updateData(item) {
      this.configuration.page = item;
      await this.fetchData();
    },
    async updateFilter(item) {
      this.filters.forEach((filter) => {
        if (filter.title === item.title) {
          this.configuration.page = 1;
          this.$refs.pagination.page = 1;
          switch (item.title) {
            // sort by the display order
            case "おすすめ順": {
              this.configuration.sort_by = "display_order";
              break;
            }
               // new arrival sort by newly created
            case "新着順": {
              this.configuration.sort_by = "public_date";
              break;
            }
            // sort by most views
            case "人気順": {
              this.configuration.sort_by = "view_counts";
              break;
            }
          }
          filter.selected = true;
        } else {
          filter.selected = false;
        }
      });
      await this.fetchData();
    },
    async handleTags(tag) {
      if (!this.tagSelected.filter((item) => item.id === tag.id).length > 0) {
        this.tagSelected.push(tag);
        this.configuration.tag_search.push(tag.id);
        await this.fetchData();
      }
    },
    async removeTag(tag) {
      let index = this.tagSelected.indexOf(tag);
      if (index !== -1) {
        this.tagSelected.splice(index, 1);
        this.configuration.tag_search.splice(index, 1);
        await this.fetchData();
      }
    },
    async fetchData() {
      this.configuration.tag_search = JSON.stringify(
        this.configuration.tag_search
      );
      await this.$store.dispatch("GET_ALL_MEDIA", this.configuration);
      this.configuration.tag_search = JSON.parse(this.configuration.tag_search);
    },
  },
};
</script>
<style src="./styles.scss" lang="scss" scoped></style>

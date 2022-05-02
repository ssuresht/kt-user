<template>
  <div class="full-width d-flex flex-column align-center justify-center">
    <Flicking
      ref="carousel"
      @changed="updateNavigation"
      class="d-flex align-center justify-center"
    >
      <v-card
        v-for="(item, index) in carouselItem"
        :key="index"
        class="position-relative linear pa-4 ml-4 mouse-pointer"
        width="300px"
        height="200px"
        color="transparent"
      >
        <div
          class="position-relative carousel-image-content d-flex flex-column justify-space-between"
        >
          <div
            class="white--text title fw-700 font-16px text-decoration-underline"
          >
            {{ item.title }}
          </div>
          <div class="">
            <v-sheet
              height="20px"
              color="transparent"
              class="d-flex align-center justify-start"
            >
              <v-btn
                v-for="(tag, t) in item.media_tags"
                :key="t"
                class="rounded-pill primary lighten-3 primary--text text--lighten-2 font-12px d-flex align-center justify-center"
                height="20px"
                depressed
              >
                {{ tag.name }}</v-btn
              >
            </v-sheet>
            <div class="font-12px fw-500 white--text mt-1">
              {{ dayjs(item.created_at, "YYYY年M月D日") }}
            </div>
          </div>
        </div>

        <div class="position-absolute carousel-image-mask"></div>
        <div
          class="position-absolute carousel-item-image"
          :style="{
            backgroundImage: `url(${
              item.seo_featured_image
                ? item.seo_featured_image
                : '/img/carousel-img.png'
            })`,
          }"
        ></div>
      </v-card>
    </Flicking>
    <div class="">
      <v-btn
        fab
        depressed
        width="8px"
        @click="updatedSlide(item)"
        v-for="(item, index) in carouselItem"
        :key="index"
        class="ml-4"
        height="8px"
        :color="item.selected ? 'primary' : '#E5E5E5'"
      ></v-btn>
    </div>
  </div>
</template>
<script>
import { Flicking } from "@egjs/vue-flicking";
import { mapGetters } from "vuex";
export default {
  components: {
    Flicking,
  },
  data() {
    return {
      carouselItem: [],
      mediaConfiguraton: {
        page: 1,
        sort_by: "public_date",
        sort_by_order: "asc",
        is_draft: "N",
        paginate: 6,
        tag_search: [],
      },
    };
  },
  async mounted() {
    await this.$store.dispatch("GET_ALL_MEDIA", this.mediaConfiguraton);
    this.carouselItem = this.getAllMediaList.map((media, index) => {
      return {
        ...media,
        index,
        selected: index === 0 ? true : false,
      };
    });
  },
  computed: {
    ...mapGetters(["getAllMediaList"]),
  },
  methods: {
    updateNavigation(nav) {
      this.carouselItem.forEach((item) => {
        if (item.index === nav.index) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
    },
    updatedSlide(item) {
      this.$refs.carousel.moveTo(item.index);
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  line-height: 23.17px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}
.title-md-up {
  line-height: 36.2px;
}
.carousel-image-content {
  top: 0%;
  bottom: 0%;
  left: 0%;
  height: 100%;
  z-index: 3;
  width: 100%;
}
.carousel-image-mask {
  top: 0%;
  bottom: 0%;
  left: 0%;
  height: 100%;
  z-index: 1;
  width: 100%;
  background: linear-gradient(
    97.99deg,
    rgba(109, 109, 109, 0.49) -0.03%,
    rgba(0, 0, 0, 0) 92.18%
  );
  background-blend-mode: darken;
  border-radius: 15px;
}
.carousel-item-image {
  top: 0%;
  bottom: 0%;
  left: 0%;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
}
</style>

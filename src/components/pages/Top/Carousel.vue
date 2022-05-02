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
            あいうえおかきくけこさしすリモートでの採用面接のとき、人事は何を考えている？
          </div>
          <div class="">
            <div class="d-flex align-center justify-start">
              <v-btn
                class="rounded-pill primary lighten-3 primary--text text--lighten-2 font-12px d-flex align-center justify-center"
                width="90px"
                height="20px"
                depressed
              >
                採用面接</v-btn
              >
              <v-btn
                class="rounded-pill primary lighten-3 primary--text text--lighten-2 ml-3 font-12px d-flex align-center justify-center"
                width="90px"
                height="20px"
                depressed
              >
                タグ2</v-btn
              >
            </div>
            <div class="font-12px fw-500 white--text mt-1">2022年1月31日</div>
          </div>
        </div>

        <div class="position-absolute carousel-image-mask"></div>
        <div class="position-absolute carousel-item-image">
          <v-img
            class=""
            height="200px"
            width="300px"
            src="@/assets/images/carousel-img.png"
          />
        </div>
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
export default {
  components: {
    Flicking,
  },
  data() {
    return {
      carouselItem: [
        {
          index: 0,
          selected: true,
        },
        {
          index: 1,
          selected: false,
        },
        {
          index: 2,
          selected: false,
        },
        {
          index: 3,
          selected: false,
        },
        {
          index: 4,
          selected: false,
        },
      ],
    };
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
  z-index: -1;
}
</style>

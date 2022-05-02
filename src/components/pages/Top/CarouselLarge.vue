<template>
  <div class="full-width">
    <v-sheet
      width="100%"
      color="transparent"
      height="auto"
      class="d-flex align-center justify-space-between"
    >
      <v-sheet
        color="transparent"
        height="387px"
        class="d-flex align-center justify-center flex-column"
      >
        <v-btn color="transparent" depressed fab @click="slide('prev')">
          <v-icon size="35px">$carouselLeftArrow</v-icon>
        </v-btn>
      </v-sheet>
      <Flicking
        ref="carousel"
        @changed="updateNavigation"
        class="d-flex justify-start"
      >
        <v-sheet
          color="transparent"
          class="d-flex justify-space-between px-2"
          width="100%"
          height="auto"
          v-for="(main, index) in carouselItem"
          :key="index"
        >
          <v-card
            v-for="(item, i) in main"
            :key="i"
            class="position-relative linear py-9 pl-6 mouse-pointer"
            :class="[i === 0 ? 'mr-12' : '']"
            :width="[main.length === 1 ? '580px' : '100%']"
            height="387px"
            color="transparent"
            flat
          >
            <div
              class="position-relative carousel-image-content d-flex flex-column justify-space-between"
            >
              <v-sheet
                color="transparent"
                width="338px"
                class="white--text title-md-up fw-700 font-25px text-decoration-underline"
              >
                あいうえおかきくけこさしすリモートでの採用面接のとき、人事は何を考えている？
              </v-sheet>
              <div class="">
                <div class="d-flex align-center justify-start">
                  <v-btn
                    class="rounded-pill primary lighten-3 primary--text text--lighten-2 font-14px d-flex align-center justify-center"
                    width="90px"
                    height="31px"
                    depressed
                  >
                    採用面接</v-btn
                  >
                  <v-btn
                    class="rounded-pill primary lighten-3 primary--text text--lighten-2 ml-3 font-14px d-flex align-center justify-center"
                    width="90px"
                    height="31px"
                    depressed
                  >
                    タグ2</v-btn
                  >
                </div>
                <div class="font-14px fw-500 white--text mt-1">
                  2022年1月31日
                </div>
              </div>
            </div>

            <div class="position-absolute carousel-image-mask"></div>
            <div class="position-absolute carousel-item-image"></div>
          </v-card>
        </v-sheet>
      </Flicking>
      <v-sheet
        height="387px"
        color="transparent"
        class="d-flex align-center justify-center flex-column"
      >
        <v-btn color="transparent" depressed fab @click="slide('forward')">
          <v-icon size="35px">$carouselRightArrow</v-icon>
        </v-btn>
      </v-sheet>
    </v-sheet>

    <div class="full-width d-flex align-center justify-center mt-7">
      <div class="" v-for="(item, index) in carouselItem" :key="index">
        <v-btn
          v-for="(temp, i) in item"
          fab
          depressed
          width="12px"
          @click="updatedSlide(index)"
          :key="i"
          class="ml-10"
          height="12px"
          :color="temp.selected ? 'primary' : '#E5E5E5'"
        ></v-btn>
      </div>
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
      currentIndex: 0,
      carouselItem: [
        [
          {
            selected: true,
            index: 0,
          },
          {
            selected: true,
            index: 0,
          },
        ],
        [
          {
            selected: false,
            index: 1,
          },
          {
            selected: false,
            index: 1,
          },
        ],
        [
          {
            selected: false,
            index: 2,
          },
        ],
      ],
    };
  },
  methods: {
    updateNavigation(nav) {
      this.currentIndex = nav.index;
      this.carouselItem.forEach((item, i) => {
        if (i === nav.index) {
          this.updateChild(item, true);
        } else {
          this.updateChild(item, false);
        }
      });
    },
    updateChild(item, value) {
      item.forEach((i) => {
        i.selected = value;
      });
    },
    updatedSlide(index) {
      this.$refs.carousel.moveTo(index);
    },
    slide(type) {
      if (type === "forward") {
        if (this.currentIndex < this.carouselItem.length - 1) {
          this.$refs.carousel.next();
        }
      }
      if (type === "prev") {
        if (this.currentIndex > 0) {
          this.$refs.carousel.prev();
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.title-md-up {
  line-height: 36.2px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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
  background-image: url("~@/assets/images/carousel-img.png");
  border-radius: 12px;
}
.carousel-image-content {
  z-index: 3;
}
</style>

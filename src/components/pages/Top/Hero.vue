<template>
  <div>
    <template v-if="$vuetify.breakpoint.mdAndDown">
      <div class="mobile-view">
        <v-sheet
          width="100%"
          height="341"
          color="rgba(255, 255, 255, 0.62)"
          class="position-relative hero"
        >
          <div class="position-absolute boy-wave">
            <div class="mask">
              <BoyWave></BoyWave>
            </div>
          </div>
          <div class="position-absolute girl-wave">
            <div class="mask">
              <GirlWave></GirlWave>
            </div>
          </div>

          <div
            class="position-absolute main-heading full-width d-flex flex-column align-center justify-center"
          >
            <v-sheet
              color="transparent"
              width="267px"
              class="position-relative text-center"
            >
              <div class="font-28px font-Noto-Sans-Bold fw-700 main-title">
                完全<span class="primary--text">オンライン</span>で
                長期インターン
              </div>
              <div
                class="text-777777 font-Noto-Sans-Medium main-subtitle font-16px fw-500"
              >
                やってみたい！をできるジブンに
              </div>
              <div class="position-absolute ballons">
                <MainHeadingBallons></MainHeadingBallons>
              </div>
            </v-sheet>
          </div>
        </v-sheet>
        <v-expansion-panels flat accordion class="search rounded-0">
          <v-expansion-panel
            v-for="(search, index) in searchOptions"
            :key="index"
          >
            <v-expansion-panel-header class="primary lighten-1 py-2 px-5">
              <div class="white--text">{{ search.title }}</div>
              <template v-slot:actions>
                <v-sheet
                  width="100%"
                  class="rounded-pill d-flex align-center justify-space-between white py-3 pl-4 pr-6"
                >
                  <div class="font-12px fw-400 text-truncate">
                    {{ search.placeholder }}
                  </div>
                  <v-icon size="11px">$arrow</v-icon>
                </v-sheet>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-sheet width="100%" class="pt-9 pb-7 px-4">
                <v-row no-gutters>
                  <v-col
                    cols="6"
                    align-self="start"
                    v-for="(option, index) in search.options"
                    :key="index"
                  >
                    <v-checkbox
                      class="search-checkbox"
                      :label="option.title"
                      v-model="option.value"
                      @change="updateSearchText(search, option)"
                      hide-details
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-sheet
          v-ripple
          color="primary"
          height="65px"
          width="100%"
          class="d-flex align-center justify-center"
        >
          <v-icon size="16px">$search</v-icon>
          <span class="white--text ml-2">選択した条件で検索</span>
        </v-sheet>
        <v-sheet
          color="rgba(255, 255, 255, 0.62)"
          class="highlights d-flex align-center justify-space-around flex-wrap"
          width="100%"
        >
          <HighLight v-for="i in 3" :key="i" :type="i"></HighLight>
        </v-sheet>
      </div>
    </template>
    <template v-else>
      <div class="desktop-view">
        <v-sheet
          width="100%"
          height="851px"
          color="#F9F9F9"
          class="position-relative hero d-flex flex-column justify-end"
        >
          <!-- search area -->
          <div class="position-absolute search-box">
            <div class="d-flex full-width justify-center">
              <v-sheet
                width="72%"
                class="rounded-pill d-flex align-center justify-center search-holder pt-2 pb-3 pr-3"
              >
                <template v-for="(option, index) in searchOptions">
                  <SearchDropDown
                    :key="index"
                    v-bind="{
                      title: option.title,
                      placeholder: option.placeholder,
                      options: option.options,
                    }"
                  ></SearchDropDown>
                  <v-sheet
                    v-if="index < 2"
                    :key="option.title"
                    width="80px"
                    height="100%"
                    class="d-flex align-center justify-center"
                  >
                    <div class="separator"></div>
                  </v-sheet>
                </template>
                <v-btn
                  depressed
                  fab
                  width="44px"
                  class="ml-13"
                  height="44px"
                  color="primary"
                >
                  <v-icon>$search</v-icon>
                </v-btn>
              </v-sheet>
            </div>
          </div>

          <div class="position-absolute girl-wave">
            <GirlWave></GirlWave>
          </div>
          <div class="position-absolute boy-wave">
            <BoyWave></BoyWave>
          </div>
          <!-- main text -->
          <div
            class="position-absolute main-text d-flex flex-column align-center justify-center"
          >
            <v-sheet
              color="transparent"
              :width="$vuetify.breakpoint.width > 1360 ? '550px' : '450px'"
              class="font-Noto-Sans-Bold fw-700 text-center main-title"
              :class="[
                $vuetify.breakpoint.width > 1360 ? 'font-64px' : 'font-48px',
              ]"
            >
              完全<span class="primary--text">オンライン</span>で 長期インターン
            </v-sheet>
            <div
              class="font-25px text-777777 main-subtitle mt-4 font-Noto-Sans-Medium"
            >
              やってみたい！をできるジブンに
            </div>
          </div>
          <v-sheet
            width="100%"
            height="259px"
            color="primary"
            class="d-flex align-center justify-center"
            style="opacity: 0.8"
          >
            <HighLight
              v-for="i in 3"
              :key="i"
              :type="i"
              class="mr-10"
            ></HighLight>
          </v-sheet>
        </v-sheet>
      </div>
    </template>
  </div>
</template>
<script>
import BoyWave from "@/components/pages/Top/BoyWave";
import GirlWave from "@/components/pages/Top/GirlWave";
import MainHeadingBallons from "./MainHeadingBallons.vue";
import SearchDropDown from "./SearchDropDown.vue";
import HighLight from "./Highlight.vue";
export default {
  components: {
    BoyWave,
    GirlWave,
    MainHeadingBallons,
    HighLight,
    SearchDropDown,
  },
  data() {
    return {
      searchOptions: [
        {
          title: "業界",
          placeholder: "",
          options: [
            {
              title: "すべて",
              value: null,
            },
            {
              title: "教育",
              value: null,
            },
            {
              title: "IT",
              value: null,
            },
            {
              title: "商社",
              value: null,
            },
            {
              title: "ゲーム",
              value: null,
            },
            {
              title: "医療",
              value: null,
            },
            {
              title: "スポーツ",
              value: null,
            },
            {
              title: "不動産",
              value: null,
            },
            {
              title: "ブライダル",
              value: null,
            },
            {
              title: "コンサルティング",
              value: null,
            },
            {
              title: "メディア",
              value: null,
            },
            {
              title: "ファッション / アパレル",
              value: null,
            },
            {
              title: "金融",
              value: null,
            },
            {
              title: "教育",
              value: null,
            },
          ],
        },
        {
          title: "職種",
          placeholder: "",
          options: [],
        },
        {
          title: "特徴",
          placeholder: "",
          options: [],
        },
      ],
    };
  },
  methods: {
    updateSearchText(searchOption) {
      searchOption.placeholder = "";
      searchOption.options.forEach((opt) => {
        if (opt.value) {
          if (searchOption.placeholder.length > 0) {
            searchOption.placeholder += "、" + opt.title;
          } else {
            searchOption.placeholder += opt.title;
          }
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.mobile-view {
  .hero {
    background-image: url("~@/assets/images/hero-bg.png");
    background-size: cover;
    background-position: center;

    .boy-wave {
      z-index: 1;
      top: -6%;
      right: -170px;
    }
    .girl-wave {
      z-index: 1;
      top: 30%;
      left: -75px;
    }
    .main-heading {
      z-index: 3;
      top: 42%;
      .main-title {
        line-height: 49.23px;
        letter-spacing: 1px;
      }
      .main-subtitle {
        line-height: 23.17px;
      }
    }
    .ballons {
      z-index: 4;
      top: -100px;
      left: -30px;
    }
    .mask {
      opacity: 0.5;
    }
  }
  .search ::v-deep {
    .v-expansion-panel-header__icon {
      width: 85% !important;
    }
  }
  .search-checkbox ::v-deep {
    .v-label {
      font-size: 12px !important;
      font-weight: 400 !important;
    }
  }
  .highlights {
    padding-top: 22px;
    padding-right: 28px;
    padding-left: 19px;
    padding-bottom: 19px;
    background-image: url("~@/assets/images/highlights-bg.png");
    background-size: cover;
    background-position: center;
    .circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border-width: 3px;
      border-style: solid;
      .text-center {
        .subtitle {
          width: 97px;
          height: 30px;
          text-align: center;
        }
      }
    }
  }
}
.desktop-view {
  .hero {
    background-image: url("~@/assets/images/lg-hero-bg.png");
    background-size: cover;
    background-position: center;
  }
  .boy-wave {
    top: 0px;
    z-index: 1;
    right: 0px;
    top: 18px;
  }
  .girl-wave {
    z-index: 0;
    left: 0px;
    top: 76px;
  }
  .main-text {
    top: 15.26%;
    width: 100%;
    .main-title {
      line-height: 88px;
    }
    .main-subtitle {
      line-height: 36.2px;
    }
  }
  .search-box {
    top: 55%;
    width: 100%;
    height: 100%;
    z-index: 2;
    .search-holder {
      border: 1px solid #e5e5e5;
      padding-left: 87px;
    }
    .separator {
      width: 0px;
      height: 42px;
      border: 1px solid #e5e5e5;
    }
  }
}
</style>

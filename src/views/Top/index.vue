<template>
  <div class="main mt-1">
    <!-- hero -->
    <Hero @search-posts="searchPosts"></Hero>
    <!-- companies -->
    <div class="full-width d-flex align-center justify-center">
      <v-sheet
        color="transparent"
        :width="parentContainer"
        :class="[$vuetify.breakpoint.mdAndDown ? 'px-4 mt-4' : 'mt-13']"
      >
        <div class="full-width d-flex flex-wrap" :class="cardAlignment">
          <PostCard
            v-for="(internship, index) in internships"
            :key="index"
            v-bind="{
              internship,
            }"
            @toggleFavourite="toggleFavourite"
            class="mb-4"
            :class="cardSpacing(internship)"
          ></PostCard>
        </div>
      </v-sheet>
    </div>
    <div
      class="full-width d-flex justify-center mt-5 mb-10"
      v-if="$vuetify.breakpoint.mdAndDown"
    >
      <v-btn
        color="primary"
        width="174px"
        height="41px"
        @click="goTo('Internships')"
        >もっと見る</v-btn
      >
    </div>
    <div class="full-width d-flex justify-center my-16" v-else>
      <v-btn
        color="primary"
        width="228px"
        height="45px"
        @click="goTo('Internships')"
        >もっと見る</v-btn
      >
    </div>
    <!-- feature section -->
    <div
      class="full-width d-flex flex-column align-center justify-center px-4 primary"
      :class="[$vuetify.breakpoint.mdAndDown ? 'feature' : 'feature-desktop']"
    >
      <template v-if="$vuetify.breakpoint.mdAndDown">
        <FeatureTop></FeatureTop>
        <div class="font-16px white--text fw-700 mt-4 mb-7">
          オンラインインターンに応募してみよう
        </div>
        <v-card class="mb-4" width="340px" max-width="600px">
          <div class="d-flex full-width align-start pl-12">
            <div class="font-88px font-reem-kufi-medium text-ffd166">1</div>
            <div class="pt-6 pl-6">
              <div
                class="font-18px font-Noto-Sans-Medium mb-1 pa-0 fw-500 text-00332f"
              >
                会員登録
              </div>
              <div class="font-14px pa-0 text-8e">
                名前、学校など基本的な情報だ<br />けを入力して会員登録
              </div>
            </div>
          </div>
        </v-card>
        <v-card class="mb-4" width="340px" max-width="600px">
          <div class="d-flex full-width align-start pl-10">
            <div class="font-88px font-reem-kufi-medium text-ffd166">2</div>
            <div class="pt-3 pl-3">
              <div
                class="font-18px font-Noto-Sans-Medium mb-1 pa-0 fw-500 text-00332f"
              >
                インターン情報 検索
              </div>
              <div class="font-14px pa-0 text-8e">
                希望の条件で検索<br />気になるインターンは<br />お気に入り登録
              </div>
            </div>
          </div>
        </v-card>
        <v-card class="mb-4" width="340px" max-width="600px">
          <div class="d-flex full-width align-start pl-10">
            <div class="font-88px font-reem-kufi-medium text-ffd166">3</div>
            <div class="pt-3 pl-3">
              <div
                class="font-18px font-Noto-Sans-Medium mb-1 pa-0 fw-500 text-00332f"
              >
                応募完了
              </div>
              <div class="font-14px pa-0 text-8e">
                ボタン一つで簡単応募<br />応募後は企業からの連絡を待つ<br />だけでOK
              </div>
            </div>
          </div>
        </v-card>
        <v-sheet
          width="340px"
          class="mx-4 primary lighten-4 highlight d-flex flex-column align-center justify-center px-7 mb-10"
        >
          <div class="mt-10 font-14px fw-400 primary--text">
            インターンでの働きぶりに対して、
          </div>
          <div class="font-16px fw-700 mt-1 primary--text">
            企業からのフィードバックが貰える
          </div>
          <div class="my-7 font-14px fw-400">
            <div class="mb-2">
              コトナルのリモートインターンの大きな特徴として、インターン先の企業から自分を評価してもらうことができます。
            </div>
            <div>
              外から見た自分の評価された力や期待したい力を知ることで、自己分析に役立てたり新しい自分を発見できたりするでしょう。
            </div>
          </div>
          <v-img
            src="@/assets/images/feature.png"
            width="229px"
            height="142px"
          ></v-img>
        </v-sheet>
      </template>
      <template v-else>
        <FeatureTop></FeatureTop>
        <div class="font-30px white--text fw-700 mt-4 mb-7">
          オンラインインターンに応募してみよう
        </div>
        <v-sheet
          color="transparent"
          width="1000px"
          class="d-flex flex-column align-start"
        >
          <div class="d-flex full-width align-center justify-start">
            <v-card
              v-for="(feature, index) in features"
              :key="index"
              height="123px"
              width="330px"
              color="transparent"
              flat
              class="position-relative mb-9"
            >
              <FeatureCardContent v-bind="{ feature }"></FeatureCardContent>
              <FeatureButtonBg :type="index"></FeatureButtonBg>
            </v-card>
          </div>
          <v-sheet
            width="100%"
            class="primary lighten-4 highlight d-flex align-start justify-start pt-12 pl-16 mb-14"
          >
            <v-sheet width="51%" color="transparent" class="ml-5">
              <div class="font-16px fw-400 primary--text">
                インターンでの働きぶりに対して、
              </div>
              <div class="font-20px fw-700 mt-1 mb-4 primary--text">
                企業からのフィードバックが貰える
              </div>
              <div class="font-16px fw-400">
                <div>
                  コトナルのリモートインターンの大きな特徴として、インターン先の企業から自分を評価してもらうことができます。
                </div>
                <div>
                  外から見た自分の評価された力や期待したい力を知ることで、自己分析に役立てたり新しい自分を発見できたりするでしょう。
                </div>
              </div>
            </v-sheet>
            <v-img
              src="@/assets/images/feature.png"
              width="357px"
              height="222px"
              :contain="true"
            ></v-img>
          </v-sheet>
        </v-sheet>
      </template>
    </div>
    <!-- carousel section -->
    <v-sheet
      width="100%"
      color="#FCF7EE"
      :class="[$vuetify.breakpoint.mdAndDown ? 'py-10' : 'py-12 px-17']"
    >
      <v-sheet
        color="transparent"
        v-if="$vuetify.breakpoint.mdAndDown"
        class="d-flex align-center justify-center font-16px fw-700 mb-5"
        >コラム</v-sheet
      >
      <v-sheet
        color="transparent"
        v-else
        class="d-flex align-center justify-start font-30px fw-700 ml-16 mb-5"
        >コラム</v-sheet
      >
      <Carousel v-if="$vuetify.breakpoint.mdAndDown" ref="carousel"></Carousel>
      <CarouselLarge ref="carouselLarge" v-else></CarouselLarge>
      <v-sheet
        v-if="$vuetify.breakpoint.mdAndDown"
        class="d-flex align-center justify-center mt-5"
        width="100%"
        color="transparent"
      >
        <v-btn
          width="174px"
          color="primary"
          height="41px"
          @click="$router.push({ name: 'Posts' })"
          >もっと見る</v-btn
        >
      </v-sheet>
      <v-sheet
        color="transparent"
        v-else
        class="d-flex align-center justify-center mt-10"
        width="100%"
      >
        <v-btn
          width="230px"
          color="primary"
          @click="$router.push({ name: 'Posts' })"
          height="46px"
          >もっと見る</v-btn
        >
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script>
import Hero from "@/components/pages/Top/Hero";
import FeatureButtonBg from "@/components/pages/Top/FeatureButton";
import FeatureCardContent from "@/components/pages/Top/FeatureCardContent";
import FeatureTop from "@/components/pages/Top/FeatureTop";
import Carousel from "@/components/pages/Top/Carousel";
import CarouselLarge from "@/components/pages/Top/CarouselLarge";
import PostCard from "@/components/common/PostCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "Top",
  components: {
    Carousel,
    CarouselLarge,
    Hero,
    FeatureButtonBg,
    FeatureCardContent,
    FeatureTop,
    PostCard,
  },
  data() {
    return {
      internships: [],
      features: [
        {
          number: 1,
          title: "会員登録",
          description: "名前、学校など基本的な情報だ<br>けを入力して会員登録",
          descriptionWidth: "210px",
        },
        {
          number: 2,
          title: "インターン情報 検索",
          description: `希望の条件で検索<br>気になるインターンは<br>お気に入り登録`,
          descriptionWidth: "170px",
        },
        {
          number: 3,
          title: "応募完了",
          description: `ボタン一つで簡単応募<br>応募後は企業からの連絡を待つ<br>だけでOK`,
          descriptionWidth: "210px",
        },
      ],
      params: {},
      initial: true,
    };
  },
  computed: {
    ...mapGetters(["getAllInternship"]),
    parentContainer() {
      if (this.$vuetify.breakpoint.width > 1439) {
        return "1300px";
      }
      if (this.$vuetify.breakpoint.width > 1263) {
        return "1000px";
      }
      if (this.$vuetify.breakpoint.width > 823) {
        return "800px";
      }
      return "100%";
    },
    cardAlignment() {
      if (this.$vuetify.breakpoint.width > 1439) {
        return "align-start justify-start";
      }
      if (this.$vuetify.breakpoint.width > 711) {
        return "align-start justify-space-between";
      }
      return "align-start justify-space-around";
    },
  },
  methods: {
    goTo(route) {
      this.$router.push({ name: route });
    },
    updateCard(company, value) {
      company.favourited = value;
    },
    toggleFavourite(internship) {
      if (this.user?.id) {
        const data = {
          internship_post_id: internship.id,
          is_favourite: !internship.is_favourited,
        };
        internship.is_favourited = 1; // Just toggle

        this.$store
          .dispatch("INTERNSHIP_GET_FAVOURITE", data)
          .then((response) => {
            let responseData = response?.data?.data;
            internship.is_favourited = responseData.favourited;
            internship.favorites_count = responseData.total_counts;
          });
      } else {
        this.$store.commit("showModal", {
          component: "FavouriteLogin",
          width: "900px",
          height: "507px",
        });
      }
    },
    async searchPosts(options) {
      options.forEach((items) => {
        this.params[items.searchParam] = [];
        items.options.forEach((option) => {
          if (option.checkbox) {
            this.params[items.searchParam].push(option.id);
          }
        });
      });
      if (this.initial) {
        this.initial = false;
        await this.getData();
      } else {
        this.$store.commit("ADD_TOP_PAGE_SEARCH_QUERRIES", this.params);
        this.goTo("Internships");
      }
    },
    async getData() {
      await this.$store.dispatch("INTERNSHIP_GET_ALL", {
        paginate: 12,
        page: 1,
        sort_by: "favorites_count",
        sort_by_order: "desc",
        status: "N",
      });
      let temp = [];
      let i = 2;
      temp = this.getAllInternship.map((result, index) => {
        let assignedI = -1;
        if (index + 1 === i) {
          assignedI = i;
          i += 3;
        }
        return {
          ...result,
          i: assignedI,
        };
      });

      this.internships = [...temp];
    },
    cardSpacing(internship) {
      if (this.$vuetify.breakpoint.width > 1439) {
        if (internship.i > 0) {
          return "mx-8 mb-11";
        }
        return "";
      }
      return "";
    },
  },
  async created() {
    if (this.$route.query.token && !this.$store.getters.isLoggedIn) {
      let token = this.$route.query.token;
      await this.$store
        .dispatch("AUTH_CHECK_SIGNUP_TOKEN", { token })
        .then(() => {
          this.$store.commit("showModal", {
            component: "SignUpForm",
            width: "900px",
            height: "auto",
            dense: true,
            fullHeight: true,
          });
        });
    } else if (this.$store.getters.isLoggedIn) {
      this.$router.replace({ query: null });
    } else if (
      this.$route.query.userPasswordResetToken &&
      !this.$store.getters.isLoggedIn
    ) {
      this.$store.commit("showModal", {
        component: "PasswordResetModal",
        width: "900px",
        height: "auto",
        dense: true,
        fullHeight: true,
      });
    } else if (this.$store.getters.isLoggedIn) {
      this.$router.replace({ query: null });
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}

.highlight {
  border-radius: 20px;
}
.feature {
  background-image: url("~@/assets/images/feature-sm-bg.svg");
  background-size: cover;
  background-position: center;
}
.feature-desktop {
  background-image: url("~@/assets/images/feature-bg.png");
  background-size: cover;
  background-position: center;
}
</style>

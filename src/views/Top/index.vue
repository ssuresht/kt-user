<template>
  <div class="main mt-1">
    <!-- hero -->
    <Hero></Hero>
    <!-- companies -->
    <div class="full-width d-flex align-center justify-center">
      <v-sheet
        color="transparent"
        :width="$vuetify.breakpoint.mdAndDown ? '100%' : '1300px'"
        :class="[$vuetify.breakpoint.mdAndDown ? 'px-4 mt-4' : 'mt-13']"
      >
        <v-row
          :justify="
            $vuetify.breakpoint.width > 736 ? 'space-between' : 'center'
          "
          justify-lg="space-between"
        >
          <v-col
            :cols="$vuetify.breakpoint.width > 736 ? '6' : '12'"
            lg="4"
            v-for="(home, index) in homePageData"
            :key="index"
          >
            <div class="full-width d-flex align-center justify-center">
              <PostCard
                :key="index"
                @toggleFavourite="home.favourited = !home.favourited"
                v-bind="{
                  ...home,
                }"
              ></PostCard>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
    <div
      class="full-width d-flex justify-center mt-5 mb-10"
      v-if="$vuetify.breakpoint.mdAndDown"
    >
      <v-btn color="primary" width="174px" height="41px">もっと見る</v-btn>
    </div>
    <div class="full-width d-flex justify-center my-16" v-else>
      <v-btn color="primary" width="228px" height="45px">もっと見る</v-btn>
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
        <v-card
          v-for="(feature, index) in features"
          :key="index"
          class="mb-4 pl-12"
          width="340px"
          max-width="600px"
        >
          <v-row no-gutters align-items="center" class="full-width">
            <v-col
              cols="auto"
              class="font-88px font-reem-kufi-medium text-ffd166"
            >
              {{ feature.number }}</v-col
            >
            <v-col>
              <v-sheet
                color="transparent"
                width="210px"
                class="d-flex flex-column justify-end ml-6"
                :class="[index === 0 ? 'mt-6' : 'mt-4']"
              >
                <div
                  class="font-18px font-Noto-Sans-Medium mb-1 pa-0 fw-500 text-00332f"
                >
                  {{ feature.title }}
                </div>
                <div
                  class="font-14px pa-0 text-8e"
                  v-html="feature.description"
                ></div>
              </v-sheet>
            </v-col>
          </v-row>
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
      <Carousel v-if="$vuetify.breakpoint.mdAndDown"></Carousel>
      <CarouselLarge v-else></CarouselLarge>
      <v-sheet
        v-if="$vuetify.breakpoint.mdAndDown"
        class="d-flex align-center justify-center mt-5"
        width="100%"
        color="transparent"
      >
        <v-btn width="174px" color="primary" height="41px">もっと見る</v-btn>
      </v-sheet>
      <v-sheet
        color="transparent"
        v-else
        class="d-flex align-center justify-center mt-10"
        width="100%"
      >
        <v-btn width="230px" color="primary" height="46px">もっと見る</v-btn>
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
export default {
  name: "Top",
  components: {
    Carousel,
    Hero,
    FeatureButtonBg,
    FeatureCardContent,
    FeatureTop,
    CarouselLarge,
    PostCard,
  },
  data() {
    return {
      homePageData: [
        {
          img: "/img/sample-1.png",
          companyLogo: "/img/company-logo.png",
          shareCount: 4,
          likeCount: 4,
          favourited: false,
          title:
            "【コーポレートIT サービスデスク】創業期のスタートアップ3期目・外資系IT企業出身のCEO...",
          subTitle: "株式会社ABC",
          tags: ["エンジニア", "旅行/レジャー/エンタメ"],
          features: [
            {
              icon: "$calender",
              text: "1～3カ月",
            },
            {
              icon: "$time",
              text: "10h～/週",
            },
            {
              icon: "$stipend",
              text: "1,000円",
            },
            {
              icon: "$university",
              text: "4年生のみ",
            },
          ],
        },
        {
          img: "/img/sample-1.png",
          companyLogo: "/img/company-logo.png",
          shareCount: 4,
          likeCount: 4,
          favourited: false,
          title:
            "【コーポレートIT サービスデスク】創業期のスタートアップ3期目・外資系IT企業出身のCEO...",
          subTitle: "株式会社ABC",
          tags: ["エンジニア", "旅行/レジャー/エンタメ"],
          features: [
            {
              icon: "$calender",
              text: "1～3カ月",
            },
            {
              icon: "$time",
              text: "10h～/週",
            },
            {
              icon: "$stipend",
              text: "1,000円",
            },
            {
              icon: "$university",
              text: "4年生のみ",
            },
          ],
        },
        {
          img: "/img/sample-1.png",
          companyLogo: "/img/company-logo.png",
          shareCount: 4,
          likeCount: 4,
          favourited: false,
          title:
            "【コーポレートIT サービスデスク】創業期のスタートアップ3期目・外資系IT企業出身のCEO...",
          subTitle: "株式会社ABC",
          tags: ["エンジニア", "旅行/レジャー/エンタメ"],
          features: [
            {
              icon: "$calender",
              text: "1～3カ月",
            },
            {
              icon: "$time",
              text: "10h～/週",
            },
            {
              icon: "$stipend",
              text: "1,000円",
            },
            {
              icon: "$university",
              text: "4年生のみ",
            },
          ],
        },
        {
          img: "/img/sample-1.png",
          companyLogo: "/img/company-logo.png",
          shareCount: 4,
          likeCount: 4,
          favourited: false,
          title:
            "【コーポレートIT サービスデスク】創業期のスタートアップ3期目・外資系IT企業出身のCEO...",
          subTitle: "株式会社ABC",
          tags: ["エンジニア", "旅行/レジャー/エンタメ"],
          features: [
            {
              icon: "$calender",
              text: "1～3カ月",
            },
            {
              icon: "$time",
              text: "10h～/週",
            },
            {
              icon: "$stipend",
              text: "1,000円",
            },
            {
              icon: "$university",
              text: "4年生のみ",
            },
          ],
        },
        {
          img: "/img/sample-1.png",
          companyLogo: "/img/company-logo.png",
          shareCount: 4,
          likeCount: 4,
          favourited: false,
          title:
            "【コーポレートIT サービスデスク】創業期のスタートアップ3期目・外資系IT企業出身のCEO...",
          subTitle: "株式会社ABC",
          tags: ["エンジニア", "旅行/レジャー/エンタメ"],
          features: [
            {
              icon: "$calender",
              text: "1～3カ月",
            },
            {
              icon: "$time",
              text: "10h～/週",
            },
            {
              icon: "$stipend",
              text: "1,000円",
            },
            {
              icon: "$university",
              text: "4年生のみ",
            },
          ],
        },
        {
          img: "/img/sample-1.png",
          companyLogo: "/img/company-logo.png",
          shareCount: 4,
          likeCount: 4,
          favourited: false,
          title:
            "【コーポレートIT サービスデスク】創業期のスタートアップ3期目・外資系IT企業出身のCEO...",
          subTitle: "株式会社ABC",
          tags: ["エンジニア", "旅行/レジャー/エンタメ"],
          features: [
            {
              icon: "$calender",
              text: "1～3カ月",
            },
            {
              icon: "$time",
              text: "10h～/週",
            },
            {
              icon: "$stipend",
              text: "1,000円",
            },
            {
              icon: "$university",
              text: "4年生のみ",
            },
          ],
        },
        {
          img: "/img/sample-1.png",
          companyLogo: "/img/company-logo.png",
          shareCount: 4,
          likeCount: 4,
          favourited: false,
          title:
            "【コーポレートIT サービスデスク】創業期のスタートアップ3期目・外資系IT企業出身のCEO...",
          subTitle: "株式会社ABC",
          tags: ["エンジニア", "旅行/レジャー/エンタメ"],
          features: [
            {
              icon: "$calender",
              text: "1～3カ月",
            },
            {
              icon: "$time",
              text: "10h～/週",
            },
            {
              icon: "$stipend",
              text: "1,000円",
            },
            {
              icon: "$university",
              text: "4年生のみ",
            },
          ],
        },
        {
          img: "/img/sample-1.png",
          companyLogo: "/img/company-logo.png",
          shareCount: 4,
          likeCount: 4,
          favourited: false,
          title:
            "【コーポレートIT サービスデスク】創業期のスタートアップ3期目・外資系IT企業出身のCEO...",
          subTitle: "株式会社ABC",
          tags: ["エンジニア", "旅行/レジャー/エンタメ"],
          features: [
            {
              icon: "$calender",
              text: "1～3カ月",
            },
            {
              icon: "$time",
              text: "10h～/週",
            },
            {
              icon: "$stipend",
              text: "1,000円",
            },
            {
              icon: "$university",
              text: "4年生のみ",
            },
          ],
        },
        {
          img: "/img/sample-1.png",
          companyLogo: "/img/company-logo.png",
          shareCount: 4,
          likeCount: 4,
          favourited: false,
          title:
            "【コーポレートIT サービスデスク】創業期のスタートアップ3期目・外資系IT企業出身のCEO...",
          subTitle: "株式会社ABC",
          tags: ["エンジニア", "旅行/レジャー/エンタメ"],
          features: [
            {
              icon: "$calender",
              text: "1～3カ月",
            },
            {
              icon: "$time",
              text: "10h～/週",
            },
            {
              icon: "$stipend",
              text: "1,000円",
            },
            {
              icon: "$university",
              text: "4年生のみ",
            },
          ],
        },
        {
          img: "/img/sample-1.png",
          companyLogo: "/img/company-logo.png",
          shareCount: 4,
          likeCount: 4,
          favourited: false,
          title:
            "【コーポレートIT サービスデスク】創業期のスタートアップ3期目・外資系IT企業出身のCEO...",
          subTitle: "株式会社ABC",
          tags: ["エンジニア", "旅行/レジャー/エンタメ"],
          features: [
            {
              icon: "$calender",
              text: "1～3カ月",
            },
            {
              icon: "$time",
              text: "10h～/週",
            },
            {
              icon: "$stipend",
              text: "1,000円",
            },
            {
              icon: "$university",
              text: "4年生のみ",
            },
          ],
        },
      ],
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
    };
  },
  methods: {
    updateCard(company, value) {
      company.favourited = value;
    },
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

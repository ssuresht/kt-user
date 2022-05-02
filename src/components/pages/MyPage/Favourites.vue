<template>
  <div
    class="full-width d-flex align-center justify-center"
    :class="$vuetify.breakpoint.lgAndUp ? 'pt-16 mb-17' : 'pb-10 pt-11'"
  >
    <v-sheet
      color="transparent"
      :width="$vuetify.breakpoint.lgAndUp ? '1300px' : '100%'"
    >
      <v-row v-for="(history, index) in getResponsiveFavourites" :key="index">
        <template v-if="$vuetify.breakpoint.xs">
          <v-col cols="12">
            <div class="d-flex align-center justify-center">
              <div style="width: auto">
                <PostCard
                  :key="index"
                  @toggleFavourite="history.favourited = !history.favourited"
                  v-bind="{
                    ...history,
                  }"
                ></PostCard>
              </div>
            </div>
          </v-col>
        </template>
        <template v-else>
          <v-col
            cols="6"
            :lg="$vuetify.breakpoint.width > 1400 ? 4 : 6"
            v-for="(child, i) in history"
            :key="i"
          >
            <div class="d-flex align-center justify-center">
              <div style="width: auto">
                <PostCard
                  @toggleFavourite="child.favourited = !child.favourited"
                  v-bind="{
                    ...child,
                  }"
                ></PostCard>
              </div>
            </div>
          </v-col>
        </template>
      </v-row>
    </v-sheet>
  </div>
</template>
<script>
import PostCard from "@/components/common/PostCard.vue";
export default {
  components: {
    PostCard,
  },
  data() {
    return {
      historyPosts: [
        {
          img: "/img/sample-1.png",
          companyLogo: "/img/company-logo.png",
          shareCount: 4,
          likeCount: 4,
          favourited: true,
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
          favourited: true,
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
          favourited: true,
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
          favourited: true,
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
          favourited: true,
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
    };
  },
  computed: {
    getResponsiveFavourites() {
      if (this.$vuetify.breakpoint.width > 1400) {
        return this.convertToTwoDMatrix(3);
      }
      if (this.$vuetify.breakpoint.smAndUp) {
        return this.convertToTwoDMatrix(2);
      }
      return this.historyPosts;
    },
  },
  methods: {
    convertToTwoDMatrix(columnSize) {
      let outputArray = [];
      for (let i = 0; i < this.historyPosts.length; i += columnSize) {
        let row = [];
        for (let j = i; j < i + columnSize; j++) {
          if (j === this.historyPosts.length) {
            break;
          }
          row.push(this.historyPosts[j]);
        }
        outputArray.push(row);
      }
      return outputArray;
    },
  },
};
</script>

<template>
  <div>
    <v-card
      flat
      class="tab-container-card"
      color="white"
      width="100%"
      :height="tabContainerHeight"
    >
      <div
        :class="{
          'margin-x-desktop': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <div
          class="text-1f2020"
          :class="{
            'pt-4 px-5 d-flex justify-space-between':
              $vuetify.breakpoint.smAndDown,
            'pt-4 d-flex justify-end': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <div>
            <span
              :class="{
                'font-14px': $vuetify.breakpoint.smAndDown,
                'font-18px': $vuetify.breakpoint.mdAndUp,
              }"
              >山田 太郎</span
            >
            <span
              :class="{
                'font-11px pt-1 pl-1': $vuetify.breakpoint.smAndDown,
                'font-14px pt-1 pl-2  ': $vuetify.breakpoint.mdAndUp,
              }"
              >さんのマイページ</span
            >
          </div>
          <div
            class="font-12px text-8e text-decoration-underline"
            v-if="$vuetify.breakpoint.smAndDown"
          >
            ログアウト
          </div>
        </div>
        <div
          class="d-flex justify-end font-14px mt-3 text-8e text-decoration-underline cursor-pointer"
          v-if="$vuetify.breakpoint.mdAndUp"
        >
          ログアウト
        </div>
        <div>
          <v-tabs
            :class="{
              'tab-mobile': $vuetify.breakpoint.smAndDown,
            }"
            v-model="tab"
            background-color="transparent"
            color="primary"
            class="my-0 tab-container"
          >
            <v-tab
              class="text-8e"
              :class="{
                'font-10px tab': $vuetify.breakpoint.smAndDown,
                'font-16px': $vuetify.breakpoint.mdAndUp,
                
              }"
              v-for="(item, index) in tabItems"
              :key="index"
            >
              {{ item.tabTitle }}
            </v-tab>
          </v-tabs>
        </div>
      </div>
    </v-card>
    <v-tabs-items style="background: transparent" v-model="tab">
      <v-tab-item>
        <favourites />
      </v-tab-item>
      <v-tab-item>
        <profile />
      </v-tab-item>
      <v-tab-item >
        <application-history />
      </v-tab-item>
      <v-tab-item>
        <Feedback />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Profile from "@/components/pages/MyPage/Profile";
import Favourites from "@/components/pages/MyPage/Favourites";
import Feedback from "@/components/pages/MyPage/Feedback";
import ApplicationHistory from "@/components/pages/MyPage/ApplicationHistory";
import { mapGetters } from 'vuex';
export default {
  name: "MyPageParent",
  
  
  components: {
    Profile,
    Favourites,
    Feedback,
    ApplicationHistory,
  },
  computed: {
     ...mapGetters(['user']),
    tabContainerHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "86px" : "124px";
    },
  },
  data() {
    return {
      tab: 1,
      component: null,
      tabItems: [
        {
          componentName: "Favourites",
          tabTitle: "お気に入り",
        },
        {
          componentName: "Profile",
          tabTitle: "プロフィール",
        },
        {
          componentName: "Feedback",
          tabTitle: "フィードバック",
        },
        {
          componentName: "ApplicationHistory",
          tabTitle: "応募履歴",
        },
      ],
    };
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>

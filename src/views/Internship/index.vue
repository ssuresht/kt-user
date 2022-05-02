<template>
  <div
    class="intern-page full-width d-flex flex-column align-center justify-center"
  >
    <v-expansion-panels flat accordion class="d-lg-none rounded-0">
      <v-expansion-panel v-for="(search, index) in searchOptions" :key="index">
        <v-expansion-panel-header class="primary px-4 py-3">
          <div class="fw-500 font-Noto-Sans-Medium font-18px white--text">
            {{ search.count }}
            <span class="fw-400 font-Noto-Sans font-12px">{{
              search.title
            }}</span>
          </div>
          <template v-slot:actions>
            <div class="d-flex align-center justify-center">
              <div class="font-14px fw-400 white--text mr-4">絞り込み</div>
              <v-icon size="12px">$expansionDropdown</v-icon>
            </div>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="search-categories px-4 pb-8 pt-6">
          <v-expansion-panels flat>
            <v-expansion-panel
              v-for="(category, i) in search.categories"
              :key="i"
            >
              <v-expansion-panel-header
                class="px-0"
                :class="[i > 0 ? '' : 'pt-0']"
              >
                <div class="">{{ category.title }}</div>
                <template v-slot:actions>
                  <div class="d-flex align-center jsutify-center">
                    <v-sheet
                      width="189px"
                      class="text-left text-truncate font-12px primary--text fw-400 mr-5"
                    >
                      {{ category.selections }}
                    </v-sheet>
                    <v-icon size="12px">$greyExpansionDropdown</v-icon>
                  </div>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pt-2">
                <v-row no-gutters>
                  <v-col
                    cols="6"
                    v-for="(option, k) in category.options"
                    :key="k"
                  >
                    <v-checkbox
                      :class="[k > 1 ? 'mt-5' : 'mt-0']"
                      class="search-checkbox"
                      v-model="option.id"
                      :ripple="false"
                      @click.stop="updateSearchText(category)"
                      dense
                      hide-details
                    >
                      <template v-slot:label>
                        <div class="font-12px fw-400">{{ option.name }}</div>
                      </template>
                    </v-checkbox>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-text-field
            dense
            single-line
            class="mt-5 mb-3 font-14px"
            height="41px"
            :hide-details="true"
            color="#E5E5E5"
            rounded
            outlined
            v-model="searchQuery"
            placeholder="フリーワード"
          ></v-text-field>
          <v-sheet width="100%" class="d-flex align-center justify-end">
            <v-checkbox
              :ripple="false"
              dense
              :hide-details="true"
              @change="getDataFromApi()"
              v-model="internshipStatusFilter"
              class="pa-0 ma-0"
            >
              <template v-slot:label>
                <div class="fw-400 font-14px pa-0">募集中の求人のみ表示</div>
              </template>
            </v-checkbox>
            <v-btn
              depressed
              fab
              width="43px"
              class="ml-8"
              height="43px"
              @click.stop="getDataFromApi()"
              color="primary"
            >
              <v-icon>$search</v-icon>
            </v-btn>
          </v-sheet>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-card
      color="white"
      max-width="1300px"
      class="pt-10 px-10 pb-8 mt-10 d-none d-lg-block mx-2"
      flat
    >
      <v-row no-gutters>
        <v-col
          v-for="(item, index) in searchOptions[0].categories"
          class="mb-4"
          cols="4"
          :key="index"
        >
          <div
            class="d-flex align-center justify-start"
            :class="adjustSpacing(index)"
          >
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  width="369px"
                  height="44px"
                  color="#E5E5E5"
                  v-on="on"
                  v-bind="attrs"
                  outlined
                  depressed
                >
                  <div
                    class="full-width d-flex align-center justify-space-between"
                  >
                    <div class="font-16px text-1f2020">{{ item.title }}</div>
                    <v-icon size="12px">$greyExpansionDropdown</v-icon>
                  </div>
                </v-btn>
              </template>
              <div class="pr-3 white">
                <v-card
                  max-width="454px"
                  min-width="137px"
                  class="px-10 py-7 dropdown"
                  max-height="239px"
                  min-height="20px"
                  flat
                >
                  <v-row no-gutters class="white">
                    <v-col
                      cols="6"
                      class="mb-4"
                      v-for="(option, i) in item.options"
                      :key="i"
                    >
                      <v-checkbox
                        class="search-checkbox pa-0 ma-0"
                        v-model="option.id"
                        :ripple="false"
                        @click.stop="updateSearchText(item)"
                        dense
                        hide-details
                      >
                        <template v-slot:label>
                          <div class="font-14px fw-400">{{ option.name }}</div>
                        </template>
                      </v-checkbox>
                    </v-col>
                  </v-row>
                </v-card>
              </div>
            </v-menu>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="8">
          <div class="d-flex align-center justify-start">
            <v-sheet color="transparent" max-width="807px" width="807px">
              <v-text-field
                dense
                single-line
                class="font-14px"
                height="44px"
                :hide-details="true"
                color="#E5E5E5"
                rounded
                outlined
                v-model="searchQuery"
                placeholder="フリーワード"
              ></v-text-field>
            </v-sheet>
          </div>
        </v-col>
        <v-col cols="4">
          <v-sheet class="d-flex align-center justify-end">
            <v-sheet width="369px" class="d-flex align-center justify-end">
              <v-checkbox
                :ripple="false"
                dense
                :hide-details="true"
                @change="getDataFromApi()"
                v-model="internshipStatusFilter"
                class="pa-0 ma-0 mr-6"
              >
                <template v-slot:label>
                  <div class="fw-400 font-14px pa-0">募集中の求人のみ表示</div>
                </template>
              </v-checkbox>
              <v-btn
                depressed
                fab
                width="43px"
                class="ml-8"
                height="43px"
                color="primary"
                @click.stop="getDataFromApi()"
              >
                <v-icon>$search</v-icon>
              </v-btn>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
    <!-- order selection -->
    <div class="full-width d-flex justify-start px-4 py-6 d-lg-none">
      <v-btn
        width="164px"
        depressed
        class="font-12px"
        height="32px"
        v-for="(item, index) in filters"
        :key="index"
        :class="[index > 0 ? 'ml-3' : '']"
        :color="item.selected ? '#BCE8E5' : 'white'"
        @click.stop="updateFilter(item)"
        >{{ item.title }}</v-btn
      >
    </div>
    <!-- order selection desktop -->
    <v-card
      flat
      color="transparent"
      max-width="1300px"
      class="justify-space-between full-width my-9 d-none mx-2 d-lg-flex"
    >
      <div class="d-flex justify-center align-center">
        <v-btn
          width="164px"
          depressed
          class="font-12px"
          height="32px"
          v-for="(item, index) in filters"
          :key="index"
          :class="[index > 0 ? 'ml-3' : '']"
          :color="item.selected ? '#BCE8E5' : 'white'"
          @click.stop="updateFilter(item)"
          >{{ item.title }}</v-btn
        >
      </div>
      <div class="font-24px fw-500 font-Noto-Sans-Medium text-1f2020">
        {{ searchOptions[0].count }}
        <span class="font-16px fw-400 font-Noto-Sans">{{
          searchOptions[0].title
        }}</span>
      </div>
    </v-card>
    <template>
      <v-sheet
        color="transparent"
        :max-width="$vuetify.breakpoint.mdAndDown ? '100%' : '1300px'"
        :class="[$vuetify.breakpoint.mdAndDown ? 'px-4' : '']"
      >
        <v-row>
          <v-col
            cols="12"
            md="3"
            sm="4"
            v-for="(internship, index) in getAllInternship"
            :key="index"
          >
            <PostCard
              @toggleFavourite="internship.favourited = !internship.favourited"
              :internship="internship"
            ></PostCard>
          </v-col>
        </v-row>
      </v-sheet>
      <Pagination
        :total-pages="
          getInternshipPagination ? getInternshipPagination.total_pages : 0
        "
        :class="[$vuetify.breakpoint.lgAndUp ? 'my-16' : 'my-9']"
      ></Pagination>
    </template>
  </div>
</template>
<script>
import PostCard from "@/components/common/PostCard.vue";
import Pagination from "@/components/common/Pagination.vue";
import { mapGetters } from "vuex";
export default {
  name: "JobList",
  components: {
    PostCard,
    Pagination,
  },
  data() {
    return {
      loading: false,
      page: 1,
      sortBy: "id",
      sortByOrder: "desc",
      internshipStatusFilter: true,
      searchQuery: null,
      filters: [
        {
          title: "お気に入りが多い順",
          sort_by: "favorites_count",
          selected: true,
        },
        {
          title: "応募者が多い順",
          sort_by: "applications_count",
          selected: false,
        },
      ],
    };
  },
  created() {
    this.getDataFromApi();
    let this_this = this;
    this.$root.$on("PaginatePageNumber", function (event) {
      if (this_this.page !== event) {
        this_this.page = event;
        this_this.getDataFromApi();
      }
    });
  },
  computed: {
    ...mapGetters([
      "getAllInternship",
      "getInternshipPagination",
      "getInternshipCounts",
      "getApiProcessingStatus",
    ]),
    searchOptions() {
      return [
        {
          count: this.getInternshipPagination?.records_total ?? 0,
          title: "件",
          categories: [
            {
              title: "業種",
              name: "business_industories",
              selections: "",
              options: this.getMasterData?.business_industories,
            },
            {
              title: "職種",
              name: "work_categories",
              selections: "",
              options: this.getMasterData?.work_categories,
            },
            {
              title: "インターン期間",
              name: "internship_feature_list",
              selections: "",
              options: this.getMasterData?.internship_feature_list,
            },
            {
              title: "週稼働時間",
              name: "period",
              selections: "",
              options: this.getMasterData?.period,
            },
            {
              title: "対象学年",
              name: "workload",
              selections: "",
              options: this.getMasterData?.workload,
            },
            {
              title: "特徴",
              name: "target_grade",
              selections: "",
              options: this.getMasterData?.target_grade,
            },
          ],
        },
      ];
    },
  },
  methods: {
    async getDataFromApi() {
      let data = { paginate: 12, page: this.page };
      if (this.sortBy) {
        data.sort_by = this.sortBy;
        data.sort_by_order = this.sortByOrder;
      }

      data.status = "N";
      if (this.internshipStatusFilter) {
        data.status = "Y";
      }

      if (this.searchQuery) {
        data.search = this.searchQuery;
      }

      await this.$store
        .dispatch("INTERNSHIP_GET_ALL", data)
        .then(() => {})
        .catch(() => {});
    },
    updateFilter(item) {
      this.sortBy = item.sort_by;
      this.sortByOrder = "desc";
      this.getDataFromApi();

      this.filters.forEach((filter) => {
        if (filter.title === item.title) {
          filter.selected = true;
        } else {
          filter.selected = false;
        }
      });
    },
    updateSearchText(searchOption) {
      console.log(searchOption);
      searchOption.selections = "";
      searchOption.options.forEach((opt) => {
        if (opt.value) {
          if (searchOption.selections.length > 0) {
            searchOption.selections += "、" + opt.title;
          } else {
            searchOption.selections += opt.title;
          }
        }
      });
    },
    adjustSpacing(index) {
      if (index === 0 || index === 3) {
        return "justify-start";
      }
      if (index === 1 || index === 4) {
        return "justify-center";
      }
      if (index === 2 || index === 5) {
        return "justify-end";
      }
    },
  },
};
</script>
<style src="./styles.scss" lang="scss" scoped></style>

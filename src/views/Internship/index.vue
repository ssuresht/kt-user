<template>
  <div
    class="intern-page full-width d-flex flex-column align-center justify-center"
  >
    <v-expansion-panels flat accordion class="d-lg-none rounded-0">
      <v-expansion-panel>
        <v-expansion-panel-header class="primary px-4 py-3">
          <div class="fw-500 font-Noto-Sans-Medium font-18px white--text">
            {{
              getInternshipPagination
                ? getInternshipPagination.records_total
                : 0
            }}
            <span class="fw-400 font-Noto-Sans font-12px">件</span>
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
            <v-expansion-panel v-for="(category, i) in categories" :key="i">
              <v-expansion-panel-header
                class="px-0"
                :class="[i > 0 ? '' : 'pt-0']"
              >
                <div class="text-truncate">{{ category.title }}</div>
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
                      v-model="option.checkbox"
                      @click.native="getSelectedOptions(false, category)"
                      :ripple="false"
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
          v-for="(item, index) in categories"
          class="mb-4"
          cols="4"
          :key="index"
        >
          <div class="d-flex align-center justify-start">
            <v-menu
              @input="getSelectedOptions($event, item)"
              offset-y
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  width="369px"
                  height="44px"
                  color="#E5E5E5"
                  v-on="on"
                  v-bind="attrs"
                  outlined
                  depressed
                  class="justify-space-between"
                >
                  <div
                    class="max-width-300 font-16px text-1f2020 text-truncate"
                    :class="item.selections ? 'text-primary' : ''"
                  >
                    {{ item.selections ? item.selections : item.title }}
                  </div>
                  <v-icon size="12px">$greyExpansionDropdown</v-icon>
                  <!-- <div
                    class="full-width d-flex align-center justify-space-between"
                  >
                  </div> -->
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
                        v-model="option.checkbox"
                        :ripple="false"
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
        {{
          getInternshipPagination ? getInternshipPagination.records_total : 0
        }}
        <span class="font-16px fw-400 font-Noto-Sans">件</span>
      </div>
    </v-card>
    <template v-if="loading && apiProcessing">
      <v-row justify="center" class="py-10">
        <v-col cols="auto">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <v-sheet
        color="transparent"
        :max-width="$vuetify.breakpoint.mdAndDown ? '100%' : '1300px'"
        width="100%"
        :class="[$vuetify.breakpoint.mdAndDown ? 'px-4' : '']"
      >
        <v-row justify="space-between">
          <v-col
            cols="auto"
            v-for="(internship, index) in getAllInternship"
            :key="index"
          >
            <PostCard
              @toggleFavourite="toggleFavourite"
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
      apiProcessing: false,
      page: 1,
      sortBy: "display_order",
      sortByOrder: "asc",
      internshipStatusFilter: false,
      searchQuery: null,
      categories: [],
      filters: [
        {
          title: "おすすめ順",
          sort_by: "display_order",
          selected: true,
          sort_by_order:"asc"
        },
        {
          title: "新着順",
          sort_by: "public_date",
          selected: false,
          sort_by_order:"desc"
        },
        {
          title: "お気に入りが多い順",
          sort_by: "favorites_count",
          selected: false,
          sort_by_order:"desc"
        },
        {
          title: "応募者が多い順",
          sort_by: "applications_count",
          selected: false,
          sort_by_order:"desc"
        },
      ],
    };
  },
  created() {
    this.categories = [
      {
        title: "業界",
        name: "business_industry_ids",
        selections: "",
        options: this.getMasterData?.business_industories
          ? this.getMasterData?.business_industories.map((item) => {
              item.checkbox = false;
              return item;
            })
          : [],
      },
      {
        title: "職種",
        name: "work_category_ids",
        selections: "",
        options: this.getMasterData?.work_categories
          ? this.getMasterData?.work_categories.map((item) => {
              item.checkbox = false;
              return item;
            })
          : [],
      },
      {
        title: "特徴",
        name: "internship_feature_list",
        selections: "",
        options: this.getMasterData?.internship_feature_list
          ? this.getMasterData?.internship_feature_list.map((item) => {
              item.checkbox = false;
              return item;
            })
          : [],
      },
      {
        title: "インターン期間",
        name: "period",
        selections: "",
        options: this.getMasterData?.period
          ? this.getMasterData?.period.map((item) => {
              item.checkbox = false;
              return item;
            })
          : [],
      },
      {
        title: "週稼働時間",
        name: "workload",
        selections: "",
        options: this.getMasterData?.workload
          ? this.getMasterData?.workload.map((item) => {
              item.checkbox = false;
              return item;
            })
          : [],
      },
      {
        title: "対象学年",
        name: "target_grade",
        selections: "",
        options: this.getMasterData?.target_grade
          ? this.getMasterData?.target_grade.map((item) => {
              item.checkbox = false;
              return item;
            })
          : [],
      },
    ];
    this.apiProcessing = this.$store.state.apiProcessing;
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
      "getApiProcessingStatus",
      "getTopSearchQueries",
      "user",
    ]),
  },
  methods: {
    toggleFavourite(internship) {
      if (this.user?.id) {
        const data = {
          internship_post_id: internship.id,
          is_favourite: !internship.is_favourited,
        };
        internship.is_favourited = data.is_favourite; // Just toggle

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
    async getDataFromApi() {
      let data = { paginate: 12, page: this.page };
      if (this.getTopSearchQueries) {
        data = { ...data, ...this.getTopSearchQueries };
        for (let item in this.getTopSearchQueries) {
          let categories = this.categories.filter(
            (category) => category.name === item
          )[0];

          this.getTopSearchQueries[item].forEach((selected) => {
            let search = categories.options.find((cat) => cat.id === selected);
            if (search) {
              if (categories.selections.length > 0) {
                categories.selections += "、" + search.name;
              } else {
                categories.selections += search.name;
              }
            }
          });
        }
      } else {
        if (this.sortBy) {
          data.sort_by = this.sortBy;
          data.sort_by_order = this.sortByOrder;
        }

        if (this.categories) {
          this.categories.forEach((category) => {
            if (category.options && category.options.length) {
              category.options.forEach((item, index) => {
                if (item.checkbox) {
                  data[`${category.name}[${index}]`] = item.id;
                }
              });
            }
          });
        }
      }

      data.status = "N";
      if (this.internshipStatusFilter) {
        data.status = "Y";
      }

      if (this.searchQuery) {
        data.search = this.searchQuery;
      }

      this.loading = true;
      await this.$store
        .dispatch("INTERNSHIP_GET_ALL", data)
        .then(() => {
          this.loading = false;
          this.$store.commit("ADD_TOP_PAGE_SEARCH_QUERRIES", null);
        })
        .catch((error) => {
          this.$store.commit("showAlert", {
            text:
              this.$t(error?.response?.data?.errors?.message) ||
              this.$t(error?.response?.data?.message),
            successStatus: true,
          });
        });
    },
    getSelectedOptions(e, item) {
      this.$nextTick(function () {
        if (!e) {
          item.selections = item.options
            .filter((option) => option.checkbox)
            .map((opt) => opt.name)
            .join("、");
        }
      });
    },
    updateFilter(item) {
      console.log(item.sort_by_order);
      this.sortBy = item.sort_by;
      this.sortByOrder = item.sort_by_order;
      this.getDataFromApi();

      this.filters.forEach((filter) => {
        if (filter.title === item.title) {
          filter.selected = true;
        } else {
          filter.selected = false;
        }
      });
    },
  },
};
</script>
<style src="./styles.scss" lang="scss" scoped></style>

<template>
  <v-container class="intern-detail-page my-5">
    <v-row>
      <v-col cols="12" md="12">
        <div
          class="position-relative company-image"
          :class="{
            'mx-n3 no-border-radius': $vuetify.breakpoint.smAndDown,
          }"
        >
          <v-img
            width="100%"
            class="image-fluid"
            :class="{
              'no-border-radius': $vuetify.breakpoint.smAndDown,
            }"
            :height="$vuetify.breakpoint.mdAndUp ? '404px' : '224px'"
            lazy-src="getSingleInternship.seo_featured_image"
            :src="getSingleInternship.seo_featured_image"
          >
          </v-img>
          <!-- add to favorites -->
          <div class="position-absolute heart-icon">
            <v-sheet v-if="getSingleInternship" color="transparent" v-ripple>
              <v-icon
                @click.stop="toggleFavarite()"
                :size="$vuetify.breakpoint.smAndDown ? '35px' : '54px'"
                >{{ isFavaourited ? `$favourited` : `$heart` }}</v-icon
              >
            </v-sheet>
          </div>
          <div
            class="
              position-absolute
              post-counter
              d-flex
              align-center
              justify-center
              mr-5
            "
            :class="{
              'position-absolute post-counter  d-flex  align-center  justify-center mb-3':
                $vuetify.breakpoint.mdAndUp,
              'mb-0': $vuetify.breakpoint.smAndDown,
            }"
          >
            <v-sheet
              v-ripple
              color="transparent"
              class="d-flex align-center justify-center fw-400"
              :class="{
                'mr-5': $vuetify.breakpoint.mdAndUp,
                'mr-3': $vuetify.breakpoint.smAndDown,
              }"
            >
              <v-icon
                :size="$vuetify.breakpoint.smAndDown ? '14px' : '33px'"
                :class="{
                  'mr-4': $vuetify.breakpoint.mdAndUp,
                  'mr-1': $vuetify.breakpoint.smAndDown,
                }"
                >$DetailLoveIcon</v-icon
              >
              <div
                class="white--text"
                :class="{
                  'font-24px': $vuetify.breakpoint.mdAndUp,
                  'font-14px ml-2 pt-1': $vuetify.breakpoint.smAndDown,
                }"
              >
                {{ getSingleInternship.favorites_count }}
              </div>
            </v-sheet>
            <v-sheet
              v-ripple
              color="transparent"
              class="d-flex align-center justify-center fw-400"
            >
              <v-icon
                :size="$vuetify.breakpoint.smAndDown ? '14px' : '35px'"
                color="white"
                :class="{
                  'mr-2': $vuetify.breakpoint.mdAndUp,
                  'mr-0': $vuetify.breakpoint.smAndDown,
                }"
                >$share</v-icon
              >
              <div
                class="white--text"
                :class="{
                  'font-24px': $vuetify.breakpoint.mdAndUp,
                  'font-14px ml-2 pt-1': $vuetify.breakpoint.smAndDown,
                }"
              >
                {{ getSingleInternship.applications_count }}
              </div>
            </v-sheet>
          </div>
        </div>
        <div
          class="d-flex align-center"
          :class="{
            'justify-space-between mt-7': $vuetify.breakpoint.mdAndUp,
            'justify-end mt-2': $vuetify.breakpoint.smAndDown,
          }"
        >
          <span
            class="text-8e fw-400"
            :class="{
              'font-18px': $vuetify.breakpoint.mdAndUp,
              'font-12px': $vuetify.breakpoint.smAndDown,
            }"
            >更新日：{{
              getSingleInternship.updated_at | dayjs("YYYY年MM月DD日")
            }}</span
          >
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-btn
              :class="{
                'font-14px': $vuetify.breakpoint.smAndDown,
                'font-18px': $vuetify.breakpoint.mdAndUp,
              }"
              @click="checkForInternApply()"
              :color="
                !getSingleInternship.is_applied_applications
                  ? `primary`
                  : `#AA158B`
              "
              height="auto"
              :min-width="buttonWidth"
              :min-height="buttonHeight"
            >
              <template v-if="!getSingleInternship.is_applied_applications">
                <v-icon size="22px" color="white" class="mr-2"
                  >$MediumShareIcon</v-icon
                >
                <span class="white--text">このインターンに応募する</span>
              </template>
              <template v-else>
                <v-icon size="22px" color="white" class="mr-2"
                  >$warningIcon</v-icon
                >
                <span class="white--text">辞退する</span>
              </template>
            </v-btn>
          </template>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8" class="py-0 mt-md-n2 mt-sm-n1 mt-n1">
        <div class="post-title pr-4">
          <h2
            class="text-1f2020 fw-500"
            :class="{
              'font-24px': $vuetify.breakpoint.mdAndUp,
              'font-16px': $vuetify.breakpoint.smAndDown,
            }"
          >
            {{ getSingleInternship.title }}
          </h2>
        </div>
      </v-col>
      <v-col cols="12" md="12" class="mt-md-2">
        <div
          class="d-md-flex align-center tags-list text-1f2020"
          :class="{
            'font-18px': $vuetify.breakpoint.mdAndUp,
            'font-14px': $vuetify.breakpoint.smAndDown,
          }"
        >
          <div class="d-flex mr-7 company-logo-tag mb-md-auto mb-sm-3 mb-3">
            <span
              class="company-log-box mr-2 d-flex"
              v-if="
                getSingleInternship.company &&
                getSingleInternship.company.logo_img
              "
            >
              <img
                :src="
                  getSingleInternship.company &&
                  getSingleInternship.company.logo_img
                    ? getSingleInternship.company.logo_img
                    : '/img/company-logo.png'
                "
                onerror="this.src='/img/company-logo.png'"
                class="ma-auto"
              />
            </span>
            <span class="my-auto">
              {{
                getSingleInternship.company
                  ? getSingleInternship.company.name
                  : "-"
              }}
            </span>
          </div>

          <div
            class="d-flex mr-7 mb-md-auto mb-sm-2 mb-2"
            v-if="
              getSingleInternship.company &&
              getSingleInternship.company.business_industry
            "
          >
            <span
              class="tag-box bg-e5e5e5 px-3 py-1 mr-2"
              :class="{
                'font-18px': $vuetify.breakpoint.mdAndUp,
                'font-14px': $vuetify.breakpoint.smAndDown,
              }"
            >
              業界
            </span>
            <span class="my-auto">
              {{ getSingleInternship.company.business_industry.name }}
            </span>
          </div>

          <div class="d-flex mr-7 mb-md-auto mb-sm-2 mb-2">
            <span
              class="tag-box bg-e5e5e5 px-3 py-1 mr-2"
              :class="{
                'font-18px': $vuetify.breakpoint.mdAndUp,
                'font-14px': $vuetify.breakpoint.smAndDown,
              }"
            >
              職種
            </span>
            <span v-if="getSingleInternship.work_category" class="my-auto">
              {{ getSingleInternship.work_category.name }}
            </span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex mt-md-3 mt-sm-n2 mt-n2">
        <v-card
          class="
            feature-card-list
            no-box-shadow
            px-md-10 px-sm-5 px-5
            py-md-9 py-sm-4 py-4
            full-width
          "
        >
          <v-sheet
            v-for="(feature, index) in features"
            :key="index"
            class="d-flex align-center border-bottom py-3 px-4"
          >
            <v-icon :size="feature.size" class="mr-3">{{
              feature.icon
            }}</v-icon>
            <div
              :class="{
                'font-16px': $vuetify.breakpoint.mdAndUp,
                'font-14px': $vuetify.breakpoint.smAndDown,
              }"
            >
              {{ feature.text }}
            </div>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="d-flex mt-md-3 mt-sm-n2 mt-n2">
        <v-card
          class="
            advantages-card-list
            no-box-shadow
            px-md-12 px-sm-6 px-6
            py-8
            full-width
          "
        >
          <v-sheet
            v-for="(advantage, index) in advantages"
            :key="index"
            class="d-flex align-center bottom-line gradient-border px-6 py-2"
          >
            <span class="font-Poppins-SemiBold font-20px mr-6">{{
              advantage.label
            }}</span>
            <div
              :class="{
                'font-16px': $vuetify.breakpoint.mdAndUp,
                'font-14px': $vuetify.breakpoint.smAndDown,
              }"
            >
              {{ advantage.text }}
            </div>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col cols="12" md="12" class="mt-md-0 mt-sm-n2 mt-n2">
        <div class="description-txts mt-md-4">
          <h2
            class="
              desc-heading
              primary
              fw-500
              mb-md-8 mb-sm-2 mb-2
              white--text
              d-flex
              align-center
              px-md-6 px-sm-2 px-2
            "
            :class="{
              'font-24px': $vuetify.breakpoint.mdAndUp,
              'font-14px': $vuetify.breakpoint.smAndDown,
            }"
          >
            会社概要
          </h2>
          <v-card
            class="no-box-shadow px-md-16 px-sm-5 px-5 py-md-9 py-sm-4 py-4"
            :class="{
              'font-16px': $vuetify.breakpoint.mdAndUp,
              'font-14px': $vuetify.breakpoint.smAndDown,
            }"
          >
            <span
              v-html="getSingleInternship.description_corporate_profile"
            ></span>
          </v-card>
        </div>
      </v-col>

      <v-col cols="12" md="12" class="mt-md-1 mt-sm-n2 mt-n2">
        <div class="description-txts">
          <h2
            class="
              desc-heading
              primary
              fw-500
              mb-md-8 mb-sm-2
              d-flex
              align-center
              mb-2
              white--text
              px-md-6 px-sm-2 px-2
            "
            :class="{
              'font-24px': $vuetify.breakpoint.mdAndUp,
              'font-14px': $vuetify.breakpoint.smAndDown,
            }"
          >
            募集内容
          </h2>
          <v-card
            class="no-box-shadow px-md-16 px-sm-5 px-5 py-md-9 py-sm-4 py-4"
            :class="{
              'font-16px': $vuetify.breakpoint.mdAndUp,
              'font-14px': $vuetify.breakpoint.smAndDown,
            }"
          >
            <span v-html="getSingleInternship.description_internship_content">
            </span>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="12" class="text-center my-5">
        <v-btn
          :class="{
            'font-14px mobile-button-bottom': $vuetify.breakpoint.smAndDown,
            'font-18px': $vuetify.breakpoint.mdAndUp,
          }"
          @click="checkForInternApply()"
          :color="
            !getSingleInternship.is_applied_applications ? `primary` : `#AA158B`
          "
          height="auto"
          :min-width="buttonWidth"
          :min-height="buttonHeight"
        >
          <template v-if="!getSingleInternship.is_applied_applications">
            <v-icon size="22px" color="white" class="mr-2">mdi-send</v-icon>
            <span class="white--text">このインターンに応募する</span>
          </template>
          <template v-else>
            <v-icon size="22px" color="white" class="mr-2">$warningIcon</v-icon>
            <span class="white--text">辞退する</span>
          </template>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "InternshipDetail",
  data() {
    return {
      loading: false,
      isFavaourited: 0,
    };
  },
  created() {
    this.getDataFromApi();
  },
  computed: {
    ...mapGetters(["getSingleInternship", "user"]),
    buttonWidth() {
      return this.$vuetify.breakpoint.smAndDown ? "293px" : "318px";
    },
    buttonHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "41px" : "54px";
    },
    features() {
      return [
        {
          icon: "$calender",
          text: this.getSingleInternship?.period_value?.name,
          size: "18px",
        },
        {
          icon: "$time",
          text: this.getSingleInternship?.workload_value?.name,
          size: "18px",
        },
        {
          icon: "$stipend",
          text: this.getSingleInternship?.wage_value?.name,
          size: "18px",
        },
        {
          icon: "$university",
          text: this.getSingleInternship?.target_grade_value?.name,
          size: "18px",
        },
        {
          icon: "$fingerTouch",
          text: Array.prototype.map
            .call(
              this.getSingleInternship?.internship_feature_posts ?? [],
              (val) => val.name
            )
            .join(", "),
          size: "20px",
        },
      ];
    },
    advantages() {
      return [
        {
          label: "01",
          text: this.getSingleInternship?.application_step_1 ?? "-",
        },
        {
          label: "02",
          text: this.getSingleInternship?.application_step_2 ?? "-",
        },
        {
          label: "03",
          text: this.getSingleInternship?.application_step_3 ?? "-",
        },
        {
          label: "04",
          text: this.getSingleInternship?.application_step_4 ?? "-",
        },
      ];
    },
  },
  methods: {
    getDataFromApi() {
      this.loading = true;
      this.$store
        .dispatch("INTERNSHIP_GET", { id: this.$route.params.id })
        .then(() => {
          this.loading = false;
          this.isFavaourited = this.getSingleInternship?.is_favourite;
          this.getSingleInternship.is_applied_applications =
            this.getSingleInternship?.is_applied_applications;
        })
        .catch(() => {
          this.$router.push({ name: "Internships" });
        });
    },
    checkForInternApply() {
      if (this.getSingleInternship?.is_applied_applications) {
        this.$store.commit("showModal", {
          component: "DeclineInternshipModal",
          width: "900px",
          height: "507px",
        });
      } else if (!this.user?.id) {
        this.$store.commit("showModal", {
          component: "LoginModal",
          width: "981px",
          height: "448px",
        });
      } else {
        this.$router.push({ name: "JobApplicationCreate" });
      }
    },
    toggleFavarite() {
      this.loading = true;
      if (this.user?.id) {
        const data = {
          internship_post_id: this.$route.params.id,
          is_favourite: !this.isFavaourited,
        };

        this.isFavaourited = data.is_favourite;

        this.$store
          .dispatch("INTERNSHIP_GET_FAVOURITE", data)
          .then((response) => {
            this.loading = false;
            let responseData = response?.data?.data;
            this.isFavaourited = responseData.favourited;
            this.getSingleInternship.favorites_count =
              responseData.total_counts;
          });
      } else {
        this.$store.commit("showModal", {
          component: "FavouriteLogin",
          width: "900px",
          height: "350px",
        });
      }
    },
  },
};
</script>

<style src="./styles.scss" lang="scss" scoped></style>

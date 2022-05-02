<template>
  <v-card
    class="full-width"
    @click.stop="
      $router.push({ name: 'InternshipDetails', params: { id: internship.id } })
    "
  >
    <div class="position-relative company-image">
      <v-img
        width="100%"
        height="190px"
        :lazy-src="internship.seo_featured_image"
        :src="internship.seo_featured_image"
      >
      </v-img>
      <!-- add to favorites -->
      <div class="position-absolute heart-icon">
        <v-sheet color="transparent" v-ripple>
          <v-icon
            v-if="internship.is_favourited"
            @click.stop="$emit('toggleFavourite')"
            size="25px"
            >$favourited</v-icon
          >
          <v-icon v-else size="25px" @click.stop="$emit('toggleFavourite')"
            >$heart</v-icon
          >
        </v-sheet>
      </div>
      <!-- new post mark -->
      <div
        class="position-absolute new-mark"
        v-if="internship.is_new_internship"
      >
        <NewPostMark></NewPostMark>
      </div>
      <!-- information about it like how many shared and added it to favorite -->
      <div class="position-absolute d-flex align-center justify-center action">
        <v-sheet
          v-ripple
          color="transparent"
          class="d-flex align-center justify-center mr-3"
        >
          <v-icon size="17px" class="mr-2">$loved</v-icon>
          <div class="white--text">{{ internship.favorites_count }}</div>
        </v-sheet>
        <v-sheet
          v-ripple
          color="transparent"
          class="d-flex align-center justify-center"
        >
          <v-icon size="17px" color="white" class="mr-2">mdi-send</v-icon>
          <div class="white--text">{{ internship.applications_count }}</div>
        </v-sheet>
      </div>
      <!-- company logo -->
      <div class="position-absolute company-logo">
        <v-sheet
          color="#F4326D"
          width="47px"
          height="47px"
          class="d-flex align-center justify-center"
        >
          <v-img
            width="17px"
            height="17px"
            contain
            :src="
              internship.company && internship.company.logo_img
                ? internship.company.logo_img
                : '/img/company-logo.png'
            "
            onerror="this.src='/img/company-logo.png'"
          >
          </v-img>
        </v-sheet>
      </div>
    </div>
    <div class="d-flex align-center justify-start mt-4 ml-5 font-12px">
      <v-chip
        v-if="internship.company && internship.company.business_industry"
        color="primary lighten-4"
        class="mr-2 black--text"
      >
        {{ internship.company.business_industry.name }}
      </v-chip>
      <v-chip
        v-if="internship.work_category"
        color="primary lighten-4"
        class="mr-2 black--text"
      >
        {{ internship.work_category.name }}
      </v-chip>
    </div>
    <v-card-title class="font-14px fw-500 pb-0 pt-2 font-Noto-Sans-Bold">
      {{ internship.title }}
    </v-card-title>
    <v-card-subtitle class="mt-1 mb-2 py-0" v-if="internship.company">
      {{ internship.company.name }}
    </v-card-subtitle>
    <v-card-actions class="d-flex align-center justify-space-around pb-0">
      <v-sheet
        color="background"
        v-for="(feature, index) in features()"
        :key="index"
        width="72px"
        height="58px"
        class="d-flex flex-column align-center justify-center ml-1 mb-4"
      >
        <v-icon size="18px" class="mb-1">{{ feature.icon }}</v-icon>
        <div class="font-12px">{{ feature.text }}</div>
      </v-sheet>
    </v-card-actions>
  </v-card>
</template>
<script>
import NewPostMark from "@/components/other/NewPostMark";
export default {
  components: {
    NewPostMark,
  },
  props: {
    internship: {
      type: Object,
      required: true,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    features() {
      return [
        {
          icon: "$calender",
          text: this.internship?.period_value?.name,
        },
        {
          icon: "$time",
          text: this.internship?.workload_value?.name,
        },
        {
          icon: "$stipend",
          text: this.internship?.wage_value?.name,
        },
        {
          icon: "$university",
          text: this.internship?.target_grade_value?.name,
        },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.company-image {
  border-radius: 12px !important;
}
.heart-icon {
  top: 17px;
  right: 20px;
  z-index: 3;
}

.action {
  bottom: 16px;
  right: 20px;
}
.company-logo {
  bottom: 0px;
  left: 0px;
  .v-sheet {
    border-radius: 0px 10px 0px 0px;
  }
}
.new-mark {
  top: -0.6%;
  left: -0.6%;
}
</style>

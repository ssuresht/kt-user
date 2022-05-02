<template>
  <div class="zindex-1">
    <v-card flat color="#F9CC57" class="borderradius-0">
      <v-container >
        <div class="student-one">
          <v-row
          no-gutters
            :class="{
              'center-sm': $vuetify.breakpoint.sm,
              'center-xs': $vuetify.breakpoint.xs,
              'center-md-and-up': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <v-col cols="12" md="5"
              :class="{
                'mb-5': $vuetify.breakpoint.smAndDown,
              }"
            >
              <div class="d-flex justify-center">
                <student-one-image />
              </div>
            </v-col>
            <v-col cols="12" md="7" class="d-flex justify-center align-center">
              <div>
                <div
                  class="font-Noto-Sans-Bold text-fff"
                  :class="{
                    'font-18px text-center': $vuetify.breakpoint.sm,
                    'font-16px text-center': $vuetify.breakpoint.xs,
                    'font-30px': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  <h3 class="sub-subtitle">新しいことにチャレンジする <br />
                  全国の学生</h3>
                </div>
                <div
                  class="fw-400 mt-4"
                  :class="{
                    'font-13px mt-3': $vuetify.breakpoint.sm,
                    'font-12px mt-2': $vuetify.breakpoint.xs,
                    'font-16px mt-4': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  従来は出会えなかった、新しい形態の <br />
                  インターンに挑戦するパワフルな学生
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import StudentOneImage from "@/components/other/StudentOneImage";
export default {
  name: "StudentOne",
  components: {
    StudentOneImage,
  },
};
</script>

<style scoped src="./StudentOne.scss" lang="scss"/>

<style lang="scss" scoped>
.zindex-1{
  z-index: 1;
}
/* .center-md-and-up {
  margin-left: 25% !important;
  margin-right: 20% !important;
}
.center-sm {
  margin-left: 160px !important;
  margin-right: 100px !important;
} */
</style>

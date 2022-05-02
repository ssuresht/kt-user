<template>
  <div class="zindex-1">
    <v-card flat color="#EC5D5D" class="borderradius-0">
      <v-container>
        <div class="student-two">
          <v-row
          no-gutters
            :class="{
              'center-sm': $vuetify.breakpoint.sm,
              'center-md-and-up': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <v-col cols="12" md="5" class="d-flex align-center">
              <div class="hidden-sm-and-down">
                <div
                  v-if="$vuetify.breakpoint.mdAndUp"
                  class="font-Noto-Sans-Bold text-fff font-30px"
                >
                  <h3 class="sub-subtitle">成長意欲の高い学生</h3>
                </div>
                <div class="fw-400 mt-4 font-16px">
                  1−2年生から自身や世の中に高い関心を<br />
                  持っている学生
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="7">
              <div class="d-flex justify-center hidden-sm-and-down"
                :class="{
                'mb-5': $vuetify.breakpoint.smAndDown,
              }"
              >
                <student-two-image />
              </div>
              <div class="d-flex justify-center align-center">
                <div class="hidden-md-and-up">
                  <div
                    class="fw-900 text-fff text-center"
                    :class="{
                      'font-18px': $vuetify.breakpoint.sm,
                      'font-16px': $vuetify.breakpoint.xs,
                    }"
                  >
                    <h3 class="sub-subtitle">成長意欲の<br />
                    高い学生</h3>
                  </div>
                  <div
                    class="fw-400 mt-4"
                    :class="{
                      'font-13px mt-3': $vuetify.breakpoint.sm,
                      'font-12px mt-2': $vuetify.breakpoint.xs,
                    }"
                  >
                    1−2年生から自身や世の中に高い関心<br />を持っている学生
                  </div>
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
import StudentTwoImage from "@/components/other/StudentTwoImage";
export default {
  name: "StudentTwo",
  components: {
    StudentTwoImage,
  },
};
</script>

<style scoped src="./StudentTwo.scss" lang="scss"/>

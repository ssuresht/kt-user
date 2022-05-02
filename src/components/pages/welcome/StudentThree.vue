<template>
  <div class="zindex-1">
    <v-card flat color="#B4F88B" class="borderradius-0">
      <v-container>
        <div class="student-three">
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
              <div class="d-flex justify-center student-img">
                <student-three-image />
              </div>
            </v-col>
            <v-col cols="12" md="7" class="d-flex justify-center align-center">
              <div>
                <div
                  v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
                  class="text-center font-Noto-Sans-Bold text-fff"
                  :class="{
                    'font-18px': $vuetify.breakpoint.sm,
                    'font-16px': $vuetify.breakpoint.xs,
                  }"
                >
                  <h3 class="sub-subtitle">IT分野の意識が<br/>高い学生</h3>
                </div>
                <div v-if="$vuetify.breakpoint.mdAndUp" class="font-Noto-Sans-Bold text-fff font-30px">
                  <h3 class="sub-subtitle">IT分野の意識が高い学生</h3>
                </div>
                <div
                  class="fw-400 mt-4"
                  :class="{
                    'font-13px mt-3': $vuetify.breakpoint.sm,
                    'font-12px mt-2': $vuetify.breakpoint.xs,
                    'font-16px mt-4': $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  オンラインで業務をこなす能力をもつ
                  <br />
                  スマートな学生
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
import StudentThreeImage from "@/components/other/StudentThreeImage";
export default {
  name: "StudentOne",
  components: {
    StudentThreeImage,
  },
};
</script>

<style scoped src="./StudentThree.scss" lang="scss"/>

<style lang="scss" scoped>
.zindex-1{
  z-index: 1;
}
/* .center-md-and-up {
  padding-left: 25% !important;
  padding-right: 20% !important;
}
.center-sm {
  padding-left: 160px !important;
  padding-right: 100px !important;
} */
/* .relative{
  position: relative;
} */
/* .absolute{
  position: absolute;
  right: 50px;
  @media(max-width: 959px){
    right: 50%;
    transform: translateX(50%);
  }
} */
/* .height-350px{
  height: 350px;
   @media(max-width: 959px){
    margin-top: 85px;
    height: 230px;
    align-items: flex-end !important;
  }
} */
</style>

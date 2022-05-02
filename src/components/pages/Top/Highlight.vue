<template>
  <div class="hero-svgs">
    <template v-if="$vuetify.breakpoint.mdAndDown">
      <v-sheet
        v-if="type === 1"
        color="white"
        class="circle position-relative md-computer circle-border"
        width="134px"
        height="134px"
      >
        <div class="position-absolute computer-icon">
          <v-icon>$computer</v-icon>
        </div>
        <div
          class="position-absolute font-13px text-00332f font-Noto-Sans-Medium"
        >
          オンライン限定
        </div>
        <div class="position-absolute font-12px text-center text-8e">
          長期インターン<br />だけを掲載
        </div>
      </v-sheet>
      <v-sheet
        v-if="type === 2"
        color="white"
        class="circle position-relative md-home circle-border"
        width="134px"
        height="134px"
      >
        <div class="position-absolute computer-icon">
          <v-icon size="37px">$home</v-icon>
        </div>
        <div
          class="position-absolute font-13px text-00332f font-Noto-Sans-Medium"
        >
          自宅でも学校でも
        </div>
        <div class="position-absolute text-center font-12px text-8e">
          どこからでも<br />参加可能
        </div>
        <div class="position-absolute font-12px text-8e"></div>
      </v-sheet>
      <v-sheet
        v-if="type === 3"
        color="white"
        class="circle position-relative md-bulb circle-border"
        width="134px"
        height="134px"
      >
        <div class="position-absolute computer-icon">
          <v-icon size="37px">$bulb</v-icon>
        </div>
        <div
          class="position-absolute font-13px text-00332f font-Noto-Sans-Medium"
        >
          経験から発見
        </div>
        <div class="position-absolute text-center font-12px text-8e">
          「なんとなく」を<br />「カタチ」にする
        </div>
        <div class="position-absolute font-12px text-8e"></div>
      </v-sheet>
    </template>
    <template v-else>
      <v-sheet
        class="lg-circle d-flex align-center justify-center"
        width="194px"
        height="194px"
      >
        <v-sheet
          height="171px"
          width="171px"
          color="white"
          class="circle position-relative lg-computer"
          v-if="type === 1"
        >
          <div class="position-absolute">
            <v-icon size="43px">$computer</v-icon>
          </div>
          <div
            class="position-absolute font-18px text-00332f font-Noto-Sans-Medium"
          >
            オンライン限定
          </div>
          <div class="position-absolute font-14px text-center text-6f6f6f">
            長期インターン<br />だけを掲載
          </div>
        </v-sheet>
        <v-sheet
          height="171px"
          width="171px"
          color="white"
          class="circle position-relative lg-home"
          v-if="type === 2"
        >
          <div class="position-absolute">
            <v-icon size="43px">$home</v-icon>
          </div>
          <div
            class="position-absolute font-18px text-00332f font-Noto-Sans-Medium"
          >
            自宅でも学校でも
          </div>
          <div class="position-absolute font-14px text-center text-6f6f6f">
            どこからでも<br />参加可能
          </div>
        </v-sheet>
        <v-sheet
          height="171px"
          width="171px"
          color="white"
          class="circle position-relative lg-bulb"
          v-if="type === 3"
        >
          <div class="position-absolute">
            <v-icon size="43px">$bulb</v-icon>
          </div>
          <div
            class="position-absolute font-18px text-00332f font-Noto-Sans-Medium"
          >
            経験から発見
          </div>
          <div class="position-absolute font-14px text-center text-6f6f6f">
            「なんとなく」を<br />「カタチ」にする
          </div>
        </v-sheet>
      </v-sheet>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./index.scss"></style>

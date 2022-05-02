<template>
  <div class="">
    <v-sheet
      v-if="$vuetify.breakpoint.mdAndDown"
      width="264px"
      height="34px"
      color="#FFD166"
      class="rounded-pill d-flex align-center justify-center position-relative mt-12"
    >
      <span class="mr-7">かんたん</span>
      <span>ステップ</span>
      <div class="position-absolute count">
        <img src="@/assets/images/3.png" alt="" />
      </div>
    </v-sheet>
    <v-sheet
      v-else
      width="264px"
      height="41px"
      color="#FFD166"
      class="rounded-pill d-flex align-center justify-center position-relative mt-16"
    >
      <span class="mr-13">かんたん</span>
      <span>ステップ</span>
      <div class="position-absolute count-lg">
        <img src="@/assets/images/3.png" alt="" />
      </div>
    </v-sheet>
  </div>
</template>
<style lang="scss" scoped>
.count {
 bottom: -30.99%;
 left: 46%;
  img {
    width: 22px;
    height: 60px;
  }
}
.count-lg {
  bottom: -52.99%;
  img {
    width: 40px;
    height: 113px;
  }
}
</style>

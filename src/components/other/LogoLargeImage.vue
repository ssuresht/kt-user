<template>
<div class="margintop-48px">
  <div :style="cssVars">
    <svg
      class="image-style"
      width="638"
      height="479"
      viewBox="0 0 638 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M151.477 315.498C151.479 284.027 160.356 253.195 177.089 226.541C193.823 199.887 217.734 178.492 246.077 164.814C274.42 151.135 306.046 145.727 337.324 149.211C368.602 152.695 398.263 164.929 422.902 184.508C447.541 204.088 466.158 230.219 476.617 259.901C487.076 289.584 488.951 321.614 482.028 352.315C475.106 383.015 459.665 411.14 437.48 433.462C415.295 455.783 387.264 471.396 356.606 478.506L594.614 478.506C623.694 429.294 638.561 372.984 637.566 315.831C637.566 227.048 606.883 152.177 545.518 91.2178C483.341 30.4059 407.677 0 318.525 0C229.374 0 154.097 30.2768 92.6949 90.8303C62.8331 119.129 39.1771 153.323 23.2269 191.245C7.27659 229.168 -0.619943 269.991 0.0379791 311.126C0.0379791 374.41 14.466 430.277 43.3221 478.727H280.998C244.136 470.168 211.262 449.369 187.74 419.725C164.218 390.081 151.435 353.341 151.477 315.498Z"
        fill="#28AFA6"
        fill-opacity="0.07"
      />
    </svg>
  </div>
  </div>
</template>

<script>
export default {
  name: "LogoLargeImage",
  computed: {
    cssVars() {
      return {
        "--image-height": this.$vuetify.breakpoint.smAndDown
          ? "200px"
          : "778.73px",
        "--image-width": this.$vuetify.breakpoint.smAndDown ? "350px" : "937.61px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.image-style {
  width: var(--image-height);
  height: var(--image-width);
}
.margintop-48px{
  margin-top: 48px !important;
}
</style>

<template>
  <div class="feature-button">
    <svg
      v-if="type === 0"
      width="340"
      height="124"
      viewBox="0 0 340 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 3.63867C0 1.98181 1.34315 0.638672 3 0.638672H312.361C313.572 0.638672 314.664 1.36663 315.13 2.48428L339.519 60.9843C339.827 61.7231 339.827 62.5543 339.519 63.2931L315.13 121.793C314.664 122.911 313.572 123.639 312.361 123.639H3C1.34315 123.639 0 122.296 0 120.639V3.63867Z"
        fill="white"
      />
    </svg>

    <svg
      v-if="type === 1"
      width="339"
      height="124"
      viewBox="0 0 339 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.863506 4.85211C-0.0136661 2.8688 1.43852 0.638672 3.60715 0.638672H311.361C312.572 0.638672 313.664 1.36663 314.13 2.48427L338.519 60.9843C338.827 61.7231 338.827 62.5543 338.519 63.2931L314.13 121.793C313.664 122.911 312.572 123.639 311.361 123.639H3.60716C1.43853 123.639 -0.0136641 121.409 0.863508 119.425L25.6633 63.3521C26.0051 62.5793 26.0051 61.6981 25.6633 60.9252L0.863506 4.85211Z"
        fill="white"
      />
    </svg>

    <svg
      v-if="type === 2"
      width="339"
      height="124"
      viewBox="0 0 339 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.877842 4.8584C-0.00506973 2.87439 1.4471 0.638672 3.61869 0.638672H336C337.657 0.638672 339 1.98182 339 3.63867V120.639C339 122.296 337.657 123.639 336 123.639H3.61869C1.4471 123.639 -0.00507301 121.403 0.877839 119.419L25.8256 63.3584C26.1712 62.582 26.1712 61.6954 25.8256 60.9189L0.877842 4.8584Z"
        fill="white"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      required: true,
      default: 1,
    },
  },
};
</script>
<style lang="scss" scoped>
.feature-button {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>

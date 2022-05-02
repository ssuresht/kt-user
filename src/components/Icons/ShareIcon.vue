<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="$vuetify.breakpoint.smAndDown ? '16' : '30'"
      :height="$vuetify.breakpoint.smAndDown ? '14' : '27'"
      viewBox="0 0 30 27"
      fill="none"
    >
      <path
        d="M2.15855 26.8649L29.0633 14.9638C30.3122 14.4069 30.3122 12.5931 29.0633 12.0362L2.15855 0.13505C1.14095 -0.326359 0.0154182 0.453263 0.0154182 1.58292L0 8.91773C0 9.71326 0.570474 10.3974 1.34138 10.4929L23.1273 13.5L1.34138 16.4912C0.570474 16.6026 0 17.2867 0 18.0823L0.0154182 25.4171C0.0154182 26.5467 1.14095 27.3264 2.15855 26.8649Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "ShareIcon",
};
</script>

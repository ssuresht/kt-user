<template>
  <div :style="cssVars">
    <svg
    class="icon-style"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25.5 31L20.7369 22.75H30.2631L25.5 31Z" fill="#13ABA3" />
      <circle cx="25" cy="25" r="24" stroke="#13ABA3" stroke-width="2" />
    </svg>
  </div>
</template>

<script>
export default {
    name: "CircularDropdownIcon",
    computed:{
        cssVars(){
            return {
                '--icon-size':  this.$vuetify.breakpoint.smAndDown ? "32px" : "50px"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.icon-style{
    width: var(--icon-size);
    height: var(--icon-size);
}
</style>

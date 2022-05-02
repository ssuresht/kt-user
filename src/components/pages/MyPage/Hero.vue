<template>
  <div>
<div :class="{'mt-15': $vuetify.breakpoint.smAndUp, 'mt-5': $vuetify.breakpoint.xs}">
    <div class="d-flex align-center" :class="{'flex-column-reverse': $vuetify.breakpoint.xs}">
      <div class="flex-grow-1 text-center">
        <div class="text-primary" :class="{'font-30px': $vuetify.breakpoint.smAndUp, 'font-16px text-center mt-5': $vuetify.breakpoint.xs}">
          やりたいことをやり、<br/>
          なりたい自分になる！
        </div>
        <div class="text-1f2020 mt-5" :class="{'font-16px': $vuetify.breakpoint.smAndUp, 'font-14px': $vuetify.breakpoint.xs}">
          コトナルでインターンをすると<br />
        企業があなたへフィードバックを<br v-if="$vuetify.breakpoint.xs"/>してくれます！
        </div>
      </div>
      <div class="flex-grow-1" >
        <div v-if="$vuetify.breakpoint.smAndUp">
          <FeedbackHero  />
        </div>
        <div v-else>
          <FeedbackHeroMobile />
        </div>
    
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import FeedbackHero from '@/components/other/FeedbackApplicationHistoryHeroDesktop.vue'
import FeedbackHeroMobile from '@/components/other/FeedbackApplicationHistoryHeroMobile.vue'
export default {
name: 'Hero',
components:{
    FeedbackHero , FeedbackHeroMobile
}
}
</script>

<style>

</style>
<template>
<div>
<v-card class="card borderradius-0 d-flex align-center flex-column" color="#fff" flat min-height="80vh"  >
<v-row no-gutters align="center">
    <v-col cols="12" md="6" class="d-flex flex-column justify-center">
 <div class="heading font-Noto-Sans-Medium d-flex justify-center" :class="{'font-36px': $vuetify.breakpoint.smAndUp,'font-16px': $vuetify.breakpoint.xs, 'mt-5': $vuetify.breakpoint.smAndDown}" >
     応募が完了しました！
 </div>
 <div class="sub-heading mt-3 d-flex justify-center" :class="{'font-16px': $vuetify.breakpoint.smAndUp,'font-14px text-center': $vuetify.breakpoint.smAndDown}">
あなたの意欲に気づいた企業から<br>
登録したメールアドレスに連絡が来ます。<br />
大事なメールを見落とさないようにしましょう！<br />
 </div>
 </v-col>
  <v-col cols="12" md="6" class="d-flex flex-column justify-center">
 <div class="image">
    <div v-if="$vuetify.breakpoint.mdAndUp">
        <ApplicationCompletedImage />
</div>
<div v-else>
    <div class="d-flex justify-end">
    <ApplicationCompletedMobileImage />
    </div>
</div>
</div>
  </v-col>
</v-row>
<div class="d-flex justify-center mt-6" @click="$router.push({name: 'MyPageParent'})">
<v-btn rounded :min-width="minWidth" :min-height="minHeight" color="#13ABA3" class="text-fff  font-Noto-Sans-Medium" :class="{'font-14px': $vuetify.breakpoint.xs, 'font-18px' : $vuetify.breakpoint.smAndUp}">
応募履歴を確認
</v-btn>
</div>
</v-card>
</div>
</template>

<script>
import ApplicationCompletedImage from '@/components/other/ApplicationCompletedImage.vue'
import ApplicationCompletedMobileImage from '@/components/other/ApplicationCompletedMobileImage.vue'
export default {
components: {
    ApplicationCompletedImage , ApplicationCompletedMobileImage
},
computed:{
    minWidth(){
     return this.$vuetify.breakpoint.smAndUp ? "318px" : "293px"
    },
    minHeight(){
       return this.$vuetify.breakpoint.smAndUp ? "54px" : "41px"
    }
} 
}
</script>

<style lang="scss" scoped>
.card{
    padding: 64px 20px 64px;
}
</style>
<template>
  <div>
      <v-card class="borderradius-0 box" color="#e5e5e5" flat :class="{'py-15': $vuetify.breakpoint.smAndUp, 'py-5': $vuetify.breakpoint.xs}">
        <v-card color="#fff" class="mw-1000 inner-box" :elevation="12" :class="{'py-15 borderradius-desktop': $vuetify.breakpoint.smAndUp, 'py-8 borderradius-mobile': $vuetify.breakpoint.xs}">
         <div class="question-mark position-absolute" @click="$emit('openKotonaruModal')">
             <div v-if="$vuetify.breakpoint.smAndUp" >
                 <QuestionMark />
             </div>
             <div v-else>
                 <QuestionMarkMobile />
             </div>
         </div>
         <div class="top-heading font-Noto-Sans-Bold text-center tetx-1f2020" :class="{'font-36px': $vuetify.breakpoint.smAndUp, 'font-20px': $vuetify.breakpoint.xs}">Kotonaru Power 8</div>
        <div class="sub-heaidng text-center font-Noto-Sans-Medium" :class="{'font-16px': $vuetify.breakpoint.smAndUp, 'font-12px': $vuetify.breakpoint.xs}">
       <span class="text-979797">あなたの</span><span class="text-primary">評価された力</span><span class="text-purple">と期待したい力</span>     
       </div> 
       <slot name="hero" @click="emit('test')"></slot>
       <div :class="{'box-border mt-20 pb-15 relative position-relative': applicationHistory, 
       'mx-15': $vuetify.breakpoint.smAndUp, 'mx-2 mt-10': $vuetify.breakpoint.xs}" >
        <v-btn v-if="applicationHistory" color="#c4c4c4" :width="buttonWidth" :height="buttonHeight" :absolute="true"
        class="text-fff" :class="{'font-18px absolute-desktop': $vuetify.breakpoint.smAndUp, 'font-14px absolute-mobile': $vuetify.breakpoint.xs}"
        >サンプル画面</v-btn>
       <slot name="button-and-text"></slot>
       <v-row  class="mt-15 gap-20 justify-center" :class="{'mx-15' : $vuetify.breakpoint.smAndUp}"> 
           <v-col cols="6" md="3"  align-self="center" v-for="(box,index) in boxData" :key="index">
               <div class="d-flex justify-center">
               <v-card flat :color="box[2].bgcolor1" :height="boxHeight" :width="boxWidth" class="borderradius-3">
                <div class="d-flex justify-center align-center h-100 font-Noto-Sans-Medium" :class="{'font-30px' : $vuetify.breakpoint.smAndUp, 'font-16px': $vuetify.breakpoint.xs}"
                :style="{color: box[2].textcolor1}" >
                {{box[0]}}
                </div>
               </v-card>
               <v-card flat :color="box[2].bgcolor2" :height="boxHeight" :width="boxWidth" class="borderradius-3">
                <div class="d-flex justify-center align-center h-100 font-Noto-Sans-Medium" :class="{'font-30px' : $vuetify.breakpoint.smAndUp, 'font-16px': $vuetify.breakpoint.xs}"
                :style="{color: box[2].textcolor2}">
                {{box[1]}}
                </div>
               </v-card>
               </div>
               <div class="text text-center d-flex justify-center font-Noto-Sans-Medium mt-3" :style="{color: box[2].text.color}" :class="{'font-16px': $vuetify.breakpoint.smAndUp, 'font-14px': $vuetify.breakpoint.xs}" >
                   <span v-if="box[2].text.icon" class="mr-2">
                       <span v-if="box[2].text.icon=='crown'">
                          <CrownDesktop />
                       </span>
                       <span v-else>
                           <LeafImage />
                       </span>
                   </span>
                   {{box[2].text.text}}
               </div>
           </v-col>
       </v-row>
       </div>
       <slot name="kt-power-8-text"></slot>
     </v-card>
     <slot name="feedback-text"></slot>
    
    </v-card>
    </div>
    
</template>

<script>
import CrownDesktop from '@/components/other/CrownDesktop.vue'
import LeafImage from '@/components/other/LeafImage.vue'
import QuestionMark from '@//components/other/QuestionMark.vue'
import QuestionMarkMobile from '@//components/other/QuestionMarkMobile.vue'
export default {
components: {
    CrownDesktop , LeafImage , QuestionMark , QuestionMarkMobile 
},
name: 'Box',
props:{
applicationHistory: Boolean
},
data(){
    return{
        boxData: [[2,0,{
            bgcolor1: "#13ABA3",
            bgcolor2: "#FBEAF7",
            textcolor1: '#fff',
            textcolor2: '#A19FA0',
            text: {
                text : 'リーダーシップ',
                color: '#28AFA6',
                icon : 'crown'
            }
        }],[1,0,{
            bgcolor1: "#13ABA3",
            bgcolor2: "#FBEAF7",
            textcolor1: '#fff',
            textcolor2: '#A19FA0',
            text: {
                text : '大胆さ',
                color: '#979797',
            }
        }],[1,2,{
            bgcolor1: "#13ABA3",
            bgcolor2: "#AA158B",
            textcolor1: '#fff',
            textcolor2: '#fff',
            text: {
                text : '外向性',
                color: '#AA158B',
                icon : 'leaf'
            }
        }],[0,0,{
            bgcolor1: "#EBFCFA",
            bgcolor2: "#FBEAF7",
            textcolor1: '#ACAAAB',
            textcolor2: '#A19FA0',
            text: {
                text : '創造性',
                color: '#979797',
            }
        }],[0,1,{
            bgcolor1: "#EBFCFA",
            bgcolor2: "#AA158B",
            textcolor1: '#A19FA0',
            textcolor2: '#fff',
            text: {
                text : '協調性',
                color: '#979797',
            }
        }],[0,0,{
            bgcolor1: "#EBFCFA",
            bgcolor2: "#FBEAF7",
            textcolor1: '#ACAAAB',
            textcolor2: '#A19FA0',
            text: {
                text: '綿密さ',
                color: '#979797'
            }
        }],[1,0,{
            bgcolor1: "#13ABA3",
            bgcolor2: "#FBEAF7",
            textcolor1: '#fff',
            textcolor2: '#A19FA0',
             text: {
                text: '内省的',
                color: '#979797'
            }
        }],[0,2,{
            bgcolor1: "#EBFCFA",
            bgcolor2: "#AA158B",
            textcolor1: '#A19FA0',
            textcolor2: '#fff',
            text: {
                text: '論理性',
                color: '#AA158B',
                icon: 'leaf'
            }
        }] ],
    }
},
methods: {
    handleModal(){
        this.kotonaruModal = !this.kotonaruModal
    }
},
computed : {
    boxWidth(){
        return this.$vuetify.breakpoint.smAndUp ? "80px" : "55px"
    },
    boxHeight(){
        return this.$vuetify.breakpoint.smAndUp ? "130px" : "75px"
    },
    buttonWidth(){
        return this.$vuetify.breakpoint.smAndUp ? "173px" : "117px"
    },
    buttonHeight(){
        return this.$vuetify.breakpoint.smAndUp ? "38px" : "26px"
    }
}
}
</script>

<style lang="scss" scoped>
.mw-1000{
    max-width: 1000px !important;
    margin: auto;
}
.inner-box{
    box-shadow: none !important;
}
.borderradius-desktop{
    border-radius: 15px !important;
}
.borderradius-mobile{
    border-radius: 12px !important;
}
.borderradius-3{
    border-radius: 3px;
}
.h-100{
    height: 100%;
}
.sec2-cards:not(:first-child){
    margin-top: 5px;
}
.box-border{
    border: 1px solid #e5e5e5;
    border-radius: 15px !important;
}
.absolute-desktop{
    top: -21px;
    left: 50%;
    transform: translateX(-50%);
}
.absolute-mobile{
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
}
.question-mark{
    right: 100px;
    cursor: pointer;
    @media(max-width: 767px){
        right: 20px;
    }
}
</style>
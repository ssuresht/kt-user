<template>
  <div v-if="getStudent.hasOwnProperty('id')">
    <v-card
      flat
      :class="{
        'mt-5 margin-x-mobile': $vuetify.breakpoint.smAndDown,
        'mt-16 margin-x-desktop': $vuetify.breakpoint.mdAndUp,
      }"
      :height="basicInformationHeight"
    >
      <div class="mx-5 pt-7" v-if="$vuetify.breakpoint.smAndDown">
        <div class="d-flex justify-space-between">
          <span class="font-16px text-1f2020">{{ basicInformationTitle }}</span>
          <v-btn
            @click="showModal('BasicInformationModal', '900px', '1200px', true)"
            class="mx-2"
            fab
            dark
            small
            color="white"
          >
            <v-icon size="20" color="#979797">mdi-pencil</v-icon>
          </v-btn>
        </div>
      </div>
      <v-row
        no-gutters
        :class="{
          'mx-2 mt-3': $vuetify.breakpoint.smAndDown,
          'ml-8 pt-8': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="3">
          <div class="font-20px text-1f2020 font-Noto-Sans-Medium">
            {{ basicInformationTitle }}
          </div>
        </v-col>
        <v-col
          cols="11"
          md="7"
          :class="{
            'pl-3': $vuetify.breakpoint.smAndDown,
          }"
        >
          <div
            class="d-flex text-1f2020"
            :class="{
              'font-16px': $vuetify.breakpoint.smAndDown,
              'font-20px ': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <span
              :class="{
                'pr-8': $vuetify.breakpoint.smAndDown,
                'pr-9 ': $vuetify.breakpoint.mdAndUp,
              }"
            >
              {{ getStudent.family_name }}</span
            >
            <span>{{ getStudent.first_name }}</span>
          </div>
          <div
            class="d-flex text-97"
            :class="{
              'font-14px': $vuetify.breakpoint.smAndDown,
              'font-16px ': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <span
              :class="{
                'pr-5': $vuetify.breakpoint.smAndDown,
                'pr-6': $vuetify.breakpoint.mdAndUp,
              }"
              >{{ getStudent.family_name_furigana }}</span
            >
            <span>{{ getStudent.first_name_furigana }}</span>
          </div>

          <div
            class="d-flex text-97"
            :class="{
              'font-14px mt-6': $vuetify.breakpoint.smAndDown,
              'font-16px mt-13': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <span
              :class="{
                'pr-16 mr-1': $vuetify.breakpoint.smAndDown,
                'pr-12': $vuetify.breakpoint.mdAndUp,
              }"
              >大学名</span
            >
            <span class="text-1f2020">
              {{ getStudent.education_facility.name }}
            </span>
          </div>
          <v-divider class="mt-3"></v-divider>
          <div
            class="d-flex text-97"
            :class="{
              'font-14px mt-3': $vuetify.breakpoint.smAndDown,
              'font-16px mt-4': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <span
              :class="{
                'pr-14': $vuetify.breakpoint.smAndDown,
                'pr-9': $vuetify.breakpoint.mdAndUp,
              }"
              >卒業年月</span
            >
            <span class="text-1f2020">
              {{ this.getStudent.graduate_year + "年" }}
              {{ this.getStudent.graduate_month + "月" }}
            </span>
          </div>
          <v-divider class="mt-3"></v-divider>
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="4"
          md="2"
          class="desktop-edit-container"
        >
          <v-btn
            @click="showModal('BasicInformationModal', '900px', '1200px', true)"
            class="desktop-edit-button"
            fab
            dark
            small
            color="white"
          >
            <v-icon size="20" color="#979797"> mdi-pencil</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      flat
      :class="{
        'mt-4 margin-x-mobile': $vuetify.breakpoint.smAndDown,
        'mt-7 margin-x-desktop': $vuetify.breakpoint.mdAndUp,
      }"
      :height="appealHeight"
    >
      <div class="mx-5 pt-7" v-if="$vuetify.breakpoint.smAndDown">
        <div class="d-flex justify-space-between">
          <span class="font-16px text-1f2020">{{ wordOfAppealTitle }}</span>
          <v-btn
            @click="showModal('AppealModal', '900px', '917px')"
            class="mx-2"
            fab
            dark
            small
            color="white"
          >
            <v-icon size="20" color="#979797"> mdi-pencil</v-icon>
          </v-btn>
        </div>
      </div>
      <v-row
        no-gutters
        :class="{
          'mx-2 mt-3': $vuetify.breakpoint.smAndDown,
          'ml-8 pt-8': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="3">
          <div class="font-20px text-1f2020 font-Noto-Sans-Medium">
            {{ wordOfAppealTitle }}
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <div
            :class="{
              'font-14px mx-3 pt-5': $vuetify.breakpoint.smAndDown,
              'font-16px': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <v-textarea
              class="text-area"
              height="200px"
              hide-details
              outlined
              dense
              placeholder="メモ"
              v-model="getStudent.self_introduction"
              :readonly="true"
            >
            </v-textarea>
          </div>
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="4"
          md="2"
          class="desktop-edit-container"
        >
          <v-btn
            @click="showModal('AppealModal', '900px', '917px')"
            class="desktop-edit-button"
            fab
            dark
            small
            color="white"
          >
            <v-icon size="20" color="#979797"> mdi-pencil</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      flat
      :class="{
        'mt-4 margin-x-mobile': $vuetify.breakpoint.smAndDown,
        'mt-7 margin-x-desktop': $vuetify.breakpoint.mdAndUp,
      }"
      :height="emailHeight"
    >
      <div class="mx-5 pt-7" v-if="$vuetify.breakpoint.smAndDown">
        <div class="d-flex justify-space-between">
          <span class="font-16px text-1f2020">{{ emailAddressTitle }}</span>
          <v-btn
            @click="showModal('EmailUpdateModal', '900px', '445px')"
            class="mx-2"
            fab
            dark
            small
            color="white"
          >
            <v-icon size="20" color="#979797"> mdi-pencil</v-icon>
          </v-btn>
        </div>
      </div>
      <v-row
        no-gutters
        :class="{
          'mx-2 mt-3': $vuetify.breakpoint.smAndDown,
          'ml-8 pt-8': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="3">
          <div class="mt-4 font-20px text-1f2020 font-Noto-Sans-Medium">
            {{ emailAddressTitle }}
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <div
            :class="{
              'font-14px mx-3 pt-3': $vuetify.breakpoint.smAndDown,
              'font-16px mt-5': $vuetify.breakpoint.mdAndUp,
            }"
            v-if="getStudent.email_valid == getStudent.email_invalid"
          >
            <v-icon class="pb-2 pr-1">$approvalIcon</v-icon>
            {{ hideFullEmail(getStudent.email_valid) }}
          </div>
          <div
            :class="{
              'font-14px mx-3 pt-3': $vuetify.breakpoint.smAndDown,
              'font-16px mt-5': $vuetify.breakpoint.mdAndUp,
            }"
            v-if="getStudent.email_valid != getStudent.email_invalid"
          >
            <div class="text-b84221">
              <v-icon class="pb-2 pr-1">$UnapprovedIcon</v-icon>
              {{ hideFullEmail(getStudent.email_valid) }}
            </div>
            <div
              @click="sendEmailAgain"
              class="text-decoration-underline text-8e cursor-pointer"
            >
              更新メールを
              {{ hideFullEmail(getStudent.email_invalid) }} に再送信する
            </div>
          </div>
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="4"
          md="2"
          class="desktop-edit-container"
        >
          <v-btn
            @click="showModal('EmailUpdateModal', '900px', '445px')"
            class="desktop-edit-button"
            fab
            dark
            small
            color="white"
          >
            <v-icon size="20" color="#979797"> mdi-pencil</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      flat
      :class="{
        'mt-4 margin-x-mobile': $vuetify.breakpoint.smAndDown,
        'mt-7 margin-x-desktop': $vuetify.breakpoint.mdAndUp,
      }"
      :height="emailHeight"
    >
      <div class="mx-5 pt-7" v-if="$vuetify.breakpoint.smAndDown">
        <div class="d-flex justify-space-between">
          <span class="font-16px text-1f2020">{{ passwordTitle }}</span>
          <v-btn
            @click="showModal('PasswordUpdateModal', '900px', '493px')"
            class="mx-2"
            fab
            dark
            small
            color="white"
          >
            <v-icon size="20" color="#979797"> mdi-pencil</v-icon>
          </v-btn>
        </div>
      </div>
      <v-row
        no-gutters
        :class="{
          'mx-2 mt-3': $vuetify.breakpoint.smAndDown,
          'ml-8 pt-8': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="3">
          <div class="mt-5 font-20px text-1f2020 font-Noto-Sans-Medium">
            {{ passwordTitle }}
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <div
            :class="{
              'font-14px mx-3 pt-3': $vuetify.breakpoint.smAndDown,
              'font-16px pt-8': $vuetify.breakpoint.mdAndUp,
            }"
          >
            *********
          </div>
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="4"
          md="2"
          class="desktop-edit-container"
        >
          <v-btn
            @click="showModal('PasswordUpdateModal', '900px', '493px')"
            class="desktop-edit-button"
            fab
            dark
            small
            color="white"
          >
            <v-icon size="20" color="#979797"> mdi-pencil</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <div
      class="text-97 text-center cursor-pointer"
      :class="{
        'mb-10 mt-7 font-12px': $vuetify.breakpoint.smAndDown,
        'mb-11 mt-13 font-14px': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <span @click="$router.push({ name: 'Withdrawal' })">退会する</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters(["user", "getStudent"]),
    basicInformationHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "273px" : "291px";
    },
    appealHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "304px" : "238px";
    },
    emailHeight() {
      return this.$vuetify.breakpoint.smAndDown ? "144px" : "129px";
    },
  },
  async created() {
    this.getDataFromApi();
    if (this.$route.query.token) {
      let token = this.$route.query.token;
      await this.$store.dispatch("EMAIL_CHANGE_TOKEN", { token });
    }
  },
  data() {
    return {
      basicInformationTitle: "基本情報",
      wordOfAppealTitle: "一言アピール",
      emailAddressTitle: "メールアドレス",
      passwordTitle: "パスワード",
    };
  },
  methods: {
    getDataFromApi() {
      this.$store
        .dispatch("STUDENT_GET", { id: this.user.id })
        .finally(() => (this.loading = false));
    },

    showModal(component, width, height) {
      this.$store.commit("showModal", { component, width, height });
    },
    sendEmailAgain() {
      const update_email = {
        email_invalid: this.getStudent.email_invalid,
      };
      this.$store
        .dispatch("STUDENT_UPDATE_EMAIL", {
          id: this.user.id,
          param: update_email,
        })
        .then(() => {
          this.$store.commit("showModal", {
            component: "EmailVerificationModal",
            width: "981px",
            height: "auto",
            dense: true,
          });
          this.$root.$emit("refresh-profile-data");
          this.loading = false;
        });
    },
        hideFullEmail(email){
          let emailSplit = email.split("@");
          let emailSplit1 = emailSplit[0];
          let emailSplit2 = emailSplit[1];
          let hiddenEmail1 = emailSplit1.substring(0, 3);
          let hiddenEmail2 = emailSplit2.substring(0,3);
          return hiddenEmail1 + "*****" + '@' + hiddenEmail2 + "*****" ;
    }
  },
};
</script>

<style lang="scss" scoped>
.margin-x-desktop {
  margin-left: 15%;
  margin-right: 15%;
}

.margin-x-mobile {
  margin-left: 5%;
  margin-right: 4%;
}

.desktop-edit-container {
  position: relative;
}

.desktop-edit-button {
  position: absolute;
  top: 40%;
  right: 30%;
}

.cursor-pointer {
  cursor: pointer;
}
</style>

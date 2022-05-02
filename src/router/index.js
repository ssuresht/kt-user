import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";
import VueMeta from "vue-meta";

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});
Vue.use(VueRouter);

const routes = [
  {
    path: "/lp",
    name: "Welcome",
    component: () => import("@/views/Welcome/Index.vue"),

    meta: {
      hideFooterLink: true,
      loginRequired: false,
    },
  },
  {
    path: "/",
    name: "TemporalTop",
    component: () => import("@/views/Temporal/Index.vue"),
    meta: {
      loginRequired: false,
      hideFooterLink: true,
    },
  },
  {
    path: "/mypage",
    name: "MyPageParent",
    component: () => import("@/views/MyPage/Parent.vue"),
    meta: {
      loginRequired: true,
    },
  },
  {
    path: "/top",
    name: "Top",
    component: () => import("@/views/Top/index.vue"),
  },
  {
    path: "/applicationcompleted",
    name: "ApplicationCompleted",
    component: () => import("@/views/Application/Application-completed.vue"),
    meta: {
      loginRequired: false,
    },
  },
  {
    path: "/internships",
    name: "Internships",
    component: () => import("@/views/Internship/index.vue"),
    meta: {
      loginRequired: false,
    },
  },
  {
    path: "/internship-detail/:id",
    name: "InternshipDetails",
    component: () => import("@/views/Internship/detail.vue"),
    meta: {
      loginRequired: false,
    },
  },
  {
    path: "/applicationdetails",
    name: "JobApplicationCreate",
    component: () => import("@/views/Application/Details.vue"),
    meta: {
      loginRequired: false,
    },
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import("@/views/Faq/Faq.vue"),
    mata: {
      loginRequired: false,
    },
  },
  {
    path: "/withdrawal",
    name: "Withdrawal",
    component: () => import("@/views/Withdrawal/Withdrawal.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact/Contact.vue"),
  },
  {
    path: "/privacypolicy",
    name: "PrivacyPolicy",
    component: () => import("@/views/PrivacyPolicy/PrivacyPolicy.vue"),
  },
  {
    path: "/termsofservice",
    name: "TermsofService",
    component: () => import("@/views/TermsofService/TermsofService"),
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("@/views/Post/index.vue"),
    meta: {
      loginRequired: false,
    },
  },
  {
    path: "/post-detail/:id",
    name: "PostDetails",
    component: () => import("@/views/Post/detail.vue"),
    meta: {
      loginRequired: false,
    },
  },
  {
    path: "/applicationconfirm",
    name: "ApplicationConfirm",
    component: () => import("@/views/Application/confirm.vue"),
    meta: {
      loginRequired: false,
    },
  },
  {
    path: "*",
    name: "Error",
    component: () => import("@/views/404/404.vue"),
  },
];
const router = new VueRouter({
  scrollBehavior() {
    // always scroll to top
    return { x: 0, y: 0 };
  },
  mode: "history",
  routes,
});

// Auth guard
router.beforeEach((to, from, next) => {
  const loggedIn = store.getters.isLoggedIn;

  const loginRequired = to.meta.loginRequired;
  if (loginRequired && !loggedIn) {
    router.replace({ name: "Top" });
  }
  // else if (to.name == "Top" && loggedIn) {
  //   router.replace({ name: "MyPageParent"  });
  // }
  else {
    next();
  }
});

router.afterEach((to) => {
  if (to.meta.title !== undefined) {
    document.title =
      to.meta.title != "" ? `${to.meta.title} | KOTONARU` : `KOTONARU`;
  }
});
export default router;

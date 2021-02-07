// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";
//import 'vuetify/dist/vuetify.min.css';
import Home from "../views/Home.vue";
//import Home from '@/views/Home.vue';
//import About from "../views/About.vue";
//import About from '@/view/about.vue';
import view from "../views/view.vue";
import Test from "../views/test.vue";
import login from "../views/login.vue";
import NotFound from "../views/notfound.vue";
import profile from "../views/profile.vue";
import settings from "../views/settings.vue";
import emails from "../views/emails.vue";
import signin from "../views/signin.vue";
import signout from "../views/signout.vue";
import fish from "../views/fish.vue";

Vue.use(VueRouter);

/*const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }*/
const router = new VueRouter({
  mode: 'history',
  //hash: false,
  
  routes: [
  {
    path: "/",
    name: "Home",
    //redirect: '/about',
    component: Home,
    /* components: {
      default: Foo,
      a: Bar,
      b: Baz
    }*/
  },
  {
    path: "/about",
    name: "About",
    component: () =>
    import(/* webpackChunkName: "about" */ "@/views/About.vue"),
        meta: { requiresAuth: true },
    /* Fisrt
    beforeEnter: (to, from, next) => {
      console.log("Success");
      let s = sessionStorage.getItem("login");
      return s ? next() : next("/login");
    }
    */
  },
  {
    path: "/settings",
    name: "settings",
    component: settings,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
  },
  {
    path: "/emails",
    name: "emails",
    component: emails,
  },
  {
    path: "/view",
    name: "view",
    component: view,
  },
  {
    path: "/Test/:id",
    component: Test,
    children: [
      {
        path: "emails",
        component: emails,
      },
      {
        path: "profile",
        component: profile,
      },
    ],
  },
  {
    path: "/settings/:id",
    component: settings,
  },
  {
    path: "*",
    name: 404,
    component: NotFound,
  },
  {
    path: "/login",
    name: "login",
    component: login,
    //alias: '/about',
  },
  {
    path: "/signin",
    name: "signin",
    component: signin,
  },
  {
    path: "/signout",
    name: "signout",
    component: signout,
  },
  {
    path: "/fish",
    name: "fish",
    component: fish,
  },
],
base: process.env.BASE_URL,
scrollBehavior(to, from, savedPosition) {
  console.log(savedPosition);
  if (savedPosition) {
    return savedPosition;
  } else if (to.hash) {
    /*    
    const option={
      top : document.querySelector(to.hash).offsetTop,
      behavior : 'smooth',
    };
    window.scrollTop(option)
*/
    // return {
    // selector: to.hash
    //}
    return {
      selector: to.hash,
      behavior: "smooth",
    };
  } else {
    return { x: 0, y: 200 };
  }
},

});

/*router.beforeEach((to, from, next) => {
  console.log("Success");
  let isAuthenticated = sessionStorage.getItem('login');
  if (to.name !== 'login' && !isAuthenticated) next({ path: '/login' });
  else next();
});*/
router.beforeEach((to, from, next) => {
  console.log(to.matched);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (sessionStorage.getItem("login")) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
export default router;

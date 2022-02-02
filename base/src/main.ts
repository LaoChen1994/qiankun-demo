import { createApp } from "vue";
import App from "./App";
import { createRouter, createWebHistory } from "vue-router";
import "./micro-app";

import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";
import "element-plus/dist/index.css";
import "./index.css";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: Page1,
      name: "page 1",
      props: {
        msg: "Page 1",
      },
    },
    {
      path: "/page2",
      name: "page 2",
      component: Page2,
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");

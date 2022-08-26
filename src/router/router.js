import { createRouter, createWebHistory } from "vue-router";

import FormPage1 from "../pages/FormPage1";
import FormPage2 from "../pages/FormPage2";
import FormPage3 from "../pages/FormPage3";

const routes = [
  {
    path: "/",
    component: FormPage1,
  },
  {
    path: "/form-2",
    component: FormPage2,
  },
  {
    path: "/form-3",
    component: FormPage3,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;

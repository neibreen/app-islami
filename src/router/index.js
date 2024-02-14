import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JadwalSholatView from "../views/JadwalSholatView.vue";
import AsmaulHusnaView from "../views/AsmaulHusnaView.vue";
import BacaAlQuranView from "../views/BacaAlQuranView.vue";
import DoaHarianView from "../views/DoaHarianView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        title: "Home - App Islami",
      },
    },
    {
      path: "/jadwal-sholat",
      name: "Jadwal Sholat",
      component: JadwalSholatView,
      meta: {
        title: "Jadwal Sholat - App Islami",
      },
    },
    {
      path: "/asmaul-husna",
      name: "Asma'ul Husna",
      component: AsmaulHusnaView,
      meta: {
        title: "Asma'ul Husna - App Islami",
      },
    },
    {
      path: "/baca-al-quran",
      name: "Baca Al-Qur'an",
      component: BacaAlQuranView,
      meta: {
        title: "Baca Al-Quran - App Islami",
      },
    },
    {
      path: "/doa-harian",
      name: "Do'a Harian",
      component: DoaHarianView,
      meta: {
        title: "Do'a Harian - App Islami",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "App Islami";
  next();
});

export default router;
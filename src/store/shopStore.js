import create from "zustand";
import { persist } from "zustand/middleware";

const shopState = persist(
  (set) => ({
    shop: null,
    isLoggedIn: false,
    appointment: [],
    service: [],
    setShop: (shop) => {
      // console.log(shop);
      set(() => set({ shop, isLoggedIn: true }));
    },
    logOut: () => set({ shop: null, token: null, isLoggedIn: false }),
  }),
  { name: "shop-setting" }
);

export const shopUserState = create(shopState);

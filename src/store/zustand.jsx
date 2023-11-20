import { create } from "zustand";

const currencyAPIUrl = import.meta.env.VITE_APP_CURRENCY_API_URL;

const goods = [
  {
    id: 1,
    url: "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/c/o/colla_pink_mango.png",
    name: "Cola pink with mango",
    checked: false,
    description: "Some description...",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 2,
    url: "https://content.rozetka.com.ua/goods/images/big/370449682.jpg",
    name: "Gym Beam water bottle",
    checked: false,
    description: "Some description...",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 3,
    url: "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/j/u/just_whey_chocolate_milkshake_1_kg_gymbeam_1.png",
    name: "Just Whey chocolate milkshake",
    checked: false,
    description: "Some description...",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 4,
    url: "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/j/u/just_whey_vanilla_icecream_2_kg_gymbeam_1.png",
    name: "Just Whey mixed milkshake",
    checked: false,
    description: "Some description...",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 5,
    url: "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/e/peanut_butter_crunchy_900g.png",
    name: "Peanut butter",
    checked: false,
    description: "Some description...",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 6,
    url: "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/v/i/vitality_complex_120_tabs_gymbeam.png",
    name: "Vitality complex box",
    checked: false,
    description: "Some description...",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 7,
    url: "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/v/i/vitamin_d3_1000_iu_120_caps_gymbeam.png",
    name: "Vitamin D3 box",
    checked: false,
    description: "Some description...",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 8,
    url: "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/v/i/vitaminc_30_1.jpg",
    name: "Vitamin C box",
    checked: false,
    description: "Some description...",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
];

const useGlobalStore = create((set) => ({
  isSigned: false,
  selectedCurency: "USD",
  goods,
  currency: {},
  fetchCurrency: async () => {
    const response = await fetch(currencyAPIUrl);
    const json = await response.json();
    const currency = await json["conversion_rates"];
    set({ currency: currency });
  },
  changeCurrency: (newCurrency, mult) =>
    set((state) => {
      const items = JSON.parse(localStorage.getItem("checkedGoods"));
      const updatedGoods = state.goods.map((good) => ({
        ...good,
        currency: newCurrency,
        checked: items.some((item) => item == good.id),
        price: Math.floor(good.USDprice * mult),
      }));
      return { goods: updatedGoods };
    }),
  toggleItemChecked: (idx) => {
    set((state) => {
      const updatedGoods = [...state.goods];
      updatedGoods[idx].checked = !updatedGoods[idx].checked;
      return { goods: updatedGoods };
    });
  },
  toggleSigned: () =>
    set((state) => ({
      isSigned: !state.isSigned,
    })),
  setSelectedCurency: (currency) => {
    set({ selectedCurency: currency });
  },
  setCheckedGoods: () => {
    set((state) => {
      const items = JSON.parse(localStorage.getItem("checkedGoods"));
      const updatedGoods = state.goods.map((good) => ({
        ...good,
        checked: items.some((item) => item == good.id),
      }));
      return { goods: updatedGoods };
    });
  },
}));

export default useGlobalStore;

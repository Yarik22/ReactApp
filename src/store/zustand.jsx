import { create } from "zustand";

const currencyAPIUrl = import.meta.env.VITE_APP_CURRENCY_API_URL;

const goods = [
  {
    id: 1,
    url: "src/assets/colla_pink_mango.webp",
    name: "Cola pink with mango",
    checked: false,
    description:
      "Some description................. ................... ..................... .................... ........................................",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 2,
    url: "src/assets/hydrtator_gb_grey.webp",
    name: "Gym Beam water bottle",
    checked: false,
    description:
      "Some description................. ................... ..................... .................... ........................................",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 3,
    url: "src/assets/just_whey_chocolate_milkshake_1_kg_gymbeam_1.webp",
    name: "Just Whey chocolate milkshake",
    checked: false,
    description:
      "Some description................. ................... ..................... .................... ........................................",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 4,
    url: "src/assets/jw2kg_gift_011.webp",
    name: "Just Whey mixed milkshake and gifts",
    checked: false,
    description:
      "Some description................. ................... ..................... .................... ........................................",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 5,
    url: "src/assets/peanut_butter_smooth_900g.webp",
    name: "Peanut butter",
    checked: false,
    description:
      "Some description................. ................... ..................... .................... ........................................",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 6,
    url: "src/assets/vitality_complex_120_tabs_gymbeam.webp",
    name: "Vitality complex box",
    checked: false,
    description:
      "Some description................. ................... ..................... .................... ........................................",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 7,
    url: "src/assets/vitamin_d3_1000_iu_120_caps_gymbeam.webp",
    name: "Vitamin D3 box",
    checked: false,
    description:
      "Some description................. ................... ..................... .................... ........................................",
    price: 50,
    USDprice: 50,
    currency: "USD",
  },
  {
    id: 8,
    url: "src/assets/vitaminc_30_1.webp",
    name: "Vitamin C box",
    checked: false,
    description:
      "Some description................. ................... ..................... .................... ........................................",
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

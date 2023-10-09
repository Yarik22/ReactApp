import create from "zustand";
const currencyAPIUrl = import.meta.env.VITE_APP_CURRENCY_API_URL;
const useCurrencyStore = create((set) => ({
  currency: {},
  fetchCurrency: async () => {
    const response = await fetch(currencyAPIUrl);
    const json = await response.json();
    const currency = await json["conversion_rates"];
    set({ currency: json });
  },
}));

export default useCurrencyStore;

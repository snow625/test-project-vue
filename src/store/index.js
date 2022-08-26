import { createStore } from "vuex";

export default createStore({
  state: {
    isFavorite: false,
    form1: {
      isComplete: false,
    },
    form2: {
      isComplete: false,
    },
    form3: {
      isComplete: false,
    },
  },
  getters: {
    getDataForm1(state) {
      return state.form1;
    },
    getDataForm2(state) {
      return state.form2;
    },
    getDataForm3(state) {
      return state.form3;
    },
  },
  mutations: {
    toggleFavorite(state) {
      state.isFavorite = !state.isFavorite;
    },
    setFormToStore(state, payload) {
      const { form, number } = payload;
      switch (number) {
        case 1:
          state.form1 = { ...form };
          break;

        case 2:
          state.form2 = { ...form };
          break;
        case 3:
          state.form3 = { ...form };
          break;

        default:
          break;
      }
    },
    storeReset(state) {
      console.log([state.form1, state.form2, state.form3]);
      state.isFavorite = false;
      state.form1 = {
        isComplete: false,
      };
      state.form2 = {
        isComplete: false,
      };
      state.form3 = {
        isComplete: false,
      };
    },
  },

  actions: {},
  modules: {},
});

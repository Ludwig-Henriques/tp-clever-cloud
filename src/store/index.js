import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  variants: [],
  variantSelected: {},
  items: [],

}

const mutations = {
  updateVariants (state, value) {
      state.variants = value
  },
  updateVariantSelected (state, value) {
      state.variantSelected = value
  },
  addItem (state, item) {
    state.items.push(item)
  },
  removeItem (state, item) {
    state.items.splice(state.items.indexOf(item), 1)
  },
}

const actions = {
  updateVariants({ commit }, variants) {
    commit('updateVariants', variants)
  },
  updateVariantSelected ({ commit }, variant) {
    commit('updateVariantSelected', variant)
  },
  addItem ({ commit }, item) {
    commit('addItem', item)
  },
  removeItem ({ commit }, item) {
    commit('removeItem', item)
  },
}

const getters = {
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
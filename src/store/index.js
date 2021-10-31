import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  variants: [],
  variantSelected: {},
  items: [],
  total: 0,
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
  updateTotal (state, value) {
      state.total = value
  },
  removeAllItem (state) {
      state.items = []
  },
}

const actions = {
  updateVariants({ commit }, variants) {
    commit('updateVariants', variants)
  },
  updateVariantSelected ({ commit }, variant) {
    commit('updateVariantSelected', variant)
  },
  addItem ({ commit, dispatch }, item) {
    commit('addItem', item)
    dispatch('updateTotal')
  },
  removeItem ({ commit, dispatch }, item) {
    commit('removeItem', item)
    dispatch('updateTotal')
  },
  updateTotal ({ commit, state }) {
    let amount = 0
    state.items.forEach(element => {
      amount = amount + element.price
    });
    commit('updateTotal', amount)
  },
  removeAllItem ({ commit, dispatch }) {
    commit('removeAllItem')
    dispatch('updateTotal')
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
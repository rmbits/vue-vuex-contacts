import Vue from 'vue'
import Vuex from 'vuex'
import contacts from '@/data/contacts'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts
  },
  mutations: {
    appendContact: (state, contact) => {
      state.contacts.push(contact)
    },
    removeContact: (state, id) => {
      state.contacts = state.contacts.filter(contact => contact.id !== id)

      // redirect
      router.push({ path: '/', query: { alert: 'Contact Deleted' } })
    },
    modifyContact: (state, contact) => {
      state.contacts = state.contacts.map(item => {
        if (item.id === contact.id) {
          item = contact
        }
        return item
      })
    }
  },
  actions: {
    addContact: ({ commit }, payload) => {
      commit('appendContact', payload)
    },
    deleteContact: ({ commit }, id) => {
      commit('removeContact', id)
    },
    updateContact: ({ commit }, payload) => {
      commit('modifyContact', payload)
    }
  },
  modules: {
  }
})

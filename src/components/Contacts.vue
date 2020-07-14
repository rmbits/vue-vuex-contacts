<template>
  <div class="contacts container">
    <Alert v-if="alert" :message="alert" />
    <h3 class="pb-2 mt-4 mb-2 border-bottom">Manage Contacts</h3>
      <input type="text" placeholder="Search By Name"
        class="form-control" v-model="filterInput">
    <br />
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact Details</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in filterBy(contacts, filterInput)" :key="contact.id">
          <td>{{contact.firstName}}</td>
          <td>{{contact.lastName}}</td>
          <td>
            Phones: {{contact.phones.length}} |
            Addresses: {{contact.addresses.length}} |
            Emails: {{contact.emails.length}}
          </td>
          <td class="float-right">
            <router-link class="btn btn-sm btn-secondary"
              :to="'/contact/'+contact.id">View
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import Alert from './Alert'

export default {
  data () {
    return {
      alert: '',
      filterInput: ''
    }
  },
  computed: {
    ...mapState([
      'contacts'
    ])
  },
  methods: {
    filterBy(list, value) {
      return list.filter(function(contact) {
        value = value.toLowerCase()
        return contact.firstName.toLowerCase().includes(value) ||
          contact.lastName.toLowerCase().includes(value)
      })
    }
  },
  created: function () {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
  },
  components: {
    Alert
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="details container">
    <br/>
    <router-link to="/">Back</router-link>
    <h3 class="pb-2 mt-4 mb-2 border-bottom">
      {{ contact.firstName }} {{ contact.lastName }}
      <span class="float-right">
        <router-link class="btn btn-sm btn-danger mr-1"
          :to="'/edit/'+contact.id">Edit
        </router-link>

        <button @click="deleteContact(contact.id)"
          class="btn btn-sm btn-warning">Delete
        </button>
      </span>
    </h3>

    <ul class="list-group">
      <li v-for="phones in contact.phones" :key="phones.id" class="list-group-item">
        <i class="fas fa-mobile-alt"></i> {{ phones.phone }}
      </li>
    </ul>
    <br/>
    <ul class="list-group">
      <li v-for="addresses in contact.addresses" :key="addresses.id" class="list-group-item">
        <i class="fas fa-map-marker-alt"></i> {{ addresses.address }}
      </li>
    </ul>
    <br/>
    <ul class="list-group">
      <li v-for="emails in contact.emails" :key="emails.id" class="list-group-item">
        <i class="fas fa-envelope"></i> {{ emails.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'contactdetails',
  data() {
    return {
      contact: '',
      phones: '',
      addresses: '',
      emails: ''
    }
  },
  computed: {
    ...mapState([
      'contacts'
    ])
  },
  methods: {
    ...mapActions([
      'deleteContact'
    ]),
    getContact(id) {
      this.contact = this.contacts.filter(item => item.id.toString() === id)[0]
    }
  },
  created: function() {
    this.getContact(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>

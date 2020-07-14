<template>
  <div class="add container">
  <Alert v-if="alert" :message="alert" />
    <h3 class="pb-2 mt-4 mb-2 border-bottom">Add Contact</h3>
    <form @submit.prevent="handleSubmit">
      <div class="card card-body bg-light">
          <h4>Name</h4>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control"
                placeholder="First Name" v-model="contact.firstName">
            </div>
            <div class="col">
              <input type="text" class="form-control"
                placeholder="Last Name" v-model="contact.lastName">
            </div>
          </div>
      </div>

      <br>

      <div class="card card-body bg-light">
        <h4>Phone Numbers</h4>
        <div class="input-group mb-3">
          <input type="text" class="form-control"
            placeholder="Phone number" v-model="phone">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              id="button-addon2" @click="addItem('phone')">Add</button>
          </div>
        </div>
        <ul class="list-group">
          <li v-for="phone in contact.phones" :key="phone.id" class="list-group-item">
            <label v-if="editIdDetail !== phone.id + 'phone'">
              <i class="fas fa-mobile-alt"></i> {{ phone.phone }}
            </label>
            <div v-if="editIdDetail !== phone.id + 'phone'" class="btn-group float-right">
              <button class="btn btn-sm btn-warning" type="button"
                    id="button-addon2" @click="editItem(phone.id, 'phone')">Edit</button>
              <button class="btn btn-sm btn-danger" type="button"
                    id="button-addon2" @click="deleteItem(phone.id, 'phone')">Delete</button>
            </div>
            <div v-else class="input-group input-group-sm mb-1">
              <input type="text" v-model="editText" class="form-control">
              <div class="btn-group float-right">
                <button type="button" class="btn btn-sm btn-primary"
                  @click="updateItem(phone.id, 'phone')">Save</button>
                <button class="btn btn-sm btn-secondary" type="button"
                      id="button-addon2" @click="cancelUpdate()">Cancel</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <br>

      <div class="card card-body bg-light">
        <h4>Addresses</h4>
        <div class="input-group mb-3">
          <input type="text" class="form-control"
            placeholder="Address" v-model="address">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              id="button-addon2" @click="addItem('address')">Add</button>
          </div>
        </div>
        <ul class="list-group">
          <li v-for="address in contact.addresses" :key="address.id" class="list-group-item">
            <label v-if="editIdDetail !== address.id + 'address'">
              <i class="fas fa-map-marker-alt"></i> {{ address.address }}
            </label>
            <div v-if="editIdDetail !== address.id + 'address'" class="btn-group float-right">
              <button class="btn btn-sm btn-warning" type="button"
                    id="button-addon2" @click="editItem(address.id, 'address')">Edit</button>
              <button class="btn btn-sm btn-danger" type="button"
                    id="button-addon2" @click="deleteItem(address.id, 'address')">Delete</button>
            </div>
            <div v-else class="input-group input-group-sm mb-1">
              <input type="text" v-model="editText" class="form-control">
              <div class="btn-group float-right">
                <button type="button" class="btn btn-sm btn-primary"
                  @click="updateItem(address.id, 'address')">Save</button>
                <button class="btn btn-sm btn-secondary" type="button"
                      id="button-addon2" @click="cancelUpdate()">Cancel</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <br>

      <div class="card card-body bg-light">
        <h4>Emails</h4>
        <div class="input-group mb-3">
          <input type="text" class="form-control"
            placeholder="Email" v-model="email">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              id="button-addon2" @click="addItem('email')">Add</button>
          </div>
        </div>
        <ul class="list-group">
          <li v-for="email in contact.emails" :key="email.id" class="list-group-item">
            <label v-if="editIdDetail !== email.id +  'email'">
              <i class="fas fa-envelope"></i> {{ email.email }}
            </label>
            <div v-if="editIdDetail !== email.id +  'email'" class="btn-group float-right">
              <button class="btn btn-sm btn-warning" type="button"
                    id="button-addon2" @click="editItem(email.id, 'email')">Edit</button>
              <button class="btn btn-sm btn-danger" type="button"
                    id="button-addon2" @click="deleteItem(email.id, 'email')">Delete</button>
            </div>
            <div v-else class="input-group input-group-sm mb-1">
              <input type="text" v-model="editText" class="form-control">
              <div class="btn-group float-right">
                <button type="button" class="btn btn-sm btn-primary"
                  @click="updateItem(email.id, 'email')">Save</button>
                <button class="btn btn-sm btn-secondary" type="button"
                      id="button-addon2" @click="cancelUpdate()">Cancel</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <br>

      <button type="submit" class="btn btn-primary">Submit</button>

    </form>
    <br>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import Alert from '../components/Alert'

export default {
  name: 'add',
  data () {
    return {
      contact: {
        id: '',
        firstName: '',
        lastName: '',
        phones: [],
        addresses: [],
        emails: []
      },
      alert: '',
      phone: '',
      address: '',
      email: '',
      editIdDetail: '',
      editText: ''
    }
  },
  methods: {
    ...mapActions([
      'addContact'
    ]),
    handleSubmit() {

      if (!this.contact.firstName || !this.contact.lastName ||
        this.contact.phones.length === 0 || this.contact.addresses.length === 0 ||
        this.contact.emails.length === 0) {
        this.alert = 'Please fill in all required fields'
      } else {
        const newContact = {
          id: uuidv4(),
          firstName: this.contact.firstName,
          lastName: this.contact.lastName,
          phones: this.contact.phones,
          addresses: this.contact.addresses,
          emails: this.contact.emails
        }

        this.addContact(newContact)

        // reset form after submit
        this.contact = {
          id: '',
          firstName: '',
          lastName: ''
        }

        // redirect
        this.$router.push({ path: '/', query: { alert: 'Contact Added' } })
      }
    },
    addItem(detail) {
      if (detail === 'phone') {
        if (this.phone) {
          this.contact.phones.push({
            id: uuidv4(),
            phone: this.phone
          })
          this.phone = ''
        }
      } else if (detail === 'address') {
        if (this.address) {
          this.contact.addresses.push({
            id: uuidv4(),
            address: this.address
          })
          this.address = ''
        }
      } else {
        if (this.email) {
          this.contact.emails.push({
            id: uuidv4(),
            email: this.email
          })
          this.email = ''
        }
      }
    },
    deleteItem(id, detail) {
      if (detail === 'phone') {
        this.contact.phones = this.contact.phones
          .filter(phone => phone.id !== id)
      } else if (detail === 'address') {
        this.contact.addresses = this.contact.addresses
          .filter(address => address.id !== id)
      } else {
        this.contact.emails = this.contact.emails
          .filter(email => email.id !== id)
      }
    },
    editItem(id, detail) {
      this.editIdDetail = id + detail
      if (detail === 'phone') {
        this.editText = this.contact.phones
          .filter(phone => phone.id === id)[0].phone
      } else if (detail === 'address') {
        this.editText = this.contact.addresses
          .filter(address => address.id === id)[0].address
      } else {
        this.editText = this.contact.emails
          .filter(email => email.id === id)[0].email
      }
    },
    updateItem(id, detail) {
      if (this.editText) {
        if (detail === 'phone') {
          if (this.editText) {
            this.contact.phones.find(phone => {
              return phone.id === id
            }).phone = this.editText
          }
        } else if (detail === 'address') {
          if (this.editText) {
            this.contact.addresses.find(address => {
              return address.id === id
            }).address = this.editText
          }
        } else {
          if (this.editText) {
            this.contact.emails.find(email => {
              return email.id === id
            }).email = this.editText
          }
        }
        this.editIdDetail = ''
      }
    },
    cancelUpdate() {
      this.editIdDetail = ''
    }
  },
  components: {
    Alert
  }
}
</script>

<style scoped>

</style>

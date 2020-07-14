import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AddContact from '../views/AddContact.vue'
import EditContact from '../views/EditContact.vue'
import ContactDetails from '../views/ContactDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/add',
    name: 'Add',
    component: AddContact
  },
  {
    path: '/contact/:id',
    name: 'Details',
    component: ContactDetails
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: EditContact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

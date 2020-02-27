import Vue from 'vue'
import VueRouter from 'vue-router'
import GettingStarted from '@/views/GettingStarted.vue'
import Grid from '@/views/Grid.vue'
import Container from '@/views/Container.vue'
import Colors from '@/views/Colors.vue'
import Offsets from '@/views/Offsets.vue'
import Helpers from '@/views/Helpers.vue'
import Visibility from '@/views/Visibility.vue'
import Texts from '@/views/Texts.vue'
import Messages from '@/views/Messages.vue'
import Buttons from '@/views/Buttons.vue'
import Icons from '@/views/Icons.vue'
import Forms from '@/views/Forms.vue'
import Base from '@/views/Base.vue'
import Header from '@/views/Header.vue'
import Navbar from '@/views/Navbar.vue'
import Splash from '@/views/Splash.vue'
import InitiativeCard from '@/views/InitiativeCard.vue'
import Borders from '@/views/Borders.vue'
import Text from '@/views/Text.vue'
import InitiativeMeta from '@/views/InitiativeMeta.vue'
import Loader from '@/views/Loader.vue'
import Deputy from '@/views/Deputy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'GettingStarteds',
    component: GettingStarted
  },
  {
    path: '/container',
    name: 'container',
    component: Container
  },
  {
    path: '/grid',
    name: 'grid',
    component: Grid
  },
  {
    path: '/colors',
    name: 'colors',
    component: Colors
  },
  {
    path: '/offsets',
    name: 'offsets',
    component: Offsets
  },
  {
    path: '/helpers',
    name: 'helpers',
    component: Helpers
  },
  {
    path: '/visibility',
    name: 'visibility',
    component: Visibility
  },
  {
    path: '/texts',
    name: 'texts',
    component: Texts
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messages
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: Buttons
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icons
  },
  {
    path: '/forms',
    name: 'forms',
    component: Forms
  },
  {
    path: '/base',
    name: 'base',
    component: Base
  },
  {
    path: '/header',
    name: 'header',
    component: Header
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: Navbar
  },
  {
    path: '/splash',
    name: 'splash',
    component: Splash
  },
  {
    path: '/initiative-card',
    name: 'initiative-card',
    component: InitiativeCard
  },
  {
    path: '/borders',
    name: 'borders',
    component: Borders
  },
  {
    path: '/text',
    name: 'text',
    component: Text
  },
  {
    path: '/initiative-meta',
    name: 'initiative-meta',
    component: InitiativeMeta
  },
  {
    path: '/loader',
    name: 'loader',
    component: Loader
  },
  {
    path: '/deputy',
    name: 'deputy',
    component: Deputy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

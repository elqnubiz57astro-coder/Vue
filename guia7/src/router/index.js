import { createRouter, createWebHistory } from 'vue-router'
import AnimalesList from '../views/AnimalesList.vue'
import CalculadoraView from '../views/CalculadoraView.vue'

const routes = [
{
path: '/',
name: 'animal',
component: AnimalesList
},
{
path: '/calculadora',
name: 'calculadora',
component: CalculadoraView
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

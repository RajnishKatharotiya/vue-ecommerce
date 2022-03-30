import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AddProduct from '../views/AddProduct.vue'
import SingleProduct from '../views/SingleProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/add-product',
    name: 'addProduct',
    component: AddProduct
  },
  {
    path: '/product/:id',
    name: 'SingleProduct',
    component: SingleProduct,
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

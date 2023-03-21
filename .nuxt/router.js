import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f2f5f70 = () => interopDefault(import('..\\pages\\courses\\_id\\index.vue' /* webpackChunkName: "pages/courses/_id/index" */))
const _4d7c9152 = () => interopDefault(import('..\\pages\\ingredients\\_id\\index.vue' /* webpackChunkName: "pages/ingredients/_id/index" */))
const _3ab302e6 = () => interopDefault(import('..\\pages\\trays\\_id\\index.vue' /* webpackChunkName: "pages/trays/_id/index" */))
const _494b22ec = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/courses/:id",
    component: _2f2f5f70,
    name: "courses-id"
  }, {
    path: "/ingredients/:id",
    component: _4d7c9152,
    name: "ingredients-id"
  }, {
    path: "/trays/:id",
    component: _3ab302e6,
    name: "trays-id"
  }, {
    path: "/",
    component: _494b22ec,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

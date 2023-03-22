import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0184235c = () => interopDefault(import('../pages/courses/_id/index.vue' /* webpackChunkName: "pages/courses/_id/index" */))
const _c77f2034 = () => interopDefault(import('../pages/ingredients/_id/index.vue' /* webpackChunkName: "pages/ingredients/_id/index" */))
const _068d4661 = () => interopDefault(import('../pages/trays/_id/index.vue' /* webpackChunkName: "pages/trays/_id/index" */))
const _03324488 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0184235c,
    name: "courses-id"
  }, {
    path: "/ingredients/:id",
    component: _c77f2034,
    name: "ingredients-id"
  }, {
    path: "/trays/:id",
    component: _068d4661,
    name: "trays-id"
  }, {
    path: "/",
    component: _03324488,
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

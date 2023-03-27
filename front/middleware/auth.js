export default function ({ app, store, redirect }) {
  const cookieValue = app.$cookiz.get('jwt')
  if (cookieValue !== undefined) {
    store.dispatch('/home', cookieValue)
  } else {
    store.dispatch('logout')
  }
}

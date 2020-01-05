export default function({ store, redirect }) {
  if (!store.state.localStorage.logged) return redirect('/')
}

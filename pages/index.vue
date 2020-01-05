<template>
  <div class="container-fluid">
    <Loading :isLoading="isLoading" />
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body">
            <h4>Welcome to Recipe Wikia</h4>
            <hr />
            <p class="subtitle">Please Login to Continue</p>
            <form action="" v-on:submit="doLogin">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-sm">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
import Loading from '../components/Loading'

export default {
  data: () => ({
    isLoading: false
  }),
  components: { Loading },
  methods: {
    doLogin(e) {
      e.preventDefault()
      this.isLoading = true
      let data = {
        email: e.target.email.value,
        password: e.target.password.value
      }
      this.$axios
        .$post('https://jsonplaceholder.typicode.com/posts', data)
        .then(res => {
          this.$store.commit('localStorage/login', res)
          swal('Success', 'Login Success', 'success').then(() => {
            this.isLoading = false
            this.$router.push('/dashboard')
          })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  background: #e65100;
  min-height: 720px;
}
.card {
  margin-top: 50px;
}
.subtitle {
  font-size: 12px;
  margin: 0px;
  font-style: italic;
  color: #ff9100;
}
.btn {
  width: 100px;
}
</style>

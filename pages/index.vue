<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body">
            <h4>Welcome to Recipe Wikia</h4>
            <hr />
            <p class="subtitle">Please Login to Continue</p>
            <form action="">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" />
              </div>
              <div class="form-group">
                <nuxt-link to="/dashboard">
                  <button type="button" class="btn btn-primary btn-sm">
                    Login
                  </button>
                </nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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

<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand href="/dashboard">Recipe Wikia</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/dashboard">Home</b-nav-item>
        <b-nav-item @click="doLogout">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    doLogout() {
      this.$store.commit('localStorage/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  background: #e65100;
  .navbar-brand,
  .nav-link {
    color: #fff;
  }
}
</style>

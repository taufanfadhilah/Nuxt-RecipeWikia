<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand href="#">Recipe Wikia</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped lang="scss">
.navbar {
  background: #e65100;
  .navbar-brand, .nav-link {
      color: #fff;
  }
}
</style>

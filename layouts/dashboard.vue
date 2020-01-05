<template>
  <div>
    <Navbar />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  components: { Navbar, Footer }
}
</script>
<style>
main {
  background: #ffe0b2;
  min-height: 615px;
}
</style>

<template>
  <Loading :active.sync="isLoading" loader="bars" color="#0d47a1" />
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  props: ['isLoading'],
  components: { Loading }
}
</script>

<style></style>

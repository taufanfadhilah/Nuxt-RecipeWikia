<template>
  <div class="container-fluid py-3">
    <div class="row">
      <div class="col-md-4">
        <h4>Recipe List</h4>
        <hr />
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-3"
        v-for="recipe in [1, 2, 3, 4, 5, 6, 7, 8]"
        :key="recipe"
      >
        <Card :id="recipe" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../components/Recipe/Card'

export default {
  layout: 'dashboard',
  components: { Card }
}
</script>

<style>
h4 {
  color: #212121;
}
</style>

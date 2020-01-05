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
        v-for="recipe in recipes"
        :key="recipe.id"
      >
        <Card :recipe="recipe" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../components/Recipe/Card'

export default {
  layout: 'dashboard',
  data(){
    return {
      recipes: []
    }
  },
  components: { Card },
  mounted() {
    this.$axios
      .$get(
        `https://api.spoonacular.com/recipes/search?query=sambal&number=12&apiKey=${process.env.API_KEY}`
      )
      .then(res => this.recipes = res.results)
      .catch(err => console.log(err))
  }
}
</script>

<style>
h4 {
  color: #212121;
  font-weight: 700;
}
</style>

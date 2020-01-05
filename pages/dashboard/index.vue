<template>
  <div class="container-fluid py-3">
    <Loading :isLoading="isLoading" />
    <div class="row">
      <div class="col-md-4">
        <h4>Recipe List</h4>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="recipe in recipes" :key="recipe.id">
        <Card :recipe="recipe" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../components/Recipe/Card'
import Loading from '../../components/Loading'

export default {
  layout: 'dashboard',
  data() {
    return {
      recipes: [],
      isLoading: true
    }
  },
  components: { Card, Loading },
  mounted() {
    this.$axios
      .$get(
        `https://api.spoonacular.com/recipes/search?query=sambal&number=12&apiKey=${process.env.API_KEY}`
      )
      .then(res => {
        this.recipes = res.results
        this.isLoading = false
      })
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

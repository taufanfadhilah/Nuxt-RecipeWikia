<template>
  <div class="container-fluid py-3">
    <Loading :isLoading="isLoading" />
    <div class="row">
      <div class="col-md-12">
        <h4>Recipe List</h4>
        <hr />
        <b-badge
          v-for="type in types"
          :key="type"
          variant="success"
          :class="type == choosenType && 'badge-disabled'"
          v-on:click="selectType(type)"
          >{{ type }}</b-badge
        >
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="recipe in recipes" :key="recipe.id">
        <Card :recipe="recipe" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-primary" :disabled="this.page < 1">Prev</button>
        <button class="btn btn-primary" v-on:click="doNext">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../components/Recipe/Card'
import Loading from '../../components/Loading'

export default {
  name: 'recipe-page',
  layout: 'dashboard',
  middleware: 'authenticated',
  data() {
    return {
      recipes: [],
      isLoading: true,
      types: ['spicy', 'sweet', 'salty'],
      choosenType: 'spicy',
      page: 0
    }
  },
  components: { Card, Loading },
  mounted() {
    this.getRecipes()
  },
  methods: {
    getRecipes() {
      this.isLoading = true
      this.$axios
        .$get(
          `https://api.spoonacular.com/recipes/search?offset=${this.page *
            10}&query=${this.choosenType}&number=12&apiKey=${
            process.env.API_KEY
          }`
        )
        .then(res => {
          this.recipes = res.results
          this.isLoading = false
        })
        .catch(err => console.log(err))
    },
    selectType(type) {
      this.choosenType = type
      this.getRecipes()
    },
    doNext() {
      this.page += 1
      this.getRecipes()
    },
    doPrev() {
      this.page -= 1
      this.getRecipes()
    }
  }
}
</script>

<style scoped>
h4 {
  color: #212121;
  font-weight: 700;
}
.badge {
  width: 100px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
  top: 0;
  transition: top ease 0.1s;
}
.badge:hover {
  top: -2px;
}
.badge-disabled {
  background-color: #ef5350;
}
</style>

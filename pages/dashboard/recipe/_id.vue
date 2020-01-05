<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <iframe :src="recipe.spoonacularSourceUrl" frameborder="0"></iframe>
      </div>
      <div class="col-md-4">
        <h4 class="mt-5">{{ recipe.title }}</h4>
        <hr />
        <p>
          <v-icon name="stopwatch" /> {{ recipe.readyInMinutes }} Mins -
          <v-icon name="pizza-slice" /> {{ recipe.servings }} Portions -
          <v-icon name="dollar-sign" />
          <span :class="recipe.cheap ? 'cheap' : 'not-cheap'">Cheap</span>
        </p>
        <b>Ingredients: </b>
        <ul>
          <li
            v-for="ingredient in recipe.extendedIngredients"
            :key="ingredient.id"
          >
            {{ ingredient.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/stopwatch'
import 'vue-awesome/icons/pizza-slice'
import 'vue-awesome/icons/dollar-sign'
import Icon from 'vue-awesome/components/Icon'
export default {
  layout: 'dashboard',
  components: {
    'v-icon': Icon
  },
  data() {
    return { recipe: {} }
  },
  mounted() {
    const id = this.$route.params.id
    this.$axios
      .$get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.API_KEY}`
      )
      .then(res => (this.recipe = res))
      .catch(err => console.log(err))
  }
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  min-height: 610px;
  height: 100%;
}
h4 {
  font-weight: 700;
}
li {
  text-transform: capitalize;
}
.col-md-8 {
  padding: 0px;
}
.fa-icon {
  margin-top: -3px;
  color: #d84315;
}
.cheap {
  color: #2e7d32;
}
.not-cheap {
  color: #b71c1c;
  text-decoration: line-through;
}
</style>

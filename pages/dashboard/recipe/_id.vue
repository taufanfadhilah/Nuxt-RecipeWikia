<template>
  <div class="container">
    <Loading :isLoading="isLoading" />
    <div class="row">
      <div class="col-md-4 pt-5">
        <img
          v-if="recipe.image"
          :src="recipe.image"
          alt="recipe-image"
          class="img-recipe"
        />
        <p class="mt-3">
          <font-awesome-icon icon="stopwatch" />
          {{ recipe.readyInMinutes }} Mins -
          <font-awesome-icon icon="pizza-slice" />
          {{ recipe.servings }} Portions -
          <font-awesome-icon icon="dollar-sign" />
          <span :class="recipe.cheap ? 'cheap' : 'not-cheap'">Cheap</span>
        </p>
      </div>
      <div class="col-md-8">
        <h4 class="mt-5">{{ recipe.title }}</h4>
        <hr />
        <b>Ingredients: </b>
        <ul>
          <li
            v-for="ingredient in recipe.extendedIngredients"
            :key="ingredient.id"
          >
            {{ ingredient.name }}
            <span class="amount"
              >({{ ingredient.amount }} {{ ingredient.unit }})</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../../../components/Loading'

export default {
  layout: 'dashboard',
  middleware: 'authenticated',
  components: { Loading },
  data() {
    return { recipe: {}, isLoading: true }
  },
  mounted() {
    const id = this.$route.params.id
    this.$axios
      .$get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=12917101803e438588260d1efdfff17f`
      )
      .then(res => {
        this.isLoading = false
        this.recipe = res
      })
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
.svg-inline--fa {
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
.img-recipe {
  width: 300px;
  border-radius: 6px;
}
.amount {
  font-style: italic;
  font-weight: 500;
}
@media only screen and (max-width: 600px) {
  .row {
    padding: 15px;
  }
}
</style>

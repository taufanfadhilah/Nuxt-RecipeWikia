<template>
  <nuxt-link :to="`dashboard/recipe/${recipe.id}`">
    <b-card
      :title="recipe.title"
      :img-src="`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`"
      img-alt="recipe-image"
      img-top
      tag="recipe"
      class="mb-3"
    >
      <b-card-text>
        <font-awesome-icon icon="stopwatch" /> {{ recipe.readyInMinutes }} Mins
        - <font-awesome-icon icon="pizza-slice" /> {{ recipe.servings }}
        Portions
      </b-card-text>
    </b-card>
  </nuxt-link>
</template>

<script>
export default {
  props: ['recipe']
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #212121;
}
.card {
  border: 0px;
}
.card-img-top {
  height: 200px;
}
.card-title {
  font-size: 18px;
  font-weight: 700;
  height: 60px;
  font-style: italic;
}
.fa-icon {
  margin-top: -3px;
  color: #d84315;
}
</style>

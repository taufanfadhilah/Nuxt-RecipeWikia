<template>
  <nuxt-link :to="`recipe/${id}`">
    <b-card
      title="Sweety Doughnut"
      img-src="https://topwithcinnamon.com/wp-content/uploads/2019/03/Rhubarb-Baked-Doughnuts-3-720x720.jpg"
      img-alt="recipe-image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-3"
    >
      <b-card-text>
        <v-icon name="stopwatch" /> 45 Mins - <v-icon name="pizza-slice" /> 5
        Portions
      </b-card-text>
    </b-card>
  </nuxt-link>
</template>

<script>
import 'vue-awesome/icons/stopwatch'
import 'vue-awesome/icons/pizza-slice'
import Icon from 'vue-awesome/components/Icon'
export default {
  props: ['id'],
  components: {
    'v-icon': Icon
  }
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
}
.fa-icon {
  margin-top: -3px;
  color: #d84315;
}
</style>

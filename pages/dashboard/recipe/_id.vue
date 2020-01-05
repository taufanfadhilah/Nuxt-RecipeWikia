<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <iframe
          src="https://tasty.co/topic/easy-dinner"
          frameborder="0"
        ></iframe>
      </div>
      <div class="col-md-4">
        <h4 class="mt-5">Sweety Doughnut</h4>
        <hr />
        <p>
          <v-icon name="stopwatch" /> 45 Mins - <v-icon name="pizza-slice" /> 5
          Portions - <v-icon name="dollar-sign" />
          <span class="not-cheap">Cheap</span>
        </p>
        <b>Ingredients: </b>
        <ul>
          <li
            v-for="ingredient in ['Onion', 'Water', 'Meat']"
            :key="ingredient"
          >
            {{ ingredient }}
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
  }
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 610px;
}
h4 {
  font-weight: 700;
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

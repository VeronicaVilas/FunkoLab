<template>
  <header class="header">
    <div class="d-flex justify-space-between">
    <router-link to="/">
      Funko Lab
    </router-link>
    <v-btn variant="text" prepend-icon="mdi-cart-variant" class="mt-8 me-0" size="x-large">Carrinho</v-btn>
    </div>
  </header>

  <router-view></router-view>
</template>

<script>
import {RouterLink} from "vue-router"

export default {
  components: {
    RouterLink
  }
}
</script>

<style scoped>

.header {
  padding: 10px 2em;
  widows: 100vw;
  height: 120px;
  background-image: url(./imagem/background.jpg);
  background-size: 100%;
  color: white;
}

a {
  text-decoration: none;
  font-size: 60px;
  color: white;
  font-weight: bold;
  font-family: 'Qwitcher Grypen';
}
</style>
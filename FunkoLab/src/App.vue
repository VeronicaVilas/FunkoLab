<template>
  <header class="header">
    <div class="d-flex justify-space-between">
    <p class="title">
      Funko Lab
    </p>

    <div class="justify-end">
      <router-link class="car-title" to="/">
      <v-btn variant="text" prepend-icon="mdi-home" class="mt-8 me-0" size="x-large">Loja</v-btn>
    </router-link>

    <router-link class="car-title" to="/carrinho">
      <v-btn variant="text" prepend-icon="mdi-cart-variant" class="mt-8 me-0" size="x-large">Carrinho ({{ this.$store.state.produtosCarrinho.length}})</v-btn>
    </router-link>
    </div>
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

.title {
  text-decoration: none;
  font-size: 60px;
  color: white;
  font-weight: bold;
  font-family: 'Qwitcher Grypen';
}

.car-title {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
</style>
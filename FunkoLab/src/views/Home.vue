<template>
  <div class="d-flex flex-wrap mx-2">
  
    <v-card width="250" variant="outlined" class="ma-2 pa-1" 
      v-for="product in products" 
      :key="product.id">

      <v-card-text  class="d-flex align-center flex-column">
        <v-img :src="product.imagem" class="align-end" width="150"></v-img>
        <div class="font-weight-light">NARUTO SHIPPUDEN</div>
        <p class="text-h6 font-weight-black">{{ product.nome }} </p>
        <p class="text-h6">{{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.preco)}}</p>
        <p class="text-h7">em até 10x de {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.parcela)}}</p>
      </v-card-text>

      <v-card-actions class="d-flex justify-center">
        <v-btn title="Adicionar ao carrinho" variant="elevated" color="black" size="large" @click="() => this.$store.dispatch('adicionarProduto', { product })">
          Adicionar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    axios.get('http://localhost:3000/produtos')
      .then((response) => {
        this.products = response.data
      })
      .catch(() => {
        alert('Desculpe, não foi possivel carregar os produtos! Por favor, tente novamente')
      })
  }
}
</script>

<style>
</style>
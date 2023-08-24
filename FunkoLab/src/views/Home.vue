<template>
  <div class="d-flex mx-2">
    <CardProduto 
      v-for="produto in listaProdutos"
      :key="produto.id"
      :imagem="produto.imagem"
      :nome="produto.nome"
      :parcela="produto.parcela"
      :preco="produto.preco"
      :id="produto.id"
    />
  </div>
</template>

<script>
import CardProduto from "../components/CardProduto/CardProduto.vue"
import axios from 'axios'

export default {
    components: {
        CardProduto
    },
    data() {
      return {
      listaProdutos: []
    }
    },
    mounted(){
      axios.get('http://localhost:3000/produtos')
      .then(res => this.listaProdutos = res.data)
      .catch(erro => console.log(erro))
    }
}

</script>
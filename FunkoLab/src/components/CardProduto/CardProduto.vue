<template>
   <div class="d-flex align-center flex-wrap" height="200">
    <v-card width="300" variant="outlined" class="ma-4 pa-1">
      <v-card-text>
        <v-img width="150" :src="imagem"></v-img>
        <div class="font-weight-light">NARUTO SHIPPUDEN</div>
      <div>
        <p class="text-h6 font-weight-black"> {{ nome }} </p>
        <p class="text-h6">10x de {{ parcela }} </p>
        <p class="text-h7">R$ {{ preco }}</p>
      </div>
      </v-card-text>
      <v-card-actions>
      <v-btn title="Adicionar ao carrinho" variant="elevated" color="black" class="mt-1 me-2" size="large">
        Adicionar
      </v-btn>
    </v-card-actions>
    </v-card>
    </div>
</template>

<script>
export default {
  props: ['imagem', 'nome', 'parcela', 'preco', 'id']
}
</script>

<style scoped>
</style>
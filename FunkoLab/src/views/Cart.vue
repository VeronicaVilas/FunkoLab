<template>
  <v-table class="d-flex justify-center">
    <thead fixed-header height="60px">
      <tr>
        <th class="font-weight-bold">PRODUTO</th>
        <th class="font-weight-bold">NOME</th>
        <th class="font-weight-bold">QUANTIDADE</th>
        <th class="font-weight-bold">PREÇO</th>
        <th class="font-weight-bold">SUBTOTAL</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in this.$store.state.produtosCarrinho" :key="item.id">
        <td><img :src="item.imagem" width="50" /></td>
        <td>{{ item.nome }}</td>
        <td>{{ item.quantidade }}</td>
        <td>{{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}}</td>
        <td>
          {{
            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              item.quantidade * item.preco
            )
          }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
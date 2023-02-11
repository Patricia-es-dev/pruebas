<template>
  <div class="search">
    <input type="text" v-model="search" @input="value => $emit('update:value', value)" placeholder="Filtrar datos"/>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    search: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="sass">
.search
  background-color: #f2f2f2
</style>

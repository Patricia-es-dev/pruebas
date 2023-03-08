<template>
  <div>
    <article class="card" :class="`bg-userGroup-${info.userId}`">
      <!-- <img class="p-card__image card-img-top" :src="info.icon" /> -->
      <small class="chip">{{ info.id }}</small>
      <div class="card__info">        
        <h3>{{ info.value | capitalize }}</h3>
        <p>{{info.url | capitalize }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style scoped lang="sass">
.card
  display: flex
  flex-direction: column
  padding: 0
  height: 100%
  &__info
    padding: .5rem

  &__image
    max-width: 80px

</style>

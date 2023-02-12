<template>
  <div>
    <article class="card" :class="`bg-userGroup-${info.userId}`">
      <img class="p-card__image card-img-top" :src="`https://picsum.photos/600/300/?image=${info.id}`" />
      <small class="chip">{{ info.userId }}</small>
      <div class="card__info">        
        <h3>{{ info.title | capitalize }}</h3>
        <p>{{info.description | capitalize }}</p>
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

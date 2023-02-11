<template>
  <article class="container">
    <section class="search">
      <span class="search__icon" id="search-addon" role="presentation">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </span>
      <input type="search" v-model="search" placeholder="Filtrar datos" class="search__input"/>

    </section>
    <section class="candidate row row-cols-1 row-cols-md-3 g-2" role="list">
      <Card :info="post" v-for="(post, i) in filteredList" :key="i" class="col" role="listitem"/>
    </section>
  </article>
</template>
<script>
import Card from '@/ui/components/Card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Patricia',
  components: {
    Card
  },
  data () {
    return {
      search: ''
    }
  },
  computed:{
   ...mapState(['candidates']),
    filteredList() {
      return this.candidates.filter(candidates => {
        return candidates.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions(['getUserList']),
  },
  async created () {
    await this.getUserList()
  }
}
</script>
<style lang="sass">
.search
  display: flex
  flex-wrap: nowrap
  align-items: stretch
  width: 100%
  margin-bottom: .5rem
  &__icon
    display: flex
    align-items: center
    padding: .5rem
    border-radius: 0.25rem 0 0 0.25rem
    border: 1px solid var(--bs-gray-500)
    border-right: none
  &__input
    display: block
    width: 100%
    padding: 0.375rem 0.75rem
    font-size: 1rem
    font-weight: 400
    line-height: 1.5
    background-clip: padding-box
    border: 1px solid  var(--bs-gray-500)
    border-left: none
    appearance: none
    border-radius: 0 0.25rem 0.25rem 0
    outline: -webkit-focus-ring-color auto 0px
</style>
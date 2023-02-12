<template>
  <div class="home container">
    <article class="bg-effects">
      <h3>Patricia: Front end developer con un toque UX</h3>
      <div class="info">
        <p>Desarrollador de front-end (antes maquetador web)</p>
        <p>Desarrollador con Vue desde 2019</p>
        <p>Maquetador web desde 2006</p>
        <p class="font-sight">Patricia A.</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style lang="sass">
.home
  .info
    background-color: var(--bs-white)
    padding: .5rem
    border-radius: .25rem
    p 
      padding: 0
      margin: 0
      &.font-sight
        text-align: right
        margin-top: 1rem 
  .bg-effects
    border-radius: .5rem
    padding: .5rem
    h3
      color: var(--bs-white)
      text-shadow: 1px 1px 1px  var(--bs-gray-dark)

</style>
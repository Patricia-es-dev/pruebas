<template>
  <div id="app">
    <header class="patricia">
      <nav class="navbar navbar-expand-sm" aria-labelledby="myProperty">
        <div class="container">
          <a class="patricia__avatar" href="https://www.linkedin.com/in/patriciaantonmartin/" target="_blank" id="myProperty">
            <img
              class="patricia__avatar--thumbnail" 
              src="https://media.licdn.com/dms/image/C4D03AQFB5WpZnMrjxA/profile-displayphoto-shrink_200_200/0/1641673531282?e=1681344000&v=beta&t=FvS_5WMo95bo3L30-wKowx8Q914Zu4L3xRjeJjJIlr0" alt="Patricia Antón M." />
          </a>
          <button class="patricia__collapse-button" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Navegación móvil">
             <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="nav">
            <ul class="patricia__nav me-auto ">
              <li class="patricia__nav--item">
                <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
              </li>
              <li class="patricia__nav--item">
                <router-link to="/patricia-anton" class="nav-link" href="#">Patricia</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>
<style lang="sass">
.patricia 
  &__avatar
    width: 4rem
    height: 4rem
    &--thumbnail
      border-radius: 25rem
      padding: 0.25rem
      background-color: #fff
      border: 1px solid var(--bs-border-color)
      max-width: 100%
  &__nav
    display: flex
    padding-left: 1.25rem
    margin: 0
    list-style: none
    @media (max-width: 600px)
        margin: 1rem 0
        padding: 0
        flex-direction: column
        box-shadow: 0 .25rem .25rem -.125rem var(--bs-gray) 
    &--item
      position: relative
    .nav-link
      color: var(--bs-primary)
      padding: .5rem
      &.router-link-exact-active
        font-weight: bold

      &::after 
        content: ''
        width: 100%
        position: absolute
        top: 100%
        left: 0
        height: 2px
        background-color: var(--bs-primary)
        transform: scaleX(0)
        transition: transform .35s ease
      &:hover::after 
        transform: scaleX(1)
  &__collapse-button
    padding: .5rem
    border: 2px solid var(--bs-soft-primary)
    background-color: var(--white)
    border-radius: .25rem
</style>
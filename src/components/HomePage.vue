<template>
  <section id="homepage" class="my-4">
    <Header />
    <div class="row">
      <div class="col-8 my-5">
        <Stories />
        <Posts />
      </div>
      <div class="col-4">
        <Suggestion />
      </div>
    </div>
  </section>
</template>

<script>
import Header from './Header.vue'
import Stories from './Stories.vue'
import Posts from './Posts.vue'
import Suggestion from './Suggestion.vue'

export default {
name: 'HomePage',

components: {
  Header,
  Stories,
  Posts,
  Suggestion,
}
}
</script>

<style scoped lang="scss">

#homepage {
  margin: 0 auto;
}

</style>
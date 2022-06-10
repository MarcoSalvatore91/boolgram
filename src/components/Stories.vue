<template>
  <section id="stories" class="container">
      <div class="stories-container m-auto">
          <div class="single-stories"></div>
          <div>
            <p class="user-name">Gianluca</p>
          </div>
      </div>
  </section>
</template>

<script>
export default {
name: "stories",
}
</script>

<style scoped lang="scss">

.stories-container {
    width: 80%;
    height: 150px;
    border: 1px solid lightgrey;
}

.single-stories {
    height: 50px;
    width: 50px;
    margin: 40px 30px 0 30px;
    border-radius: 50%;
    border: 3px solid darkred;
}

.user-name {
    margin: 5px 25px 0 25px;
}

</style>
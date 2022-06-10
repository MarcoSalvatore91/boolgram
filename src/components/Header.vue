<template>
  <section id="header">
      <div class="container">
        <div class="row">
            <div class="col-4 text-center">
                <img class="logo" src="../assets/logo.png" alt="logo">
            </div>
            <div class="col-4 text-center m-auto">
                <input type="text" placeholder="Cerca" class="text-center">
            </div>
            <div class="col-4 text-center m-auto">
                <i class="fa-solid fa-heart mx-3"></i>
                <i class="fa-solid fa-house mx-3"></i>
                <img class="img-profile mx-3" src="../assets/profile.jpg" alt="profile">
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
name: 'Header',
}
</script>

<style scoped lang="scss">

#header {
    border-bottom: 1px solid lightgrey;
    padding-bottom: 20px;
}

.logo {
    height: 50px;
    width: 130px;
}

.img-profile {
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

</style>
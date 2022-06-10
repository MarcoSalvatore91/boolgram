<template>
  <section id="suggestion">

      <!-- Personal-Acoount -->
      <div class="row">
          <div class="col-2">
              <img class="img-profile" src="../assets/profile.jpg" alt="profile">
          </div>
          <div class="col-10 m-auto">
              <span>Marco Salvatore</span>
          </div>
      </div>

      <!-- Suggestions -->
      <div class="row mt-5">
          <div class="col-5">
              <p>Suggerimenti per te</p>
          </div>
          <div class="col-7">
              <p>Mostra Tutti</p>
          </div>
      </div>
      <div class="row m-auto">
          <div class="col-4 d-flex">
            <div class="suggestion-image"></div>
            <div class="m-auto">
                <span>Luigi</span>
            </div>
          </div>
          <div class="offset-4 col-4 m-auto">
              <span class="follow">Segui</span>
          </div>
      </div>

  </section>
</template>

<script>
export default {
name: "suggestion"
}
</script>

<style scoped lang="scss">

#suggestion {
    margin-top: 50px;
}

.img-profile {
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

.suggestion-image {
    height: 50px;
    width: 50px;
    margin: 10px 0;
    border-radius: 50%;
    border: 1px solid;
}

.follow {
    color: blue;
}

</style>
<template>
  <section id="suggestion">

      <!-- Personal-Acoount -->
      <div class="row ms-1">
          <div class="col-1">
              <img v-if="loading === false" class="img-profile" src="../assets/profile.jpg" alt="profile">
              <!-- Skeleton -->
              <b-skeleton v-if="loading === true" class="img-profile" type="avatar"></b-skeleton>
          </div>
          <div class="col-10 m-auto">
              <!-- Skeleton -->
              <b-skeleton v-if="loading" animation="wave" width="100px"></b-skeleton>
              <span v-else>Marco Salvatore</span>
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

      <!-- Skeleton -->
      <div v-if="loading">
        <div class="row m-auto" v-for="profile in stories" :key="profile.id">
            <div class="col-6 d-flex align-items-center">
                <div class="suggestion-image">
                    <b-skeleton type="avatar"></b-skeleton>
                </div>
                <div class="ms-2">
                    <b-card class="skeleton-name">
                        <b-skeleton animation="wave" width="75px"></b-skeleton>
                        <b-skeleton animation="wave" width="50px"></b-skeleton>
                    </b-card>
                </div>
            </div>
            <div class="offset-4 col-4 m-auto">
                <span class="follow">Segui</span>
            </div>
        </div>
      </div>

      <div v-else>
        <div class="row m-auto" v-for="profile in stories" :key="profile.id">
            <div class="col-6 d-flex align-items-center">
                <div class="suggestion-image">
                    <img :src="profile.profile_picture" alt="profile">
                </div>
                <div class="ms-2">
                    <span>{{ profile.profile_name }}</span>
                </div>
            </div>
            <div class="offset-4 col-4 m-auto">
                <span class="follow">Segui</span>
            </div>
        </div>
      </div>

  </section>
</template>

<script>
export default {
name: "suggestion",
props: ['stories', 'loading'],
}
</script>

<style scoped lang="scss">

#suggestion {
    margin-top: 50px;
}

/* Skeleton */

.skeleton-name {
    border: 0;
    background-color: rgba(250, 250, 250);
}

/* Main */

.img-profile {
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

.suggestion-image {
    img {
        height: 50px;
        width: 50px;
        margin: 10px 0;
        border-radius: 50%;
        border: 1px solid;
    }
}

.follow {
    color: blue;
}

</style>
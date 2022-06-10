<template>
  <section id="posts" class="container">

    <div class="post-container m-auto">

      <!-- Top-Post -->

      <div class="d-flex align-items-center justify-content-between">

        <div class='d-flex align-items-center'>
          <div class="single-stories"></div>
          <div>
            <p class="user-name">Gianluca</p>
          </div>
        </div>

        <div>
          <i class="fa-solid fa-ellipsis mx-3"></i>
        </div>

      </div>

      <!-- Post -->

      <div class="post">
        <div class="image-post">

        </div>
      </div>

      <!-- Like-Post -->

      <div class='like-post'>
        <i class="fa-solid fa-heart m-3"></i>
        <i class="fa-solid fa-comment m-3"></i>
      </div>

      <!-- Liked-Post -->

      <div class='liked-post d-flex align-items-center'>
        <div class="image-liked-post"></div>
        <div>
          <span>Piace a Marco e 4 altri</span>
        </div>
      </div>

      <!-- Comments -->

      <div class='comments mx-3'>
        <p>Mostra tutti e 4 i commenti</p>
        <p><strong>Michele</strong>: Grande</p>
        <p><strong>Michele</strong>: Grande</p>
        <p><strong>Michele</strong>: Grande</p>
        <p><strong>Michele</strong>: Grande</p>
      </div>

      <!-- Publish-Time -->

      <div class='publish-time mx-3 mt-5 mb-2'>
        <span>33 ore fa</span>
      </div>

    </div>

    <!-- Add-Comment -->

    <div class="post-container m-auto add-comment">
      <div class="d-flex">
        <input class="input-comment" type="text" placeholder='Aggiungi un Commento'>
        <button class="btn-publish bold">Pubblica</button>
      </div>
      <div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
name: 'posts'
}
</script>

<style scoped lang="scss">

#posts {
  margin-top: 50px;
}

.post-container {
    width: 80%;
    border: 1px solid lightgrey;
}

.single-stories {
    height: 50px;
    width: 50px;
    margin: 10px 0 10px 30px;
    border-radius: 50%;
    border: 3px solid darkred;
}

.user-name {
    margin: 5px 25px 0 25px;
}

.image-post {
  width: 100%;
  height: 500px;
  border: 1px solid black;
}

.image-liked-post {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid;
  margin: 20px 12px;
}

.add-comment {
  .input-comment{
    width: 100%;
    height: 50px;
    padding-left: 30px;
    border: none;
  }
  .input-comment:focus{
    outline:none;
    border: none;
  }
  .btn-publish{
    margin-right: 30px;
    color: blue;
    border: none;
    background-color: white;
  }
  }

</style>
<template>
  <section id="posts" class="container">

    <div v-for="(post, index) in posts" :key="index" class="mb-4">

      <div class="post-container m-auto">

        <!-- Top-Post -->

        <div class="d-flex align-items-center justify-content-between">

          <!-- Skeleton -->

          <div class='d-flex align-items-center' v-if="loading === true">
            <div class="single-post">
              <b-skeleton type="avatar" class="skeleton-img-profile"></b-skeleton>
            </div>
            <div>
              <b-card class="user-name skeleton-name">
                <b-skeleton animation="wave" width="100px"></b-skeleton>
                <b-skeleton animation="wave" width="80px"></b-skeleton>
              </b-card>
            </div>
          </div>

          <div class='d-flex align-items-center' v-if="loading === false">
            <div class="single-post">
              <img class="profile-pictures" :src="post.profile_picture" alt="profile">
            </div>
            <div>
              <p class="user-name">{{ post.profile_fullname }}</p>
            </div>
          </div>

          <div>
            <i class="fa-solid fa-ellipsis mx-3"></i>
          </div>

        </div>

        <!-- Post -->

        <div class="post">
          <div class="image-post" v-if="loading === false">
            <img :src="post.post_image" alt="profile">
          </div>
          <div v-else class="image-post skeleton-img"></div>
        </div>

        <!-- Like-Post -->

        <div class='like-post'>
          <div class="d-inline" @click="like(post.profile_name, index)">
            <i v-if="totLikes.includes(post.profile_name)" class="fa-solid fa-heart m-3" style="color: red"></i>
            <i v-else class="fa-regular fa-heart m-3"></i>
          </div>
          <i class="fa-regular fa-comment m-3"></i>
        </div>

        <!-- Liked-Post -->

        <div class='liked-post d-flex align-items-center'>
          <div class="image-liked-post">
            <img :src="post.likes[0].profile_picture" alt="">
          </div>
          <div>
            <span v-if="!totLikes.includes(post.profile_name)">Piace a {{ post.likes[0].username }}<span v-if="post.likes.length > 1"> e altri {{ post.likes.length - 1 }}</span></span>
            <span v-if="totLikes.includes(post.profile_name)">Piace a {{ post.likes[0].username }}<span> e altri {{ post.likes.length }}</span></span>
          </div>
        </div>

        <!-- Comments -->

        <div class='comments mx-3'>
          <p class='comment' @click="dynamicComments(post.comments[index])" v-if="post.comments.length - 3  > 0 && !totComment.includes(post.comments[index])">Mostra tutti e {{ post.comments.length }} i commenti</p>
          <p class='comment' @click="dynamicComments(post.comments[index])" v-if="post.comments.length - 3  > 0 && totComment.includes(post.comments[index])">Nascondi i commenti</p>
          <ul v-for="(comment, i) in post.comments" :key="i">
            <li class="list-unstyled" v-if="i < 3 && !totComment.includes(post.comments[index])">{{ comment.username }}: {{ comment.text }}</li>
            <li class="list-unstyled" v-if="totComment.includes(post.comments[index])">{{ comment.username }}: {{ comment.text }}</li>
          </ul>
        </div>

        <!-- Publish-Time -->

        <div class='publish-time mx-3 mt-5 mb-2'>
          <span>33 ore fa</span>
        </div>

      </div>

      <!-- Add-Comment -->

      <div class="post-container m-auto add-comment">
        <div class="d-flex">
          <input v-model="addComment" class="input-comment" type="text" placeholder='Aggiungi un Commento'>
          <button @click="newComment(post.comments)" class="btn-publish bold">Pubblica</button>
        </div>
        <div>

        </div>
      </div>

    </div>


  </section>
</template>

<script>
export default {
name: 'posts',

data() {
    return {
      addComment: '',
      totLikes: [],
      totComment: [],
    }
},

props: ['posts', 'loading'],

methods: {

  newComment(comment) {
    comment.push({
      text: this.addComment,
      username: "Marco Salvatore",
    });
    this.addComment = '';
  },

  dynamicComments(comment, index) {

    if(!this.totComment.includes(comment)) {
      this.totComment.push(comment)
    } else {
      this.totComment.splice(comment[index], 1);
    }
  },

  like(likes, index) {
    
    if(this.totLikes.includes(likes)) {
      this.totLikes.splice(likes[index], 1)
    } else {
      this.totLikes.push(likes)
      }

  },
}
}
</script>

<style scoped lang="scss">

/* Generics */

i {
  cursor: pointer;
}

/* Skeleton */

.skeleton-img-profile {
  height: 50px;
    width: 50px;
    margin: 10px 0 10px 30px;
    border-radius: 50%; 
}

.skeleton-name {
  border: 0;
  background-color: rgba(250, 250, 250);
}

.skeleton-img {
  background-color: grey;
}

/* Posts */

#posts {
  margin-top: 50px;
}

.post-container {
    width: 60%;
    border: 1px solid lightgrey;
}

.profile-pictures {
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
  img {
    width: 100%;
    height: 100%;
  }
}

.image-liked-post {
  img {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px solid;
    margin: 20px 12px;
  }
}

.comments {
  li {
    margin-left: -25px;
  }
  .comment{
    cursor: pointer;
  }
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
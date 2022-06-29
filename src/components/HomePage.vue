<template>
  <section id="homepage" class="my-4" :class="{ 'bgc-disabled' : visualStory }">
    <div @click="stopStory()" class="bgc-disabled" v-if="singleStory && visualStory"></div>
    <img v-if="visualStory" class="single-story" :src="singleStory" alt="single-story" @click='nextStory()'>
    <Header :loading='loading'/>
    <div class="row main">
      <div class="col-8 my-5">
        <Stories :stories='stories'
        :loading='loading'
        @currentStory='currentStory($event)'
        @viewStory='viewStory($event)' />
        <Posts :posts='posts'
        :loading='loading'/>
      </div>
      <div class="col-4">
        <Suggestion :stories='stories'
        :loading='loading'/>
      </div>
    </div>
  </section>
</template>

<script>
import Header from './Header.vue'
import Stories from './Stories.vue'
import Posts from './Posts.vue'
import Suggestion from './Suggestion.vue'
import axios from 'axios';

export default {
name: 'HomePage',

components: {
  Header,
  Stories,
  Posts,
  Suggestion,
},

data() {
    return {
      stories: [],
      errors: [],
      posts: [],
      singleStory: '',
      visualStory: false,
      loading: true,
    }
  },

methods: {
  
  stopStory () {
    if(this.visualStory) {
      this.visualStory = false;
    }
  },

  nextStory() {
    
      this.posts.forEach((post, index) => {
        if(post.profile_picture === this.singleStory && this.visualStory) {
          if(index < this.posts.length - 1) {
            console.log(index)
            this.singleStory = this.posts[index + 1].profile_picture;
            this.visualStory = false;
          } else {
            this.singleStory = this.posts[index = 0].profile_picture;
            this.visualStory = false;
          }
        } 
      });


    this.visualStory = true;
  },

  currentStory(story) {
    this.singleStory = story
  },

  viewStory(viewStory) {
    this.visualStory = viewStory
  }
},

created() {

    this.loading = true;
    
      axios.get(`https://flynn.boolean.careers/exercises/api/boolgram/profiles`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.stories = response.data
      })
      .catch(e => {
        this.errors.push(e)
      });

      axios.get(`https://flynn.boolean.careers/exercises/api/boolgram/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      });


      setTimeout(() => {
        this.loading = false;
      }, 5000);
    
  }
}
</script>

<style scoped lang="scss">

/* Main */

.main {
  background-color: rgba(250, 250, 250);
}

/* Section */

#homepage {
  position: relative;
  overflow-x: hidden;
  .bgc-disabled {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    width: 100%;
    margin: -30px 0;
  }
  .single-story {
    position: fixed;
    height: 500px;
    width: 500px;
    top: 100px;
    left: 500px;
    cursor: pointer;
  }
}

#homepage {
  margin: 0 auto;
}

</style>
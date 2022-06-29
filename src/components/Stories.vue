<template>
  <section id="stories" class="container">
        <!-- Skeleton -->
        <div v-if="loading" class="stories-container m-auto d-flex justify-content-between">
          <div v-for="story in stories" :key="story.id" class="d-flex flex-column">
            <b-skeleton v-if="loading" type="avatar" class="skeleton"></b-skeleton>
            <b-skeleton class="user-name tronca mt-2"></b-skeleton>
          </div>
        </div>

        <div v-else class="stories-container m-auto d-flex justify-content-between">
        <div v-for="story in stories" :key="story.id" class="d-flex flex-column">
            <img @click="showStory(story.profile_picture)" :src="story.profile_picture" alt="img-story">
            <p class="user-name tronca">{{ story.profile_name }}</p>
        </div>
        </div>
  </section>
</template>

<script>
export default {
name: "stories",
props: ['stories', 'loading'],

data() {
    return {
        sliceName: [],
        story: '',
        viewStory: false,
    }
},

methods: {
 
    showStory(currentStory) {
        this.story = '';
        this.story = currentStory;
        this.viewStory = true;
        this.$emit('currentStory', this.story)
        this.$emit('viewStory', this.viewStory)
    },

}
}
</script>

<style scoped lang="scss">

/* Customize Scrollbar */

::-webkit-scrollbar {
    width: 10px;
    height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
    
/* Handle */
::-webkit-scrollbar-thumb {
    background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}

/* Stories */

.stories-container {
    width: 60%;
    height: 150px;
    border: 1px solid lightgrey;
    overflow-x: scroll;
}


img {
    height: 40px;
    width: 40px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 50%;
    border: 3px solid darkred;
    cursor: pointer;  
}

.skeleton {
    height: 40px;
    width: 40px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 50%;
}

.user-name {
    margin: 5px 20px 0 20px;
    font-size: 15px;
}

.tronca {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 50px;
}

</style>
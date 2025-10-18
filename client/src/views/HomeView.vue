<template>
  <div>
    <h1>Home Page</h1>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="4"
          class="pa-3"
          v-for="post in posts"
          :key="post._id"
        >
          <v-card class="pa-1">
            <!-- исправлено :src -->
            <v-img height="250" :src="`http://localhost:5000/${post.image}`"></v-img>

            <v-btn class="ml-4 mt-3" small outlined color="indigo">
              {{ post.category }}
            </v-btn>

            <v-card-title class="headline">{{ post.title }}</v-card-title>

            <v-card-text class="py-0">
              <p>{{ (post.content || '').slice(0, 100) + '...' }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import API from "../api";

export default {
  name: "Home",
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      this.posts = await API.getAllPost();
    } catch (error) {
      console.error("Ошибка при загрузке постов:", error);
    }
  },
};
</script>

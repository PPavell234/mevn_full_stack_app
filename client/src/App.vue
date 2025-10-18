<template>
  <v-app id="inspire">
    <!-- Верхняя панель без синего фона -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <!-- Боковое меню -->
    <v-navigation-drawer app v-model="drawer">
      <!-- Заголовок -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">DCodeMania</v-list-item-title>
          <v-list-item-subtitle>MEVN Full Stack App</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Карточка со списком -->
      <v-card flat>
        <v-list dense>
          <v-subheader>REPORTS</v-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :class="{ 'active-item': selected === item.text }"
            @click="selectItem(item.text)"
            :to="item.link"
            link
          >
            <v-list-item-icon>
              <v-icon :color="selected === item.text ? 'white' : 'primary'">
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'white--text': selected === item.text }"
              >
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>


    <v-main>
      <router-view></router-view>
    </v-main>

    
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    selected: 'Real-Time',
    items: [
      { text: 'Home', icon: 'mdi-home',link:"/" },
      { text: 'Add Post', icon: 'mdi-note-plus',link:"/add-post" },
      { text: 'About', icon: 'mdi-help',link:"/about" },
    ],
  }),
  methods: {
    selectItem(item) {
      this.selected = item
    },
  },
}
</script>

<style>
.active-item {
  background-color: #1976d2 !important; /* Синий фон активного пункта */
  color: white !important;
  transition: background-color 0.3s ease;
}

.v-list-item:hover:not(.active-item) {
  background-color: rgba(25, 118, 210, 0.1) !important;
}
</style>

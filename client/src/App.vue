<template>
  <v-app id="inspire">
    
<v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>
    
    <v-navigation-drawer v-model="drawer">

      


      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            DCodeMania
          </v-list-item-title>
          <v-list-item-subtitle>
            MEVN Full Stack App
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact">

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>

      
    </v-navigation-drawer>
    

    

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
  export default {
  data: () => ({
    drawer: null,
      
     }),
  }
</script>
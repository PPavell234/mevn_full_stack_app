<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>DCodeMania</v-list-item-title>
          <v-list-item-subtitle>MEVN Full Stack App</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- v-list с активным элементом -->
      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item.text"
          color="primary"
          :active="selected === item.text"
          @click="selected = item.text"
          rounded="lg"
        >
          <template #prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const selected = ref('Real-Time')

const items = [
  { text: 'Real-Time', icon: 'mdi-clock' },
  { text: 'Audience', icon: 'mdi-account' },
  { text: 'Conversions', icon: 'mdi-flag' },
]
</script>

<style scoped>
.v-list-item--active {
  background-color: #1976d2 !important; /* цвет подсветки */
  color: white !important;
}
</style>

<template>
  <h4>Organization search:</h4>
    <input type="text" placeholder="Lemoncode" v-model="searchText" />
    <button @click.prevent="searchHandler(searchText)" class="button">Search!</button>
    
</template>

<script setup lang="ts">
const { searchText, searchHandler } = useMembersApi()

</script>
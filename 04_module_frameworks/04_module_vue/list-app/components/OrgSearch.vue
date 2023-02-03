<template>
  <h4>Organization search:</h4>
  <input
    type="text"
    placeholder="Search organization..."
    :value="props.companyName"
    v-on:change="updateSearchText"
  />
  <button @click.prevent="handlerClick" class="button">Search!</button>
</template>

<script setup lang="ts">
const props = defineProps<{ companyName: any; handlerClick: any }>();

const { setCompanyName } = useSearchTextStore();

const updateSearchText = (event: any) => {
  setCompanyName(event.target.value);
};
</script>

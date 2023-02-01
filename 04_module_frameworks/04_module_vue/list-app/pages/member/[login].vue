<template>
  <div class="container">
    <NuxtLink to="/member" class="back">⬅️ Back to List Page</NuxtLink>
    <div>
      <img :src="member?.avatar_url" width="160" />
    </div>
    <div v-if="member">
      <h1>{{ member.login }}</h1>
      <p>login: {{ member.id }}</p>
      <p>name: {{ member.name }}</p>
      <p>company: {{ member.company }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { memberService } from "~~/services/members";
import { Member } from "~~/types";

const route = useRoute();
const login = route.params.login as string;

const { data: member } = await useAsyncData<Member>(() =>
  memberService.getMemberById(login)
);
</script>

<style scoped>
.back {
  display: block;
  margin: 1rem 0;
}
</style>

<template>
  <h2>Detail Page:</h2>
  <ul class="member-detail-list">
    <li v-for="member in list" :key="member.id">
      <p>id: {{ member.id }}</p>
      <p>login: {{ member.login }}</p>
      <p>name: {{ member.name }}</p>
      <p>company: {{ member.company }}</p>
      <p>bio: {{ member.bio }}</p>
      <img src="{{" member.avatar_url }} alt="" />
    </li>
  </ul>
  <div><Link to="/list">Back to list page</Link></div>
</template>

<script setup lang="ts">
import { memberService } from "@/services/members";

const list = await memberService.get();
</script>

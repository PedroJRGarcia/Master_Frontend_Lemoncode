<template>
  <div class="container">
    <NuxtLink to="/" class="back">⬅️ Back to List Page</NuxtLink>
      <div>
        <img :src="member?.avatar_url" alt="" />
      </div>
      <div v-if="member">
        <h1>{{ member.id }}</h1>
      </div>
  </div>
</template>

<script setup lang="ts">
import { memberService } from '~~/services/members'
import { Member } from '~~/types'

const route = useRoute()
const id = Number(route.params.id as string)
console.log(id)

const { data: member } = useAsyncData<Member>(() =>
  memberService.getMemberById(id)
)
</script>

<style scoped>
.back {
  display: block;
  margin: 1rem 0;
}
</style>
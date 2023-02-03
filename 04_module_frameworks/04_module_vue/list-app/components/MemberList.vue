<template>
  <h3>List Page</h3>
  <OrgSearch :companyName="companyName" :handlerClick="handlerClick"/>
  <ul class="member-list">
    <li v-for="member in list" :key="member.id">
      <NuxtLink :to="`/member/${member.login}`">
        <div class="grid member-container card">
          <div class="image">
            <span class="grey-text">Avatar: </span>
            <img :src="member.avatar_url" width="80" />
          </div>
          <div class="member-container__content">
            <p>
              <span class="grey-text">Id: </span>
              <strong> {{ member.id }} </strong>
            </p>
            <p>
              <span class="grey-text">Name: </span>
              <strong> {{ member.login }} </strong>
            </p>
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'; 
import { memberService } from '~~/services/members';

let list: any = ref([])

const searchTextStore = useSearchTextStore();
const { companyName } = storeToRefs(searchTextStore)

const handlerClick = async () => {
  list.value = await memberService.get(companyName.value)
}

onMounted( async () => {
  list.value = await memberService.get(companyName.value)
})
</script>

<style lang="scss" scoped>
.member-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
}
.member-container {
  align-items: flex-start;
  grid-template-columns: 100px 1fr;
}

.member-container__content {
  padding: 0 1em;
}

.member-container__aside {
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.image {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}
</style>
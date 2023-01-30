<template>
  <title class="title">{ Login }</title>
  <form class="form-login">
    <div class="username">
      <label>Username: </label>
      <input 
      v-model="member.username"
      type="text"
      class="input"
      placeholder="username"
      />
    </div>
    <div class="password">
      <label>Password: </label>
      <input 
      v-model="member.password"
      type="text" 
      class="input"
      placeholder="password"
      />
    </div>
    <Button @click.prevent="login" class="button"> Login </Button>
  </form>
</template>

<script lang="ts" setup>
const member = ref({
  username: "",
  password: "",
});

const login = async () => {
  // TODO send user Data to the login endpoint and redirect if  successful
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  min-height: 40px;
  background-color: rgba(49, 84, 144, 0.607);
  font-size: large;
  position: sticky;
  top: 0;
}
.form-login {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>
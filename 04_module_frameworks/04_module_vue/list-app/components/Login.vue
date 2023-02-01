<template>
  <title class="title">{ Login }</title>
  <form class="form-login">
    <div class="username">
      <label>Username: </label>
      <input 
      type="text"
      class="input"
      placeholder="username"
      v-model="loginForm.username"
      />
    </div>
    <div class="password">
      <label>Password: </label>
      <input 
      type="text" 
      class="input"
      placeholder="password"
      v-model="loginForm.password"
      />
    </div>
    <button @click.prevent="loginHandler" class="button"> Login </button>
  </form>
</template>

<script lang="ts" setup>

let loginForm = {
  username: "",
  password: "",
};

const loginHandler = () => {
if (loginForm.username === "admin" && loginForm.password === "test") {
      navigateTo("/member");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
}
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
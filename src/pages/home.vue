<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { home } from '../data.json';
  import { AES, enc } from 'crypto-js';

  const router = useRouter();
  const name = ref('');
  const num = ref('');
  const valid = ref(true);
  const secretkey = 'mylovezai';
  let state = localStorage.getItem("state");
  if (state && state !== "home") {
    router.push(`/${state}`);
  }

  function route() {
    if ((name.value as string).toLowerCase() === AES.decrypt(home.name, secretkey).toString(enc.Utf8).toLowerCase() && 
      num.value === AES.decrypt(home.num, secretkey).toString(enc.Utf8)) {
      localStorage.setItem("state", "quest_one");
      router.push(`/quest_one`);
    } else {
      valid.value = false;
    }
  }

  function validate() {
    valid.value = true;
    route();
  }
</script>

<template>
  <div class='home-container'>
    <div class='top-container'></div>
    <div class='middle-container'>
      <form @submit.prevent="route">
        <div class='middle-container-form'>
          <div class='middle-first-form'>
            <input class="input-num" v-model="num" type="text" :onchange="validate" aria-label="№" placeholder="№">
          </div>
          <div class='middle-second-form'>
            <input class="input-name-wl" v-model="name" type="text" :onchange="validate" aria-label="Сотрудник" placeholder="Сотрудник">
          </div>
          <div :class="{'middle-third-form': valid, 'middle-third-form-error': !valid }">
            <button class="button-submit-wl" type="submit"/>
          </div>
        </div>
      </form>
    </div>
    <div class='bottom-container'></div>
  </div>
</template>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.top-container {
  background: url('/top-home.jpg') no-repeat center center;
  height: 500px;
  width: 832px;
}

.middle-container {
  background: url('/middle-home.jpg') no-repeat center center;
  height: 518px;
  width: 832px;
}

.middle-first-form {
  background: url('/middle-first.png') no-repeat center center;
  display: flex;
  align-self: center;
  height: 190px;
}

.middle-second-form {
  background: url('/middle-second.png') no-repeat center center;
}

.middle-third-form {
  background: url('/middle-third.png') no-repeat center center;
}

.middle-third-form-error {
  background: url('/middle-third-error.png') no-repeat center center;
}

.middle-container-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.bottom-container {
  background: url('/bottom-home.jpg') no-repeat center center;
  height: 633px;
  width: 832px;
}

.button-submit-wl {
  width: 600px;
  height: 100px;
  background: transparent;
  border: none;
}

.input-num {
  width: 300px;
  background: transparent;
  border: none;
  text-align: center;
  font-size: 60pt;
  height: 170px;
}

.input-name-wl {
  width: 700px;
  background: transparent;
  border: none;
  text-align: center;
  font-size: 60pt;
  height: 150px;
}

</style>
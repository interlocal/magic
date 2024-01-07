<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { quest_data } from '../data.json';
  import { AES, enc } from 'crypto-js';

  const router = useRouter();
  const name = ref('');
  const stageQuest = ref([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const secretkey = 'mylovezai';
  let state = localStorage.getItem("state");
  if (!state) {
    router.push('/home');
  } else if (state !== "quest_one") {
    router.push(`/${state}`);
  }
  let stateQuest = localStorage.getItem("q1");
  if (stateQuest) {
    const arr = stateQuest.split(',').map(Number);
    stageQuest.value = [...arr];
  }
  function validate() {
    route(false);
  }
  function route(force = true) {
    const index = quest_data.bestOf16.findIndex((word: string) => AES.decrypt(word, secretkey).toString(enc.Utf8).toLowerCase()===(name.value.trim() as string).toLowerCase());
    if (force) {
      name.value = '';
    }
    if (index > -1) {
      stageQuest.value[index] = 1;
      localStorage.setItem("q1", stageQuest.value.toString());
    }
    if (stageQuest.value.every((val: number)=> val === 1)){
      localStorage.setItem("state", "quest_two");
      router.push('/quest_two');
    }
  }
</script>

<template>
  <div class='home-container'>
    <div class='top-quest-one-container'></div>
    <div class='middle-quest-head-container'>
      <div class='middle-quest-title'></div>
      <div class='middle-quest-one-container-content'>
        <form @submit.prevent="route()">
          <div class='middle-quest-container-form'>
            <input class="input-name" v-model="name" type="text" :onchange="validate">
            <div class='middle-quest-button'>
              <button class="button-submit" type="submit"/>
            </div>
          </div>
        </form>
        <div class="middle-quest-span">
          <span>1.</span>
          <span v-if="stageQuest[0]">{{AES.decrypt(quest_data.bestOf16[0], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>2.</span>
          <span v-if="stageQuest[1]">{{AES.decrypt(quest_data.bestOf16[1], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>3.</span>
          <span v-if="stageQuest[2]">{{AES.decrypt(quest_data.bestOf16[2], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>4.</span>
          <span v-if="stageQuest[3]">{{AES.decrypt(quest_data.bestOf16[3], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>5.</span>
          <span v-if="stageQuest[4]">{{AES.decrypt(quest_data.bestOf16[4], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>6.</span>
          <span v-if="stageQuest[5]">{{AES.decrypt(quest_data.bestOf16[5], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>7.</span>
          <span v-if="stageQuest[6]">{{AES.decrypt(quest_data.bestOf16[6], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>8.</span>
          <span v-if="stageQuest[7]">{{AES.decrypt(quest_data.bestOf16[7], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>9.</span>
          <span v-if="stageQuest[8]">{{AES.decrypt(quest_data.bestOf16[8], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>10.</span>
          <span v-if="stageQuest[9]">{{AES.decrypt(quest_data.bestOf16[9], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>11.</span>
          <span v-if="stageQuest[10]">{{AES.decrypt(quest_data.bestOf16[10], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>12.</span>
          <span v-if="stageQuest[11]">{{AES.decrypt(quest_data.bestOf16[11], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>13.</span>
          <span v-if="stageQuest[12]">{{AES.decrypt(quest_data.bestOf16[12], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>14.</span>
          <span v-if="stageQuest[13]">{{AES.decrypt(quest_data.bestOf16[13], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>15.</span>
          <span v-if="stageQuest[14]">{{AES.decrypt(quest_data.bestOf16[14], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <div class="middle-quest-span">
          <span>16.</span>
          <span v-if="stageQuest[15]">{{AES.decrypt(quest_data.bestOf16[15], secretkey).toString(enc.Utf8)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.top-quest-one-container {
  background: url('/top-quest-one.jpg') no-repeat center center;
  height: 424px;
  width: 832px;
}

.middle-quest-head-container {
  width: 800px;
  background-color: #E1E4CE;
  border: 0.5rem solid #91908D;
	border-image: repeating-linear-gradient(45deg, transparent, transparent 5px,  6px, #91908D 15px, transparent 16px, transparent 20px) 20/0.5rem;
}

.middle-quest-title {
  background: url('/middle-quest-title.svg') no-repeat center center;
  height: 400px;
  align-self: center;
  background-color: #E1E4CE;
}

.middle-quest-button {
  background: url('/middle-quest-button.svg') no-repeat center center;
}

.middle-quest-one-container-content {
  background-image: url('/bottom-quest-watermark.svg');
  background-size: 150px 150px;
  background-position: right 10px bottom 10px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 50px;
  padding-right: 30px;
  padding-bottom: 20px;
}

.middle-quest-span {
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-align: center;
  font-size: 25pt;
}

.middle-quest-container-form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 20px;
}

.button-submit {
  width: 60px;
  height: 60px;
  background: transparent;
  border: none;
}

.input-name {
  width: 550px;
  border: 3px solid #91908D;
  background: transparent;
  text-align: center;
  border-radius: 20px;
  font-size: 25pt;
  height: 60px;
}

</style>
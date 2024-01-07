<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { quest_data } from '../data.json';
  import { AES, enc } from 'crypto-js';

  const router = useRouter();
  const names = ref(['','','','','','','','']);
  const stageQuest = ref([0,0,0,0,0,0,0,0]);
  const secretkey = 'mylovezai';
  let state = localStorage.getItem("state");
  if (!state) {
    router.push('/home');
  } else if (state !== "quest_two") {
    router.push(`/${state}`);
  }
  let stateQuest = localStorage.getItem("q2");
  if (stateQuest) {
    const arr = stateQuest.split(',').map(Number);
    stageQuest.value = [...arr];
  }
  function validate(ind: number) {
    route(ind, false);
  }
  function route(ind: number, force = true) {
    const index = quest_data.bestOf8.findIndex((word: string) => AES.decrypt(word, secretkey).toString(enc.Utf8).toLowerCase()===(names.value[ind].trim() as string).toLowerCase());
    if (force) {
      names.value[ind] = '';
    }
    if (index > -1) {
      stageQuest.value[index] = 1;
      localStorage.setItem("q2", stageQuest.value.toString());
    }
    if (stageQuest.value.every((val: number)=> val === 1)){
      localStorage.setItem("state", "quest_three");
      router.push('/quest_three');
    }
  }
</script>

<template>
  <div class='home-container'>
    <div class='top-quest-two-container'></div>
    <div class='middle-quest-head-container'>
      <div class='middle-quest-title'></div>
      <div class='middle-quest-two-container-content'>
        <div class="middle-quest-two-span">
          <span>1. {{AES.decrypt(quest_data.bestOf16[0], secretkey).toString(enc.Utf8)}} + {{AES.decrypt(quest_data.bestOf16[1], secretkey).toString(enc.Utf8)}} =</span>
          <span v-if="stageQuest[0]">{{AES.decrypt(quest_data.bestOf8[0], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <form v-if="!stageQuest[0]" @submit.prevent="route(0)">
          <div class='middle-quest-container-form'>
            <input class="input-name" v-model="names[0]" type="text" :onchange="validate(0)">
            <div class='middle-quest-button'>
              <button class="button-submit" type="submit"/>
            </div>
          </div>
        </form>
        <div class="middle-quest-two-span">
          <span>2. {{AES.decrypt(quest_data.bestOf16[2], secretkey).toString(enc.Utf8)}} + {{AES.decrypt(quest_data.bestOf16[3], secretkey).toString(enc.Utf8)}} =</span>
          <span v-if="stageQuest[1]">{{AES.decrypt(quest_data.bestOf8[1], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <form v-if="!stageQuest[1]" @submit.prevent="route(1)">
          <div class='middle-quest-container-form'>
            <input class="input-name" v-model="names[1]" type="text" :onchange="validate(1)">
            <div class='middle-quest-button'>
              <button class="button-submit" type="submit"/>
            </div>
          </div>
        </form>
        <div class="middle-quest-two-span">
          <span>3. {{AES.decrypt(quest_data.bestOf16[4], secretkey).toString(enc.Utf8)}} + {{AES.decrypt(quest_data.bestOf16[5], secretkey).toString(enc.Utf8)}} =</span>
          <span v-if="stageQuest[2]">{{AES.decrypt(quest_data.bestOf8[2], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <form v-if="!stageQuest[2]" @submit.prevent="route(2)">
          <div class='middle-quest-container-form'>
            <input class="input-name" v-model="names[2]" type="text" :onchange="validate(2)">
            <div class='middle-quest-button'>
              <button class="button-submit" type="submit"/>
            </div>
          </div>
        </form>
        <div class="middle-quest-two-span">
          <span>4. {{AES.decrypt(quest_data.bestOf16[6], secretkey).toString(enc.Utf8)}} + {{AES.decrypt(quest_data.bestOf16[7], secretkey).toString(enc.Utf8)}} =</span>
          <span v-if="stageQuest[3]">{{AES.decrypt(quest_data.bestOf8[3], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <form v-if="!stageQuest[3]" @submit.prevent="route(3)">
          <div class='middle-quest-container-form'>
            <input class="input-name" v-model="names[3]" type="text" :onchange="validate(3)">
            <div class='middle-quest-button'>
              <button class="button-submit" type="submit"/>
            </div>
          </div>
        </form>
        <div class="middle-quest-two-span">
          <span>5. {{AES.decrypt(quest_data.bestOf16[8], secretkey).toString(enc.Utf8)}} + {{AES.decrypt(quest_data.bestOf16[9], secretkey).toString(enc.Utf8)}} =</span>
          <span v-if="stageQuest[4]">{{AES.decrypt(quest_data.bestOf8[4], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <form v-if="!stageQuest[4]" @submit.prevent="route(4)">
          <div class='middle-quest-container-form'>
            <input class="input-name" v-model="names[4]" type="text" :onchange="validate(4)">
            <div class='middle-quest-button'>
              <button class="button-submit" type="submit"/>
            </div>
          </div>
        </form>
        <div class="middle-quest-two-span">
          <span>6. {{AES.decrypt(quest_data.bestOf16[10], secretkey).toString(enc.Utf8)}} + {{AES.decrypt(quest_data.bestOf16[11], secretkey).toString(enc.Utf8)}} =</span>
          <span v-if="stageQuest[5]">{{AES.decrypt(quest_data.bestOf8[5], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <form v-if="!stageQuest[5]" @submit.prevent="route(5)">
          <div class='middle-quest-container-form'>
            <input class="input-name" v-model="names[5]" type="text" :onchange="validate(5)">
            <div class='middle-quest-button'>
              <button class="button-submit" type="submit"/>
            </div>
          </div>
        </form>
        <div class="middle-quest-two-span">
          <span>7. {{AES.decrypt(quest_data.bestOf16[12], secretkey).toString(enc.Utf8)}} + {{AES.decrypt(quest_data.bestOf16[13], secretkey).toString(enc.Utf8)}} =</span>
          <span v-if="stageQuest[6]">{{AES.decrypt(quest_data.bestOf8[6], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <form v-if="!stageQuest[6]" @submit.prevent="route(6)">
          <div class='middle-quest-container-form'>
            <input class="input-name" v-model="names[6]" type="text" :onchange="validate(6)">
            <div class='middle-quest-button'>
              <button class="button-submit" type="submit"/>
            </div>
          </div>
        </form>
        <div class="middle-quest-two-span">
          <span>8. {{AES.decrypt(quest_data.bestOf16[14], secretkey).toString(enc.Utf8)}} + {{AES.decrypt(quest_data.bestOf16[15], secretkey).toString(enc.Utf8)}} =</span>
          <span v-if="stageQuest[7]">{{AES.decrypt(quest_data.bestOf8[7], secretkey).toString(enc.Utf8)}}</span>
        </div>
        <form v-if="!stageQuest[7]" @submit.prevent="route(7)">
          <div class='middle-quest-container-form'>
            <input class="input-name" v-model="names[7]" type="text" :onchange="validate(7)">
            <div class='middle-quest-button'>
              <button class="button-submit" type="submit"/>
            </div>
          </div>
        </form>
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

.top-quest-two-container {
  background: url('/top-quest-two.jpg') no-repeat center center;
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

.middle-quest-two-container-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 50px;
  padding-right: 30px;
  padding-bottom: 20px;
}

.middle-quest-two-span {
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-align: center;
  font-size: 24pt;
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
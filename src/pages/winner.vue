<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  let state = localStorage.getItem("state");
  if (!state) {
    router.push('/home');
  } else if (state !== "winner") {
    router.push(`/${state}`);
  }
  const time = new Date();
  let timeVal = ref('');
  timeVal.value = time.toLocaleTimeString();
</script>

<template>
  <div class='home-container'>
    <div class='top-winner-container'></div>
    <div class='middle-winner-container'>
      <div class='middle-winner-title'></div>
      <div class='middle-winner-content'>
        <div class='middle-winner-image'>
          <span class="winner-time">{{ timeVal }}</span>
        </div>
        <div class='middle-winner-footer'></div>
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

.top-winner-container {
  background: url('/top-winner.jpg') no-repeat center center;
  height: 424px;
  width: 832px;
}

.middle-winner-container {
  width: 800px;
  background-color: #E1E4CE;
  border: 0.5rem solid #91908D;
	border-image: repeating-linear-gradient(45deg, transparent, transparent 5px,  6px, #91908D 15px, transparent 16px, transparent 20px) 20/0.5rem;
}

.middle-winner-title {
  background: url('/middle-winner.svg') no-repeat center center;
  height: 250px;
  align-self: center;
  background-color: #E1E4CE;
}

.middle-winner-image {
  background: url('/middle-image-winner.png') no-repeat center center;
  height: 485px;
  background-color: #E1E4CE;
}

.middle-winner-footer {
  background: url('/bottom-winner.svg') no-repeat center center;
  height: 200px;
}

.middle-winner-content {
  background-image: url('/bottom-quest-watermark.svg');
  background-size: 150px 150px;
  background-position: right 10px bottom 10px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.winner-time {
  float: right;
  font-size: 25pt;
  padding-right: 20px;
}

</style>
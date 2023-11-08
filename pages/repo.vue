<script setup lang="ts">
const repo = ref('')

</script>

<template>
  <main class="flex justify-center p-10 pt-24">
<div class="w-2/5 p-4 bg-neutral text-neutral-content">
  General Side BAr
</div>
    <div class=" w-3/5 p-4  flex flex-col space-y-4  ">
      <div class="divider">GENERAL</div>
  <div class="  flex items-center justify-between">
    <span class="w-1/2">Name</span>
    <input v-model="repo" type="text" placeholder="Type here" class="input input-bordered w-1/2" />

  </div>
   <div class="  flex items-center justify-between">
      <span class="w-1/2">Name</span>
      <input type="text" placeholder="Type here" class="input input-bordered w-1/2" />

    </div>
     <div class="  flex items-center justify-between">
      <span class="w-1/2">Git Source</span>
      <input type="text" placeholder="Type here" class="input input-bordered w-1/2" />

    </div>
     <div class="  flex items-center justify-between">
      <span class="w-1/2">Git commit</span>
      <input type="text" placeholder="Type here" class="input input-bordered w-1/2" />

    </div>

    </div>
  </main>
</template>

<style></style>

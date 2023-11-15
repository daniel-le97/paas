<script setup lang="ts">
const repo = reactive({
  repo: 'https://github.com/daniel-le97/drizzle-nuxt',
  build: 'bun run build',
  start: 'bun run start',
  install: 'bun install',
})

const output = ref('building')

async function handleSubmit() {
  const { data, error } = await useFetch('/api/apps', {
    method: 'POST',
    body: repo,
  })
  console.log(error.value)

  console.log(data.value)

  output.value += data.value
}
</script>

<template>
  <main class="flex justify-center p-10 pt-24">
    <div class="w-2/5 p-4 bg-neutral text-neutral-content">
      {{ output }}
    </div>
    <div class=" w-3/5 p-4  flex flex-col space-y-4  ">
      <div class="divider">
        GENERAL
      </div>
      <form>
        <div class="flex items-center justify-between">
          <span class="w-1/2">Name</span>
          <input v-model="repo.repo" type="text" placeholder="repo url" class="input input-bordered w-1/2">
        </div>
        <div class="flex items-center justify-between">
          <span class="w-1/2">Name</span>
          <input v-model="repo.install" type="text" placeholder="install command" class="input input-bordered w-1/2">
        </div>
        <div class="flex items-center justify-between">
          <span class="w-1/2">Git Source</span>
          <input v-model="repo.build" type="text" placeholder="start command" class="input input-bordered w-1/2">
        </div>
        <div class="flex items-center justify-between">
          <span class="w-1/2">Git commit</span>
          <input v-model="repo.start" type="text" placeholder="build command" class="input input-bordered w-1/2">
        </div>
        <button type="submit" class="btn" @click.prevent="handleSubmit">
          submit
        </button>
      </form>
    </div>
  </main>
</template>

<style></style>

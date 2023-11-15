<script setup lang="ts">
const { signIn, signOut, session } = useAuth()
definePageMeta({ middleware: 'guest-only' })
</script>

<template>
  <main
    class=" !p-0 !m-0 w-full  flex h-screen font-base-content bg-base-100"
  >
    <div class="w-2/3 h-full bg-red-400">
      <NuxtImg src="https://images.unsplash.com/photo-1562931715-536816af4a8a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="h-full w-full object-cover  object-bottom" />
    </div>
    <div class="w-1/3 p-4 flex flex-col  justify-between">
      <div class=" font-medium text-xl d">
        <Icon name="uil:vuejs-alt" size="70" class="text-accent" />ue That Docker
      </div>

      <div class="flex flex-col items-center  w-2/3  m-20  ">
        <div class=" flex flex-col justify-start w-full ">
          <h1 class="text-4xl font-bold ">
            Welcome back
          </h1>
          <p>Please login to continue.</p>
        </div>

        <a href="/api/auth/signin">
          signin
        </a>
        <div class="mt-4 flex justify-around w-full ">
          <button class="p-0 m-0 rounded-full w-fit" @click="() => signIn('google')">
            <Icon name="uil:google" class="text-8xl" />
          </button>

          <button class="p-0 m-0 rounded-full w-fit" @click="() => signIn('github')">
            <Icon name="uil:github" class="text-8xl" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style>

</style>

<script setup lang="ts">
const socials = [
  {
    image: 'https://avatars.githubusercontent.com/u/107594367?s=400&u=279c4a706755639789d6b825966e54161df0c7aa&v=4',
    name: 'Tung Le',
    github: 'https://github.com/TungLe0319',
    linkedIn: 'https://www.linkedin.com/in/tung-le0319/',

  },
  {
    image: 'https://avatars.githubusercontent.com/u/107774403?v=4',
    name: 'Daniel Le',
    github: 'https://github.com/daniel-le97',
    linkedIn: 'https://www.linkedin.com/in/daniel-le97/',

  },

]
</script>

<template>
  <footer>
    <div class="w-full px-16 pt-10  bg-neutral">
      <div class="md:flex">
        <h1 class=" footer-title text-neutral-content ">
          Thank you for checking out our app. Get in touch with us.
        </h1>
        <div class="w-full md:w-1/2 footer-section flex justify-center flex-col items-center">
          <div v-for="s in socials" :key="s.name" class="mt-4 flex">
            <NuxtImg
              :src="s.image" :alt="s.name" height="60"
              width="60" class="rounded-full"
            />
            <div class="ml-5 flex gap-5 items-center">
              <a :href="s.linkedIn">
                <NuxtImg src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" width="30" height="30" />
              </a>
              <a :href="s.github">
                <NuxtImg
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsocial-media-and-logos-11%2F32%2FLogo_Github-512.png&f=1&nofb=1&ipt=6cc9a130a9bb53997e07157eac5064ae54cdf9af88484f7a3e634e9bf6cf5f54&ipo=images"
                  alt="" width="30" height="30"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-8 flex-col md:flex-row md:justify-center md:text-center">
        <p class="w-full md:w-2/3  text-neutral-content">
          If you want to contact us the best way is to connect with us on
          LinkedIn and message us!
        </p>
      </div>
      <div class="flex flex-col">
        <div class="flex mt-24 mb-5 flex-row justify-between items-end">
          <div class="hidden md:block">
            <NuxtImg src="/Logo.png" alt="" width="80" class="rounded-xl " />
          </div>
          <NuxtLink to="/" class="link text-neutral-content" active-class="active-link">
            Home
          </NuxtLink>
          <NuxtLink to="/about" class="link text-neutral-content" active-class="active-link">
            About
          </NuxtLink>
          <nuxt-link to="/account" class="link text-neutral-content" active-class="active-link">
            Account
          </nuxt-link>
          <nuxt-link to="/contact" class="link text-neutral-content" active-class="active-link">
            Contact
          </nuxt-link>
        </div>
        <hr class="border-gray-600">
        <h1 class="text-center  my-10 text-neutral-content">
          © Lorem ipsum dolor sit.
        </h1>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  flex: 1;
}

.link {
  width: fit-content;
  height: fit-content;

  @media only screen and (max-width: 768px) {
    font-size: 16px !important;
  }
}

.footer-title{
  @apply text-5xl font-bold w-full md:w-1/2 drop-shadow-md
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from './globals/SectionHeader.vue'
import applications from '../Application_Mock_Data.json'
const itemRefs = ref([])



</script>

<template>
  <section class="px-20">
    <SectionHeader title="Applications" subtitle="All Deployed Applications" />
    <div class="divider"></div>
    <div class="gap-8 grid mt-20  space-y-4 lg:space-y-0  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <a v-for="p in applications" :key="p.name" ref="itemRefs" v-motion-fade-visible :delay="100" :href="p.url"
        target="_blank" class="feature-link">
        <div class="p-5 card rounded-md bg-neutral shadow-xl h-full hover:bg-[hsl(var(--nf))] duration-300 ease-linear group">
       <NuxtImg :src="p.icon" :modifiers="{ grayscale: true, tint: '#00DC82' }" :alt="p.name"
                class="w-14 h-14 rounded-md  absolute -top-8 -left-8" />

          <div class="flex flex-col space-y-2 text-start">
            <p v-motion-pop-visible :delay="100" class="text-neutral-content font-bold text-lg">{{ p.name }}</p>
            <p v-motion-pop-visible :delay="100" class="text-neutral-content text-xs truncate">{{ p.url}}</p>
            <p v-motion-pop-visible :delay="100" class="text-neutral-content text-xs">{{ p.id}}</p>
            <p v-motion-pop-visible :delay="100" class="text-neutral-content text-xs">{{ p.deployType}}</p>
          </div>
          <div class="flex space-x-4 justify-end">
             <Icon name="uil:external-link-alt" size="20"
                class="text-neutral-content " />
                 <Icon name="uil:trash-alt" size="20"
                  class="text-neutral-content " />
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

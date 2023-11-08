<script setup  >
import { ref,watchEffect } from 'vue'
import SectionHeader from './globals/SectionHeader.vue'

import {appstate} from '../composable/appstate'

const applications = ref([])
watchEffect(() => {
  applications.value = appstate.filteredApplications;
});

const filtered = computed(()=> appstate.filteredApplications)

async function getApps(){
const data = await  useFetch('/api/mock')
appstate.applications = data.data.value
}

onMounted(async()=>{
  await getApps();
})


</script>

<template>
  <section class="px-20">
    <SectionHeader title="Applications" subtitle="All Deployed Applications" />
    <div class="divider"></div>
    <div class=" gap-12 grid mt-20  space-y-4 lg:space-y-0  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


<div v-if="appstate.searchQuery === ''" v-for="a in appstate.applications" :key="a.id" class="">

  <ApplicationCard   v-bind="a" />

</div>

<div  v-else  v-for="a in filtered" :key="a.id">
    <ApplicationCard   v-bind="a" />
</div>

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

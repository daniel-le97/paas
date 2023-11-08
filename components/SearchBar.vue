<!-- SearchComponent.vue -->
<template>
  <div>
    <input v-model="searchQuery" @input="performSearch" class="input input-bordered" placeholder="apps" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { appstate } from "~/composable/appstate";

const searchQuery = ref('');

const performSearch = () => {

 appstate.searchQuery = searchQuery.value.toLowerCase();
  const originalApplications = appstate.applications;

  // If the search query is empty, reset to the original applications
  if (appstate.searchQuery === '') {
    appstate.filteredApplications = originalApplications;
  } else {
    // Filter applications based on the search query
    const filteredApps = originalApplications.filter(app => app.name.toLowerCase().includes(appstate.searchQuery));
    appstate.filteredApplications = filteredApps;
  }
};
</script>

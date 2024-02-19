<script setup lang="ts">
defineProps<IconLink>();
</script>

<template>
    <a :href="url" target="_blank" :class="icon">
        <i :class="`bi bi-${icon}`"> </i>
    </a>
</template>

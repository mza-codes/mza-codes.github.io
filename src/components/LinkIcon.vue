<script setup lang="ts">
import { IconLink } from "@/types";

defineProps<IconLink>();
</script>

<template>
    <a :href="url" target="_blank" :class="icon">
        <i :class="`bi bi-${icon}`"> </i>
    </a>
</template>

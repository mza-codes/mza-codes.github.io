<template>
    <MainLayout :uniqueLayout="uniqueLayout">
        <RouterView />
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "./layouts/MainLayout.vue";
const uniqueLayout = true;
</script>

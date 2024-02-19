<template>
    <!-- <main> -->
    <NavBar v-show="!uniqueLayout" />
    <hr v-show="!uniqueLayout" className="w-full" />

    <main :class="uniqueLayout ? '' : 'min-h-[calc(100dvh-81px)] max-w-6xl mx-auto px-4'">
        <slot></slot>
    </main>
    <!-- </main> -->
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";

type Props = {
    uniqueLayout?: boolean;
};

withDefaults(defineProps<Props>(), {
    uniqueLayout: false,
});
</script>

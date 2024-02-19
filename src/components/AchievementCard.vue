<script setup lang="ts">
import { AchievementCount } from "@/types";

defineProps<{ cards: AchievementCount[] }>();
</script>

<template>
    <div class="counts container">
        <div class="row">
            <div v-for="item in cards" :key="item.icon" class="col-lg-3 col-md-6">
                <div class="count-box">
                    <i :class="`bi bi-${item.icon}`"></i>
                    <span>{{ item.count }}</span>
                    <p>{{ item.label }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AboutSection from "@/components/AboutSection.vue";
import AchievementCard from "@/components/AchievementCard.vue";
import MainHeader from "@/components/MainHeader.vue";
import { AchievementCount } from "@/types";

const cardsData: AchievementCount[] = [
    {
        count: `96%`,
        icon: "award",
        label: "Frontend",
    },
    {
        count: `80%`,
        icon: "headset",
        label: "Backend",
    },
    {
        count: `80%`,
        icon: "journal-richtext",
        label: "Database",
    },
    {
        count: `90%`,
        icon: "emoji-smile",
        label: "TypeScript",
    },
];
</script>
<template>
    <main class="body">
        <MainHeader />
        <section id="about" class="about">
            <AboutSection />
            <AchievementCard :cards="cardsData" />
        </section>
    </main>
</template>

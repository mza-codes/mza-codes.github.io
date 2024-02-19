<script setup lang="ts">
import LinkIcon from "./LinkIcon.vue";
import NavBar from "./NavBar.vue";

const socialLinks: IconLink[] = [
    {
        icon: "facebook",
        url: "#",
    },
    {
        icon: "github",
        url: "",
    },
    {
        icon: "instagram",
        url: "",
    },
    {
        icon: "linkedin",
        url: "",
    },
    {
        icon: "twitter",
        url: "",
    },
];
</script>

<template>
    <header id="header">
        <div class="container">
            <h1><a href="/">Muzammil Hamza</a></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->
            <h2>Full Stack <span> Developer</span></h2>

            <NavBar />

            <div class="social-links">
                <LinkIcon
                    v-for="link in socialLinks"
                    :key="link.url"
                    :url="link.url"
                    :icon="link.icon" />
            </div>
        </div>
    </header>
</template>

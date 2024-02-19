<template>
    <main className="row center min-h-[100dvh] relative">
        <section
            className="col gap-2 flex-[1] py-8 px-4 lg:px-28 lg:max-w-xl max-w-md min-h-[inherit] justify-between relative">
            <router-link to="/">
                <AppLogo />
            </router-link>
            <slot></slot>

            <BackDrop v-show="isLoading" className="hidden lg:flex">
                <AppLoader apply color="#fff" />
            </BackDrop>
        </section>
        <!-- LOADER ON SMALLER SCREENS  -->

        <BackDrop v-show="isLoading" className="flex lg:hidden">
            <AppLoader apply color="#fff" />
        </BackDrop>

        <section
            className="bg-primary.400 min-h-[inherit] flex-[2] hidden lg:flex flex-col justify-evenly items-center px-4">
            <div className="relative">
                <img
                    class="max-h-screen object-cover max-w-md rounded-3xl shadow-xl"
                    src="https://s3.amazonaws.com/thumbnails.venngage.com/template/d292f483-2bbe-4e69-a304-614e3ac67a74.png"
                    alt="login promo" />
            </div>
            <article className="text-white text-center max-w-md col gap-4 items-center">
                <h6 className="text-[32px] font-bold ">Leave reviews for all samples</h6>
                <span className="text-sm">
                    Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo
                    probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
                </span>
                <div className="row gap-2 pt-6">
                    <button
                        v-for="(_, i) in [1, 2, 3, 4]"
                        :key="i"
                        class="rounded-full w-2 h-2 hover:bg-white/80"
                        :class="`${i === 1 ? 'bg-white' : 'bg-white/60'} `" />
                </div>
            </article>
        </section>
        <button
            class="bg-green-800 py-2 px-4 hover:bg-green-700 text-white z-20 absolute left-1 bottom-1"
            @click="isLoading = !isLoading">
            Loading
        </button>
    </main>
</template>

<script setup lang="ts">
import AppLogo from "@/components/sub-components/AppLogo.vue";
import BackDrop from "@/components/BackDrop.vue";
import { ref } from "vue";
import AppLoader from "@/components/AppLoader.vue";

const isLoading = ref(false);
</script>

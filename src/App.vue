<template>
  <div>
    <!-- TODO: сделать нав сайд бар для мобилок -->
    <nav class="p-4 pb-0 text-2xl">
      <router-link v-for="r in router.getRoutes()"
        :to="r.path" :key="r.path"
        class="mr-8"
        :class="route.path === r.path ? 'text-3xl' : 'text-gray-600'">
        {{ r.name }}
      </router-link>
      <hr class="mt-4 border-black"/>
    </nav>
    <div class="flex flex-col justify-between h-screen p-4">
      <router-view></router-view>
    </div>
    <footer class="m-4 mt-4">
      <a class="font-mono text-blue-700 sm:text-xl"
        href="https://github.com/nerlihmax/nerlihmax.github.io">
        made with &lt;3
      </a>
    </footer>
  </div>
</template>

<script setup>
import { reactive, provide } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const profile = reactive({
  fullName: 'Максим Нерлих',
  grade: 'junior',
  birthday: new Date('2001-12-27'),
  age: new Date().getUTCFullYear() - new Date('2001-12-27').getUTCFullYear() - 1,
  roboticsExpirience: new Date().getUTCFullYear() - 2012,
  links: [
    {
      name: 'Telegram',
      link: 'https://t.me/nerlihmax',
    },
    {
      name: 'VK',
      link: 'https://vk.com/nerlihmax',
    },
    {
      name: 'Github',
      link: 'https://github.com/nerlihmax',
    },
    {
      name: 'Twitch',
      link: 'https://twitch.tv/nerlihmax',
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com/nerlihmax',
    },
  ],
});

provide('profile', profile);
</script>

<style>
</style>

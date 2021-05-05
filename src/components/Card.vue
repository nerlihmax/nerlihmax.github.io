<template>
  <div class="flex flex-col justify-start m-4 border border-black
    p-4 font-mono w-2/5">
    <h1 class="max-w-max mb-2 text-4xl">
      {{ profile.fullName }}
    </h1>
    <div class="max-w-max">
      Привет! Я {{ profile.grade }}-разработчик из Новосибирска.
      Мне {{ profile.age }} лет.
      Сейчас, я, в основном, занят веб-разработкой на Vue.js.
      Уже {{ profile.roboticsExpirience }}
      лет занимаюсь соревновательной робототехникой,
      участвовал и показывал достойные результаты на
      соревнованиях международного уровня, таких, как
      Robocup, Russian Robotic Olympic.
      Лауреат и победитель множества мероприятий регионального уровня.
    </div>
    <div class="flex flex-row justify-start flex-wrap align-middle">
      <div v-for="(item) in profile.links" :key="item">
        <a class="text-blue-700 mr-4"
          :href="item.link">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const profile = ref({
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
</script>

<style scoped>
</style>

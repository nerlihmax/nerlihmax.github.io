<template>
  <div class="flex flex-col justify-start mb-4 border border-black
    p-4 font-mono sm:text-xl w-auto sm:w-4/5">
    <h1 class="max-w-max mb-2 text-4xl sm:text-6xl">
      {{ profile.fullName }}
    </h1>
    <div class="max-w-max mb-2">
      Привет! Я {{ profile.grade }}-разработчик из Новосибирска.
      Мне {{ profile.age }} лет.
      Сейчас, я, в основном, занят веб-разработкой на Vue.js.
      Уже {{ profile.roboticsExpirience }}
      лет занимаюсь соревновательной робототехникой.
      Увлекаюсь компьютерными играми, анимацией, очень люблю хорошую
      музыку и кино.
      <br/>Любимые игры: Half-life, TES V Skyrim.
      <br/>Любимая музыка: ДДТ, БИ-2, Сплин, Кино, Гражданская Оборона, Валентин Стрыкало,
      Кипелов, Сектор Газа, Ария, Наутилус Помпилиус, КиШ, Земфира, ssshhhiiittt!.
      <br/>Любимые фильмы и мульты: Убить Билла, Брат, Аватар: Легенда об
      Аанге, Футурама, Гетто, Зеленая книга, Небесный замок Лапута,
      Бесславные ублюдки Душа, Сёстры.
    </div>
    <div class="flex flex-row justify-start flex-wrap align-middle">
      <div v-for="(item) in profile.links" :key="item">
        <a class="text-blue-700 mr-4"
          :href="item.link">
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const profile = inject('profile');
</script>

<style scoped>
</style>

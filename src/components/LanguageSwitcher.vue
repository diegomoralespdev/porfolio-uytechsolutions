<template>
  <div class="language-switcher">
    <button
      @click="toggleLanguage"
      class="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1A2332]/50 backdrop-blur-sm border border-[#4F46E5]/20 hover:border-[#4F46E5]/40 transition-all duration-300 hover:bg-[#1A2332]/70"
      :title="locale === 'es' ? 'Switch to English' : 'Cambiar a Español'"
    >
      <svg class="w-4 h-4 text-[#4F46E5]" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.723 1.447a1 1 0 11-1.79-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clip-rule="evenodd" />
      </svg>
      <span class="text-sm font-medium text-[#F1F5F9]">
        {{ locale.toUpperCase() }}
      </span>
      <svg class="w-3 h-3 text-[#94A3B8] transition-transform duration-200" :class="{ 'rotate-180': isOpen }" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { locale, setLanguage } = useI18n()
const isOpen = ref(false)

const toggleLanguage = () => {
  const newLang = locale.value === 'es' ? 'en' : 'es'
  setLanguage(newLang)
}
</script>

<style scoped>
.language-switcher {
  position: relative;
}
</style>
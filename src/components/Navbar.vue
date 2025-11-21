<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-[#0B1426]/90 backdrop-blur-2xl border-b border-[#4F46E5]/10 shadow-2xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <div class="w-12 h-12 bg-gradient-tech rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 transform group-hover:scale-110">
            <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="text-2xl font-bold text-[#F1F5F9] group-hover:text-[#4F46E5] transition-all duration-500 transform group-hover:scale-105">
            UY Tech
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <!-- Language Switcher -->
          <LanguageSwitcher />
          <router-link 
            to="/" 
            class="text-[#F1F5F9] hover:text-[#4F46E5] transition-all duration-300 font-medium relative group"
            active-class="text-[#4F46E5]"
          >
            {{ t('nav.home') }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4F46E5] transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          
          <router-link 
            to="/about" 
            class="text-[#F1F5F9] hover:text-[#4F46E5] transition-all duration-300 font-medium relative group"
            active-class="text-[#4F46E5]"
          >
            {{ t('nav.about') }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4F46E5] transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          
          <router-link 
            to="/services" 
            class="text-[#F1F5F9] hover:text-[#4F46E5] transition-all duration-300 font-medium relative group"
            active-class="text-[#4F46E5]"
          >
            {{ t('nav.services') }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4F46E5] transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          
          <router-link 
            to="/projects" 
            class="text-[#F1F5F9] hover:text-[#4F46E5] transition-all duration-300 font-medium relative group"
            active-class="text-[#4F46E5]"
          >
            {{ t('nav.projects') }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4F46E5] transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          
          <router-link 
            to="/contact" 
            class="text-[#F1F5F9] hover:text-[#4F46E5] transition-all duration-300 font-medium relative group"
            active-class="text-[#4F46E5]"
          >
            {{ t('nav.contact') }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4F46E5] transition-all duration-300 group-hover:w-full"></span>
          </router-link>

          <!-- CTA Button -->
          <a 
            href="#contact" 
            class="btn-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow"
          >
            {{ t('hero.cta2') }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isOpen = !isOpen"
          class="md:hidden p-2 rounded-lg bg-[#4F46E5]/10 hover:bg-[#4F46E5]/20 transition-all duration-300"
        >
          <svg 
            class="w-6 h-6 text-[#F1F5F9]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isOpen" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-4"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-4"
      >
        <div v-if="isOpen" class="md:hidden py-6 border-t border-[#4F46E5]/10">
          <div class="flex flex-col space-y-4">
            <router-link 
              to="/" 
              @click="isOpen = false"
              class="text-[#F1F5F9] hover:text-[#4F46E5] transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-[#4F46E5]/10"
              active-class="text-[#4F46E5] bg-[#4F46E5]/10"
            >
              {{ t('nav.home') }}
            </router-link>
            
            <router-link 
              to="/about" 
              @click="isOpen = false"
              class="text-[#F1F5F9] hover:text-[#4F46E5] transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-[#4F46E5]/10"
              active-class="text-[#4F46E5] bg-[#4F46E5]/10"
            >
              {{ t('nav.about') }}
            </router-link>
            
            <router-link 
              to="/services" 
              @click="isOpen = false"
              class="text-[#F1F5F9] hover:text-[#4F46E5] transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-[#4F46E5]/10"
              active-class="text-[#4F46E5] bg-[#4F46E5]/10"
            >
              {{ t('nav.services') }}
            </router-link>
            
            <router-link 
              to="/projects" 
              @click="isOpen = false"
              class="text-[#F1F5F9] hover:text-[#4F46E5] transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-[#4F46E5]/10"
              active-class="text-[#4F46E5] bg-[#4F46E5]/10"
            >
              {{ t('nav.projects') }}
            </router-link>
            
            <router-link 
              to="/contact" 
              @click="isOpen = false"
              class="text-[#F1F5F9] hover:text-[#4F46E5] transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-[#4F46E5]/10"
              active-class="text-[#4F46E5] bg-[#4F46E5]/10"
            >
              {{ t('nav.contact') }}
            </router-link>

            <!-- Mobile CTA Button -->
            <a 
              href="#contact" 
              @click="isOpen = false"
              class="btn-primary w-full text-center transform hover:scale-105 transition-all duration-300"
            >
              {{ t('hero.cta2') }}
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from '@/composables/useI18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t, initLanguage } = useI18n()
const isOpen = ref(false)

onMounted(() => {
  initLanguage()
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

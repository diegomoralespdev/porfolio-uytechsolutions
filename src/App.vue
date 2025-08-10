<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ChatBot from '@/components/ChatBot.vue'
</script>

<template>
  <div id="app" class="min-h-screen bg-[#0F172A] text-[#E2E8F0]">
    <Navbar />
    
    <main class="pt-20">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />
    <ChatBot />
  </div>
</template>

<style>
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Enhanced page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.98);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Selection styles */
::selection {
  background-color: rgba(56, 189, 248, 0.3);
  color: #38BDF8;
}

/* Focus styles */
*:focus {
  outline: 2px solid #38BDF8;
  outline-offset: 2px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #020617;
}

::-webkit-scrollbar-thumb {
  background: #38BDF8;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #06B6D4;
}
</style>

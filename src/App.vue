<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ChatBot from '@/components/ChatBot.vue'
</script>

<template>
  <div id="app" class="min-h-screen bg-[#0B1426] text-[#F1F5F9] tech-bg-pattern relative">
    <!-- Neural Network Background -->
    <div class="neural-network fixed inset-0 pointer-events-none"></div>
    <Navbar />
    
    <main class="pt-20 relative z-10">
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
  background-color: rgba(79, 70, 229, 0.3);
  color: #4F46E5;
}

/* Focus styles */
*:focus {
  outline: 2px solid #4F46E5;
  outline-offset: 2px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #030712;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #4F46E5 0%, #10B981 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #10B981 0%, #4F46E5 100%);
}
</style>

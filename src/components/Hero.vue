<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2338BDF8%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0B1426] via-[#1A2332] to-[#0B1426]"></div>

    <!-- Enhanced Tech Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Animated Tech Lines -->
      <div class="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent opacity-35 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-24 h-px bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-30 animate-pulse" style="animation-delay: 1s"></div>
      <div class="absolute bottom-40 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent opacity-25 animate-pulse" style="animation-delay: 2s"></div>
      <div class="absolute bottom-20 right-1/3 w-16 h-px bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent opacity-25 animate-pulse" style="animation-delay: 3s"></div>
      
      <!-- Floating Tech Particles -->
      <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-[#4F46E5] rounded-full opacity-45 animate-float" style="animation-delay: 0.5s"></div>
      <div class="absolute top-1/3 right-1/4 w-1 h-1 bg-[#10B981] rounded-full opacity-35 animate-float" style="animation-delay: 1.5s"></div>
      <div class="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#06B6D4] rounded-full opacity-40 animate-float" style="animation-delay: 2.5s"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid grid-cols-12 h-full">
          <div class="border-r border-[#4F46E5]"></div>
          <div class="border-r border-[#4F46E5]"></div>
          <div class="border-r border-[#4F46E5]"></div>
          <div class="border-r border-[#4F46E5]"></div>
          <div class="border-r border-[#4F46E5]"></div>
          <div class="border-r border-[#4F46E5]"></div>
          <div class="border-r border-[#4F46E5]"></div>
          <div class="border-r border-[#4F46E5]"></div>
          <div class="border-r border-[#4F46E5]"></div>
          <div class="border-r border-[#4F46E5]"></div>
          <div class="border-r border-[#4F46E5]"></div>
          <div></div>
        </div>
      </div>

      <!-- Subtle Circuit Patterns -->
      <div class="absolute top-10 right-10 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M10 30h10v10h10v-10h20" stroke="#4F46E5" strokeWidth="1" opacity="0.5"/>
          <path d="M30 10v10h10v10h-10v20" stroke="#10B981" strokeWidth="1" opacity="0.5"/>
          <circle cx="20" cy="30" r="2" fill="#4F46E5" opacity="0.7"/>
          <circle cx="40" cy="20" r="2" fill="#10B981" opacity="0.7"/>
        </svg>
      </div>
      
      <div class="absolute bottom-10 left-10 opacity-20">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          <path d="M10 20h20v10h20v10h20" stroke="#06B6D4" strokeWidth="1" opacity="0.5"/>
          <path d="M20 10v20h10v20" stroke="#4F46E5" strokeWidth="1" opacity="0.5"/>
          <rect x="18" y="18" width="4" height="4" fill="#06B6D4" opacity="0.7"/>
          <rect x="48" y="28" width="4" height="4" fill="#4F46E5" opacity="0.7"/>
        </svg>
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Main Content -->
      <div class="animate-fade-in-up" style="animation-delay: 0.2s">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F1F5F9] mb-6 leading-tight">
          {{ t('hero.title') }}
          <span class="gradient-text hover-glow block">{{ t('hero.titleHighlight') }}</span>
          <span class="text-[#94A3B8] text-4xl md:text-5xl lg:text-6xl font-medium">{{ t('hero.subtitle') }}</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-[#94A3B8] mb-12 max-w-4xl mx-auto leading-relaxed">
          {{ t('hero.description') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style="animation-delay: 0.4s">
          <a href="#projects" class="btn-primary group">
            {{ t('hero.cta1') }}
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a href="#contact" class="btn-secondary group">
            {{ t('hero.cta2') }}
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </a>
        </div>

        <!-- Stats Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up" style="animation-delay: 0.6s">
          <div class="stats-card hover-lift group">
            <div class="w-12 h-12 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="stats-number group-hover:animate-glow">50+</div>
            <div class="stats-label">{{ t('hero.stats.projects') }}</div>
          </div>
          
          <div class="stats-card hover-lift group">
            <div class="w-12 h-12 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="stats-number group-hover:animate-glow">5+</div>
            <div class="stats-label">{{ t('hero.stats.experience') }}</div>
          </div>
          
          <div class="stats-card hover-lift group">
            <div class="w-12 h-12 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div class="stats-number group-hover:animate-glow">100%</div>
            <div class="stats-label">{{ t('hero.stats.satisfaction') }}</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<style scoped>
.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}
</style>

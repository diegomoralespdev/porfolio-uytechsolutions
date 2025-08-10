<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2338BDF8%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]"></div>

    <!-- Tech Lines -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-30"></div>
      <div class="absolute top-40 right-20 w-24 h-px bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent opacity-30"></div>
      <div class="absolute bottom-40 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-20"></div>
      <div class="absolute bottom-20 right-1/3 w-16 h-px bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent opacity-20"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Main Content -->
      <div class="animate-fade-in-up" style="animation-delay: 0.2s">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-[#E2E8F0] mb-6 leading-tight">
          Soluciones
          <span class="gradient-text hover-glow block">Tecnológicas</span>
          <span class="text-[#94A3B8] text-4xl md:text-5xl lg:text-6xl font-medium">a Medida</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-[#94A3B8] mb-12 max-w-4xl mx-auto leading-relaxed">
          Transformamos ideas en realidades digitales con tecnología de vanguardia, 
          arquitecturas escalables y soluciones innovadoras que impulsan el futuro de tu negocio
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style="animation-delay: 0.4s">
          <a href="#projects" class="btn-primary group">
            Ver Proyectos
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a href="#contact" class="btn-secondary group">
            Iniciar Proyecto
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
            <div class="stats-label">Proyectos Exitosos</div>
          </div>
          
          <div class="stats-card hover-lift group">
            <div class="w-12 h-12 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="stats-number group-hover:animate-glow">5+</div>
            <div class="stats-label">Años de Experiencia</div>
          </div>
          
          <div class="stats-card hover-lift group">
            <div class="w-12 h-12 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div class="stats-number group-hover:animate-glow">100%</div>
            <div class="stats-label">Clientes Satisfechos</div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div class="w-6 h-10 border-2 border-[#38BDF8] rounded-full flex justify-center">
          <div class="w-1 h-3 bg-[#38BDF8] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here
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

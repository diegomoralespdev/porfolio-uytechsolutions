<template>
  <div class="group relative bg-dark-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
    <!-- Project Image -->
    <div class="relative h-48 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20"></div>
      <div class="absolute inset-0 bg-dark-900/50 group-hover:bg-dark-900/30 transition-colors duration-300"></div>
      
      <!-- Placeholder for project image -->
      <div class="w-full h-full flex items-center justify-center">
        <div class="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <!-- Overlay with project link -->
      <div class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-all duration-300 flex items-center justify-center">
        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600"
        >
          Ver Proyecto
        </a>
      </div>
    </div>

    <!-- Project Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
        {{ project.title }}
      </h3>
      
      <p class="text-gray-400 mb-4 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Technologies -->
      <div class="mb-4">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-3 py-1 bg-dark-700 text-primary-400 text-sm rounded-full border border-primary-500/30"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Project Stats -->
      <div class="flex items-center justify-between text-sm text-gray-500">
        <div class="flex items-center space-x-4">
          <span class="flex items-center space-x-1">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ project.status }}</span>
          </span>
          <span class="flex items-center space-x-1">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
            <span>{{ project.duration }}</span>
          </span>
        </div>
        
        <div class="flex items-center space-x-2">
          <a
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Gradient Border Effect -->
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/20 group-hover:via-primary-500/10 group-hover:to-primary-500/20 transition-all duration-500 pointer-events-none"></div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  status: string
  duration: string
  link: string
  github: string
  demo: string
}

defineProps<{
  project: Project
}>()
</script>

<style scoped>
.group:hover .group-hover\:translate-y-0 {
  transform: translateY(0);
}
</style>

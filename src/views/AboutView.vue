<template>
  <div class="min-h-screen bg-dark-900">
    <!-- Hero Section -->
    <section class="pt-20 pb-16 bg-gradient-to-br from-dark-800 to-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="section-title">
            {{ t('aboutPage.title') }} <span class="gradient-text">{{ t('aboutPage.titleHighlight') }}</span>
          </h1>
          <p class="section-subtitle">
            {{ t('aboutPage.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20 bg-dark-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6">
              {{ t('aboutPage.story.title') }}
            </h2>
            <p class="text-gray-300 mb-6 leading-relaxed">
              {{ t('aboutPage.story.description') }}
            </p>
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-[#4F46E5] rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#F1F5F9]">50+</div>
                <div class="text-gray-400">{{ locale === 'es' ? 'Proyectos Completados' : 'Completed Projects' }}</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="w-full h-96 bg-gradient-to-br from-[#4F46E5]/20 to-[#3730A3]/20 rounded-2xl flex items-center justify-center">
              <div class="text-center">
                <div class="w-24 h-24 bg-[#4F46E5] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#F1F5F9] mb-2">UY Tech Solutions</h3>
                <p class="text-gray-300">{{ locale === 'es' ? 'Innovación y Excelencia' : 'Innovation and Excellence' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-20 bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="card hover-lift">
            <div class="w-16 h-16 bg-[#4F46E5]/20 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-[#4F46E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-[#F1F5F9] mb-4">{{ t('aboutPage.mission.title') }}</h3>
            <p class="text-gray-300 leading-relaxed">
              {{ t('aboutPage.mission.description') }}
            </p>
          </div>

          <div class="card hover-lift">
            <div class="w-16 h-16 bg-[#4F46E5]/20 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-[#4F46E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-[#F1F5F9] mb-4">{{ t('aboutPage.vision.title') }}</h3>
            <p class="text-gray-300 leading-relaxed">
              {{ t('aboutPage.vision.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-dark-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">
            {{ locale === 'es' ? 'Nuestros' : 'Our' }} <span class="gradient-text">{{ locale === 'es' ? 'Valores' : 'Values' }}</span>
          </h2>
          <p class="section-subtitle">
            {{ locale === 'es' ? 'Los principios que guían nuestro trabajo y relación con los clientes' : 'The principles that guide our work and relationship with clients' }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center group">
            <div class="w-20 h-20 bg-[#4F46E5]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4F46E5] transition-colors duration-300">
              <svg class="w-10 h-10 text-[#4F46E5] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#F1F5F9] mb-4">{{ t('aboutPage.values.excellence.title') }}</h3>
            <p class="text-gray-400">
              {{ t('aboutPage.values.excellence.description') }}
            </p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 bg-[#4F46E5]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4F46E5] transition-colors duration-300">
              <svg class="w-10 h-10 text-[#4F46E5] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#F1F5F9] mb-4">{{ t('aboutPage.values.innovation.title') }}</h3>
            <p class="text-gray-400">
              {{ t('aboutPage.values.innovation.description') }}
            </p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 bg-[#4F46E5]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4F46E5] transition-colors duration-300">
              <svg class="w-10 h-10 text-[#4F46E5] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#F1F5F9] mb-4">{{ t('aboutPage.values.collaboration.title') }}</h3>
            <p class="text-gray-400">
              {{ t('aboutPage.values.collaboration.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">
            {{ t('aboutPage.team.title') }}
          </h2>
          <p class="section-subtitle">
            {{ t('aboutPage.team.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card text-center hover-lift group">
            <div class="w-32 h-32 bg-gradient-to-br from-[#4F46E5] to-[#3730A3] rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
              <img 
                src="/images/diego-elevator-selfie.jpg" 
                alt="Diego Morales Perez - Fundador UY Tech Solutions"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-bold text-[#F1F5F9] mb-2">{{ t('founder.name') }}</h3>
            <p class="text-[#4F46E5] mb-4">{{ t('founder.role') }}</p>
            <p class="text-gray-400 mb-6">
              {{ locale === 'es' ? 'Desarrollador full-stack con más de 5 años de experiencia en tecnologías modernas. Apasionado por la innovación y el crecimiento del ecosistema tecnológico uruguayo.' : 'Full-stack developer with over 5 years of experience in modern technologies. Passionate about innovation and the growth of the Uruguayan technological ecosystem.' }}
            </p>
            <div class="flex justify-center space-x-4">
             <a href="https://www.linkedin.com/in/diegomoralesdev" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-[#4F46E5] transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/diegomoralespdev" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-[#4F46E5] transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t, locale } = useI18n()
</script>

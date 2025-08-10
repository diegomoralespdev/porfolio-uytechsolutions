<template>
  <div class="min-h-screen bg-dark-900">
    <!-- Hero Section -->
    <section class="pt-20 pb-16 bg-gradient-to-br from-dark-800 to-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="section-title">
            Sobre <span class="gradient-text">UY Tech Solutions</span>
          </h1>
          <p class="section-subtitle">
            Somos una empresa especializada en desarrollo de software y soluciones tecnológicas, 
            comprometida con la innovación y la excelencia técnica.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20 bg-dark-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestra Historia
            </h2>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Fundada en 2019, UY Tech Solutions nació de la pasión por crear soluciones tecnológicas 
              que realmente marquen la diferencia. Comenzamos como un pequeño equipo de desarrolladores 
              apasionados y hemos crecido hasta convertirnos en una empresa reconocida por nuestra 
              innovación y calidad.
            </p>
            <p class="text-gray-300 mb-6 leading-relaxed">
              A lo largo de estos años, hemos trabajado con empresas de diversos sectores, desde 
              startups emergentes hasta corporaciones establecidas, siempre manteniendo nuestro 
              compromiso con la excelencia técnica y la satisfacción del cliente.
            </p>
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">50+</div>
                <div class="text-gray-400">Proyectos Completados</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="w-full h-96 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center">
              <div class="text-center">
                <div class="w-24 h-24 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">UY Tech Solutions</h3>
                <p class="text-gray-300">Innovación y Excelencia</p>
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
            <div class="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Nuestra Misión</h3>
            <p class="text-gray-300 leading-relaxed">
              Transformar ideas en soluciones tecnológicas innovadoras que impulsen el crecimiento 
              de nuestros clientes, utilizando las mejores prácticas y tecnologías modernas para 
              crear productos de alta calidad y rendimiento.
            </p>
          </div>

          <div class="card hover-lift">
            <div class="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Nuestra Visión</h3>
            <p class="text-gray-300 leading-relaxed">
              Ser reconocidos como líderes en el desarrollo de soluciones tecnológicas en Uruguay 
              y la región, siendo referentes en innovación, calidad y servicio al cliente, 
              contribuyendo al crecimiento del ecosistema tecnológico local.
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
            Nuestros <span class="gradient-text">Valores</span>
          </h2>
          <p class="section-subtitle">
            Los principios que guían nuestro trabajo y relación con los clientes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center group">
            <div class="w-20 h-20 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-colors duration-300">
              <svg class="w-10 h-10 text-primary-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Excelencia</h3>
            <p class="text-gray-400">
              Buscamos la perfección en cada línea de código y en cada interacción con nuestros clientes.
            </p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-colors duration-300">
              <svg class="w-10 h-10 text-primary-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Innovación</h3>
            <p class="text-gray-400">
              Exploramos constantemente nuevas tecnologías y metodologías para ofrecer soluciones de vanguardia.
            </p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-colors duration-300">
              <svg class="w-10 h-10 text-primary-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Colaboración</h3>
            <p class="text-gray-400">
              Trabajamos en equipo con nuestros clientes para entender sus necesidades y crear soluciones a medida.
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
            Nuestro <span class="gradient-text">Equipo</span>
          </h2>
          <p class="section-subtitle">
            Conoce a los profesionales que hacen posible la innovación en UY Tech Solutions
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card text-center hover-lift group">
            <div class="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
              <img 
                src="/images/diego-elevator-selfie.jpg" 
                alt="Diego Morales Perez - Fundador UY Tech Solutions"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Diego Morales Perez</h3>
            <p class="text-primary-400 mb-4">Fundador & CEO</p>
            <p class="text-gray-400 mb-6">
              Desarrollador full-stack con más de 5 años de experiencia en tecnologías modernas. 
              Apasionado por la innovación y el crecimiento del ecosistema tecnológico uruguayo.
            </p>
            <div class="flex justify-center space-x-4">
             <a href="https://www.linkedin.com/in/diegomoralesdev" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-primary-400 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/diegomoralespdev" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-primary-400 transition-colors">
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
// No additional logic needed for this component
</script>

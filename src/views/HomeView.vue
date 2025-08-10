<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <Hero />

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-[#112240]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">
            ¿Por qué elegir <span class="gradient-text">UY Tech Solutions</span>?
          </h2>
          <p class="section-subtitle">
            Combinamos experiencia técnica con innovación para entregar soluciones que transforman tu negocio
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card hover-lift animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="w-12 h-12 bg-[#64FFDA]/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-[#64FFDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Experiencia</h3>
            <p class="text-[#8892B0] leading-relaxed">
              Más de 5 años desarrollando soluciones tecnológicas para empresas de diversos sectores, con un historial de proyectos exitosos.
            </p>
          </div>

          <div class="card hover-lift animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="w-12 h-12 bg-[#64FFDA]/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-[#64FFDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Alto Rendimiento</h3>
            <p class="text-[#8892B0] leading-relaxed">
              Arquitecturas optimizadas y escalables que garantizan el mejor rendimiento para tu aplicación, sin importar el volumen de usuarios.
            </p>
          </div>

          <div class="card hover-lift animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="w-12 h-12 bg-[#64FFDA]/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-[#64FFDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Seguridad</h3>
            <p class="text-[#8892B0] leading-relaxed">
              Implementamos las mejores prácticas de seguridad para proteger tus datos y mantener la confidencialidad de tu información.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="py-20 bg-[#0A192F]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">
            Tecnologías <span class="gradient-text">Modernas</span>
          </h2>
          <p class="section-subtitle">
            Utilizamos las últimas tecnologías y frameworks para crear soluciones robustas y escalables
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Vue.js -->
          <div class="text-center group animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24,1.61H14.06L12,5.16 9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold">Vue.js</h3>
          </div>

          <!-- TypeScript -->
          <div class="text-center group animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold">TypeScript</h3>
          </div>

          <!-- Node.js -->
          <div class="text-center group animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold">Node.js</h3>
          </div>

          <!-- PostgreSQL -->
          <div class="text-center group animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.173 14.301c-.492 0-.882-.09-1.17-.27-.288-.18-.432-.45-.432-.81 0-.36.144-.63.432-.81.288-.18.678-.27 1.17-.27.492 0 .882.09 1.17.27.288.18.432.45.432.81 0 .36-.144.63-.432.81-.288.18-.678.27-1.17.27zm-4.346 0c-.492 0-.882-.09-1.17-.27-.288-.18-.432-.45-.432-.81 0-.36.144-.63.432-.81.288-.18.678-.27 1.17-.27.492 0 .882.09 1.17.27.288.18.432.45.432.81 0 .36-.144.63-.432.81-.288.18-.678.27-1.17.27zm8.692 0c-.492 0-.882-.09-1.17-.27-.288-.18-.432-.45-.432-.81 0-.36.144-.63.432-.81.288-.18.678-.27 1.17-.27.492 0 .882.09 1.17.27.288.18.432.45.432.81 0 .36-.144.63-.432.81-.288.18-.678.27-1.17.27zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold">PostgreSQL</h3>
          </div>

          <!-- MongoDB -->
          <div class="text-center group animate-fade-in-up" style="animation-delay: 0.5s">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.9 2.673c-.853-.439-1.945-.439-2.798 0L9.9 4.673c-.853.439-1.9 1.994-1.9 3.327v8c0 1.333.047 2.888.9 3.327l3.2 2c.853.439 1.945.439 2.798 0l3.2-2c.853-.439.9-1.994.9-3.327v-8c0-1.333-.047-2.888-.9-3.327l-3.2-2zM12 6.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 10.38 9.5 9s1.12-2.5 2.5-2.5z"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold">MongoDB</h3>
          </div>

          <!-- React -->
          <div class="text-center group animate-fade-in-up" style="animation-delay: 0.6s">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.23,12.004a2.236,2.236,0,0,1-2.235,2.236,2.236,2.236,0,0,1-2.236-2.236,2.236,2.236,0,0,1,2.235-2.236A2.236,2.236,0,0,1,14.23,12.004ZM12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm0,19.104c-3.924,0-7.104-3.18-7.104-7.104S8.076,4.896,12,4.896s7.104,3.18,7.104,7.104S15.924,19.104,12,19.104Z"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold">React</h3>
          </div>

          <!-- Docker -->
          <div class="text-center group animate-fade-in-up" style="animation-delay: 0.7s">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 00.184-.185V6.29a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954 0h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661.308.488.748.885 1.28 1.157-.025.016-.05.03-.076.045-.559.34-.863.795-.863 1.339 0 .424.18.825.506 1.126.406.375 1.01.568 1.742.568 1.483 0 2.4-.676 2.4-1.64 0-.375-.133-.712-.398-1.009.21-.09.41-.196.6-.318.188-.122.354-.26.5-.412l.118-.139.147.087c.822.485 1.72.485 2.542 0l.147-.087.118.139c.146.152.312.29.5.412.19.122.39.228.6.318-.265.297-.398.634-.398 1.009 0 .964.917 1.64 2.4 1.64.732 0 1.336-.193 1.742-.568.326-.301.506-.702.506-1.126 0-.544-.304-.999-.863-1.339-.026-.015-.051-.029-.076-.045.532-.272.972-.669 1.28-1.157.494-.779.634-1.691.403-2.661a4.81 4.81 0 00-.612-1.43l-.226-.327-.344.199c-.063.036-1.468.866-1.716 2.566-.334-.057-.672-.086-1.01-.087-1.282 0-1.889.459-1.954.51l-.147.087-.118-.139a3.695 3.695 0 00-.5-.412 3.94 3.94 0 00-.6-.318c.265-.297.398-.634.398-1.009 0-.964-.917-1.64-2.4-1.64-.732 0-1.336.193-1.742.568-.326.301-.506.702-.506 1.126 0 .375.133.712.398 1.009-.21.09-.41.196-.6.318-.188.122-.354.26-.5.412l-.118.139-.147-.087z"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold">Docker</h3>
          </div>

          <!-- AWS -->
          <div class="text-center group animate-fade-in-up" style="animation-delay: 0.8s">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.763 10.036h1.27v3.69h-1.27zm6.649 0h1.27v3.69h-1.27zm-3.324 0h1.27v3.69h-1.27zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold">AWS</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- About Founder Section -->
    <section class="py-20 bg-[#112240]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">
            Conoce al <span class="gradient-text">Fundador</span>
          </h2>
          <p class="section-subtitle">
            La mente detrás de UY Tech Solutions
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left">
            <div class="w-48 h-48 bg-gradient-to-br from-[#64FFDA] to-[#4FD1C7] rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-8 overflow-hidden shadow-2xl">
              <img 
                src="/images/diego-elevator-selfie.jpg" 
                alt="Diego Morales Perez - Fundador UY Tech Solutions"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div class="animate-slide-in-right">
            <h3 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Diego Morales Perez
            </h3>
            <p class="text-[#64FFDA] text-xl mb-6">Fundador & CEO</p>
            <p class="text-[#8892B0] mb-6 leading-relaxed">
              Desarrollador full-stack apasionado con más de 5 años de experiencia en tecnologías modernas. 
              Especializado en Vue.js, Node.js, y arquitecturas cloud, he liderado más de 50 proyectos exitosos 
              que han transformado negocios en Uruguay y la región.
            </p>
            <p class="text-[#8892B0] mb-8 leading-relaxed">
              Mi visión es democratizar el acceso a soluciones tecnológicas de alta calidad, 
              ayudando a empresas de todos los tamaños a alcanzar su potencial digital.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://github.com/diegomoralespdev" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-secondary"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver GitHub
              </a>
              <router-link 
                to="/about" 
                class="btn-primary"
              >
                Conocer Más
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workspace Section -->
    <section class="py-20 bg-[#0A192F]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">
            Mi <span class="gradient-text">Espacio de Trabajo</span>
          </h2>
          <p class="section-subtitle">
            Donde la innovación cobra vida
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 animate-slide-in-left">
            <h3 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Ambiente Profesional
            </h3>
            <p class="text-[#8892B0] mb-6 leading-relaxed">
              Mi espacio de trabajo está diseñado para maximizar la productividad y la creatividad. 
              Con múltiples pantallas, herramientas de desarrollo avanzadas y un ambiente que fomenta 
              la innovación, cada proyecto se desarrolla con la máxima calidad y atención al detalle.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="stats-card">
                <div class="stats-number">50+</div>
                <div class="stats-label">Proyectos Completados</div>
              </div>
              <div class="stats-card">
                <div class="stats-number">24/7</div>
                <div class="stats-label">Disponibilidad</div>
              </div>
            </div>
            <p class="text-[#8892B0] mb-8 leading-relaxed">
              Desde el mate tradicional hasta las últimas tecnologías, mi setup combina 
              la cultura uruguaya con la innovación global para crear soluciones únicas.
            </p>
          </div>
          
          <div class="order-1 lg:order-2">
            <div class="relative">
              <div class="bg-gradient-to-br from-[#64FFDA]/20 to-[#4FD1C7]/20 rounded-2xl p-2">
                <img 
                  src="/images/diego-workspace.jpg" 
                  alt="Espacio de trabajo de Diego Morales Perez - UY Tech Solutions"
                  class="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-[#64FFDA] rounded-full flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-[#0A192F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-[#64FFDA] to-[#4FD1C7]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
          ¿Listo para transformar tu negocio?
        </h2>
        <p class="text-xl text-[#112240] mb-8 max-w-3xl mx-auto">
          Conversemos sobre tu proyecto y descubramos cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contact"
            class="bg-[#0A192F] text-[#64FFDA] hover:bg-[#112240] font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Comenzar Proyecto
          </router-link>
          <router-link
            to="/projects"
            class="border-2 border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-[#64FFDA] font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Ver Proyectos
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style>

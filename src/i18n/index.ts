import { ref, computed } from 'vue'

// Tipos para el sistema de internacionalización
type Language = 'es' | 'en'
type TranslationKey = string

// Estado reactivo del idioma actual
const currentLanguage = ref<Language>('es')

// Traducciones
const translations = {
  es: {
    // Navegación
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      services: 'Servicios',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    // Hero Section
    hero: {
      title: 'Soluciones',
      titleHighlight: 'Tecnológicas',
      subtitle: 'a Medida',
      description: 'Desarrollador Full-Stack especializado en crear soluciones digitales innovadoras. Trabajo tanto como freelancer para proyectos específicos como empresa establecida para desarrollos complejos y de gran escala.',
      cta1: 'Ver Proyectos',
      cta2: 'Iniciar Proyecto',
      stats: {
        projects: 'Proyectos Exitosos',
        experience: 'Años de Experiencia',
        satisfaction: 'Clientes Satisfechos'
      }
    },
    // About Section
    about: {
      title: '¿Por qué elegir',
      titleHighlight: 'UY Tech Solutions',
      subtitle: 'Combino experiencia técnica con visión empresarial para entregar soluciones que transforman negocios',
      experience: {
        title: 'Experiencia Comprobada',
        description: 'Más de 5 años desarrollando soluciones tecnológicas para empresas de diversos sectores, con un historial sólido de proyectos exitosos y clientes satisfechos.'
      },
      performance: {
        title: 'Alto Rendimiento',
        description: 'Arquitecturas optimizadas y escalables que garantizan el mejor rendimiento, utilizando las mejores prácticas de desarrollo y tecnologías modernas.'
      },
      security: {
        title: 'Seguridad Integral',
        description: 'Implemento las mejores prácticas de seguridad para proteger datos y mantener la confidencialidad, cumpliendo con estándares internacionales.'
      }
    },
    // Technologies
    technologies: {
      title: 'Tecnologías',
      titleHighlight: 'Modernas',
      subtitle: 'Utilizo las últimas tecnologías y frameworks para crear soluciones robustas, escalables y mantenibles'
    },
    // Services
    services: {
      freelancer: {
        title: 'Servicios Freelancer',
        description: 'Soluciones ágiles y personalizadas para proyectos específicos',
        features: ['Desarrollo rápido', 'Comunicación directa', 'Precios competitivos', 'Flexibilidad total']
      },
      company: {
        title: 'Servicios Empresariales',
        description: 'Desarrollos complejos y escalables con soporte integral',
        features: ['Arquitecturas enterprise', 'Soporte 24/7', 'Documentación completa', 'Garantías extendidas']
      }
    },
    // Founder
    founder: {
      title: 'Conoce al',
      titleHighlight: 'Fundador',
      subtitle: 'La mente detrás de UY Tech Solutions',
      name: 'Diego Morales Perez',
      role: 'Fundador & Desarrollador Full-Stack',
      bio1: 'Desarrollador full-stack apasionado con más de 5 años de experiencia en tecnologías modernas. Especializado en Vue.js, Node.js, y arquitecturas cloud.',
      bio2: 'Mi misión es democratizar el acceso a soluciones tecnológicas de alta calidad, ayudando tanto a startups como a empresas establecidas a alcanzar su potencial digital.',
      cta1: 'Ver GitHub',
      cta2: 'Conocer Más'
    },
    // Workspace
    workspace: {
      title: 'Mi',
      titleHighlight: 'Espacio de Trabajo',
      subtitle: 'Donde la innovación cobra vida',
      description1: 'Mi espacio de trabajo está diseñado para maximizar la productividad y la creatividad. Con tecnología de punta y un ambiente que fomenta la innovación.',
      description2: 'Desde el mate tradicional uruguayo hasta las últimas tecnologías, combino cultura local con innovación global para crear soluciones únicas.',
      stats: {
        projects: 'Proyectos Completados',
        availability: 'Disponibilidad'
      }
    },
    // CTA
    cta: {
      title: '¿Listo para transformar tu negocio?',
      description: 'Conversemos sobre tu proyecto y descubramos cómo puedo ayudarte a alcanzar tus objetivos tecnológicos.',
      startProject: 'Comenzar Proyecto',
      viewProjects: 'Ver Proyectos'
    },
    // Footer
    footer: {
      description: 'Desarrollador Full-Stack especializado en soluciones tecnológicas innovadoras para empresas y emprendedores.',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.'
    },
    // Chatbot
    chatbot: {
      title: 'UY Tech Assistant',
      status: 'En línea',
      botName: 'Diego',
      welcome: '¡Hola! 👋 Soy Diego de UY Tech Solutions. ¿En qué puedo ayudarte hoy?',
      autoMessage: '¿Tienes alguna pregunta sobre mis servicios? ¡Estoy aquí para ayudarte! 😊',
      placeholder: 'Escribe tu mensaje...',
      typing: 'Diego está escribiendo...'
    },
    // About page
    aboutPage: {
      title: 'Sobre',
      titleHighlight: 'UY Tech Solutions',
      subtitle: 'Somos una empresa especializada en desarrollo de software y soluciones tecnológicas, comprometida con la innovación y la excelencia técnica.',
      story: {
        title: 'Nuestra Historia',
        description: 'UY Tech Solutions nació con la visión de democratizar el acceso a tecnología de vanguardia. Desde nuestros inicios, nos hemos enfocado en crear soluciones que no solo resuelven problemas, sino que impulsan el crecimiento empresarial con innovación y calidad.'
      },
      mission: {
        title: 'Nuestra Misión',
        description: 'Empoderar a las empresas con soluciones tecnológicas innovadoras que optimizan procesos, mejoran la experiencia del usuario y generan resultados medibles, manteniéndose siempre a la vanguardia de las últimas tendencias tecnológicas.'
      },
      vision: {
        title: 'Nuestra Visión',
        description: 'Ser la empresa líder en desarrollo de software personalizado en Uruguay y la región, siendo referentes en innovación, calidad y servicio al cliente, contribuyendo al crecimiento del ecosistema tecnológico latinoamericano.'
      },
      values: {
        excellence: {
          title: 'Excelencia',
          description: 'Buscamos la perfección en cada línea de código y en cada solución que entregamos.'
        },
        innovation: {
          title: 'Innovación',
          description: 'Adoptamos las últimas tecnologías para crear soluciones verdaderamente disruptivas.'
        },
        collaboration: {
          title: 'Colaboración',
          description: 'Trabajamos en equipo con nuestros clientes para alcanzar objetivos comunes.'
        }
      },
      team: {
        title: 'Nuestro Equipo',
        subtitle: 'Conoce a los profesionales que hacen posible la innovación en UY Tech Solutions'
      }
    },
    // Contact form
    contactForm: {
      title: 'Envíanos un Mensaje',
      name: 'Nombre Completo',
      email: 'Email',
      company: 'Empresa',
      companyPlaceholder: 'Nombre de tu empresa (opcional)',
      projectType: 'Tipo de Proyecto',
      projectTypePlaceholder: 'Selecciona el tipo de proyecto',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto o consulta...',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado exitosamente!',
      error: 'Error al enviar el mensaje. Por favor intenta nuevamente.',
      required: 'Este campo es requerido'
    },
    // Services page
    servicesPage: {
      title: 'Nuestros Servicios',
      subtitle: 'Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio',
      process: {
        title: 'Nuestro Proceso de Trabajo',
        cta: 'Contáctanos para discutir cómo podemos ayudarte con tu proyecto'
      }
    },
    // Projects page
    projectsPage: {
      title: 'Nuestros Proyectos',
      subtitle: 'Descubre algunos de nuestros trabajos más destacados'
    },
    // Contact page
    contactPage: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente? Hablemos sobre cómo podemos ayudarte',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto...'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      title: 'Custom',
      titleHighlight: 'Technology',
      subtitle: 'Solutions',
      description: 'Full-Stack Developer specialized in creating innovative digital solutions. I work both as a freelancer for specific projects and as an established company for complex, large-scale developments.',
      cta1: 'View Projects',
      cta2: 'Start Project',
      stats: {
        projects: 'Successful Projects',
        experience: 'Years of Experience',
        satisfaction: 'Satisfied Clients'
      }
    },
    // About Section
    about: {
      title: 'Why choose',
      titleHighlight: 'UY Tech Solutions',
      subtitle: 'I combine technical expertise with business vision to deliver solutions that transform businesses',
      experience: {
        title: 'Proven Experience',
        description: 'Over 5 years developing technological solutions for companies across various sectors, with a solid track record of successful projects and satisfied clients.'
      },
      performance: {
        title: 'High Performance',
        description: 'Optimized and scalable architectures that guarantee the best performance, using development best practices and modern technologies.'
      },
      security: {
        title: 'Comprehensive Security',
        description: 'I implement security best practices to protect data and maintain confidentiality, complying with international standards.'
      }
    },
    // Technologies
    technologies: {
      title: 'Modern',
      titleHighlight: 'Technologies',
      subtitle: 'I use the latest technologies and frameworks to create robust, scalable and maintainable solutions'
    },
    // Services
    services: {
      freelancer: {
        title: 'Freelance Services',
        description: 'Agile and personalized solutions for specific projects',
        features: ['Rapid development', 'Direct communication', 'Competitive prices', 'Total flexibility']
      },
      company: {
        title: 'Enterprise Services',
        description: 'Complex and scalable developments with comprehensive support',
        features: ['Enterprise architectures', '24/7 support', 'Complete documentation', 'Extended warranties']
      }
    },
    // Founder
    founder: {
      title: 'Meet the',
      titleHighlight: 'Founder',
      subtitle: 'The mind behind UY Tech Solutions',
      name: 'Diego Morales Perez',
      role: 'Founder & Full-Stack Developer',
      bio1: 'Passionate full-stack developer with over 5 years of experience in modern technologies. Specialized in Vue.js, Node.js, and cloud architectures.',
      bio2: 'My mission is to democratize access to high-quality technological solutions, helping both startups and established companies reach their digital potential.',
      cta1: 'View GitHub',
      cta2: 'Learn More'
    },
    // Workspace
    workspace: {
      title: 'My',
      titleHighlight: 'Workspace',
      subtitle: 'Where innovation comes to life',
      description1: 'My workspace is designed to maximize productivity and creativity. With cutting-edge technology and an environment that fosters innovation.',
      description2: 'From traditional Uruguayan mate to the latest technologies, I combine local culture with global innovation to create unique solutions.',
      stats: {
        projects: 'Completed Projects',
        availability: 'Availability'
      }
    },
    // CTA
    cta: {
      title: 'Ready to transform your business?',
      description: 'Let\'s talk about your project and discover how I can help you achieve your technological goals.',
      startProject: 'Start Project',
      viewProjects: 'View Projects'
    },
    // Footer
    footer: {
      description: 'Full-Stack Developer specialized in innovative technological solutions for companies and entrepreneurs.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.'
    },
    // Chatbot
    chatbot: {
      title: 'UY Tech Assistant',
      status: 'Online',
      botName: 'Diego',
      welcome: 'Hello! 👋 I\'m Diego from UY Tech Solutions. How can I help you today?',
      autoMessage: 'Do you have any questions about my services? I\'m here to help! 😊',
      placeholder: 'Type your message...',
      typing: 'Diego is typing...'
    },
    // About page
    aboutPage: {
      title: 'About',
      titleHighlight: 'UY Tech Solutions',
      subtitle: 'We are a company specialized in software development and technological solutions, committed to innovation and technical excellence.',
      story: {
        title: 'Our Story',
        description: 'UY Tech Solutions was born with the vision of democratizing access to cutting-edge technology. Since our inception, we have focused on creating solutions that not only solve problems, but drive business growth with innovation and quality.'
      },
      mission: {
        title: 'Our Mission',
        description: 'Empower companies with innovative technological solutions that optimize processes, improve user experience and generate measurable results, always staying at the forefront of the latest technological trends.'
      },
      vision: {
        title: 'Our Vision',
        description: 'To be the leading company in custom software development in Uruguay and the region, being leaders in innovation, quality and customer service, contributing to the growth of the Latin American technological ecosystem.'
      },
      values: {
        excellence: {
          title: 'Excellence',
          description: 'We seek perfection in every line of code and in every solution we deliver.'
        },
        innovation: {
          title: 'Innovation',
          description: 'We adopt the latest technologies to create truly disruptive solutions.'
        },
        collaboration: {
          title: 'Collaboration',
          description: 'We work as a team with our clients to achieve common goals.'
        }
      },
      team: {
        title: 'Our Team',
        subtitle: 'Meet the professionals who make innovation possible at UY Tech Solutions'
      }
    },
    // Contact form
    contactForm: {
      title: 'Send us a Message',
      name: 'Full Name',
      email: 'Email',
      company: 'Company',
      companyPlaceholder: 'Your company name (optional)',
      projectType: 'Project Type',
      projectTypePlaceholder: 'Select project type',
      message: 'Message',
      messagePlaceholder: 'Tell us about your project or inquiry...',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
      required: 'This field is required'
    },
    // Services page
    servicesPage: {
      title: 'Our Services',
      subtitle: 'We offer comprehensive technological solutions to drive your business',
      process: {
        title: 'Our Work Process',
        cta: 'Contact us to discuss how we can help you with your project'
      }
    },
    // Projects page
    projectsPage: {
      title: 'Our Projects',
      subtitle: 'Discover some of our most outstanding work'
    },
    // Contact page
    contactPage: {
      title: 'Contact',
      subtitle: 'Do you have a project in mind? Let\'s talk about how we can help you',
      messagePlaceholder: 'Tell us about your project...'
    }
  }
}

// Función para obtener traducción anidada
const getNestedTranslation = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path
}

// Función para traducir
const t = (key: TranslationKey): string => {
  const currentTranslations = translations[currentLanguage.value]
  return getNestedTranslation(currentTranslations, key)
}

// Función para cambiar idioma
const setLanguage = (lang: Language) => {
  currentLanguage.value = lang
  localStorage.setItem('language', lang)
}

// Inicializar idioma desde localStorage o detectar idioma del navegador
const initLanguage = () => {
  const savedLang = localStorage.getItem('language') as Language
  if (savedLang && ['es', 'en'].includes(savedLang)) {
    currentLanguage.value = savedLang
  } else {
    const browserLang = navigator.language.toLowerCase()
    currentLanguage.value = browserLang.startsWith('es') ? 'es' : 'en'
  }
}

// Computed para obtener el idioma actual
const locale = computed(() => currentLanguage.value)

export {
  t,
  setLanguage,
  initLanguage,
  locale,
  type Language
}
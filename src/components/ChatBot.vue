<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Window -->
    <transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 transform scale-75 translate-y-4"
      enter-to-class="opacity-100 transform scale-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 transform scale-100 translate-y-0"
      leave-to-class="opacity-0 transform scale-75 translate-y-4"
    >
      <div v-if="isOpen" class="mb-4 w-80 h-96 bg-[#0F172A]/95 backdrop-blur-2xl border border-[#38BDF8]/20 rounded-2xl shadow-2xl overflow-hidden">
        <!-- Chat Header -->
        <div class="bg-[#38BDF8]/10 border-b border-[#38BDF8]/20 p-4 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gradient-tech rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <div>
              <h3 class="text-[#E2E8F0] font-semibold">UY Tech Assistant</h3>
              <p class="text-[#38BDF8] text-sm">En línea</p>
            </div>
          </div>
          <button 
            @click="isOpen = false"
            class="text-[#94A3B8] hover:text-[#38BDF8] transition-all duration-300 transform hover:scale-110"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Chat Messages -->
        <div class="flex-1 p-4 space-y-4 overflow-y-auto max-h-64">
          <div v-for="(message, index) in messages" :key="index" class="flex" :class="message.isUser ? 'justify-end' : 'justify-start'">
            <div 
              class="max-w-xs px-4 py-2 rounded-2xl transition-all duration-300 transform hover:scale-105"
              :class="message.isUser 
                ? 'bg-gradient-tech text-white rounded-br-md' 
                : 'bg-[#1E293B] text-[#E2E8F0] rounded-bl-md border border-[#38BDF8]/20'"
            >
              <p class="text-sm">{{ message.text }}</p>
            </div>
          </div>
        </div>

        <!-- Chat Input -->
        <div class="p-4 border-t border-[#38BDF8]/20">
          <div class="flex space-x-2">
            <input
              v-model="newMessage"
              @keyup.enter="sendMessage"
              type="text"
              placeholder="Escribe tu mensaje..."
              class="flex-1 form-input text-sm"
            />
            <button 
              @click="sendMessage"
              class="w-10 h-10 bg-gradient-tech text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
              :disabled="!newMessage.trim()"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Chat Button -->
    <button
      @click="toggleChat"
      class="w-14 h-14 bg-gradient-tech text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:shadow-glow group"
    >
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform rotate-90"
        enter-to-class="opacity-100 transform rotate-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 transform rotate-0"
        leave-to-class="opacity-0 transform -rotate-90"
      >
        <svg v-if="!isOpen" class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <svg v-else class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </transition>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isOpen = ref(false)
const newMessage = ref('')
const messages = ref([
  {
    text: '¡Hola! Soy el asistente virtual de UY Tech Solutions. ¿En qué puedo ayudarte hoy?',
    isUser: false
  }
])

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const sendMessage = () => {
  if (!newMessage.value.trim()) return

  // Add user message
  messages.value.push({
    text: newMessage.value,
    isUser: true
  })

  const userMessage = newMessage.value.toLowerCase()
  newMessage.value = ''

  // Simulate bot response
  setTimeout(() => {
    let response = 'Gracias por tu mensaje. Te responderemos pronto.'
    
    if (userMessage.includes('servicio') || userMessage.includes('proyecto')) {
      response = 'Ofrecemos desarrollo backend, integraciones cloud, arquitecturas escalables y consultoría técnica. ¿Te gustaría conocer más sobre algún servicio específico?'
    } else if (userMessage.includes('contacto') || userMessage.includes('email')) {
      response = 'Puedes contactarnos en contact@uytechsolutions.com o support@uytechsolutions.com. También puedes usar el formulario de contacto en nuestra página.'
    } else if (userMessage.includes('precio') || userMessage.includes('costo')) {
      response = 'Cada proyecto es único y personalizado. Te invitamos a contactarnos para una consulta gratuita y obtener un presupuesto a medida.'
    } else if (userMessage.includes('hola') || userMessage.includes('buenos días') || userMessage.includes('buenas')) {
      response = '¡Hola! Es un placer saludarte. ¿En qué puedo ayudarte hoy?'
    }

    messages.value.push({
      text: response,
      isUser: false
    })
  }, 1000)
}

// Auto-open chat after 8 seconds
onMounted(() => {
  setTimeout(() => {
    if (!isOpen.value) {
      isOpen.value = true
    }
  }, 8000)
})
</script>

<style scoped>
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Custom scrollbar for chat */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(100, 255, 218, 0.5);
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(100, 255, 218, 0.8);
}
</style>

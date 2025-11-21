<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    <!-- Chat Window -->
    <transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 transform scale-75 translate-y-8"
      enter-to-class="opacity-100 transform scale-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 transform scale-100 translate-y-0"
      leave-to-class="opacity-0 transform scale-75 translate-y-8"
    >
      <div v-if="isOpen" class="mb-4 w-80 sm:w-96 max-h-[500px] bg-[#0B1426]/98 backdrop-blur-xl border border-[#4F46E5]/20 rounded-2xl shadow-2xl overflow-hidden">
        <!-- Chat Header -->
        <div class="bg-[#1A2332]/60 border-b border-[#4F46E5]/20 p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="relative">
                <div class="w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-[#10B981] border-2 border-[#0B1426] rounded-full"></div>
              </div>
              <div>
                <h3 class="text-[#F1F5F9] font-bold text-sm">{{ text.chatbot.title }}</h3>
                <div class="flex items-center space-x-1">
                  <div class="w-2 h-2 bg-[#10B981] rounded-full"></div>
                  <p class="text-[#10B981] text-xs font-medium">{{ text.chatbot.status }}</p>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <!-- Minimize button -->
              <button
                @click="minimizeChat"
                class="text-[#94A3B8] hover:text-[#4F46E5] transition-all duration-300 transform hover:scale-110 p-1 rounded-lg"
                title="Minimize"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                </svg>
              </button>
              <!-- Close button -->
              <button
                @click="closeChat"
                class="text-[#94A3B8] hover:text-red-400 transition-all duration-300 transform hover:scale-110 p-1 rounded-lg"
                title="Close"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Chat Messages -->
        <div ref="messagesContainer" class="flex-1 p-4 space-y-4 overflow-y-auto max-h-80 scroll-smooth">
          <div v-for="(message, index) in messages" :key="index"
               class="flex animate-fade-in-up"
               :class="message.isUser ? 'justify-end' : 'justify-start'"
               :style="`animation-delay: ${index * 0.1}s`">
            <div
              class="max-w-xs px-4 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 relative"
              :class="message.isUser
                ? 'bg-gradient-tech text-white rounded-br-md shadow-lg'
                : 'bg-[#1A2332] text-[#F1F5F9] rounded-bl-md border border-[#4F46E5]/30'"
            >
              <p class="text-sm leading-relaxed">{{ message.text }}</p>
              <div v-if="!message.isUser" class="flex items-center mt-2 space-x-2">
                <div class="flex space-x-1">
                  <div class="w-1 h-1 bg-[#4F46E5] rounded-full animate-pulse" style="animation-delay: 0s"></div>
                  <div class="w-1 h-1 bg-[#10B981] rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                  <div class="w-1 h-1 bg-[#06B6D4] rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                </div>
                <span class="text-xs text-[#94A3B8] font-medium">{{ text.chatbot.botName }}</span>
              </div>
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isTyping" class="flex justify-start animate-fade-in">
            <div class="bg-[#1A2332]/80 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-bl-md border border-[#4F46E5]/20">
              <div class="flex space-x-2 items-center">
                <div class="flex space-x-1">
                  <div class="w-2 h-2 bg-[#4F46E5] rounded-full animate-bounce" style="animation-delay: 0s"></div>
                  <div class="w-2 h-2 bg-[#10B981] rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                  <div class="w-2 h-2 bg-[#06B6D4] rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
                </div>
                <span class="text-xs text-[#94A3B8]">{{ text.chatbot.typing }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div v-if="showQuickActions" class="px-4 pb-2">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="action in quickActions"
              :key="action.text"
              @click="selectQuickAction(action)"
              class="px-3 py-1.5 text-xs bg-[#4F46E5]/15 hover:bg-[#4F46E5]/25 text-[#4F46E5] hover:text-[#F1F5F9] border border-[#4F46E5]/30 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {{ action.text }}
            </button>
          </div>
        </div>

        <!-- Chat Input -->
        <div class="p-4 border-t border-[#4F46E5]/20 bg-[#0B1426]/50 backdrop-blur-sm">
          <div class="flex space-x-3 items-end">
            <div class="flex-1">
              <input
                v-model="newMessage"
                @keyup.enter="sendMessage"
                @focus="showQuickActions = false"
                type="text"
                :placeholder="text.chatbot.placeholder"
                class="w-full px-4 py-3 bg-[#1A2332]/50 border border-[#4F46E5]/20 rounded-2xl text-[#F1F5F9] text-sm focus:border-[#4F46E5]/50 focus:bg-[#1A2332]/80 transition-all duration-300 placeholder-[#94A3B8]"
              />
            </div>
            <button
              @click="sendMessage"
              :disabled="!newMessage.trim() || isTyping"
              class="w-12 h-12 bg-gradient-tech text-white rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg v-if="!isTyping" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <div v-else class="flex space-x-1">
                <div class="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div class="w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                <div class="w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Chat Button - Con transiciones modernas -->
    <transition
      enter-active-class="transition-all duration-700 ease-out"
      enter-from-class="opacity-0 transform scale-0 rotate-180"
      enter-to-class="opacity-100 transform scale-100 rotate-0"
      leave-active-class="transition-all duration-500 ease-in"
      leave-from-class="opacity-100 transform scale-100 rotate-0"
      leave-to-class="opacity-0 transform scale-0 -rotate-90"
    >
      <button
        v-if="!isOpen"
        @click="toggleChat"
        class="relative w-16 h-16 bg-gradient-tech text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:shadow-glow group overflow-hidden animate-float"
      >
        <!-- Notification badge -->
        <div v-if="hasUnreadMessages"
             class="absolute -top-2 -right-2 w-6 h-6 bg-[#10B981] border-2 border-white rounded-full flex items-center justify-center animate-pulse">
          <span class="text-xs font-bold text-white">{{ unreadCount }}</span>
        </div>

        <!-- Background animation -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Pulse ring effect -->
        <div class="absolute inset-0 rounded-2xl bg-[#4F46E5]/30 animate-ping"></div>

        <!-- Ícono de chat -->
        <svg class="w-7 h-7 transition-all duration-300 group-hover:scale-110 relative z-10"
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { text } = useI18n()

const isOpen = ref(false) // Contraído por defecto
const newMessage = ref('')
const isTyping = ref(false)
const messagesContainer = ref<HTMLElement>()
const showQuickActions = ref(true)
const hasUnreadMessages = ref(false)
const unreadCount = ref(0)

const messages = ref([
  {
    text: text.chatbot.welcome,
    isUser: false
  }
])

// Quick actions in English only
const quickActions = [
  { text: '💼 Services', response: 'services' },
  { text: '💰 Pricing', response: 'pricing' },
  { text: '📞 Contact', response: 'contact' },
  { text: '🚀 Freelancer vs Company', response: 'comparison' }
]

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    hasUnreadMessages.value = false
    unreadCount.value = 0
    showQuickActions.value = true
  }
}

const minimizeChat = () => {
  isOpen.value = false
}

const closeChat = () => {
  isOpen.value = false
  hasUnreadMessages.value = false
  unreadCount.value = 0
}

const selectQuickAction = (action: any) => {
  showQuickActions.value = false

  // Add user message
  messages.value.push({
    text: action.text,
    isUser: true
  })

  // Generate response
  setTimeout(() => {
    generateBotResponse(action.response)
  }, 1000)
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const sendMessage = () => {
  if (!newMessage.value.trim() || isTyping.value) return

  showQuickActions.value = false

  // Add user message
  messages.value.push({
    text: newMessage.value,
    isUser: true
  })

  const userMessage = newMessage.value.toLowerCase()
  newMessage.value = ''
  scrollToBottom()

  // Show typing indicator
  isTyping.value = true

  // Generate bot response
  setTimeout(() => {
    generateBotResponse(userMessage)
    isTyping.value = false
    scrollToBottom()
  }, 1500)
}

const generateBotResponse = (input: string) => {
  let response = ''

  if (input.includes('services') || input.includes('service') || input.includes('project')) {
    response = 'I offer two modalities: 🚀 **Freelancer** for agile projects with direct communication, and 🏢 **Company** for complex developments with comprehensive support. Which interests you more?'
  } else if (input.includes('comparison') || input.includes('freelancer') || input.includes('company')) {
    response = '**Freelancer**: Rapid development, direct communication, competitive prices, maximum flexibility.\n\n**Company**: Enterprise architectures, 24/7 support, complete documentation, extended warranties.\n\nDo you have a project in mind?'
  } else if (input.includes('contact') || input.includes('email')) {
    response = 'You can contact me at: 📧 contact@uytechsolutions.com\nYou can also use the contact form on the page. I\'ll be happy to help you!'
  } else if (input.includes('pricing') || input.includes('price') || input.includes('cost')) {
    response = 'Each project is unique 🎯. Prices vary according to:\n• Technical complexity\n• Modality (Freelancer/Company)\n• Delivery deadlines\n• Required technologies\n\nContact for a free consultation!'
  } else if (input.includes('hello') || input.includes('hi') || input.includes('good morning') || input.includes('good afternoon')) {
    response = 'Hello! 👋 It\'s a pleasure to greet you. I\'m Diego, full-stack developer at UY Tech Solutions. How can I help you today?'
  } else if (input.includes('technology') || input.includes('stack') || input.includes('tech')) {
    response = 'I work with modern technologies: 🔧 Vue.js, React, Node.js, TypeScript, PostgreSQL, MongoDB, Docker, AWS. Is there a specific technology you\'re interested in?'
  } else {
    response = 'Thank you for your message 😊. If you have any specific questions about my services, technologies, or projects, I\'ll be happy to help you.'
  }

  messages.value.push({
    text: response,
    isUser: false
  })
}

// Add notification system
const addNotification = () => {
  if (!isOpen.value) {
    hasUnreadMessages.value = true
    unreadCount.value++
  }
}

// Auto-open chat after 10 seconds with a welcome message
onMounted(() => {
  setTimeout(() => {
    if (!isOpen.value) {
      addNotification()
      messages.value.push({
        text: text.chatbot.autoMessage,
        isUser: false
      })
    }
  }, 10000)
})
</script>

<style scoped>
/* Custom scrollbar for chat */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(26, 35, 50, 0.6);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #4F46E5, #10B981);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #10B981, #4F46E5);
}

/* Enhanced animations */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
  60% {
    transform: translateY(-3px);
  }
}

.animate-bounce {
  animation: bounce 1.4s infinite;
}
</style>
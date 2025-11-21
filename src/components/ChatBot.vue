<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Toggle Button -->
    <div v-if="!isOpen"
         @click="toggleChat"
         class="chatbot-toggle group">
      <div class="relative">
        <!-- Pulsing effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#4F46E5] to-[#10B981] rounded-full animate-ping opacity-20"></div>

        <!-- Main button -->
        <div class="relative bg-gradient-to-r from-[#4F46E5] to-[#10B981] p-4 rounded-full shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(79,70,229,0.4)] transform hover:scale-110 hover:-rotate-12">
          <svg class="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>

        <!-- Notification badge -->
        <div v-if="hasUnread" class="absolute -top-1 -right-1 w-4 h-4 bg-[#EF4444] rounded-full flex items-center justify-center animate-bounce">
          <span class="text-xs text-white font-bold">!</span>
        </div>
      </div>
    </div>

    <!-- Chat Window -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="transform translate-y-4 opacity-0 scale-95"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform translate-y-4 opacity-0 scale-95">
      <div v-if="isOpen" class="chatbot-window card hover-lift">
        <!-- Header -->
        <div class="chatbot-header">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-r from-[#4F46E5] to-[#10B981] rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="gradient-text text-lg font-bold">UY Tech Assistant</h3>
              <p class="text-xs text-[#94A3B8]">Siempre disponible para ayudarte</p>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <!-- Minimize button -->
            <button @click="isMinimized = !isMinimized"
                    class="chatbot-control-btn"
                    title="Minimizar">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
              </svg>
            </button>
            <!-- Close button -->
            <button @click="toggleChat"
                    class="chatbot-control-btn hover:bg-red-500/20 hover:text-red-400"
                    title="Cerrar">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Messages Container -->
        <div v-if="!isMinimized" class="chatbot-messages" ref="messagesContainer">
          <!-- Welcome message -->
          <div v-if="messages.length === 0" class="flex justify-start animate-fade-in-up">
            <div class="chatbot-message-bot">
              <div class="flex items-center space-x-2 mb-2">
                <div class="w-6 h-6 bg-gradient-to-r from-[#4F46E5] to-[#10B981] rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span class="text-xs text-[#10B981] font-medium">UY Tech Assistant</span>
              </div>
              <p>¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?</p>
              <div class="flex flex-wrap gap-2 mt-3">
                <button v-for="suggestion in quickSuggestions"
                        :key="suggestion"
                        @click="sendQuickMessage(suggestion)"
                        class="chatbot-suggestion">
                  {{ suggestion }}
                </button>
              </div>
            </div>
          </div>

          <!-- User and bot messages -->
          <div v-for="(message, index) in messages" :key="index"
               :class="message.isUser ? 'flex justify-end' : 'flex justify-start'"
               class="animate-fade-in-up"
               :style="`animation-delay: ${index * 0.1}s`">

            <div v-if="message.isUser" class="chatbot-message-user">
              {{ message.text }}
            </div>

            <div v-else class="chatbot-message-bot">
              <div class="flex items-center space-x-2 mb-1">
                <div class="w-5 h-5 bg-gradient-to-r from-[#4F46E5] to-[#10B981] rounded-full flex items-center justify-center">
                  <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span class="text-xs text-[#10B981] font-medium">Assistant</span>
              </div>
              {{ message.text }}
            </div>
          </div>

          <!-- Loading indicator -->
          <div v-if="loading" class="flex justify-start animate-fade-in-up">
            <div class="chatbot-message-bot">
              <div class="flex items-center space-x-2 mb-2">
                <div class="w-5 h-5 bg-gradient-to-r from-[#4F46E5] to-[#10B981] rounded-full flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                <span class="text-xs text-[#10B981] font-medium">Escribiendo...</span>
              </div>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-[#4F46E5] rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-[#10B981] rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-2 h-2 bg-[#06B6D4] rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              </div>
            </div>
          </div>

          <!-- Error message -->
          <div v-if="error" class="flex justify-start animate-fade-in-up">
            <div class="chatbot-message-error">
              <div class="flex items-center space-x-2 mb-1">
                <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-xs text-red-400 font-medium">Error</span>
              </div>
              {{ error }}
              <button @click="retryLastMessage" class="mt-2 text-xs text-[#4F46E5] hover:text-[#10B981] font-medium">
                Reintentar
              </button>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div v-if="!isMinimized" class="chatbot-input-area">
          <div class="flex items-end space-x-3">
            <div class="flex-1">
              <input
                v-model="currentMessage"
                @keypress.enter="sendMessage"
                @focus="hasUnread = false"
                :disabled="loading"
                type="text"
                placeholder="Escribe tu mensaje..."
                class="chatbot-input"
                maxlength="500"
              />
              <div class="text-xs text-[#6B7280] mt-1 text-right">
                {{ currentMessage.length }}/500
              </div>
            </div>

            <button
              @click="sendMessage"
              :disabled="loading || !currentMessage.trim()"
              class="chatbot-send-btn group">
              <svg v-if="!loading" class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <div v-else class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Message {
  text: string
  isUser: boolean
}

const isOpen = ref(false)
const isMinimized = ref(false)
const currentMessage = ref('')
const messages = ref<Message[]>([])
const loading = ref(false)
const error = ref('')
const sessionId = ref('')
const hasUnread = ref(false)
const lastMessage = ref('')
const messagesContainer = ref<HTMLElement>()

const quickSuggestions = [
  '💼 Servicios',
  '💰 Precios',
  '📞 Contacto',
  '🚀 Proyectos'
]

// Generate stable sessionId
const generateSessionId = async (data: string): Promise<string> => {
  const encoder = new TextEncoder()
  const dataBuffer = encoder.encode(data)
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

// Detect language from text
const detectLanguage = (text: string): string => {
  const spanishWords = ['el', 'la', 'de', 'que', 'y', 'a', 'en', 'un', 'es', 'se', 'no', 'te', 'lo', 'le', 'da', 'su', 'por', 'son', 'con', 'para', 'al', 'como', 'las', 'del', 'los', 'una', 'pero', 'sus', 'me', 'hasta', 'donde', 'quien', 'desde', 'nos', 'durante', 'todos', 'uno', 'les', 'ni', 'contra', 'otros', 'ese', 'eso', 'ante', 'ellos', 'e', 'esto', 'mí', 'antes', 'algunos', 'qué', 'unos', 'yo', 'otro', 'otras', 'otra', 'él', 'tanto', 'esa', 'estos', 'mucho', 'quienes', 'nada', 'muchos', 'cual', 'sea', 'poco', 'ella', 'estar', 'estas', 'algunas', 'algo', 'nosotros', 'mi', 'mis', 'tú', 'te', 'ti', 'tu', 'tus', 'ellas', 'nosotras', 'vosotros', 'vosotras', 'os', 'mío', 'mía', 'míos', 'mías', 'tuyo', 'tuya', 'tuyos', 'tuyas', 'suyo', 'suya', 'suyos', 'suyas', 'nuestro', 'nuestra', 'nuestros', 'nuestras', 'vuestro', 'vuestra', 'vuestros', 'vuestras', 'esos', 'esas', 'estoy', 'está', 'estás', 'estamos', 'estáis', 'están', 'esté', 'estés', 'estemos', 'estéis', 'estén', 'estaré', 'estarás', 'estará', 'estaremos', 'estaréis', 'estarán', 'estaría', 'estarías', 'estaríamos', 'estaríais', 'estarían', 'estaba', 'estabas', 'estábamos', 'estabais', 'estaban', 'estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron', 'soy', 'eres', 'somos', 'sois', 'son', 'sea', 'seas', 'seamos', 'seáis', 'sean', 'seré', 'serás', 'será', 'seremos', 'seréis', 'serán', 'sería', 'serías', 'seríamos', 'seríais', 'serían', 'era', 'eras', 'éramos', 'erais', 'eran', 'fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron', 'tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen', 'tenga', 'tengas', 'tengamos', 'tengáis', 'tengan', 'tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán', 'tendría', 'tendrías', 'tendríamos', 'tendríais', 'tendrían', 'tenía', 'tenías', 'teníamos', 'teníais', 'tenían', 'tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron', 'hola', 'buenos', 'días', 'buenas', 'tardes', 'noches', 'gracias', 'por', 'favor', 'disculpe', 'perdón', 'cómo', 'cuándo', 'dónde', 'qué', 'quién', 'cuál', 'cuánto', 'necesito', 'quiero', 'puedo', 'ayuda', 'información', 'precio', 'servicio', 'empresa', 'trabajo', 'proyecto']

  const words = text.toLowerCase().split(/\s+/)
  const spanishCount = words.filter(word => spanishWords.includes(word)).length
  const totalWords = words.length

  return totalWords > 0 && (spanishCount / totalWords) > 0.3 ? 'es' : 'en'
}

// Get device info from user agent
const getDeviceInfo = (userAgent: string): string => {
  const ua = userAgent.toLowerCase()

  if (ua.includes('mobile') || ua.includes('android') || ua.includes('iphone')) {
    if (ua.includes('iphone')) return 'iPhone'
    if (ua.includes('android')) return 'Android'
    return 'Mobile'
  }

  if (ua.includes('tablet') || ua.includes('ipad')) return 'Tablet'
  if (ua.includes('windows')) return 'Windows'
  if (ua.includes('macintosh') || ua.includes('mac os')) return 'Mac'
  if (ua.includes('linux')) return 'Linux'

  return 'Desktop'
}

// Get country from language or default
const getCountryFromLocale = (locale: string): string => {
  return locale === 'es' ? 'UY' : 'US'
}

// Get timezone
const getTimezone = (): string => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return 'America/Montevideo'
  }
}

// Initialize sessionId on mount
onMounted(async () => {
  const userAgent = navigator.userAgent
  const timestamp = Date.now().toString()
  const sessionData = `${userAgent}-${window.location.hostname}-${timestamp}`

  // Check if sessionId exists in localStorage
  const existingSessionId = localStorage.getItem('chatbot-session-id')
  if (existingSessionId) {
    sessionId.value = existingSessionId
  } else {
    sessionId.value = await generateSessionId(sessionData)
    localStorage.setItem('chatbot-session-id', sessionId.value)
  }
})

const toggleChat = () => {
  isOpen.value = !isOpen.value
  isMinimized.value = false
  if (isOpen.value) {
    hasUnread.value = false
  }
}

const sendQuickMessage = (message: string) => {
  currentMessage.value = message
  sendMessage()
}

const retryLastMessage = () => {
  if (lastMessage.value) {
    currentMessage.value = lastMessage.value
    error.value = ''
    sendMessage()
  }
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    setTimeout(() => {
      messagesContainer.value!.scrollTop = messagesContainer.value!.scrollHeight
    }, 100)
  }
}

const sendMessage = async () => {
  if (!currentMessage.value.trim() || loading.value) return

  const userMessage = currentMessage.value.trim()
  lastMessage.value = userMessage

  // Add user message to chat
  messages.value.push({
    text: userMessage,
    isUser: true
  })

  // Clear input and reset error
  currentMessage.value = ''
  error.value = ''
  loading.value = true

  try {
    const userAgent = navigator.userAgent
    const locale = detectLanguage(userMessage)
    const device = getDeviceInfo(userAgent)
    const country = getCountryFromLocale(locale)
    const timezone = getTimezone()
    const datetime = new Date().toISOString()

    const payload = {
      sessionId: sessionId.value,
      message: userMessage,
      locale,
      country,
      timezone,
      device,
      datetime,
      metadata: {
        ip: null, // Will be detected by server
        userAgent,
        referer: document.referrer || null,
        executionMode: 'production',
        webhookUrl: 'https://n8n.uytechsolutions.com/webhook/chatbot',
        clientVersion: '1.0.0'
      }
    }

    const response = await fetch('https://n8n.uytechsolutions.com/webhook/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()

    // Add bot response to chat
    messages.value.push({
      text: data.reply || 'Sin respuesta',
      isUser: false
    })

    if (!isOpen.value) {
      hasUnread.value = true
    }

    scrollToBottom()
  } catch (err) {
    console.error('Error sending message:', err)
    error.value = 'Error al conectar con el servidor'
  } finally {
    loading.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
/* ChatBot Styles - Matching Portfolio Design System */
.chatbot-toggle {
  cursor: pointer;
  transition: all 0.3s ease;
}

.chatbot-window {
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(79, 70, 229, 0.2);
  backdrop-filter: blur(20px);
  background: rgba(26, 35, 50, 0.95);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3),
              0 0 40px rgba(79, 70, 229, 0.1);
}

.chatbot-header {
  background: linear-gradient(135deg, rgba(26, 35, 50, 0.9) 0%, rgba(42, 52, 65, 0.9) 100%);
  backdrop-filter: blur(10px);
  padding: 1.25rem;
  border-bottom: 1px solid rgba(79, 70, 229, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot-control-btn {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(79, 70, 229, 0.1);
  color: #94A3B8;
  border: 1px solid rgba(79, 70, 229, 0.2);
  transition: all 0.3s ease;
}

.chatbot-control-btn:hover {
  background: rgba(79, 70, 229, 0.2);
  color: #F1F5F9;
  transform: scale(1.1);
}

.chatbot-messages {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scroll-behavior: smooth;
}

.chatbot-messages::-webkit-scrollbar {
  width: 6px;
}

.chatbot-messages::-webkit-scrollbar-track {
  background: rgba(26, 35, 50, 0.5);
  border-radius: 3px;
}

.chatbot-messages::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #4F46E5 0%, #10B981 100%);
  border-radius: 3px;
}

.chatbot-message-user {
  background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 1rem 1rem 0.25rem 1rem;
  max-width: 280px;
  word-wrap: break-word;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  position: relative;
}

.chatbot-message-user::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: -8px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-left-color: #4F46E5;
  border-bottom: 0;
}

.chatbot-message-bot {
  background: rgba(42, 52, 65, 0.8);
  backdrop-filter: blur(10px);
  color: #F1F5F9;
  padding: 0.75rem 1rem;
  border-radius: 1rem 1rem 1rem 0.25rem;
  max-width: 280px;
  word-wrap: break-word;
  border: 1px solid rgba(16, 185, 129, 0.2);
  position: relative;
}

.chatbot-message-bot::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -8px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-right-color: rgba(42, 52, 65, 0.8);
  border-bottom: 0;
}

.chatbot-message-error {
  background: rgba(239, 68, 68, 0.1);
  backdrop-filter: blur(10px);
  color: #FCA5A5;
  padding: 0.75rem 1rem;
  border-radius: 1rem 1rem 1rem 0.25rem;
  max-width: 280px;
  word-wrap: break-word;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.chatbot-suggestion {
  background: rgba(79, 70, 229, 0.15);
  color: #A78BFA;
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  border: 1px solid rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.chatbot-suggestion:hover {
  background: rgba(79, 70, 229, 0.25);
  color: #C4B5FD;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
}

.chatbot-input-area {
  padding: 1.25rem;
  border-top: 1px solid rgba(79, 70, 229, 0.2);
  background: linear-gradient(135deg, rgba(26, 35, 50, 0.9) 0%, rgba(42, 52, 65, 0.9) 100%);
  backdrop-filter: blur(10px);
}

.chatbot-input {
  width: 100%;
  background: rgba(42, 52, 65, 0.8);
  backdrop-filter: blur(10px);
  color: #F1F5F9;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.chatbot-input:focus {
  outline: none;
  border-color: rgba(79, 70, 229, 0.6);
  box-shadow: 0 0 20px rgba(79, 70, 229, 0.2);
  background: rgba(42, 52, 65, 0.9);
}

.chatbot-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.chatbot-send-btn {
  background: linear-gradient(135deg, #4F46E5 0%, #10B981 100%);
  color: white;
  padding: 0.75rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 48px;
}

.chatbot-send-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
}

.chatbot-send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.4s ease-out forwards;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .chatbot-window {
    width: 360px;
    height: 500px;
  }

  .chatbot-messages {
    padding: 1rem;
  }

  .chatbot-input-area {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .chatbot-window {
    width: calc(100vw - 2rem);
    height: calc(100vh - 8rem);
    max-width: 360px;
  }
}
</style>
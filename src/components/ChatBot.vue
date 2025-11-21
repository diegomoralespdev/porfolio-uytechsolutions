<template>
  <div class="fixed bottom-4 right-4 z-50">
    <!-- Chat Toggle Button -->
    <div v-if="!isOpen"
         @click="isOpen = true"
         class="bg-gradient-to-r from-[#4F46E5] to-[#10B981] p-4 rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </div>

    <!-- Chat Window -->
    <div v-if="isOpen" class="bg-[#1A2332] border border-[#4F46E5]/20 rounded-lg shadow-2xl w-80 h-96 flex flex-col">
      <!-- Header -->
      <div class="bg-gradient-to-r from-[#4F46E5] to-[#10B981] p-4 rounded-t-lg flex justify-between items-center">
        <h3 class="text-white font-semibold">Chat Bot</h3>
        <button @click="isOpen = false" class="text-white hover:text-gray-200 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Messages -->
      <div class="flex-1 p-4 overflow-y-auto space-y-3">
        <div v-for="(message, index) in messages" :key="index"
             :class="message.isUser ? 'flex justify-end' : 'flex justify-start'">
          <div :class="message.isUser
            ? 'bg-[#4F46E5] text-white rounded-lg px-3 py-2 max-w-xs'
            : 'bg-[#2A3441] text-[#F1F5F9] rounded-lg px-3 py-2 max-w-xs'">
            {{ message.text }}
          </div>
        </div>

        <!-- Loading indicator -->
        <div v-if="loading" class="flex justify-start">
          <div class="bg-[#2A3441] text-[#F1F5F9] rounded-lg px-3 py-2 max-w-xs">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
          </div>
        </div>

        <!-- Error message -->
        <div v-if="error" class="flex justify-start">
          <div class="bg-red-500 text-white rounded-lg px-3 py-2 max-w-xs">
            {{ error }}
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="p-4 border-t border-[#4F46E5]/20">
        <div class="flex space-x-2">
          <input
            v-model="currentMessage"
            @keypress.enter="sendMessage"
            :disabled="loading"
            type="text"
            placeholder="Escribe tu mensaje..."
            class="flex-1 bg-[#2A3441] text-[#F1F5F9] px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] disabled:opacity-50"
          />
          <button
            @click="sendMessage"
            :disabled="loading || !currentMessage.trim()"
            class="bg-[#4F46E5] text-white px-4 py-2 rounded-lg hover:bg-[#4338CA] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Message {
  text: string
  isUser: boolean
}

const isOpen = ref(false)
const currentMessage = ref('')
const messages = ref<Message[]>([])
const loading = ref(false)
const error = ref('')
const sessionId = ref('')

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

const sendMessage = async () => {
  if (!currentMessage.value.trim() || loading.value) return

  const userMessage = currentMessage.value.trim()

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
  } catch (err) {
    console.error('Error sending message:', err)
    error.value = 'Error al conectar con el servidor'
  } finally {
    loading.value = false
  }
}
</script>
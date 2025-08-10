<template>
  <div class="bg-dark-800 rounded-2xl p-8 shadow-2xl border border-dark-700">
    <h3 class="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Name Field -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
          Nombre Completo *
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          :class="{ 'border-red-500 focus:ring-red-500': errors.name }"
          placeholder="Tu nombre completo"
        />
        <p v-if="errors.name" class="mt-1 text-sm text-red-400">{{ errors.name }}</p>
      </div>

      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          :class="{ 'border-red-500 focus:ring-red-500': errors.email }"
          placeholder="tu@email.com"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email }}</p>
      </div>

      <!-- Company Field -->
      <div>
        <label for="company" class="block text-sm font-medium text-gray-300 mb-2">
          Empresa
        </label>
        <input
          id="company"
          v-model="form.company"
          type="text"
          class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          placeholder="Nombre de tu empresa (opcional)"
        />
      </div>

      <!-- Service Interest -->
      <div>
        <label for="service" class="block text-sm font-medium text-gray-300 mb-2">
          Servicio de Interés
        </label>
        <select
          id="service"
          v-model="form.service"
          class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        >
          <option value="">Selecciona un servicio</option>
          <option value="backend">Desarrollo Backend</option>
          <option value="cloud">Integraciones Cloud</option>
          <option value="architecture">Arquitecturas Escalables</option>
          <option value="devops">DevOps</option>
          <option value="consulting">Consultoría Técnica</option>
          <option value="other">Otro</option>
        </select>
      </div>

      <!-- Message Field -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          required
          class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
          :class="{ 'border-red-500 focus:ring-red-500': errors.message }"
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
        ></textarea>
        <p v-if="errors.message" class="mt-1 text-sm text-red-400">{{ errors.message }}</p>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500/50 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-primary-500/25"
      >
        <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
          <span>Enviar Mensaje</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </span>
        <span v-else class="flex items-center justify-center space-x-2">
          <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Enviando...</span>
        </span>
      </button>
    </form>

    <!-- Success Message -->
    <div v-if="isSuccess" class="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
      <div class="flex items-center space-x-2 text-green-400">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <span class="font-medium">¡Mensaje enviado exitosamente!</span>
      </div>
      <p class="mt-1 text-sm text-green-300">Nos pondremos en contacto contigo pronto.</p>
    </div>

    <!-- Error Message -->
    <div v-if="submitError" class="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
      <div class="flex items-center space-x-2 text-red-400">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <span class="font-medium">Error al enviar el mensaje</span>
      </div>
      <p class="mt-1 text-sm text-red-300">{{ submitError }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface FormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
  company: '',
  service: '',
  message: ''
})

const errors = reactive<FormErrors>({})
const isSubmitting = ref(false)
const isSuccess = ref(false)
const submitError = ref('')

const validateForm = (): boolean => {
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'El nombre es requerido'
  }

  if (!form.email.trim()) {
    errors.email = 'El email es requerido'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'El email no es válido'
  }

  if (!form.message.trim()) {
    errors.message = 'El mensaje es requerido'
  } else if (form.message.length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
  }

  return !errors.name && !errors.email && !errors.message
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  submitError.value = ''
  isSuccess.value = false

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    })
    
    isSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
    
  } catch (error) {
    submitError.value = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

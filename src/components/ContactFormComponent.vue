<template>
  <div class="col-12">
    <div v-if="formData.success" class="alert alert-success text-start" role="alert">
        Messaggio inviato con successo!
    </div>
    <form class="text-start" @submit.prevent="handleSendForm">
      <div class="mb-3">
        <input class="border-0 border-bottom form-control" type="text" name="name" id="name" placeholder="Name" v-model="formData.name" :class="{ 'is-invalid': formData.errors.name }" required/>
        <p v-for="(error, index) in formData.errors.name" :key="index" class="invalid-feedback">
          {{ error }}
        </p>
      </div>
      <div class="mb-3">
        <input class="border-0 border-bottom form-control" type="text" name="email" id="email" placeholder="Email" v-model="formData.email" :class="{ 'is-invalid': formData.errors.email }" required/>
        <p v-for="(error, index) in formData.errors.email" :key="index" class="invalid-feedback">
          {{ error }}
        </p>
      </div>
      <div class="mb-3">
        <textarea class="border-0 border-bottom form-control" name="message" id="message" cols="30" rows="10" placeholder="Message" v-model="formData.message" :class="{ 'is-invalid': formData.errors.message }" required></textarea>
        <p v-for="(error, index) in formData.errors.message" :key="index" class="invalid-feedback">
          {{ error }}
        </p>
      </div>
      <button class="btn btn-lg btn-primary text-white" type="submit" :disabled="formData.loading">
        {{ formData.loading ? "Sending..." : "Send" }}
      </button>
    </form>
  </div>
</template>

<script setup>
//imports
import {store} from '@/stores/store.js';
import {reactive} from 'vue';

//form data
const formData = reactive({
    name: '',
    email: '',
    message: '',
    success: false,
    errors: {},
    loading: false
})

//call sendForm from store
const handleSendForm = function(){
    store.sendForm(formData)
}
</script>

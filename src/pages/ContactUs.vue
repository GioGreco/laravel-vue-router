<template>
    <NavbarComponent/>
    <section class="container">
        <h1 class="text-center">Contattami!</h1>
        <div class="row">
            <ContactFormComponent/>
        </div>
    </section>
</template>

<script setup>
import ContactFormComponent from '@/components/ContactFormComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
</script>
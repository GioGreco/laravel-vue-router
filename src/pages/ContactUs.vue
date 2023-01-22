<template>
    <div class="vh-100 position-relative">
        <div class="top-bar position-absolute">
            <NavbarComponent/>
        </div>
        <div class="box">
            <section class="container">
                <h1 class="text-center">Contattami!</h1>
                <div class="row">
                    <ContactFormComponent/>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import ContactFormComponent from '@/components/ContactFormComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
</script>

<style lang="scss" scoped>
.top-bar{
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
}
.box{
    width: 100%;
    height: 90%;
    border: 3px solid black;
    position: absolute;
    top: 50%;
    transform: translate(0 , -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;

    &::before, &::after {
                position: absolute;
                background-color: beige;
                z-index: -1;
                transition: .8s;
                content: '';
            }

            &::before {
                height: 105%;
                width: 70%;
            }

            &::after {
                width: 105%;
                height: 70%;
            }
}
</style>
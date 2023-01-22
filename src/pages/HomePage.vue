<template>
    <div class="vh-100 position-relative">
        <div class="box">
            <h1 v-if="showTitle">/GioGreco.dev</h1>
            <Transition name="fadeEnter">
                <div class="wrapItems" v-if="show">
                    <NavbarComponent @hideTitle="showTitle = false"/>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
//imports
import NavbarComponent from '@/components/NavbarComponent.vue';
import { ref,onMounted } from 'vue';

//show nav delay
const show = ref(false)
onMounted(()=>{
    setTimeout(()=>{
        show.value = true;
    }, 3500)
})

//routes transitions parameters
const showTitle = ref(true);
</script>

<style lang="scss" scoped>
h1{
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, 0);
    text-align: center;
    width: 320px;
    overflow: hidden;
    border-right: .15em solid grey;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: typing 2.5s steps(40, end), blink-caret .35s step-end infinite, hideBorder .5s forwards 2.5s, setTitleHeight 2s forwards 2.8s;

    &::after{
        display:block;
        content: '';
        z-index: 90;
        border-bottom: 1px solid black;  
        transform: scaleX(0);
        animation: displayBorderFromCenter 1s ease 2.5s forwards;
    }
}
.wrapItems{
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, 0);
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

//ANIMATIONS

//type title + caret blinking
@keyframes typing {
  from { width: 0 }
  to { width: 320px }
}
@keyframes blink-caret {
  from, to { border-right: .15em solid transparent; }
  50% { border-right: .15em solid grey; }
  100% { border-right: .15em solid transparent;}
}

//reset title height + hide border right + display border bottom from center
@keyframes hideBorder {
    100% {
        border-right: .15em solid transparent;
    }
}
@keyframes setTitleHeight {
    100%{
        top: 35%;
        width: 40vw;
    }
}
@keyframes displayBorderFromCenter {
    100%{
        transform: scaleX(1.5);
    }
}

//fade items enter
.fadeEnter-enter-from{
    opacity: 0;
}
.fadeEnter-enter-to{
    opacity: 1;
}

.fadeEnter-enter-active{
    transition: opacity 1s;
}
</style>
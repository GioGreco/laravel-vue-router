<template>
  <div class="container">
    <RouterView v-slot="{Component}">
      <Transition name="routeFX" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>


</script>

<style lang="scss">
.routeFX-enter-from{
  transform: scale(.05);
}

.routeFX-enter-to{
  transform: scale(1);
}

.routeFX-leave-from{
  transform: scale(1);
}

.routeFX-leave-to{
  transform: scale(.05);
}

.routeFX-enter-active, .routeFX-leave-active{
  transition: all 1s ease;
}
</style>

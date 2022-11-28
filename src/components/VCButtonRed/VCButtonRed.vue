<template>
  <button 
    v-bind="$attrs"
    class="vc-button"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'VCButtonRed'
}
</script>
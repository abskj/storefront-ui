<template>
  <div>
    test
    {{ $options.hello("say ") }}
    <br />
    {{ $attrs }}
    <button class="color-primary sf-button" :disabled="false" link="">
      Shop now
    </button>
  </div>
</template>

<script>
export default {
  hello(x) {
    return x + "hi";
  },
};
</script>

<style></style>

<template>
  <div>
    Hello
    <sf-arrow></sf-arrow>
    <br />
    <demo></demo>
  </div>
</template>

<script>
import { SfArrow } from "@storefront-ui/vue";
import Demo from "@/components/Demo";
export default {
  components: {
    SfArrow,
    Demo,
  },
  methods: {
    testClick(){
      alert("detected click");
    }
  }
};
</script>

<style></style>

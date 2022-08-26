<template lang="">
  <svg>
    <use :href="href"></use>
  </svg>
</template>
<script>
import sprite from "../../assets/sprite.svg";
export default {
  name: "my-svg",
  data() {
    return {
      baseUrl: sprite,
      href: sprite + this.nameSvg,
    };
  },
  props: {
    nameSvg: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped></style>

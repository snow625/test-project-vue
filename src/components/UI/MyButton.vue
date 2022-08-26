<template>
  <button :type="type" class="btn" v-bind:class="{ btn_accent: accent }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    accent: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style scoped>
.btn {
  min-width: 30px;
  padding: 8px 0;
  border: 1px solid #dcdfe6;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  color: #656266;
}

.btn_accent {
  background: #48a70a;
  color: #fff;
}

@media only screen and (max-width: 479px) {
  .btn {
    width: 100%;
  }
}

@media only screen and (min-width: 480px) {
  .btn {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>

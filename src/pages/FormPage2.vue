<template>
  <div class="container form_container">
    <div class="wrapper">
      <From2 @createForm="setFormToStore" />
    </div>
  </div>
</template>
<script>
import From2 from "../components/Form2.vue";
export default {
  components: {
    From2,
  },
  methods: {
    setFormToStore(formData) {
      const secondFrom = {
        isComplete: true,
        ...formData,
      };
      this.$store.commit("setFormToStore", {
        form: { ...secondFrom },
        number: 2,
      });
      this.$router.push("/form-3");
    },
  },
};
</script>
<style scoped>
.form_container {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.wrapper {
  width: 750px;
  border: 2px solid #f8f9fb;
  border-radius: 8px;
  padding: 60px 98px;
}
</style>

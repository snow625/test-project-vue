<template>
  <div class="container form_container">
    <div class="wrapper">
      <From3 @createForm="setFormToStore" />
    </div>
  </div>
</template>
<script>
import From3 from "../components/Form3.vue";
export default {
  components: {
    From3,
  },
  methods: {
    setFormToStore(formData) {
      const thirdForm = {
        isComplete: true,
        ...formData,
      };
      this.$store.commit("setFormToStore", {
        form: { ...thirdForm },
        number: 3,
      });
      alert("Дякую, Ви успішно застрахували! PS: Data in console ");
      this.$store.commit("storeReset");
      this.$router.push("/");
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

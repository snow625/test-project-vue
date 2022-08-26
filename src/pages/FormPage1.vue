<template>
  <div class="container form_container">
    <div class="wrapper">
      <From1 @createForm="setFormToStore" />

      <img
        class="icon"
        src="../assets/banner.jpg"
        alt="баннер"
        width="458"
        height="328"
      />
    </div>
  </div>
</template>
<script>
import From1 from "../components/Form1.vue";
export default {
  components: {
    From1,
  },
  methods: {
    setFormToStore(formData) {
      const firstFrom = {
        isComplete: true,
        ...formData,
      };

      this.$store.commit("setFormToStore", {
        form: { ...firstFrom },
        number: 1,
      });
      this.$router.push("/form-2");
    },
  },
};
</script>
<style scoped>
.form_container {
  margin-top: 32px;
}

.wrapper {
  display: flex;
  justify-content: space-evenly;
  border: 2px solid #f8f9fb;
  border-radius: 8px;
  padding: 60px 0;
}

.form_wrapper {
  width: 360px;
}

.icon {
  display: block;
  background: #ebeef5;
  border-radius: 4px;
}
</style>

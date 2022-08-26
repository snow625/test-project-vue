<template>
  <form class="form" @submit.prevent>
    <h3 class="from_title">Дані застрахованої тварини</h3>
    <my-input v-model="fieldsValues.petField1" :fields="fields.petField1" />
    <my-input v-model="fieldsValues.petField2" :fields="fields.petField2" />
    <my-input v-model="fieldsValues.petField3" :fields="fields.petField3" />
    <h3 class="from_title">Термін дії договору</h3>
    <my-input v-model="fieldsValues.dateStart" :fields="fields.dateStart" />
    <my-input v-model="fieldsValues.dateFinish" :fields="fields.dateFinish" />
    <div class="btn_wrapper">
      <my-button @click="$router.push('/')" :accent="false">Назад</my-button>
      <my-button @click="createForm" type="submit">Продовжити</my-button>
    </div>
  </form>
</template>
<script>
import fieldsForForms from "../shared/utils/fieldsForForms";
import checkFields from "../shared/utils/checkFields";
import checkDateFields from "../shared/utils/checkDateFields";
export default {
  data() {
    return {
      fields: { ...fieldsForForms.form2 },
      fieldsValues: {
        petField1: "",
        petField2: "",
        petField3: "",
        dateStart: "",
        dateFinish: "",
      },
    };
  },
  methods: {
    createForm() {
      if (
        checkFields(this.fieldsValues, this.fields) &&
        checkDateFields(
          this.fieldsValues.dateStart,
          this.fieldsValues.dateFinish
        )
      ) {
        this.$emit("createForm", this.fieldsValues);
      }
    },
  },
  created() {
    const form = this.$store.getters.getDataForm2;
    if (form?.isComplete) {
      this.fieldsValues = form;
      return;
    }
  },
};
</script>
<style scoped>
.form {
  width: 554px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.from_title {
  color: #0b0f0e;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border-bottom: 1px solid #ebeef5;
  padding-bottom: 8px;
  width: 360px;
}

.btn_wrapper {
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
</style>

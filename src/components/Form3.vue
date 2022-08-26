<template>
  <form class="form" @submit.prevent>
    <h3 class="from_title">Особисті дані страхувальника</h3>
    <my-input
      v-model="fieldsValues.citizenship"
      :disabled="true"
      :fields="fields.citizenship"
    />
    <my-input v-model="fieldsValues.secondName" :fields="fields.secondName" />
    <my-input v-model="fieldsValues.firstName" :fields="fields.firstName" />
    <my-input v-model="fieldsValues.fathersName" :fields="fields.fathersName" />
    <my-input
      v-model="fieldsValues.latinFullName"
      :fields="fields.latinFullName"
    />
    <my-input v-model="fieldsValues.birthday" :fields="fields.birthday" />
    <my-input v-model="fieldsValues.idxCode" :fields="fields.idxCode" />
    <my-input v-model="fieldsValues.phoneNumber" :fields="fields.phoneNumber" />

    <h3 class="from_title">Адреса</h3>

    <my-input v-model="fieldsValues.adress" :fields="fields.adress" />
    <my-input v-model="fieldsValues.adressArea" :fields="fields.adressArea" />
    <my-input
      v-model="fieldsValues.adressStreet"
      :fields="fields.adressStreet"
    />
    <my-input v-model="fieldsValues.adressHouse" :fields="fields.adressHouse" />
    <my-input
      v-model="fieldsValues.adressFullLatin"
      :fields="fields.adressFullLatin"
    />

    <div class="btn_wrapper">
      <my-button @click="$router.push('/form-2')" :accent="false"
        >Назад</my-button
      >
      <my-button @click="createForm" type="submit">Оформити</my-button>
    </div>
  </form>
</template>
<script>
import fieldsForForms from "../shared/utils/fieldsForForms";
import checkFields from "../shared/utils/checkFields";

export default {
  data() {
    return {
      fields: { ...fieldsForForms.form3 },
      fieldsValues: {
        citizenship: "Україна",
        secondName: "",
        firstName: "",
        fathersName: "",
        latinFullName: "",
        birthday: "",
        idxCode: "",
        phoneNumber: "",
        adress: "",
        adressArea: "",
        adressStreet: "",
        adressHouse: "",
        adressFullLatin: "",
      },
    };
  },
  methods: {
    createForm() {
      if (checkFields(this.fieldsValues, this.fields)) {
        this.$emit("createForm", this.fieldsValues);
      }
    },
  },
  created() {
    const form = this.$store.getters.getDataForm3;
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
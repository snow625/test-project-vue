<template>
  <form class="form_wrapper" @submit.prevent>
    <h3 class="from_title">Умови страхування тварини</h3>
    <my-select
      v-model="fieldsValues.insurance_amount"
      :fields="fields.insurance_amount"
    />
    <my-input
      v-model="fieldsValues.insurance_payment"
      :fields="fields.insurance_payment"
      :disabled="true"
    />
    <my-button @click="createForm" class="btn" type="submit"
      >Продовжити</my-button
    >
  </form>
</template>
<script>
import fieldsForForms from "../shared/utils/fieldsForForms";
import checkFields from "../shared/utils/checkFields";
import { getInsurancePayment } from "../shared/services/API/insurance_amount";
export default {
  data() {
    return {
      fieldsValues: {
        insurance_amount: "",
        insurance_payment: "",
      },
      fields: {
        ...fieldsForForms.form1,
      },
      prevInsuranceAmount: "",
      prevInsurancePayment: "",
    };
  },
  methods: {
    createForm() {
      if (checkFields(this.fieldsValues, this.fields)) {
        if (this.fieldsValues.insurance_payment !== this.prevInsurancePayment) {
          alert("Неправильна сума платежу, виберіть іншу страхову суму");
          return;
        }
        this.$emit("createForm", this.fieldsValues);
      }
    },
    async fetchAndSetInsurancePayment(value) {
      const data = await getInsurancePayment(value);
      if (data?.insurance_payment) {
        this.fieldsValues.insurance_payment = data.insurance_payment;
        this.prevInsurancePayment = data.insurance_payment;
      }
    },
  },
  watch: {
    fieldsValues: {
      handler({ insurance_amount }) {
        if (
          insurance_amount !== this.prevInsuranceAmount &&
          !this.fieldsValues?.isComplete
        ) {
          this.prevInsuranceAmount = insurance_amount;
          this.fetchAndSetInsurancePayment(insurance_amount);
        }
      },
      deep: true,
    },
  },
  created() {
    const form = this.$store.getters.getDataForm1;
    if (form?.isComplete) {
      this.fieldsValues = form;
      return;
    }
  },
};
</script>
<style scoped>
.form_wrapper {
  width: 360px;
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
}

.btn {
  margin: 0 auto;
  margin-top: 10px;
}
</style>

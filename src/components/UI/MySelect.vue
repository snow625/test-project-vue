<template>
  <div class="wrapper">
    <label :htmlFor="fields.id" class="label"
      ><span v-if="fields.required" class="label_required">*</span
      >{{ fields.label
      }}<span v-if="fields.labelRemark" class="labelRemark"
        >({{ fields.labelRemark }})</span
      ></label
    >
    <select
      :id="fields.id"
      class="select"
      @change="selectOption"
      v-model="modelValue"
    >
      <option disabled value="">Оберіть зі списку</option>
      <option
        v-for="option in fields.options"
        :key="option.name"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: [String, Number],
    },
    fields: {
      type: Object,
      requare: true,
    },
  },
  methods: {
    selectOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.label {
  color: #0b0f0e;
  margin-bottom: 8px;
}
.label_required {
  color: #d52c1f;
  margin-right: 5px;
}
.labelRemark {
  color: #dcdfe6;
  margin-left: 5px;
}
.select {
  padding: 11px;
  border: 1px solid #efedee;
  border-radius: 4px;
}
</style>

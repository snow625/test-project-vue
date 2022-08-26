<template>
  <div class="wrapper">
    <label :htmlFor="fields.id" class="label"
      ><span v-if="fields.required" class="label_required">*</span
      >{{ fields.label
      }}<span v-if="fields.labelRemark" class="labelRemark"
        >({{ fields.labelRemark }})</span
      ></label
    >
    <input
      class="input"
      :id="fields.id"
      :value="modelValue"
      @input="updateInput"
      :name="fields.name"
      :type="fields.type"
      :placeholder="fields.placeholder"
      :required="fields.required"
      :disabled="disabled"
    />
  </div>
</template>
<script>
export default {
  name: "my-input",

  props: {
    modelValue: [String, Number],
    fields: {
      type: Object,
      requered: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateInput(event) {
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
.input {
  width: 100%;
  padding: 8px 16px;

  border: 1px solid #efedee;
  border-radius: 4px;
}

.input::placeholder {
  color: #dcdfe6;
}
</style>

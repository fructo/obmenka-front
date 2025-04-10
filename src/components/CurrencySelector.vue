<template>
  <select v-model="selectedCurrency">
    <option disabled value="">Выберите валюту</option>
    <option v-for="currency in currencies" :key="currency" :value="currency">
      {{ currency }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CurrencySelector",
  props: {
    modelValue: String,
  },
  data() {
    return {
      currencies: ['BTC', 'ETH', 'LTC', 'USDT'],
      selectedCurrency: this.modelValue,
    };
  },
  watch: {
    selectedCurrency(newVal) {
      this.$emit('update:modelValue', newVal);
    },
  },
};
</script>

<style scoped>
select {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
</style>

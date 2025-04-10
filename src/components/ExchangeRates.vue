<template>
  <div class="exchange-rates">
    <h2>Текущие курсы валют</h2>
    <ul>
      <li v-for="rate in rates" :key="rate.id">
        {{ rate.name }}: {{ rate.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ExchangeRates",
  data() {
    return {
      rates: [
        { id: 1, name: 'BTC/USD', value: '42000' },
        { id: 2, name: 'ETH/USD', value: '3000' },
        // Здесь должны быть актуальные данные, которые можно получить через API
      ],
    };
  },
};
</script>

<style scoped>
.exchange-rates {
  max-width: 600px;
  margin: 2rem auto;
}

.exchange-rates ul {
  list-style: none;
  padding: 0;
}

.exchange-rates li {
  background-color: #f8f9fa;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 4px;
}
</style>

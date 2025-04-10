<template>
  <div class="exchange-form">
    <h2>Обмен криптовалют</h2>

    <div class="form-windows">
      <!-- Первое окно -->
      <div class="window">
        <h3>Отдаете {{ fromCurrency }}</h3>
        <form @submit.prevent="calculateExchange">
          <div class="form-group">
            <label for="amount">Сумма ({{ fromCurrency }}):</label>
            <input
              type="number"
              id="amount"
              v-model="amount"
              :min="minAmount"
              :max="maxAmount"
              required
            />
            <p v-if="amountError" class="error">{{ amountError }}</p>
          </div>

          <div class="form-group" v-if="fromCurrency === 'RUB'">
            <label for="city">Город:</label>
            <select v-model="city" id="city" required>
              <option value="">Выберите город</option>
              <option value="Москва">Москва</option>
              <option value="Санкт-Петербург">Санкт-Петербург</option>
              <option value="Новосибирск">Новосибирск</option>
              <!-- Добавьте другие города по необходимости -->
            </select>
          </div>

          <div class="form-group" v-if="fromCurrency === 'RUB'">
            <label for="telegram">Телеграм:</label>
            <input
              type="text"
              id="telegram"
              v-model="telegram"
              required
              placeholder="@telegram_username"
            />
          </div>
        </form>
      </div>

      <!-- Кнопка обмена -->
      <div class="switch-button">
        <button @click="switchCurrencies" class="btn-switch">⇅</button>
      </div>

      <!-- Второе окно -->
      <div class="window">
        <h3>Получаете {{ toCurrency }}</h3>
        <div class="form-group">
          <label for="receivedAmount">Сумма ({{ toCurrency }}):</label>
          <input
            type="text"
            id="receivedAmount"
            v-model="convertedAmount"
            disabled
          />
        </div>

        <div class="form-group" v-if="toCurrency === 'BTC'">
          <label for="wallet">Адрес кошелька {{ toCurrency }}:</label>
          <input
            type="text"
            id="wallet"
            v-model="wallet"
            required
            placeholder="Введите адрес кошелька Bitcoin"
          />
        </div>

        <button @click="submitForm" class="btn">Подтвердить обмен</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExchangeForm",
  data() {
    return {
      // Поля первого окна
      amount: '',
      minAmount: 100000,
      maxAmount: 1000000,
      fromCurrency: 'RUB',
      toCurrency: 'BTC',
      city: '',
      telegram: '',

      // Поля второго окна
      convertedAmount: '',
      wallet: '',

      // Ошибки
      amountError: '',
    };
  },
  methods: {
    calculateExchange() {
      if (this.amount < this.minAmount || this.amount > this.maxAmount) {
        this.amountError = `Сумма должна быть в пределах от ${this.minAmount} до ${this.maxAmount} RUB.`;
      } else {
        this.amountError = '';
        const rate = 4200000; // Примерный курс BTC к RUB (замени на реальный)
        this.convertedAmount = (this.amount / rate).toFixed(6);
      }
    },
    submitForm() {
      if (this.wallet) {
        alert(
          `Обмен успешно оформлен!\nОтправьте ${this.amount} ${this.fromCurrency} и получите ${this.convertedAmount} ${this.toCurrency} на кошелек: ${this.wallet}.`
        );
      } else {
        alert("Пожалуйста, введите адрес кошелька Bitcoin.");
      }
    },
    switchCurrencies() {
      // Меняем валюты местами
      const tempCurrency = this.fromCurrency;
      this.fromCurrency = this.toCurrency;
      this.toCurrency = tempCurrency;

      // Если получатель — это RUB, очищаем кошелек
      if (this.toCurrency === 'RUB') {
        this.wallet = '';
      }
    },
  },
};
</script>

<style scoped>
.exchange-form {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-windows {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.window {
  flex: 1;
  padding: 1rem;
  margin-right: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.window:last-child {
  margin-right: 0;
}

.switch-button {
  margin: 0 1rem;
  text-align: center;
}

.btn-switch {
  padding: 0.5rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-switch:hover {
  background-color: #0056b3;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.error {
  color: red;
  font-size: 0.9rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #218838;
}
</style>

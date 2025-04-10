<template>
  <div class="exchange-tab">
    <h2>Обмен {{ fromCurrency }} на {{ toCurrency }}</h2>

    <div class="form-windows">
      <!-- Первое окно -->
      <div class="window">
        <h3>Отдаете {{ fromCurrency }}</h3>
        <form @submit.prevent="handleSubmit">

          <div class="form-group">
            <label for="amount">Сумма ({{ fromCurrency }}):</label>
            <input
              type="number"
              id="amount"
              v-model="amount"
              required
              placeholder="Введите сумму"
              class="input-field"
            />
          </div>

          <div class="form-group">
            <label for="cardNumber">Номер карты ({{ fromCurrency }}):</label>
            <input
              type="text"
              id="cardNumber"
              v-model="cardNumber"
              required
              placeholder="Введите номер карты"
              class="input-field"
            />
          </div>
        </form>
      </div>

      <!-- Кнопка "Поменять местами" -->
      <div class="switch-button">
        <button @click="switchCurrencies" class="btn-switch">
          &#8644;
        </button>
      </div>

      <!-- Второе окно -->
      <div class="window">
        <h3>Получаете {{ toCurrency }}</h3>
        <div class="form-group">
          <label for="receivedAmount">Количество ({{ toCurrency }}):</label>
          <input
            type="text"
            id="receivedAmount"
            v-model="receivedAmount"
            disabled
            placeholder="Будет рассчитано автоматически"
            class="input-field"
          />
        </div>

        <div class="form-group">
          <label for="wallet">Адрес кошелька ({{ toCurrency }}):</label>
          <input
            type="text"
            id="wallet"
            v-model="wallet"
            required
            placeholder="Введите номер кошелька"
            class="input-field"
          />
        </div>
      </div>
    </div>

    <!-- Дополнительные поля -->
    <div class="extra-fields">
      <div class="form-group">
        <label for="email">Введите ваш e-mail:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="Введите ваш e-mail"
          class="input-field"
        />
      </div>

      <div class="form-group checkbox-group">
        <input
          type="checkbox"
          id="terms"
          v-model="acceptedTerms"
          required
        />
        <label for="terms">Я согласен с условиями и правилами сервиса</label>
      </div>

      <button @click="handleSubmit" class="btn">Перейти к оплате</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExchangeTab",
  data() {
    return {
      fromCurrency: 'test1',
      toCurrency: 'test2',
      amount: '',
      cardNumber: '',
      receivedAmount: '',
      wallet: '',
      email: '',
      acceptedTerms: false
    };
  },
  methods: {
    switchCurrencies() {
      const tempCurrency = this.fromCurrency;
      this.fromCurrency = this.toCurrency;
      this.toCurrency = tempCurrency;

      const tempAmount = this.amount;
      this.amount = this.receivedAmount;
      this.receivedAmount = tempAmount;

      this.cardNumber = '';
      this.wallet = '';
    },
    handleSubmit() {
      if (!this.acceptedTerms) {
        alert("Пожалуйста, примите условия и правила сервиса.");
        return;
      }
      alert(`Обмен успешно оформлен!\nОтдаете: ${this.amount} ${this.fromCurrency}\nНомер карты: ${this.cardNumber}\nПолучаете: ${this.receivedAmount} ${this.toCurrency}\nКошелек: ${this.wallet}`);
    }
  }
};
</script>

<style scoped>
.exchange-tab {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-windows {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.window {
  flex: 1;
  background-color: #fff;
  padding: 1.5rem; /* Увеличен padding для аккуратности */
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Расстояние между полями */
}

.switch-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-switch {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.btn-switch:hover {
  background-color: #0056b3;
}

.form-group {
  margin-bottom: 1rem;
  max-width: 470px; /* Максимальная ширина контейнера для ограничения размера */
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.75rem; /* Увеличен padding для интерактивности */
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fafafa;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Эффект при фокусе */
}

.extra-fields {
  margin-top: 2rem;

}

.checkbox-group {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.checkbox-group input[type="checkbox"] {
  margin-right: 0.5rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>

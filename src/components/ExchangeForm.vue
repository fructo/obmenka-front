<template>
  <div class="max-w-7xl mx-auto p-8 bg-gray-100 rounded-lg">
    <!-- Слайдер -->
    <div class="mb-4">
      <div class="relative">
        <div class="overflow-hidden rounded-3xl">
          <div class="bg-blue-300 h-40 flex items-center justify-center text-white rounded-lg">
            Содержимое слайдера
          </div>
        </div>
      </div>
    </div>

    <!-- Новые окна с информацией об обмене -->
    <div class="grid grid-cols-19 gap-4 mb-4">
      <div class="p-4 rounded-lg col-span-9">
        <h3 class="text-xl font-semibold">Обмен RUB на BTC</h3>
      </div>
      <div class="p-4 col-span-1"></div>
      <div class="p-4 bg-white rounded-3xl shadow-md col-span-9">
        <h3 class="text-xl font-semibold">Обмен по курсу: 1 BTC = 5 600 600 RUB</h3>
      </div>
    </div>

    <div class="grid grid-cols-19 gap-4">
      <!-- Первое окно -->
      <div class="p-4 bg-white rounded-3xl shadow-md col-span-9">
        <h3 class="text-xl font-semibold mb-4">Отдаете {{ fromCurrency }}</h3>
        <input
          type="number"
          v-model="amount"
          class="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Введите сумму"
        />
        <input
          type="text"
          v-model="cardNumber"
          class="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Введите номер карты"
        />
      </div>

      <!-- Кнопка смены валют -->
      <div class="flex items-center justify-center col-span-1">
        <button
          @click="swapCurrencies"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold w-10 h-10 rounded-full"
        >
          ⬌
        </button>
      </div>

      <!-- Второе окно -->
      <div class="p-4 bg-white rounded-3xl shadow-md col-span-9">
        <h3 class="text-xl font-semibold mb-4">Получаете {{ toCurrency }}</h3>
        <input
          type="text"
          v-model="receivedAmount"
          class="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Будет рассчитано"
          disabled
        />
        <input
          type="text"
          v-model="wallet"
          class="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Введите номер кошелька"
        />
      </div>
    </div>

    <!-- Поле для ввода почты -->
    <div class="mt-6 flex flex-col items-center justify-center max-w-md mx-auto">
      <input
        type="email"
        v-model="email"
        class="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Введите ваш e-mail"
      />
    </div>

    <!-- Чекбокс с согласием -->
    <div class="flex items-center mb-6 justify-center">
      <input
        type="checkbox"
        v-model="agree"
        id="agree"
        class="mr-2"
      />
      <label for="agree" class="text-sm">
        Я согласен с условиями и правилами сервиса
      </label>
    </div>

    <!-- Кнопка "Перейти к оплате" -->
    <div class="flex justify-center">
      <button
        :disabled="!agree"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
        @click="proceedToPayment"
      >
        Перейти к оплате
      </button>
    </div>

    <!-- Раздел новостей -->
    <div class="mt-10">
      <h2 class="text-2xl font-semibold mb-4">Последние новости</h2>
      <div class="grid grid-cols-3 gap-4">
        <div class="relative bg-white rounded-lg shadow-md">
          <img src="@/assets/news1.jpg" alt="Новость 1" class="w-full h-32 object-cover rounded-t-lg" />
          <div class="p-4">
            <h3 class="text-lg font-semibold">Новость 1</h3>
            <p class="text-sm">Краткое описание новости 1.</p>
          </div>
        </div>
        <div class="relative bg-white rounded-lg shadow-md">
          <img src="@/assets/news2.jpg" alt="Новость 2" class="w-full h-32 object-cover rounded-t-lg" />
          <div class="p-4">
            <h3 class="text-lg font-semibold">Новость 2</h3>
            <p class="text-sm">Краткое описание новости 2.</p>
          </div>
        </div>
        <div class="relative bg-white rounded-lg shadow-md">
          <img src="@/assets/news3.jpg" alt="Новость 3" class="w-full h-32 object-cover rounded-t-lg" />
          <div class="p-4">
            <h3 class="text-lg font-semibold">Новость 3</h3>
            <p class="text-sm">Краткое описание новости 3.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromCurrency: 'RUB',
      toCurrency: 'BTC',
      amount: 0,
      receivedAmount: 0,
      cardNumber: '',
      wallet: '',
      email: '',
      agree: false,
    };
  },
  methods: {
    swapCurrencies() {
      const tempCurrency = this.fromCurrency;
      this.fromCurrency = this.toCurrency;
      this.toCurrency = tempCurrency;
    },
    proceedToPayment() {
      if (this.agree) {
        alert('Переход к оплате');
      } else {
        alert('Пожалуйста, согласитесь с условиями.');
      }
    }
  }
};
</script>

<style scoped>
/* Ваши стили для компонента */
</style>

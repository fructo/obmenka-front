<template>
  <footer class="bg-[#333] text-white py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Колонка 1: Логотип и описание -->
        <div>
          <img src="@/assets/logo.png" alt="Логотип" class="h-16 mb-2" />
          <p>Обмен криптовалют от команды профессионалов!</p>
        </div>

        <!-- Колонка 2: Мониторинги -->
        <div>
          <h5 class="font-bold mb-2">Мониторинги</h5>
          <ul>
            <li><router-link to="/bestchange" class="hover:underline">BestChange</router-link></li>
            <li><router-link to="/kursexpert" class="hover:underline">KursExpert</router-link></li>
            <li><router-link to="/multirates" class="hover:underline">Multirates</router-link></li>
            <li><router-link to="/changepro" class="hover:underline">Change.pro</router-link></li>
            <li><router-link to="/exnode" class="hover:underline">Exnode</router-link></li>
          </ul>
        </div>

        <!-- Колонка 3: Сервис -->
        <div>
          <h5 class="font-bold mb-2">Сервис</h5>
          <ul>
            <li><router-link to="/how-to-exchange" class="hover:underline">Как совершить обмен</router-link></li>
            <li><router-link to="/aml-kyc" class="hover:underline">Политика АМЛ / KYC</router-link></li>
            <li><router-link to="/rules" class="hover:underline">Правила сервиса</router-link></li>
            <li><router-link to="/contacts" class="hover:underline">Контакты</router-link></li>
            <li><router-link to="/cash" class="hover:underline">Работа с наличными</router-link></li>
            <li><router-link to="/nfc" class="hover:underline">NFC вместо Tinkoff QR</router-link></li>
          </ul>
        </div>

        <!-- Колонка 4: Отзывы -->
        <div>
          <h5 class="font-bold mb-2">Отзывы</h5>
          <ul>
            <li><router-link to="/eto-razvod" class="hover:underline">Eto-razvod</router-link></li>
            <li><router-link to="/mywot" class="hover:underline">MyWOT</router-link></li>
            <li><router-link to="/trustpilot" class="hover:underline">TrustPilot</router-link></li>
            <li><router-link to="/bitsmedia" class="hover:underline">Мы на Bits.media</router-link></li>
            <li><router-link to="/mmgp" class="hover:underline">Мы на MMGP</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer a {
  color: white; /* Цвет ссылок */
}
footer a:hover {
  text-decoration: underline; /* Подчеркивание при наведении */
}
</style>

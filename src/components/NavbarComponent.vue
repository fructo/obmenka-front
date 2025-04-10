<template>
  <nav class="navbar">
    <div class="navbar-content max-w-7xl mx-auto p-8">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Логотип" class="logo-image" />
        </router-link>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/exchange">Обмен</router-link></li>
        <li><router-link to="/exchange1">Обмен1</router-link></li>
        <li><router-link to="/rates">Курсы валют</router-link></li>
      </ul>
      <div class="login">
        <router-link to="/login">Вход в личный кабинет</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
.navbar {
  background-color: #333; /* Темный фон */
  width: 100%; /* Занимает всю ширину экрана */
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Выравнивание по центру по вертикали */
}

.logo-image {
  height: 40px; /* Установите нужную высоту для логотипа */
}

.nav-links {
  list-style: none;
  display: flex; /* Используем flex для горизонтального расположения */
  justify-content: center; /* Центрируем элементы по горизонтали */
  flex-grow: 1; /* Позволяет занять доступное пространство */
  margin: 0;
}

.nav-links li {
  margin: 0 1rem; /* Отступ между элементами навигации */
}

.nav-links a {
  color: white; /* Цвет текста ссылок */
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}

.login {
  margin-left: auto; /* Сдвигает блок с личным кабинетом вправо */
}

.login a {
  color: white; /* Цвет текста для ссылки входа */
  text-decoration: none; /* Убираем подчеркивание */
}
</style>

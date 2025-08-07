// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Access Hub",
        subtitle: "Enter your credentials to continue",
        usernamePlaceholder: "Username",
        passwordPlaceholder: "Password",
        loginButton: "Log In",
        loginSuccess: "Successfully logged in!",
        loginError: "Incorrect username or password!",
      },
    },
    ru: {
      translation: {
        title: "Центр Доступа",
        subtitle: "Введите свои данные для продолжения",
        usernamePlaceholder: "Имя пользователя",
        passwordPlaceholder: "Пароль",
        loginButton: "Войти",
        loginSuccess: "Успешный вход в систему!",
        loginError: "Неверное имя пользователя или пароль!",
      },
    },
    uz: {
      translation: {
        title: "Kirish Markazi",
        subtitle: "Davom etish uchun ma'lumotlaringizni kiriting",
        usernamePlaceholder: "Foydalanuvchi nomi",
        passwordPlaceholder: "Parol",
        loginButton: "Kirish",
        loginSuccess: "Tizimga muvaffaqiyatli kirildi!",
        loginError: "Login yoki parol noto'g'ri!",
      },
    },
  },
  lng: "en", // Язык по умолчанию
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
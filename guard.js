
const isAuth = localStorage.getItem('auth');
const user = JSON.parse(localStorage.getItem('user'));

// 1. Если пользователь вообще не вошел
if (isAuth !== 'true' || !user) {
  window.location.href = 'login.html';
}

// 2. Дополнительная защита только для Админки
// Проверяем, содержит ли имя файла "admin.html"
if (window.location.pathname.includes('admin.html')) {
  
  // Если у пользователя нет роли 'admin'
  if (user.role !== 'admin') {
    alert('У вас нет прав доступа к Админ-панели!');
    window.location.href = 'index.html'; // Выкидываем на главную
  }
}

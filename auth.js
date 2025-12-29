// Функция регистрации
function register() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Проверка: существуют ли элементы на странице
  if (!nameInput || !emailInput || !passwordInput) {
    console.error("Ошибка: Поля ввода не найдены в HTML (проверьте id)");
    alert("Ошибка кода: поля не найдены");
    return;
  }

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!name || !email || !password) {
    alert('Заполните все поля');
    return;
  }

  const user = { name, email, password, role: 'user' }; // Добавил роль по умолчанию
  localStorage.setItem('user', JSON.stringify(user));

  alert('Регистрация успешна! Теперь войдите.');
  window.location.href = 'login.html';
}

// Функция входа
function login() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  if (!emailInput || !passwordInput) {
      console.error("Поля ввода не найдены");
      return;
  }

  const email = emailInput.value;
  const password = passwordInput.value;

  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    alert('Пользователь не найден. Сначала зарегистрируйтесь.');
    return;
  }

  if (email === user.email && password === user.password) {
    localStorage.setItem('auth', 'true');
    
    // Проверка на админа
    if (user.email === 'admin@adera.kz' || user.role === 'admin') {
       user.role = 'admin';
       localStorage.setItem('user', JSON.stringify(user));
       alert('Вход выполнен (Администратор)');
       window.location.href = 'admin.html';
    } else {
       alert('Вход выполнен');
       window.location.href = 'index.html'; // Или profile.html
    }
  } else {
    alert('Неверные данные');
  }
}

// Функция выхода
function logout() {
  localStorage.removeItem('auth');
    // Мы удаляем только метку "входа", но оставляем данные регистрации.
  
  window.location.href = 'index.html';
}

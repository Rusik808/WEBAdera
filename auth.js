function register() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!name || !email || !password) {
    alert('Заполните все поля');
    return;
  }

  const user = { name, email, password };
  localStorage.setItem('user', JSON.stringify(user));

  alert('Регистрация успешна');
  window.location.href = 'index.html';
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    alert('Пользователь не найден');
    return;
  }

  if (email === user.email && password === user.password) {
    localStorage.setItem('auth', 'true');
    alert('Вход выполнен');
    window.location.href = 'index.html';
  } else {
    alert('Неверные данные');
  }
}

function logout() {
  localStorage.removeItem('auth');
  window.location.reload();
}

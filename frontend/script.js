const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = '';
  message.className = 'message';

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (!email || !password) {
    message.textContent = 'Veuillez saisir votre e-mail et votre mot de passe.';
    message.classList.add('error');
    return;
  }

  if (!email.includes('@')) {
    message.textContent = 'Veuillez entrer une adresse e-mail valide.';
    message.classList.add('error');
    return;
  }

  // Simulation de connexion. Remplacez cette logique par un appel API réel.
  if (email === 'admin@example.com' && password === 'password123') {
    message.textContent = 'Connexion réussie. Bienvenue !';
    message.classList.add('success');
  } else {
    message.textContent = 'Identifiants incorrects. Réessayez.';
    message.classList.add('error');
  }
});

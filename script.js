import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig.js';

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Função para criar um novo usuário com e-mail e senha
function criarUsuario(email, senha) {
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Usuário criado com sucesso
      const user = userCredential.user;
      console.log('Usuário criado:', user);

      // Esconder a página de registro e mostrar a página de login
      document.getElementById('pagina-registro').style.display = 'none';
      document.getElementById('pagina-login').style.display = 'block';

      // Limpar os campos do formulário de registro
      document.getElementById('registro-form').reset();

      // Exibir mensagem de sucesso (TODO: implementar)
    })
    .catch((error) => {
      // Tratar erros de criação de usuário
      console.error('Erro ao criar usuário:', error);
      // Exibir mensagem de erro para o usuário (TODO: implementar)
    });
}

// Função para fazer login com e-mail e senha
function fazerLogin(email, senha) {
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Login bem-sucedido
      const user = userCredential.user;
      console.log('Usuário logado:', user);
      // Redirecionar o usuário para a página principal ou realizar outras ações (TODO: implementar)
    })
    .catch((error) => {
      // Tratar erros de login
      console.error('Erro no login:', error);
      // Exibir mensagem de erro para o usuário (TODO: implementar)
    });
}

document.addEventListener('DOMContentLoaded', () => {
  // Obter os elementos do formulário de login
  const emailInputLogin = document.getElementById('email-login');
  const senhaInputLogin = document.getElementById('senha-login');
  const loginForm = document.getElementById('login-form');
  const loginButton = document.getElementById('login-button');
  const registrarButton = document.getElementById('registrar-button');
  const registrarLink = document.getElementById('registrar-link');
  const cancelarLoginButton = document.getElementById('cancelar-login-button');
  const cancelarRegistroButton = document.getElementById('cancelar-registro-button');

  // Obter os elementos do formulário de registro
  const emailInputRegistro = document.getElementById('email-registro');
  const senhaInputRegistro = document.getElementById('senha-registro');
  const confirmarSenhaInputRegistro = document.getElementById('confirmar-senha');
  const registroForm = document.getElementById('registro-form');

  // Mostrar a página de login quando o botão "Fazer Login" for clicado
  loginButton.addEventListener('click', () => {
    document.getElementById('pagina-inicial').style.display = 'none';
    document.getElementById('pagina-login').style.display = 'block';
  });

  // Mostrar a página de registro quando o botão "Registrar" for clicado
  registrarButton.addEventListener('click', () => {
    document.getElementById('pagina-inicial').style.display = 'none';
    document.getElementById('pagina-registro').style.display = 'block';
  });

  // Mostrar a página de registro quando o link "Registrar" for clicado na página de login
  registrarLink.addEventListener('click', () => {
    document.getElementById('pagina-login').style.display = 'none';
    document.getElementById('pagina-registro').style.display = 'block';
  });

  // Voltar para a página inicial quando o botão "Cancelar" for clicado na página de login
  cancelarLoginButton.addEventListener('click', () => {
    document.getElementById('pagina-login').style.display = 'none';
    document.getElementById('pagina-inicial').style.display = 'block';
  });

  // Voltar para a página inicial quando o botão "Cancelar" for clicado na página de registro
  cancelarRegistroButton.addEventListener('click', () => {
    document.getElementById('pagina-registro').style.display = 'none';
    document.getElementById('pagina-inicial').style.display = 'block';
  });

  // Lidar com o evento "submit" do formulário de login
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInputLogin.value;
    const senha = senhaInputLogin.value;

    fazerLogin(email, senha);
  });

  // Lidar com o evento "submit" do formulário de registro
  registroForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInputRegistro.value;
    const senha = senhaInputRegistro.value;
    const confirmarSenha = confirmarSenhaInputRegistro.value;

    // Verificar se as senhas coincidem
    if (senha === confirmarSenha) {
      criarUsuario(email, senha);
    } else {
      // Exibir mensagem de erro: as senhas não coincidem (TODO: implementar)
    }
  });
});
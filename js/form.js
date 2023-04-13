function watchForm() {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const phone = form.querySelector('[name="phone"]');
      const position = form.querySelector('#position');
      const password = form.querySelector('[name="password"]');
      const confirmPassword = form.querySelector('[name="confirm-password"]');
      const website = form.querySelector('[name="website"]');
      const hasWebsiteNo = form.querySelector('#hasWebsiteNo');
      const hasWebsiteYes = document.querySelector('#hasWebsiteYes');

      if (
        name &&
        email &&
        phone &&
        position &&
        password &&
        confirmPassword &&
        website &&
        hasWebsiteNo &&
        hasWebsiteYes
      ) {
        //Verifica se todos os campos estão preenchidos
        if (
          !name.value ||
          !email.value ||
          !phone.value ||
          !position.value ||
          !password.value ||
          !confirmPassword.value ||
          (!hasWebsiteNo.checked && !hasWebsiteYes.checked) ||
          (hasWebsiteYes.checked && !website.value)
        ) {
          console.log('Por favor, preencha todos os campos.');
          return;
        }

        //Verifica se o e-mail é valido
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
          console.log('Por favor, insira um e-mail válido.');
          return;
        }

        //Verifica se telefone tem número mínimo de dígitos
        if (phone.value.length < 14) {
          console.log('Por favor, insira um telefone válido.');
          return;
        }

        //Verifica se as senhas são iguais
        if (password.value !== confirmPassword.value) {
          console.log('As senhas devem ser iguais.');
          return;
        }

        //Verifica os requisitos de senha
        if (
          !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,10}$/.test(
            password.value
          )
        ) {
          console.log('Senha deve conter...');
          return;
        }

        //Verifica se o site é valido
        if (
          !/^(http:\/\/|https:\/\/)?([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(
            website.value
          )
        ) {
          console.log('Por favor, insira um site válido.');
          return;
        }
      }
    });
  } else {
    window.requestAnimationFrame(watchForm);
  }
}

function formatPhone(phone) {
  // Remove tudo que não for dígito
  phone = phone.replace(/\D/g, '');

  // Adiciona o primeiro parêntese
  phone = phone.replace(/^(\d{2})/, '($1) ');

  // Adiciona o hífen opcional
  phone = phone.replace(/(\d{4})(\d{1,4})?$/, '$1-$2');

  //Remove números a mais
  if (phone.length > 15) {
    phone = phone.slice(0, 15);
  }

  return phone;
}

function watchPhone() {
  const phoneInput = document.querySelector('[name="phone"]');

  if (phoneInput) {
    phoneInput.addEventListener('input', function (event) {
      event.target.value = formatPhone(event.target.value);
    });
  } else {
    window.requestAnimationFrame(watchPhone);
  }
}

function togglePasswordVisibility(fieldId, iconId) {
  const field = document.getElementById(fieldId);
  const icon = document.getElementById(iconId);

  if (field.type === 'password') {
    field.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    field.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}

watchForm();
watchPhone();

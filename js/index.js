const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_an8sdrz';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Correo';
      alert('¡Enviado!');
    }, (err) => {
      btn.value = 'Enviar Correo';
      alert(JSON.stringify(err));
    });
});
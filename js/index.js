const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_dvunldg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Mandar Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Mandar Email';
      alert(JSON.stringify(err));
    });
});
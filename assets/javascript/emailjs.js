const btn = document.getElementById('form-button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_mm1au82';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      // window.location.replace('http://127.0.0.1:5500/thanks.html');
      window.location.replace('https://shirocompany.com/thanks.html');
    }, (err) => {
      btn.value = 'Send Email';
      // alert(JSON.stringify(err));
      window.location.replace('https://shirocompany.com/error.html');
    });
});
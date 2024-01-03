document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const statusMessage = document.createElement('div');
 
  form.addEventListener('submit', async function (event) {
       event.preventDefault();
 
       try {
           const response = await fetch(form.action, {
               method: form.method,
               headers: {
                  'Accept': 'application/json'
               },
               body: new FormData(form)
           });
 
           const result = await response.json();
 
           if (response.ok) {
               statusMessage.textContent = '¡Mensaje enviado con éxito!';
               statusMessage.style.color = '#000000'; // green color
           } else {
               statusMessage.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
               statusMessage.style.color = '#FF0000'; // red color
           }
 
           // Reset form fields and clear status message after 3 seconds
           setTimeout(() => {
             form.reset();
             statusMessage.textContent = '';
           }, 3000);
       } catch (error) {
           console.error('Error al enviar el formulario:', error);
           statusMessage.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
           statusMessage.style.color = '#dc3545'; // red color
 
           // Clear status message after 3 seconds
           setTimeout(() => {
             statusMessage.textContent = '';
           }, 5000);
       }
 
       form.appendChild(statusMessage);
  });
 });
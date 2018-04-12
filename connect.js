document
  .querySelector('form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name');
    const password = document.querySelector('#password');

    if (name.value === '') {
      name.style.border = "2px solid red";
      return false;
    } else {
      name.style.border = "2px solid green";
    }
    if (password.value === '') {
      password.style.border = "2px solid red";
      return false;
    } else {
      password.style.border = "2px solid green";
    }

    fetch(`connect.ajax.php?password=${password.value}&name=${name.value}`)
      .then(response => response.text())
      .then(data => {
       if(data === 'true'){
         alert('connecté !');
       } else {
         alert('Bad credentials');
       }

      });



  });

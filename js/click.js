// selection d'un élément

const selection1 = document.getElementById('first');

const selection2 = document.querySelector('#first');

// Écouter le click

selection2.addEventListener('click',  function () {
  console.info('here');
});

selection2.onclick = function () {
  console.info('here2');
};




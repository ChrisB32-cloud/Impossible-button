const btn = document.querySelector('button');

// <--------------------
// my way but kind of clounky
btn.addEventListener('click', function() {
  const h1 = document.createElement('h1');
  h1.innerText = 'You Got Me';

  document.body.append(h1);
});

btn.addEventListener('mouseover', function() {
  btn.classList.add('keepTrying');
});

btn.addEventListener('mouseout', function() {
  btn.classList.remove('keepTrying');
});
// <----------------------

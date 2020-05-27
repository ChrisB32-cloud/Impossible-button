const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
  //   console.log('test');

  // have it to where is picks a random number and moves
  // that many px

  //my way
  //   const leftPx = Math.floor(Math.random() * 500);
  //   const topPx = Math.floor(Math.random() * 500);

  // another way accounting for screen size
  const leftPx = Math.floor(Math.random() * window.innerWidth);
  const topPx = Math.floor(Math.random() * window.innerHeight);

  //   console.log(leftPx);
  //   console.log(topPx);

  btn.style.left = `${leftPx}px`;
  btn.style.top = `${topPx}px`;
});

btn.addEventListener('click', function() {
  const h2 = document.createElement('h2');
  h2.innerText = 'You Got Me';

  document.body.append(h2);
});

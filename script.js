let text = document.getElementById('text');
let camel1 = document.getElementById('camel1');
let camel2 = document.getElementById('camel2');

let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');
let cloud4 = document.getElementById('cloud4');
let cloud5 = document.getElementById('cloud5');

let minar = document.getElementById('minar');
let moon = document.getElementById('moon');

let tree1 = document.getElementById('tree1');
let tree2 = document.getElementById('tree2');
let tree3 = document.getElementById('tree3');
let tree4 = document.getElementById('tree4');
let tree5 = document.getElementById('tree5');

let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');
let wave5 = document.getElementById('wave5');
let wave6 = document.getElementById('wave6');
let wave7 = document.getElementById('wave7');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  text.style.marginTop = value * 2.5 + 'px';
  text.style.opacity = 1 - value * 0.003;

  camel1.style.left = value * -2.5 + 'px';
  camel2.style.top = value * 1.5 + 'px';
  camel2.style.left = value * -3 + 'px';

  tree1.style.left = value * -1.5 + 'px';
  tree1.style.top = value * 0.5 + 'px';
  tree1.style.opacity = 1 - value * 0.005;

  tree2.style.left = value * -1.5 + 'px';
  tree2.style.top = value * 0.5 + 'px';
  tree2.style.opacity = 1 - value * 0.005;

  tree3.style.left = value * 1.5 + 'px';
  tree3.style.top = value * -0.5 + 'px';
  tree3.style.opacity = 1 - value * 0.005;

  tree4.style.left = value * 1.5 + 'px';
  tree4.style.top = value * -0.5 + 'px';
  tree4.style.opacity = 1 - value * 0.005;

  tree5.style.left = value * 1.5 + 'px';
  tree5.style.top = value * -0.5 + 'px';
  tree5.style.opacity = 1 - value * 0.005;

  cloud1.style.left = value * -1.5 + 'px';
  cloud1.style.opacity = 1 - value * 0.007;

  cloud2.style.left = value * 2 + 'px';
  cloud2.style.opacity = 1 - value * 0.006;

  cloud3.style.left = value * 2 + 'px';
  cloud3.style.opacity = 1 - value * 0.007;

  cloud4.style.left = value * -2 + 'px';
  cloud4.style.opacity = 1 - value * 0.006;

  cloud5.style.left = value * 0.25 + 'px';

  moon.style.left = value * -0.5 + 'px';
  moon.style.top = value * 0.5 + 'px';
  moon.style.opacity = 1 - value * 0.007;

  minar.style.left = value * -0.3 + 'px';
  minar.style.top = value * 0.5 + 'px';
  minar.style.opacity = 1 - value * 0.005;

  wave2.style.top = value * 0.5 + 'px';

  wave3.style.top = value * 0.7 + 'px';

  wave4.style.opacity = 1 - value * 0.006;

  wave5.style.opacity = 1 - value * 0.006;

  wave6.style.opacity = 1 - value * 0.006;

  wave7.style.opacity = 1 - value * 0.006;
});

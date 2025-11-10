document.addEventListener('DOMContentLoaded', ()=> {
  const menu = [
    { name: "Еспресо", desc: "Міцний та бадьорий — 30 мл", price: "25 грн", img: "assets/espresso.jpg" },
    { name: "Капучино", desc: "Класика з молочною пінкою", price: "40 грн", img: "assets/cappuccino.jpg" },
    { name: "Лате", desc: "М'який молочний напій", price: "45 грн", img: "assets/latte.jpg" },
    { name: "Флет уайт", desc: "Інтенсивний смак і кремова текстура", price: "48 грн", img: "assets/flatwhite.jpg" }
  ];

  const menuList = document.getElementById('menuList');
  menu.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
      <span>${item.price}</span>
    `;
    menuList.appendChild(div);
  });

  // Кнопки каруселі
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  prevBtn.addEventListener('click', ()=> menuList.scrollBy({left:-250, behavior:'smooth'}));
  nextBtn.addEventListener('click', ()=> menuList.scrollBy({left:250, behavior:'smooth'}));

  // Плавний скролл до меню
  document.getElementById('menuBtn').addEventListener('click', ()=> {
    document.getElementById('menu').scrollIntoView({behavior:'smooth'});
  });

  // Форма замовлення
  document.getElementById('orderForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Дякуємо! Ваше замовлення надіслано.');
    e.target.reset();
  });
});

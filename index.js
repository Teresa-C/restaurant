const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Delicious buttermilk pancakes loaded with fresh fruits. Served with a rich, whipped cream. Sprinkled with powdered sugar.`,
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Double Burger served with cheddar cheese, mayo, mustard, lettuce, grilled onions and pickles. Served with a side of chips. `,
  },
  { id: 3,
    title: "Egg Attack",
    category: "lunch",
    price: 12.99,
    img: "./images/item-5.jpeg",
    desc: `Beef burger served with fried egg, american cheese, tomato and lettuce.`,
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 9.99,
    img: "./images/item-4.jpeg",
    desc: `A quick easy delicious options. Toast served with eggs, baked beans and cheese.`,
  },
  {
    id: 5,
    title: "Godzilla Milkshake",
    category: "drink",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `This strawberry milkshake incorporates all the flavors and textures of a classic strawberry shortcakes`,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "drink",
    price: 8.99,
    img: "./images/item-6.jpeg",
    desc: `Try our oreo Shake, the perfect sweet treat for any time of the day. Our shake is made with delicious soft serve, chocolate syrup.`,
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `This ultimate bacon overload burger is sure to please the bacon lover in your family.`,
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 15.99,
    img: "./images/item-8.jpeg",
    desc: `Our tasty burgers are fully loaded and served with fries. Fancy something different? Try the american classic burger topped with egg, beef, lettuce.`,
  }
];

const wholeMenu = (element) => {
  return `<div class="main-container">
    <div>
      <img src=${element.img} alt="${element.title}" class="image">
    </div>
    <div class="left">
      <div class="info">
        <h5 data-id="title">${element.title}</h5>
        <h5 class="price">£${element.price}</h5>
      </div>
      <p>${element.desc}</p>
    </div>
  </div>`
}

const fullMenu = (menu) => {
  const menuList = []
  menu.forEach(element => {
    menuList.push(wholeMenu(element))
  })
  return menuList.join(" ")
}

const main = document.querySelector('.main')
main.innerHTML = fullMenu(menu)
const btn = document.querySelectorAll('.btn').forEach((btn)=>{
  btn.addEventListener("click",(event)=>{
    const result = []
    menu.forEach(element => {
      if (element.category === event.currentTarget.dataset.id){
        result.push(wholeMenu(element))
      }
      main.innerHTML = result.join(' ')
    });
    if (event.currentTarget.dataset.id === "all"){
      menu.forEach(element => {
        main.insertAdjacentHTML('beforeend', wholeMenu(element))
      })
    }
  });
});

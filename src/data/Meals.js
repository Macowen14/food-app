const Meals = [
  {
    id: 1,
    name: "Burgers",
    image: "/src/assets/categoryImage/burgers.jpeg",
    items: [
      {
        id: 101,
        name: "Classic Cheeseburger",
        description:
          "A delicious classic cheeseburger with lettuce, tomato, and cheese.",
        price: 8.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/classicCheeseburger.jpeg",
      },
      {
        id: 102,
        name: "Bacon Burger",
        description:
          "A juicy burger topped with crispy bacon, lettuce, and tomato.",
        price: 10.49,
        available: true,
        imageUrl: "/src/assets/mealsImg/baconBurger.jpeg",
      },
      {
        id: 103,
        name: "Veggie Burger",
        description:
          "A healthy veggie burger with lettuce, tomato, and cheese.",
        price: 7.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/veggieBurger.jpeg",
      },
      {
        id: 104,
        name: "Mushroom Swiss Burger",
        description: "A burger topped with sautéed mushrooms and Swiss cheese.",
        price: 9.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/MushroomSwissBurger.jpeg",
      },
      {
        id: 105,
        name: "BBQ Bacon Burger",
        description:
          "A burger topped with BBQ sauce, bacon, and cheddar cheese.",
        price: 11.49,
        available: true,
        imageUrl: "/src/assets/mealsImg/BBQBaconBurger.jpeg",
      },
    ],
  },
  {
    id: 2,
    name: "Pizzas",
    image: "/src/assets/categoryImage/pizzas.jpeg",
    items: [
      {
        id: 201,
        name: "Margherita Pizza",
        description:
          "A classic Margherita pizza with fresh basil, mozzarella, and tomato sauce.",
        price: 12.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/MargheritaPizza.jpeg",
      },
      {
        id: 202,
        name: "Pepperoni Pizza",
        description:
          "A delicious pizza topped with pepperoni, mozzarella, and tomato sauce.",
        price: 14.49,
        available: false,
        imageUrl: "/src/assets/mealsImg/PepperoniPizza.jpeg",
      },
      {
        id: 203,
        name: "BBQ Chicken Pizza",
        description:
          "A pizza topped with BBQ chicken, mozzarella, and red onions.",
        price: 15.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/BBQChickenPizza.jpeg",
      },
      {
        id: 204,
        name: "Hawaiian Pizza",
        description:
          "A pizza topped with ham, pineapple, and mozzarella cheese.",
        price: 13.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/HawaiianPizza.jpeg",
      },
      {
        id: 205,
        name: "Veggie Pizza",
        description:
          "A pizza topped with bell peppers, onions, mushrooms, and olives.",
        price: 12.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/VeggiePizza.jpeg",
      },
    ],
  },
  {
    id: 3,
    name: "Pastas",
    image: "/src/assets/categoryImage/pastas.jpeg",
    items: [
      {
        id: 301,
        name: "Spaghetti Bolognese",
        description: "Classic spaghetti with a rich bolognese sauce.",
        price: 11.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/SpaghettiBolognese.jpeg",
      },
      {
        id: 302,
        name: "Chicken Alfredo",
        description:
          "Creamy Alfredo sauce with grilled chicken over fettuccine.",
        price: 13.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/ChickenAlfredo.jpeg",
      },
      {
        id: 303,
        name: "Vegetable Lasagna",
        description: "Layers of pasta, vegetables, and cheese.",
        price: 12.49,
        available: true,
        imageUrl: "/src/assets/mealsImg/VegetableLasagna.jpeg",
      },
      {
        id: 304,
        name: "Shrimp Scampi",
        description: "Pasta with shrimp in a garlic butter sauce.",
        price: 14.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/ShrimpScampi.jpeg",
      },
      {
        id: 305,
        name: "Penne Arrabbiata",
        description: "Penne pasta in a spicy tomato sauce.",
        price: 11.49,
        available: true,
        imageUrl: "/src/assets/mealsImg/PenneArrabbiata.jpeg",
      },
    ],
  },
  {
    id: 4,
    name: "Salads",
    image: "/src/assets/categoryImage/salads.jpeg",
    items: [
      {
        id: 401,
        name: "Caesar Salad",
        description:
          "Romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
        price: 8.49,
        available: true,
        imageUrl: "/src/assets/mealsImg/CaesarSalad.jpeg",
      },
      {
        id: 402,
        name: "Greek Salad",
        description:
          "Mixed greens with olives, feta cheese, and Greek dressing.",
        price: 9.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/GreekSalad.jpeg",
      },
      {
        id: 403,
        name: "Cobb Salad",
        description: "Mixed greens with bacon, egg, avocado, and blue cheese.",
        price: 10.49,
        available: true,
        imageUrl: "/src/assets/mealsImg/CobbSalad.jpeg",
      },
      {
        id: 404,
        name: "Caprese Salad",
        description:
          "Tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
        price: 8.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/CapreseSalad.jpeg",
      },
      {
        id: 405,
        name: "Spinach Salad",
        description:
          "Baby spinach with bacon, mushrooms, and a warm bacon dressing.",
        price: 9.49,
        available: true,
        imageUrl: "/src/assets/mealsImg/SpinachSalad.jpeg",
      },
    ],
  },
  {
    id: 5,
    name: "Desserts",
    image: "/src/assets/categoryImage/deserts.jpeg",
    items: [
      {
        id: 501,
        name: "Chocolate Cake",
        description: "A rich and moist chocolate cake.",
        price: 5.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/ChocolateCake.jpeg",
      },
      {
        id: 502,
        name: "Ice Cream",
        description: "A scoop of vanilla ice cream.",
        price: 3.49,
        available: true,
        imageUrl: "/src/assets/mealsImg/IceCream.jpeg",
      },
      {
        id: 503,
        name: "Apple Pie",
        description: "A slice of traditional apple pie.",
        price: 4.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/ApplePie.jpeg",
      },
      {
        id: 504,
        name: "Cheesecake",
        description: "A creamy cheesecake with a graham cracker crust.",
        price: 6.49,
        available: true,
        imageUrl: "/src/assets/mealsImg/CheeseCake.jpeg",
      },
      {
        id: 505,
        name: "Brownie",
        description: "A rich and fudgy chocolate brownie.",
        price: 3.99,
        available: true,
        imageUrl: "/src/assets/mealsImg/Brownie.jpeg",
      },
    ],
  },
];

export default Meals;

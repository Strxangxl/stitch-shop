const products = [
  {
    name: "Black Leather Jacket",
    category: 'Jackets',
    price: 89.99,
    countInStock: 10,
    rating: 4.7,
    numReviews: 13,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    name: "Half-Black Leather Jacket",
    category: 'Jackets',
    price: 20.50,
    countInStock: 7,
    rating: 3.2,
    numReviews: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      "https://images.unsplash.com/photo-1613425125913-88ae911b2414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    name: "Full Shiny Trunk",
    category: "Lowers",
    price: 32.50,
    countInStock: 5,
    rating: 3,
    numReviews: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      "https://images.unsplash.com/photo-1618374645957-04e5cc73ec21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBwaG90b3Nob290fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Beautiful Yellow Dress",
    category: 'Outfit',
    price: 90.00,
    countInStock: 6,
    rating: 43.8,
    numReviews: 9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      "https://images.unsplash.com/photo-1623930354140-03c5ae186bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBwaG90b3Nob290fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Black Frock",
    category: "Outfit",
    price: 95.00,
    countInStock: 20,
    rating: 4.5,
    numReviews: 13,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      "https://images.unsplash.com/photo-1614942925739-a21796eba758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsJTIwcGhvdG9zaG9vdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Summer Half Wear",
    category: "Fashion",
    price: 40.00,
    countInStock: 11,
    rating: 4.4,
    numReviews: 23,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      "https://images.unsplash.com/photo-1625794913247-b8138fd9edb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsJTIwcGhvdG9zaG9vdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Pista Green Dress",
    category: "Fashion",
    price: 100.00,
    countInStock: 20,
    rating: 4.8,
    numReviews: 13,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      "https://images.unsplash.com/photo-1627298855952-b75008bae685?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsJTIwcGhvdG9zaG9vdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Summer Outfits",
    category: "Outfit",
    price: 30.00,
    countInStock:8,
    rating: 4.1,
    numReviews: 6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      "https://images.unsplash.com/photo-1618375141059-9483d77295a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGVsJTIwcGhvdG9zaG9vdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Half body black tshirt",
    category: "Upper",
    price: 49.99,
    countInStock: 3,
    rating: 4.4,
    numReviews: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      "https://images.unsplash.com/photo-1618375066375-c09d6d1c7925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG1vZGVsJTIwcGhvdG9zaG9vdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Half body white tshirt",
    category: "Upper",
    price: 60.00,
    countInStock: 1,
    rating: 4.2,
    numReviews: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image:
      "https://images.unsplash.com/photo-1618375531912-867984bdfd87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG1vZGVsJTIwcGhvdG9zaG9vdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

export default products
import React from 'react';
import PropTypes from 'prop-types';

function Food({name, image, rating}){
  return(
    <div>
      <h3> I like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} />
    </div>
  ); 
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png' 
  },
  {
    id: 2,
    name: 'samgyupsal',
    image: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg'
  }
];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image}/>;
// }

// const renderFood = dish => <Food name={dish.name} picture={dish.image}/>;

function App() {
  // return <div className="App"/> 
  return(
  <div>
    <h1>hello</h1>
    {foodILike.map(dish =>
      (<Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>
      ))};
  </div>
  ); 
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;

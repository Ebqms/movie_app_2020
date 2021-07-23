import React from "react";

function Food({ name, image, rating }) {
  return (
    <div>
      <h3> I like {name}</h3>
      <h4> {rating} /5.0 </h4>
      <img src={image} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating: 5,
  },
  {
    id: 2,
    name: "samgyupsal",
    image: "https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
    rating: 4.9,
  },
];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image}/>;
// }

// const renderFood = dish => <Food name={dish.name} picture={dish.image}/>;

function PropsA() {
  return (
    <>
      <h1>hello</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
      ;
    </>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default PropsA;

import React from 'react';
import { Star, StarHalf } from './Star';
import './profile.css';

const Profile = ({ src, first, last }) => {
  const [stars, setStars] = React.useState([]);
  React.useEffect(() => {
    const noOfStars = createStars();
    setStars([...noOfStars]);
  }, []);

  function createStars() {
    const starslength = Math.floor(Math.random() * 5) + 1;
    const stars = [];
    for (let i = 1; i <= starslength; i++) {
      stars.push('star'+i);
    }    
    return stars;
  }

  return (
    <article className="col-md-4">
      <div className="profile text-center p-3 mb-5">
        <img src={src} alt="testimonial" />
        <h5 className="text-center card-title mt-1">{first + ' ' + last}</h5>
        <div className="text-center mt-1">
          {stars.map((star) => (
            <Star key={star} />
          ))}
          {stars.length < 5 && <StarHalf />}
        </div>
        <p className="mt-1 card-text">
          I Love Little Lemon. Their service is the best and their recipe is
          second to none
        </p>
      </div>
    </article>
  );
};

export default Profile;

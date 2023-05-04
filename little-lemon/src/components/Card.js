import deliveryIcon from "../images/Cycling.svg";

const Card = ({ title, text, src, price }) => {
  return (
    <article className="card mb-3" style={{ width: '18rem' }}>
      <img className="card-img-top" src={src} alt={title} />
      <div className="card-body px-0">
        <h5 className="card-title bg-gray p-3">
          {title}
          <span className="float-end price">{price}</span>
        </h5>
        <p className="card-text px-3">{text}</p>
        <div className="px-3">
          <a href="#" className="text-white" aria-hidden="true">
            <img
              src={deliveryIcon}
              alt="order a delivery"
              style={{ width: '35px' }}
            />
          </a>
          <a href="#" className="btn btn-primary px-4 float-end">
            Order a delivery
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;

import { Link } from "react-router-dom";

function Cards() {
  return (
    <div>
      <div className="card glass w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <Link to="/info">
              <button className="btn btn-primary">Learn now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

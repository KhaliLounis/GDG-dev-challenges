import React from "react";
import { rev } from "./reviewsData";
import Review from "../../comps/Review/Review";

function Reviews() {
  return (
    <>
      <h1 className="card__title">Reviews</h1>
      <div className="rev_container">
        {rev.map((item, index) => (
          <Review key={index} index={index} title={item.title} paragraph={item.paragraph} />
        ))}
      </div>
    </>
  );
}

export default Reviews;
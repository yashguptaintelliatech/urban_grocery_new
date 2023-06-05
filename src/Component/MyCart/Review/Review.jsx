import React from "react";

function Review({ formData }) {
  return (
    <div className="flex gap-3 px-7 w-96 flex-wrap bg-white">
      <div className="flex flex-col  md:text-sm xs:text-base sm:text-2xl bg-white">
        {formData.name && <p className="bg-white">Name :</p>}
        {formData.address && <p className="bg-white">Address :</p>}
        {formData.city && <p className="bg-white">City :</p>}
        {formData.phone && <p className="bg-white">Phone :</p>}
      </div>
      <div className="flex flex-col  md:text-sm xs:text-base sm:text-2xl font-semibold bg-white">
        {formData.name && <p className="bg-white">{formData.name}</p>}
        {formData.address && <p className="bg-white">{formData.address}</p>}
        {formData.city && <p className="bg-white">{formData.city}</p>}
        {formData.phone && <p className="bg-white">{formData.phone}</p>}
      </div>
    </div>
  );
}

export default Review;

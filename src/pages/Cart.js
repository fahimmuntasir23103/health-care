import React from 'react';
import cartImg from './../images/woman-patient-dentist_1303-9364.jpg'

const Cart = () => {
          return (
                    <div className="row">
                              <div className="col-lg-6 col-sm-12">
                              <img src={cartImg} alt="" />
                              </div>
                              <div className="col-lg-6 col-sm-12">
                              <h1 className="btn btn-dark">Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery. </h1>
                              </div>
                    </div>
          );
};

export default Cart;
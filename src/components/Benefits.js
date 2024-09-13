import React, { useState } from 'react';

export default function Benefits() {
  const [benefits] = useState([
    { id: 1, name: "Expertise", value: "Our locticians have extensive experience and training in dreadlocks care and maintenance." },
    { id: 2, name: "Personalized service", value: "We take the time to understand your unique needs and preferences." },
    { id: 3, name: "Quality products", value: "We use only the best products to ensure healthy, thriving dreadlocks." },
    { id: 4, name: "Sanitation and hygiene", value: "Our salon maintains the highest standards of cleanliness and sanitation." },
    { id: 5, name: "Community", value: "Join our community of dreadlocks enthusiasts and connect with like-minded individuals." },
    { id: 6, name: "Customization", value: "We offer customized services to suit your lifestyle, hair type, and personal style." },
    { id: 7, name: "Maintenance and repair", value: "We provide guidance on proper maintenance and repair techniques." },
    { id: 8, name: "Education", value: "Our locticians are happy to share knowledge and tips on dreadlocks care." },
    { id: 9, name: "Relaxing atmosphere", value: "Our salon offers a welcoming, relaxing environment." },
    { id: 10, name: "Satisfaction guarantee", value: "We strive for 100% customer satisfaction." }
  ]);

  return (
    <div className="datas" >
      <h1>You Extremely Benefit, See Our Offers.</h1>
      {benefits.map(benefit => (
        <div  className="data" key={benefit.id}>
          <h1>{benefit.name}</h1>
          <hr/>
          <p>{benefit.value}</p>
        </div>
      ))}
    </div>
  );
}

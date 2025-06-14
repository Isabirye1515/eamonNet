import { QuestionAnswering } from '@carbon/icons-react';
import { Column, Grid, Row } from '@carbon/react';
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
export default function Faqs() {
      useEffect(() => {
          Aos.init({
              duration: 1000, // Animation duration in milliseconds
              once: false, // Whether animation should happen only once
              mirror: true, // Whether elements should animate out while scrolling past them
          });
      }, []);
  const [faqs] = useState([
    {
      id: 1,
      question: "How long does dreadlocks installation take?",
      answer: "The installation of dreadlocks typically takes between 3 to 6 hours, depending on the length and thickness of your hair."
    },
    {
      id: 2,
      question: "How often should I maintain my dreadlocks?",
      answer: "It’s recommended to maintain dreadlocks every 4 to 6 weeks to keep them clean and well-formed."
    },
    {
      id: 3,
      question: "Can I customize my dreadlocks?",
      answer: "Yes, dreadlocks can be customized with different sizes, styles, colors, and even accessories like beads or wraps."
    }
  ]);

  return (
    <div className="bg-light p-5 mt-5" data-aos="fade-up">
      <center><h5>Frequently Asked Questions?</h5></center>
      <h2 style={{ color: "#aaa", marginLeft: "3%" }}>Questions and answers:</h2>

      {faqs.map((faq) => (
        <Grid key={faq.id} className="my-4">
          <Column lg={8} md={4} sm={2}>
            <p  style={{
                  maxWidth: "100%",
                  padding: "10px 15px",
                  backgroundColor: "#ffffff",
                  borderRadius: "15px",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                }} className="text-start fw-bold text-dark">{faq.question}</p>
          </Column>
          <Column lg={8} md={4} sm={2}>
            <p                  style={{
                  maxWidth: "100%",
                  padding: "10px 15px",
                  backgroundColor: "#dcf8c6", // WhatsApp green
                  borderRadius: "15px",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                }} className="text-end text-muted">{faq.answer}</p>
          </Column>
        </Grid>
      ))}
    </div>
  );
}

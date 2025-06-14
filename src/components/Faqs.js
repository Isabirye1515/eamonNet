import { QuestionAnswering } from '@carbon/icons-react';
import { Column, Grid } from '@carbon/react';
import React, { useState } from 'react';

export default function Faqs() {
  const [faqs] = useState([
    { id: 1, question: "How long does dreadlocks installation take?", answer: "The installation of dreadlocks typically takes between 3 to 6 hours, depending on the length and thickness of your hair." },
    { id: 2, question: "How often should I maintain my dreadlocks?", answer: "It’s recommended to maintain dreadlocks every 4 to 6 weeks to keep them clean and well-formed." },
    { id: 3, question: "Can I customize my dreadlocks?", answer: "Yes, dreadlocks can be customized with different sizes, styles, colors, and even accessories like beads or wraps." }
  ]);

  return (
    <div class="bg-dark" >
      <center><h2 class="">Frequently Asked Questions?</h2></center>
      <h2 style={{color:"#aaa", marginLeft:"3%"}}>Questions and answers:</h2>
      <Grid  class="p-2" >
      {faqs.map((faq) => (
        <Column lg={5} sm={4}  md={4}    key={faq.id}   >
          <p   ><i class="text-primary" > </i> {faq.question}</p>
          <h2  > <i class="text-primary" ></i> {faq.answer}</h2>
        </Column>
      ))}
      </Grid>
    </div>
  );
}

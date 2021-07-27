import React from "react";
import Accordion from "components/accordion";
import faqsData from "fixtures/faqs.json";
import { OptForm } from "components";

export function FAQContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((faq) => {
        return (
          <Accordion.Item key={faq.id}>
            <Accordion.Header>{faq.header}</Accordion.Header>
            <Accordion.Body>
              <Accordion.Text>{faq.body}</Accordion.Text>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
      <Accordion.Item />

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}

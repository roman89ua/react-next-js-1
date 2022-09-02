import React, { FormEvent, useRef, useState } from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

export interface IAddMeetupsForm {
  onSendData: (data: { [key: string]: string }) => void;
}

export const AddMeetupsForm = ({ onSendData }: IAddMeetupsForm) => {
  const [validated, setValidated] = useState(false);

  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const oneMoreRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();

    const formData = {
      title: titleRef.current?.value || "",
      image: imageRef.current?.value || "",
      address: addressRef.current?.value || "",
      description: descriptionRef.current?.value || "",
    };
    const willBeNext = oneMoreRef.current?.checked || false;

    const isValid = form.checkValidity();
    setValidated(true);

    if (isValid) {
      onSendData(formData);
      if (willBeNext) {
        form.reset();
        setValidated(false);
      } else {
        navigate("/", { replace: true });
      }
    }
  };

  return (
    <Card className="p-4 mt-4">
      <Form
        noValidate
        validated={validated}
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <FloatingLabel
          controlId="new-meetup-title"
          label="Meetup title"
          className="mb-3"
        >
          <Form.Control type="text" required as="input" ref={titleRef} />
          <Form.Control.Feedback type="invalid">
            Please provide a meetup title.
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel
          controlId="new-meetup-image"
          label="Meetup image"
          className="mb-3"
        >
          <Form.Control type="url" required as="input" ref={imageRef} />
          <Form.Control.Feedback type="invalid">
            Please provide a image url.
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel
          className="mb-3"
          controlId="new-meetup-address"
          label="Meetup address"
        >
          <Form.Control type="text" required as="input" ref={addressRef} />
          <Form.Control.Feedback type="invalid">
            Please provide a meetup address.
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel
          className="mb-3"
          controlId="new-meetup-description"
          label="Meetup description"
        >
          <Form.Control
            as="textarea"
            type="textarea"
            rows={5}
            required
            ref={descriptionRef}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a meetup description.
          </Form.Control.Feedback>
        </FloatingLabel>

        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Check.Input type="checkbox" ref={oneMoreRef} />
          <Form.Check.Label className="mx-2">
            I want to add one more meetup
          </Form.Check.Label>
        </Form.Group>

        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

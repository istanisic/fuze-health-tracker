import React, { useState } from "react";
import "./AddMealForm.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function AddMealForm({ onAddMeal }) {

  const [meal, setMeal] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
    setMeal("");
  }

  const onSubmitForm = e => {
    e.preventDefault();
    onAddMeal(meal);
    setMeal("");
    handleClose();
  }

  return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Meal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new meal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={onSubmitForm}>
            <input
            type="text"
            className="form-control"
            placeholder="Add a meal..."
            value={meal}
            onChange={e => setMeal(e.target.value)} />
            <button type="submit" className="btn btn-primary">Add meal</button>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
}

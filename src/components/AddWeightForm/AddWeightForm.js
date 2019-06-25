import React, { useState } from "react";
import "./AddWeightForm.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function AddWeightForm({ onAddWeight }) {

  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("kg");
  const [show, setShow] = useState(false);

  const handleChange = e => {
    setUnit(e.target.value);
  }

  const handleShow = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
    setWeight("");
  }

  const onSubmitForm = e => {
    e.preventDefault();
    unit === 'lb' ? onAddWeight(convertToKg(weight)) : onAddWeight(weight);
    setWeight("");
    handleClose();
  }

  const convertToKg = weight => {
    const weightInKg = weight * 0.453592;
    return weightInKg.toFixed(2);
  }

  return (
      <>
        <Button variant="primary" onClick={handleShow} className="btn btn-success">
          Add Weight
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new weight</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={onSubmitForm}>
              <div className="row">
              <input
                type="text"
                className="form-control col-4"
                value={weight}
                placeholder="Add a weight..."
                onChange={e => setWeight(e.target.value)}
              />
              <select value={unit} onChange={handleChange} className="form-control col-2">
                <option value="kg">kg</option>
                <option value="lb">lb</option>
              </select>
              <button type="submit" className="btn btn-success">Add weight</button>
              </div>
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

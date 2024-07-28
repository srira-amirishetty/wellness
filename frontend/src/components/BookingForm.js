import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    user_id: '',
    user_name: '',
    user_email: '',
    user_phone: '',
    retreat_id: '',
    retreat_title: '',
    retreat_location: '',
    retreat_price: '',
    retreat_duration: '',
    payment_details: '',
    booking_date: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="user_name">Name</Label>
        <Input
          id="user_name"
          name="user_name"
          type="text"
          value={formData.user_name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="user_email">Email</Label>
        <Input
          id="user_email"
          name="user_email"
          type="email"
          value={formData.user_email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="user_phone">Phone</Label>
        <Input
          id="user_phone"
          name="user_phone"
          type="text"
          value={formData.user_phone}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="retreat_title">Retreat Title</Label>
        <Input
          id="retreat_title"
          name="retreat_title"
          type="text"
          value={formData.retreat_title}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="retreat_location">Retreat Location</Label>
        <Input
          id="retreat_location"
          name="retreat_location"
          type="text"
          value={formData.retreat_location}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="retreat_price">Retreat Price</Label>
        <Input
          id="retreat_price"
          name="retreat_price"
          type="text"
          value={formData.retreat_price}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="payment_details">Payment Details</Label>
        <Input
          id="payment_details"
          name="payment_details"
          type="text"
          value={formData.payment_details}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="booking_date">Booking Date</Label>
        <Input
          id="booking_date"
          name="booking_date"
          type="date"
          value={formData.booking_date}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">Book Retreat</Button>
    </Form>
  );
};

export default BookingForm;

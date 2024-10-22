import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import Button from "../button/Button";

// Validation schema using Yup
const schema = yup.object().shape({
  interest: yup.string().required("Interest is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  companyName: yup.string().required("Company name is required"),
  telephone: yup.string().required("Telephone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  productDescription: yup.string().required("Product description is required"),
});

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
`;

const ButtonWrapper = styled.button`
  text-align: center;
`;

const MandatoryIcon = styled.span`
  color: red;
  margin-left: 0.25rem;
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper>
          <Label>
            Interest <MandatoryIcon>*</MandatoryIcon>
          </Label>
          <Select {...register("interest")}>
            <option value="">Select an option</option>
            <option value="general">General Enquiry</option>
            <option value="quote">Request a Quote</option>
          </Select>
          {errors.interest && (
            <ErrorMessage>{errors.interest.message}</ErrorMessage>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <Label>
            First Name <MandatoryIcon>*</MandatoryIcon>
          </Label>
          <Input type="text" {...register("firstName")} />
          {errors.firstName && (
            <ErrorMessage>{errors.firstName.message}</ErrorMessage>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <Label>
            Last Name <MandatoryIcon>*</MandatoryIcon>
          </Label>
          <Input type="text" {...register("lastName")} />
          {errors.lastName && (
            <ErrorMessage>{errors.lastName.message}</ErrorMessage>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <Label>
            Company Name <MandatoryIcon>*</MandatoryIcon>
          </Label>
          <Input type="text" {...register("companyName")} />
          {errors.companyName && (
            <ErrorMessage>{errors.companyName.message}</ErrorMessage>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <Label>Company Position</Label>
          <Input type="text" {...register("companyPosition")} />
        </FieldWrapper>

        <FieldWrapper>
          <Label>Country</Label>
          <Input type="text" {...register("country")} />
        </FieldWrapper>

        <FieldWrapper>
          <Label>
            Telephone <MandatoryIcon>*</MandatoryIcon>
          </Label>
          <Input type="text" {...register("telephone")} />
          {errors.telephone && (
            <ErrorMessage>{errors.telephone.message}</ErrorMessage>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <Label>
            Email <MandatoryIcon>*</MandatoryIcon>
          </Label>
          <Input type="email" {...register("email")} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FieldWrapper>

        <FieldWrapper>
          <Label>
            Product of Interest/Description <MandatoryIcon>*</MandatoryIcon>
          </Label>
          <TextArea rows="4" {...register("productDescription")} />
          {errors.productDescription && (
            <ErrorMessage>{errors.productDescription.message}</ErrorMessage>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <Label>Additional Comments</Label>
          <TextArea rows="4" {...register("comments")} />
        </FieldWrapper>

        <Button size="small">Send</Button>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;

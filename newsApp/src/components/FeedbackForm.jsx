import React, { useState } from "react";
import CountrySelect from "./CountrySelect";
import CountrySelector from "./CountrySelector";
import StateSelector from "./StateSelector";
import {
  FormContainer,
  FormTitle,
  FormSubtitle,
  Input,
  TextArea,
  SelectContainer,
  MobileInput,
  // InputRow,
  Label,
  ErrorMessage,
  SubmitButton,
  ButtonContainer,
  CloseButton,
  InputWrapper,
  InputWrap,
} from "./styles/FbStyle";

const FeedbackForm = ({ setShowFeedback, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    country: "",
    state: "",
    email: "",
    mobile: "",
    feedback: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobile: "",
    feedback: "",
  });
  const [isDirty, setIsDirty] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Full Name must be at least 2 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid e-mail";
      isValid = false;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile) {
      newErrors.mobile = "Mobile Number is required";
      isValid = false;
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    if (!formData.feedback.trim()) {
      newErrors.feedback = "Feedback is required";
      isValid = false;
    } else if (formData.feedback.length < 10) {
      newErrors.feedback = "Feedback must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsDirty(true);

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? "" : "Please enter a valid e-mail",
      });
    }
  };

  const handleCountryChange = (country) => {
    setFormData({ ...formData, country, state: "" });
    setIsDirty(true);
  };

  const handleStateChange = (state) => {
    setFormData({ ...formData, state });
    setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setShowFeedback(false);
      setIsDirty(false);
      if (onClose) onClose();
    }
  };

  const handleClose = () => {
    if (
      isDirty &&
      !window.confirm(
        "You have unsaved changes. Are you sure you want to close the form?"
      )
    ) {
      return;
    }
    setShowFeedback(false);
    setIsDirty(false);
    if (onClose) onClose();
  };

  return (
    <FormContainer>
      <CloseButton onClick={handleClose} aria-label="Close feedback form">
        ✖
      </CloseButton>
      <FormTitle>Thank you so much for taking the time!</FormTitle>
      <FormSubtitle>Please provide the below details!</FormSubtitle>

      <InputWrapper>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Enter Your Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
        />
        {errors.fullName && (
          <ErrorMessage id="fullName-error">{errors.fullName}</ErrorMessage>
        )}
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="address">Address</Label>
        <TextArea
          id="address"
          name="address"
          placeholder="Enter your full Postal Address"
          rows="3"
          value={formData.address}
          onChange={handleInputChange}
        />
      </InputWrapper>

      <SelectContainer>
        <div>
          <Label htmlFor="country">Country</Label>
          <CountrySelector
            value={formData.country}
            onCountryChange={handleCountryChange}
          />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <StateSelector
            selectedCountry={formData.country}
            value={formData.state}
            onStateChange={handleStateChange}
          />
        </div>
      </SelectContainer>
      {/* <InputRow> */}
      <div>
        <InputWrapper>
          <Label htmlFor="email">Email Id</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Your E-mail Id"
            value={formData.email}
            onChange={handleInputChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <ErrorMessage id="email-error">{errors.email}</ErrorMessage>
          )}
        </InputWrapper>
      </div>

      <InputWrap>
        <Label htmlFor="mobile">Mobile Number</Label>
        <MobileInput>
          <CountrySelect />
          <Input
            id="mobile"
            type="tel"
            name="mobile"
            placeholder="Enter Your Mobile Number"
            value={formData.mobile}
            onChange={handleInputChange}
            aria-invalid={!!errors.mobile}
            aria-describedby={errors.mobile ? "mobile-error" : undefined}
          />
          {errors.mobile && (
            <ErrorMessage id="mobile-error">{errors.mobile}</ErrorMessage>
          )}
        </MobileInput>
      </InputWrap>
      {/* </InputRow> */}

      <InputWrapper>
        <Label htmlFor="feedback">Feedback</Label>
        <TextArea
          id="feedback"
          name="feedback"
          placeholder="Write Your Feedback"
          rows="3"
          value={formData.feedback}
          onChange={handleInputChange}
          aria-invalid={!!errors.feedback}
          aria-describedby={errors.feedback ? "feedback-error" : undefined}
        />
        {errors.feedback && (
          <ErrorMessage id="feedback-error">{errors.feedback}</ErrorMessage>
        )}
      </InputWrapper>
      <ButtonContainer>
        <SubmitButton onClick={handleSubmit}>SUBMIT FEEDBACK</SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default FeedbackForm;

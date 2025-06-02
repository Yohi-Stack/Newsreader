import React, { useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import styled from 'styled-components';

// Custom styles for react-select to match the form's design
const customStyles = {
  control: (provided) => {
    const isMobile = window.innerWidth <= 950;
    return {
      ...provided,
      width: isMobile ? '100%' : '250px',
      padding: '8px',
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
      fontSize: '14px',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        borderColor: '#00c4cc',
      },
    };
  },
  menu: (provided) => ({
    ...provided,
    borderRadius: '6px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    backgroundColor: state.isSelected ? '#00c4cc' : state.isFocused ? '#e0f7fa' : '#fff',
    color: state.isSelected ? '#fff' : '#333',
    '&:hover': {
      backgroundColor: '#e0f7fa',
    },
  }),
};

const SelectWrapper = styled.div`
  width: 250px;

  @media (min-width: 951px) and (max-width: 1024px) {
    display: flex;
    width:250px; 
  }
  @media (min-width: 768px) and (max-width:  950px) {
    width: 95%;
  }
   @media (min-width: 401px) and (max-width: 500px) {
    width: 95%;
  }
     @media (min-width: 320px) and (max-width: 400px) {
    width: 95%;
  }
`;

const CountrySelector = ({ onCountryChange, value }) => {
  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : '';
    onCountryChange(selectedValue); // Pass the selected country value to the parent
  };

  return (
    <SelectWrapper>
      <Select
        options={options}
        value={options.find((option) => option.value === value) || null}
        onChange={handleChange}
        placeholder="Select Your Country"
        styles={customStyles}
        isClearable
      />
    </SelectWrapper>
  );
};

export default CountrySelector;
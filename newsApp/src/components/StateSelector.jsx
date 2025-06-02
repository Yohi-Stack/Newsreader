import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

// Custom styles (same as CountrySelector for consistency)
const customStyles = {
  control: (provided) => {
    const isMobile = window.innerWidth <= 950;
    return {
      ...provided,
      width: isMobile ? '100%' : '300px',
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

const StateSelector = ({ selectedCountry, onStateChange, value }) => {
  // Define states for a few countries
 const stateOptions = {
  IN: [
    { value: 'MH', label: 'Maharashtra' },
    { value: 'KA', label: 'Karnataka' },
    { value: 'TN', label: 'Tamil Nadu' },
    { value: 'KL', label: 'Kerala' },
    { value: 'DL', label: 'Delhi' },
  ],
  US: [
    { value: 'CA', label: 'California' },
    { value: 'TX', label: 'Texas' },
    { value: 'NY', label: 'New York' },
    { value: 'FL', label: 'Florida' },
    { value: 'IL', label: 'Illinois' },
  ],
  GB: [
    { value: 'ENG', label: 'England' },
    { value: 'SCT', label: 'Scotland' },
    { value: 'WLS', label: 'Wales' },
    { value: 'NIR', label: 'Northern Ireland' },
  ],
  CA: [
    { value: 'ON', label: 'Ontario' },
    { value: 'QC', label: 'Quebec' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'AB', label: 'Alberta' },
    { value: 'MB', label: 'Manitoba' },
  ],
  AU: [
    { value: 'NSW', label: 'New South Wales' },
    { value: 'VIC', label: 'Victoria' },
    { value: 'QLD', label: 'Queensland' },
    { value: 'WA', label: 'Western Australia' },
    { value: 'SA', label: 'South Australia' },
  ],
  DE: [
    { value: 'BW', label: 'Baden-Württemberg' },
    { value: 'BY', label: 'Bavaria' },
    { value: 'BE', label: 'Berlin' },
    { value: 'HH', label: 'Hamburg' },
    { value: 'HE', label: 'Hesse' },
  ],
  FR: [
    { value: 'IDF', label: 'Île-de-France' },
    { value: 'NAQ', label: 'Nouvelle-Aquitaine' },
    { value: 'ARA', label: 'Auvergne-Rhône-Alpes' },
    { value: 'PAC', label: 'Provence-Alpes-Côte d\'Azur' },
    { value: 'OCC', label: 'Occitanie' },
  ],
  BR: [
    { value: 'SP', label: 'São Paulo' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'BA', label: 'Bahia' },
  ],
  CN: [
    { value: 'BJ', label: 'Beijing' },
    { value: 'SH', label: 'Shanghai' },
    { value: 'GD', label: 'Guangdong' },
    { value: 'ZJ', label: 'Zhejiang' },
    { value: 'SD', label: 'Shandong' },
  ],
  ZA: [
    { value: 'GP', label: 'Gauteng' },
    { value: 'WC', label: 'Western Cape' },
    { value: 'KZN', label: 'KwaZulu-Natal' },
    { value: 'EC', label: 'Eastern Cape' },
    { value: 'MP', label: 'Mpumalanga' },
  ],
};


  const options = selectedCountry && stateOptions[selectedCountry] ? stateOptions[selectedCountry] : [];

  const handleChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : '';
    onStateChange(selectedValue); // Pass the selected state value to the parent
  };

  return (
    <SelectWrapper>
      <Select
        options={options}
        value={options.find((option) => option.value === value) || null}
        onChange={handleChange}
        placeholder="Select Your State"
        styles={customStyles}
        isDisabled={!selectedCountry}
        isClearable
      />
    </SelectWrapper>
  );
};

export default StateSelector;
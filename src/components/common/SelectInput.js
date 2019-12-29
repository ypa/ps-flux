import React from "react";
import PropTypes from "prop-types";

function SelectInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          className="form-control"
        >
          <option value="" />
          <option value="1">{props.optionValue1}</option>
          <option value="2">{props.optionValue2}</option>
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  optionValue1: PropTypes.string,
  optionValue2: PropTypes.string
};

SelectInput.defaultProps = {
  optionValue1: "Cory House",
  optionValue2: "Scott Allen"
};

export default SelectInput;

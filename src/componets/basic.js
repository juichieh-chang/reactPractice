import React, { Component } from 'react';
import Select from 'react-select';

const Input = function (props) {
  const classNameForDiv = 'controls ' + props.inputClass;
  const classNameForInput = 'form-control';
  const handleBlurOnInput = function () {
    let checkResult = true;
    props.onBlur(checkResult);
  };

  return <div className={classNameForDiv}>
    <input className={classNameForInput} type="text" maxLength={props.maxLength} onBlur={handleBlurOnInput} />
  </div>;

};

Input.propTypes = {
  inputClass: React.PropTypes.string,
  maxLength: React.PropTypes.string
};

Input.defaultProps = {
  inputClass: 'col-lg-9',
  maxLength: '2'
};

const Label = function (props) {
  const classNameForLable = 'control-label col-form-label ' + props.labelClass;

  return <label className={classNameForLable} style={{ textAlign: props.textAlign }}>
    {props.labelName}
  </label>
};

Label.propTypes = {
  labelName: React.PropTypes.string.isRequired,
  labelClass: React.PropTypes.string,
  textAlign: React.PropTypes.string
};

Label.defaultProps = {
  labelClass: 'col-lg-3',
  textAlign: 'right'
};

const SelectForMcu = function (props) {
  const classNameForDiv = 'controls ' + props.selectClass;
  return <div className={classNameForDiv}>
    <Select name='select' options={props.options} />
  </div>;
};

SelectForMcu.propTypes = {
  selectClass: React.PropTypes.string,
  options: React.PropTypes.array.isRequired
};

SelectForMcu.defaultProps = {
  selectClass: 'col-lg-9'
};

const Radio = function (props) {
  return <label className='form-check-label'>
    <input type='radio' className='form-check-input' name={props.fieldName} value={props.radioValue} />
    {props.radioName}
  </label>;
};

Radio.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  radioValue: React.PropTypes.string.isRequired,
  radioName: React.PropTypes.string.isRequired
};

const CheckBox = function (props) {
  return <label className='checkbox-inline'>
    <input type="checkbox" className='form-check-input' name={props.fieldName} value={props.checkBoxValue} />
    {props.checkBoxName}
  </label>;
};

CheckBox.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  checkBoxValue: React.PropTypes.string.isRequired,
  checkBoxName: React.PropTypes.string.isRequired
};

const ButtonMcuObject = function (props) {
  const classNameForBtn = 'btn ' + props.buttonClass;
  return <button className={classNameForBtn}>
    <i className={props.iconClass}></i>{props.buttonName}
  </button>;
};

ButtonMcuObject.propTypes = {
  buttonClass: React.PropTypes.string,
  buttonName: React.PropTypes.string.isRequired,
  iconClass: React.PropTypes.string
};

ButtonMcuObject.defaultProps = {
  buttonClass: 'btn-primary'
}

export { Input, Label, SelectForMcu, Radio, CheckBox, ButtonMcuObject }

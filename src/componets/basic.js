import React, { Component } from 'react';
import Select from 'react-select';

const Input = function (props) {
  const classNameForDiv = props.inputClass;
  const classNameForInput = 'form-control';
  const handleBlurOnInput = function () {
    let checkResult = true;
    props.onBlur(checkResult);
  };

  return <div className={classNameForDiv}>
    <input id={props.inputId} className={classNameForInput} type="text" maxLength={props.maxLength} onBlur={handleBlurOnInput} />
  </div>;

};

Input.propTypes = {
  inputClass: React.PropTypes.string,
  maxLength: React.PropTypes.string,
  inputId: React.PropTypes.string
};

Input.defaultProps = {
  inputClass: 'col-lg-9',
  maxLength: '40'
};

const Label = function (props) {
  const classNameForLable = 'col-form-label ' + props.labelClass;

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
  labelClass: 'col-md-3',
  textAlign: 'right'
};

const SelectForMcu = function (props) {
  const classNameForDiv = props.selectClass;
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
    <input type='radio' name={props.fieldName} value={props.radioValue} />
    {props.radioName}
  </label>;
};

Radio.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  radioValue: React.PropTypes.string.isRequired,
  radioName: React.PropTypes.string.isRequired
};

const CheckBox = function (props) {
  return <label className='form-check-label'>
    <input type="checkbox" name={props.fieldName} value={props.checkBoxValue} />
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
  return <div className={props.selfClass} style={{ height: '100%' }}>
    <button className={classNameForBtn} style={{ width: '100%' }}>
      <i className={props.iconClass}></i>{props.buttonName}
    </button></div>;
};

ButtonMcuObject.propTypes = {
  buttonClass: React.PropTypes.string,
  buttonName: React.PropTypes.string.isRequired,
  iconClass: React.PropTypes.string
};

ButtonMcuObject.defaultProps = {
  buttonClass: 'btn-primary',
  selfClass: 'col-3'
}

export { Input, Label, SelectForMcu, Radio, CheckBox, ButtonMcuObject }

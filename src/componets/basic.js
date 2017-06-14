import React, { Component } from 'react';
import Select from 'react-select';

/**
 * 定義文字輸入框
 */
class Input extends Component {
  constructor(props) {
    super(props);
    this.classNameForDiv = 'controls ' + this.props.inputClass;
  }
  handleBlurOnInput(event) {
    let checkResult = false;
    this.props.onBlur(checkResult);
  }
  render() {
    return (
      <div className={this.classNameForDiv}>
        <input className="form-control textUpperCase" type="text" maxLength="10" onBlur={this.handleBlurOnInput.bind(this)} />
      </div>);
  }
}

Input.propTypes = {
  inputClass: React.PropTypes.string
};

Input.defaultProps = {
  inputClass: 'col-lg-9'
};

class Label extends Component {
  constructor(props) {
    super(props);
    this.classNameForLable = 'control-label col-form-label ' + this.props.labelClass;
  }
  render() {
    return (<label htmlFor="" className={this.classNameForLable} style={{ textAlign: this.props.textAlign }}>
      {this.props.labelName}</label>);
  }
}

Label.propTypes = {
  labelName: React.PropTypes.string.isRequired,
  labelClass: React.PropTypes.string
};

Label.defaultProps = {
  labelClass: 'col-lg-3',
  textAlign: 'right'
};

class SelectForMcu extends Component {
  constructor(props) {
    super(props);
    this.classNameForDiv = 'controls ' + this.props.selectClass;
  }
  render() {
    return (
      <div className={this.classNameForDiv}>
        <Select name='select' options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]} />
      </div>
    );
  }
}
SelectForMcu.propTypes = {
  selectClass: React.PropTypes.string
};

SelectForMcu.defaultProps = {
  selectClass: 'col-lg-9'
};

class Radio extends Component {
  render() {
    return (
      <label className='form-check-label'>
        <input type='radio' className='form-check-input' name={this.props.fieldName} value={this.props.radioValue} />
        {this.props.radioName}
      </label>
    );
  }
}
Radio.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  radioValue: React.PropTypes.string.isRequired
};

class CheckBox extends Component {
  render() {
    return (
      <label className='checkbox-inline'>
        <input type="checkbox" className='form-check-input' name={this.props.fieldName} value={this.props.checkBoxValue} />
        {this.props.checkBoxName}
      </label>
    );
  }
}
CheckBox.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  checkBoxValue: React.PropTypes.string.isRequired
};

class ButtonMcuObject extends Component {
  render() {
    return (
      <button className={this.props.buttonClass}>
        <i className={this.props.iconClass}></i>{this.props.buttonName}
      </button>
    );
  }
}

export { Input, Label, SelectForMcu, Radio, CheckBox, ButtonMcuObject }

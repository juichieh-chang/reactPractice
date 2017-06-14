import React, { Component } from 'react';
import { CheckBox, Label } from './basic.js';

class CheckBoxMcuObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: true
    };
  }
  render() {
    let classNameForDiv = this.props.selfClass;
    classNameForDiv = this.state.hasError ? classNameForDiv : (classNameForDiv + ' has-danger');
    return (
      <div className={classNameForDiv}>
        <div className='form-check form-check-inline row col-lg-12'>
          <Label labelName={this.props.labelName} labelClass={this.props.labelClass} />
          <div className={this.props.checkBoxClass}>
            <CheckBox fieldName={this.props.fieldName} checkBoxValue={this.props.checkBoxValue} checkBoxName={this.props.checkBoxName} />
          </div>
        </div>
      </div>
    );
  }
}
export { CheckBoxMcuObject }
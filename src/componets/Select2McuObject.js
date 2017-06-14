import React, { Component } from 'react';
import { SelectForMcu, Label } from './basic.js';

class Select2McuObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: true
    };
  }
  render() {
    let classNameForDiv = this.props.selfClass;
    classNameForDiv = this.state.hasError ? classNameForDiv : (classNameForDiv + ' has-danger');
    return (<div className={classNameForDiv}>
      <div className="form-group row">
        <Label labelName={this.props.labelName} labelClass={this.props.labelClass} />
        <SelectForMcu selectClass={this.props.selectClass} />
      </div>
    </div>);
  }
}

export { Select2McuObject }
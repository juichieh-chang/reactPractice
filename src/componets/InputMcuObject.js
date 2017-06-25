import React, { Component } from 'react';
import { Input, Label } from './basic.js';

class InputMcuObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  handleBlurOnMcuObject(result) {
    this.setState({
      hasError: result
    });
  }
  render() {
    let classNameForDiv = this.props.selfClass;
    classNameForDiv = this.state.hasError ? classNameForDiv : (classNameForDiv + ' has-danger');
    const _inputId = 'mcuinput-' + this.props.id
    return (<div className={classNameForDiv} id={this.props.id}>
      <div className="form-group row">
        <Label labelName={this.props.labelName} labelClass={this.props.labelClass} textAlign={this.props.textAlign} />
        <Input inputId={_inputId} inputClass={this.props.inputClass} onBlur={this.handleBlurOnMcuObject.bind(this)} />
      </div>
    </div>);
  }
}


export { InputMcuObject }
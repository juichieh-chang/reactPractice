import React, { Component } from 'react';
import { Radio, Label } from './basic.js';

class RadioMuti extends Component {
  constructor(props) {
    super(props);
    this.classNameForDiv = 'form-check form-check-inline ' + this.props.radioClass;
  }
  render() {
    return (<div className={this.classNameForDiv}>
      {this.props.radios.map(ra => {
        return <Radio key={ra.key} fieldName={ra.fieldName}
          radioValue={ra.radioValue} radioName={ra.radioName} />;
      },this)}
    </div>)
  }
}
RadioMuti.propTypes = {
  radioClass: React.PropTypes.string
};
RadioMuti.defaultProps = {
  radioClass: 'col-lg-9'
};

class RadioMcuObject extends Component {
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
        <div>
          <Label labelName={this.props.labelName} labelClass={this.props.labelClass} />
          <RadioMuti radioClass={this.props.radioClass} radios={this.props.radios} />
        </div>
      </div>
    );
  }
}

export { RadioMcuObject }
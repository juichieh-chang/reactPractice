import React from 'react';
import ReactDOM from 'react-dom';
import { InputMcuObject } from './componets/InputMcuObject.js'
import { Select2McuObject } from './componets/Select2McuObject.js'
import { RowContainer } from './componets/RowContainer.js'
import { RadioMcuObject } from './componets/radioMcuObject.js'
import { CheckBoxMcuObject } from './componets/CheckBoxMcuObject.js'
import { Label, ButtonMcuObject } from './componets/basic.js'
import './mpsform-elements.css';
import './css/bootstrap.css';
import 'react-select/dist/react-select.css';
import './index.css';

ReactDOM.render(<div>
  <RowContainer objectArray={[<InputMcuObject id='mcu-1' key='mcu-1' selfClass='col-lg-3' labelName='xxx' />,
  <InputMcuObject key='mcu-2' selfClass='col-lg-4' labelClass='col-lg-3' inputClass='col-lg-9' labelName='姓名' />]} />
  <RowContainer objectArray={[<Select2McuObject options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]} key='mcu-3' selfClass='col-lg-5' labelName='測試' />,
  <RadioMcuObject key='mcu-4' selfClass='col-lg-3' labelName='性別'  radioClass='col-lg-9' labelClass='col-lg-3'
    radios={[{ key: '1', 'radioName': '男', 'radioValue': '1', 'fieldName': 'gender' }, { key: '2', 'radioName': '女', 'radioValue': '2', 'fieldName': 'gender' }
    ]} />,
  <CheckBoxMcuObject key='mcu-5' checkBoxClass='col-lg-8' selfClass='col-lg-3' labelName='測試' labelClass='col-lg-3' fieldName='jjj' checkBoxValue='1' checkBoxName='O' />
  ]} />,
  <RowContainer objectArray={[<Label classNameForLable='col-lg-4' labelName='1234567890' textAlign='left' />,
  <ButtonMcuObject buttonName='按鈕' iconClass='xxx' />]} />
</div>,
  document.getElementById('root')
);

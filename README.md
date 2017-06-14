# MPSFORM 元件轉換

## 基本元素
* Input 基本文字輸入方塊 由一個DIV和一個INPUT TYPE=text所組成
* Lable 非常單純的LABEL標籤
* SelectForMcu 下拉選單 由一個DIV和一個react-select2套件元素所組成
* Radio 單選按鈕 由一個LABLE和一個INPUT TYPE=radio所組成
* CheckBox 勾選框 由一個LABLE和一個INPUT TYPE=checkbox所組成
* ButtonMcuObject 按鈕 由一個button內含一個i標籤所組成

## 元素屬性

### Input
* {inputClass} 輸入框外層DIV本身自帶 controls 可在此屬性給予className調整 預設值:col-lg-9
* {maxLength} 限制輸入框長度 預設值:250
* input本身會自帶 form-control 

### Lable
* {labelClass} LABLE本身自帶 control-label col-form-label 可在此屬性給予className調整 預設值:col-lg-3
* {textAlign} 可在此屬性調整置左置右... 預設值:riget
* {labelName} LABLE內容 必填

### SelectForMcu
* {selectClass} 下拉選單外層DIV本身自帶 controls 可在此屬性給予className調整 預設值:col-lg-9
* {options} 下拉選單內容以陣列方式給予 必填 ex:[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]

### Radio
* {fieldName} 單選按鈕INPUT中的name屬性 必填
* {radioValue} 單選按鈕INPUT中的value屬性 必填
* {radioName} 單選按鈕的LABEL顯示內容

### CheckBox
* {fieldName} 勾選框INPUT中的name屬性 必填
* {checkBoxValue} 勾選框INPUT中的value屬性 必填
* {checkBoxName} 勾選框的LABEL顯示內容

### ButtonMcuObject
* {buttonClass} BUTTON本身自帶 btn 可在此屬性給予className調整 預設值:btn-primary
* {buttonName} 按鈕內文字 必填
* {iconClass} BUTTON中I標籤的className

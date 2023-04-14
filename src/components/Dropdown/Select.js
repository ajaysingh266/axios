import React from 'react';
import Option from './Option'

const Select = (props) => {

  const [select, setSelect] = React.useState(props.defaultValue)

  // let value = props.value != undefined || props.value != null ? props.value : select;

  const onChangeValue = (e) => {
    if (props.onChange)
      props.onChange(e)
    setSelect(e.target.value)
    
   

  }

  return (
    <>
      <select className='mt-8 ml-4' >
        {
          props.children.map((item, index) => {
            if (item.type === "option")

              return <Option
                key={index}
                value={item.props.value}

                onChange={onChangeValue}

                disabled={item.props.disabled}
              >
                {item.props.children}
              </Option>
            else
              return item
          })
        }
      </select>
    </>
  )
}

export default Select;






// import { Select } from 'antd';
// const { Option } = Select;


// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

// const Selected = () => (
//   <>
//     <Select
//       defaultValue="lucy"
//       style={{
//         width: 120,
//       }}
//       onChange={handleChange}
//     >
//       <Option value="jack">Jack</Option>
//       <Option value="lucy">Lucy</Option>
//       <Option value="disabled" disabled>
//         Disabled
//       </Option>
//       <Option value="Yiminghe">yiminghe</Option>
//     </Select>
//     <Select
//       defaultValue="lucy"
//       style={{
//         width: 120,
//       }}
//       disabled
//     >
//       <Option value="lucy">Lucy</Option>
//     </Select>
//     <Select
//       defaultValue="lucy"
//       style={{
//         width: 120,
//       }}
//       loading
//     >
//       <Option value="lucy">Lucy</Option>
//     </Select>
//     <Select
//       defaultValue="lucy"
//       style={{
//         width: 120,
//       }}
//       allowClear
//     >
//       <Option value="lucy">Lucy</Option>
//     </Select>
//   </>
// );

// export default Selected;


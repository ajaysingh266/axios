import React from 'react'
import Input from "./Input"
// import  Sel from '../../library/select/index'


const Index = () => {
  return (
    <div>
      <Input type="text" placeholder=" max length is 6" maxLength={6} />
      <Input type="date" />
      <Input type="text" placeholder=" without max length" />
      <div className='inline-flex align-center'>
      
      <Input type=" email" placeholder="email" />
      {/* <Sel/> */}
      </div>

      <Input type="password" placeholder="password" maxLength={6} />
      


    </div>
  )
}

export default Index

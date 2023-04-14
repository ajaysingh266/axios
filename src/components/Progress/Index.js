import React from 'react'
import WeboProgress from "../Progress/Progress"

const Index = () => {
  return (
    <>
      <div className={"m-10"}>
               
                <WeboProgress percent={80} showInfo={false}/>

                {/*<Progress percent={50} status="active" />*/}
                {/*<Progress percent={70} status="exception" />*/}
                {/*<Progress percent={100} />*/}
                {/*<Progress percent={50} showInfo={false} />*/}
        </div>
    </>
  )
}

export default Index

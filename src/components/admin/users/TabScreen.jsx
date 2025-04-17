import React, { useEffect, useState } from 'react'
 
const TabScreen= ({options:{ title , tabIcon }} ) => {

  const [color, setColor] = useState("#FFF");
  const [focused, setFocused] = useState(false);
//   const [child, setChild] = useState();
//   const refreshData = ;
    // useEffect(() => {
    //     setChild(<MyCustomComponent title={title} child={tabIcon({color, focused})} />)
    // },[focused]);



  return <MyCustomComponent event={focused} setEvent={setFocused}  title={title} child={tabIcon({color, focused})} />
}

const MyCustomComponent = ({title, child, setEvent, event}) => {
    return <div onClick={() => { console.log("event triggerd", event); setEvent(!event)}} className='flex flex-col'>
        <span>{title}</span>
        {child}
    </div>
}

export default TabScreen
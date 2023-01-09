import React from 'react'
import UserContext from './UserContext'
const PageHist = () => {
    const { ref,setRef,cor,setCor,Hist,setHist } = React.useContext(UserContext)  
    const [Text,setText] = React.useState('')
    function reqListener() {
        setText(this.responseText)
        console.log(process.env.PUBLIC_URL + '/txt/' + Hist)
      }
      
      const req = new XMLHttpRequest();
      req.addEventListener("load", reqListener);
      req.open("GET",process.env.PUBLIC_URL + '/txt/' + Hist);
      req.send();

  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: Text }}></div>
    </div>
  )
}

export default PageHist
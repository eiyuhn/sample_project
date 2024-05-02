import { useEffect } from "react"


function FunctionalComponent() {

    useEffect(() => {
        
        console.log("Mounted")

    },[])

  return (
    <div>
        <h3>Functional Component</h3>
    </div>
  )
}

export default FunctionalComponent
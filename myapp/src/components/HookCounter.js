import React,{useState,useEffect,useContext} from 'react'
import { MessageContext, MessageProvider } from '../context/MessageContext';

export default function HookCounter() {

     const [counter, setCounter] = useState(10);
     const [fruit,setFruit]=useState("Banana");
     const message=useContext(MessageContext);
  
      console.log("In HookCounter :");
      


      useEffect(() => {
        document.title=` ${counter} times Hook Counter Clicked `;
        console.log("============HooksCounter ===="+counter);
      });


  
  
    return (

        <MessageProvider value="Hi All Welcome To Hoos in React">
                <div className="container">
            <font color="green" size="5">
               React Hooks Component 
              <br/><br/>
               <button onClick={()=>setCounter(counter+1)}> Clicked {counter} times  </button>

              <br/><br/>
              Fruit  : <input type="text"  defaultValue={fruit} onChange={(e)=>setFruit(e.target.value)}  name="fruit"/>
                &nbsp;&nbsp;&nbsp;              
              {fruit}
                <br/><br/>
                <i>
                Message  :{message}
                </i>
             </font>

            
        </div>
        </MessageProvider>
    
    )


}

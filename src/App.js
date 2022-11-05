import {useEffect, useState} from "react";
import './App.css';

function App() {

  const [state,setState] = useState({height:0,weight:0});
  const [bmi, setBMI] = useState(0);

  useEffect(()=>{
    console.log("height:",state.height,"weight:",state.weight)
  },[state])
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td>
            <label>age</label>
            </td>
            <td>
            <input type={"number"} id="age" />
            </td>
            <td>
            <label>ages: 2 to 120 </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Gender</label>
            </td>
            <td>
              <input type={"radio"}  value="Male"/><lable>Male</lable>
              <input type={"radio"} value="Female"/><label>Female</label>
            </td>
          </tr>
          <tr>
    <td>
    <lable>Height</lable>
    </td>
    <td>
    <input type={"number"} value={state.height} onChange={(event)=>{setState({...state,height:event.target.value})}}/>
    </td>
          </tr>
          <tr>
            <td>
<lable>Weight</lable>
            </td>
            <td>
            <input value={state.weight} type={"number"} onChange={(event)=>{setState({...state,weight:event.target.value})}}/>
            </td>
          </tr>
          <tr>
            <td>
          <button id="cal" onClick={()=>{
        var ht = state.height/100;
          var bmi = (state.weight/ht/ht).toFixed(1);
          setBMI(bmi);
        }}>Calculate</button>
        <button onClick={()=>{
          setState({height:0,weight:0})
          setBMI(0);
        }}>Clear</button>
        </td>
          </tr>
        </tbody>
      </table>
      <div className="right">
        <lable>Result</lable>
        <p>BMI = {bmi} kg/msq</p>
      </div>
    </div>
  );
}

export default App;

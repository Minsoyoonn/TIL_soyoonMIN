import React, {useState} from 'react';
import "./App.css";

function App(){
    let [글제목, 글제목변경]=useState(["나은", "건후", "진우"]);
    let [누른버튼, 누른버튼변경] = useState(0);
    let [따봉, 따봉변경]=useState(0)
    let [입력값, 입력값변경] = useState('');
    return (
        <div className="App">
            <div className="black-nav">
                개발 BLOG
            </div>
            {
                글제목.map((글, i)=>{
                    return (
                        <div className="list" key={i}>
                            <h3 onClick={()=>{누른버튼변경(i)}}> {글} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h3>
                            <p> 2월 19일 발행 </p>
                            <hr/>
                        </div>
                    )
                })
            }

            <div className="publish">
              <input onChange={(e)=>(입력값변경(e.target.value))}/>
              <button onClick={()=>{
                var arrayCopy=[...글제목];
                arrayCopy.unshift(입력값);
                글제목변경(arrayCopy);
              }}>저장</button>
            </div>

            <Modal 글제목={글제목} 누른버튼={누른버튼}></Modal>
        </div>
    )
}


function Modal(props){
    return(
        <div className="modal">
            <h2>{props.글제목[props.누른버튼]}</h2>
            <p>date</p>
            <p>contents</p>
        </div>
    )

}

export default App;
import { set } from "cypress/types/lodash";
import {useState} from "react";
import "../styles/App.css"

function App() {

    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [answer, setAnswer] = useState("");
    function getFirstName (e) {
        setFirstName(e.target.value);

    }
    function getSecondName(e) {
        setSecondName(e.target.value);
    }

    function calculate() {
        if(firstName.length === 0 || secondName.length === 0) {

            setAnswer("Please enter valid input");
        
            
        } else {
            let counter1 = {};
            let counter2 = {};
            for(let key in firstName) {
                if(!counter1[key]) {
                    counter1[key] = 1;
                } else {
                    counter1[key]++;
                }
            }
           for(let key in secondName) {
                if(!counter2[key]) {
                    counter2[key] = 1;
                } else {
                    counter2[key]++;
                }
            }

            for(let key in counter1) {
                if(counter1[key] >=1 && counter2[key]) {
                    counter1[key]--;
                    counter2[key]--;
                }
            }
            let totalLen = 0;
            for(let key in counter1) {
                totalLen += counter1[key];
            }
            for(let key in counter2) {
                totalLen += counter2[key];
            }
            let answer = totalLen % 6;
            if(answer === 1) {
                setAnswer("Friends");
            } else if(answer === 2) {
                setAnswer("Love");
            } else if(answer === 3) {
                setAnswer("Affection");
            } else if(answer === 4) {
                setAnswer("Marriage")
            } else if(answer === 5) {
                setAnswer("Enemy");
            }
            else {
                setAnswer("Siblings");
            }
    }
}
    function clear() {
        setFirstName("");
        setSecondName("");
        setAnswer("");
    }
    
        return(
            <div id="main">
               {/* Do not remove the main div */}

                <input type="text" onChange={getFirstName} data-test-id="input1" value={firstName} placeholder="Enter first name" />
                <input type="text" onChange={getSecondName} data-testid="input2" value={secondName} placeholder="Enter second name" />
                <button onClick={calculate} data-testid="calculate_relationship">Calculate Relationship Future</button>
                <button onClick={clear} data-testid="clear">Clear</button>

               <h3 data-testid="answer">{answer}</h3>
            </div>
        ) 
}

export default App;

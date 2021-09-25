import { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import What from "./components/What"; */
import Notfound from "./components/NotFound";
import Start from "./components/Start";
import Quote from "./components/Quote";
import axios from "axios";
import Picture from "./components/Picture";

function App() {
/*   const [hideText, setHideText] = useState("none");
  const [knowsAnswer, setKnowsAnswer] = useState(false); */
  const [quote, setQuote] = useState([])
 

  

  const url = "https://cors-anywhere.herokuapp.com/https://api.fisenko.net/quotes"
  const fetchData = () => {
      axios.get(url).then(res => {
        setQuote(res.data)
      }).catch(error => {
        console.log("something is wrong...", error)
      })
    }

  useEffect(() => {
    fetchData()  
  }, [])

  
 

/*   const displayText = () => {
    setHideText("block");
  };
  const highlightNext = () => {
    setKnowsAnswer(true);
  }; */


  return (
    <Router>
      <div className="App">
        
      <Header /> 
        <main>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/quote">
              <Quote
              quote={quote} />
            </Route>
            <Route exact path="/picture">
              <Picture/>
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

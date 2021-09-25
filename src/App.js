import { useState, useEffect } from "react";
/* import Header from "./components/Header"; */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import What from "./components/What";
import Notfound from "./components/NotFound";
import Start from "./components/Start";
import How from "./components/How";

function App() {
  const [hideText, setHideText] = useState("none");
  const [knowsAnswer, setKnowsAnswer] = useState(false);

  useEffect(() => {
    const url = "https://api.fisenko.net/quotes"

    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
      } catch (error){
        console.log("Something is not right...", error)
      }
    }

    fetchData()
  }, [])

  
 

  const displayText = () => {
    setHideText("block");
  };
  const highlightNext = () => {
    setKnowsAnswer(true);
  };


  return (
    <Router>
      <div className="App">
{/*         <Header
        changeColor={colorChange} /> */}
        <main>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route path="/what">
              <What
                showTools={displayText}
                hideText={hideText}
                ontoNext={highlightNext}
                knowsAnswer={knowsAnswer}
              />
            </Route>
            <Route exact path="/how">
              <How />
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

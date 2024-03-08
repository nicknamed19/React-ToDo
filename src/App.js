import { HashRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { NewTodoPage } from "./routes/NewTodoPage";
import { EditTodoPage } from "./routes/EditTodoPage";


function App() {

  return (
    <HashRouter>

      <Switch>

        <Route path="/" >
          <HomePage />
        </Route>

        <Route path="/new" >
          <NewTodoPage />
        </Route>

        <Route path="/edit/:id" >
          <EditTodoPage />
        </Route>

        <Route path="*" >
          <p>Not Found</p>
        </Route>

      </Switch>
      
    </HashRouter>
  ) 
}

export default App;

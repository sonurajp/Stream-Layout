import React from "react";
import { Router, Route, Switch } from "react-router-dom"; //Q12
import Header from "./Header";
import history from "../history";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            {/* why switch 286 */}
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route
              path="/streams/edit/:anything"
              exact
              component={StreamEdit}
            />
            {/* what :" anything" is varible we can put any varible after : can be :blaa video 263*/}
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/show/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

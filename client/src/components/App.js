import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const Header = () => <h2>Header Component</h2>
const SurveyNew = () => <h2>SurveyNew Component</h2>
const Dashboard = () => <h2>Dashboard Component</h2>
const Landing = () => <h2>Landing Component</h2>

function App () {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/survey/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
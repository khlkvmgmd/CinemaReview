
import { Route, Switch } from 'react-router-dom';

import Layout from 'antd/lib/layout/layout';

import { ROUTES } from './constants/ROUTES'
import { Header } from './components/Header/Header';


function App() {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
        <Header/>
        <Switch>
            <Route
                exact
                path={ROUTES.popular}
                render={() => <></>}
            />
            <Route
                exact
                path={ROUTES.news}
                render={() => <></>}
            />
            <Route
                exact
                path={ROUTES.reviews}
                render={() => <></>}
            />
            <Route
                exact
                path={ROUTES.watchlist}
                render={() => <></>}
            />
            <Route
                exact path={ROUTES.genres}
                render={() => <></>}
            />
            <Route
                exact path={ROUTES.subscriptions}
                render={() => <></>}
            />
        </Switch>
    </Layout>
  );
}

export default App;

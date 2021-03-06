import TopGames from './components/TopGames';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import FindChannels from './components/FindChannels';
import MediaPage from './components/SearchMedia';
import { useSelector, useDispatch } from 'react-redux';

function App() {
	//const loggedIn = useSelector((state) => state.isLogged);
	return (
		<Router>
			<Link to="/">
				<h2 className="home-btn text-color">TSD</h2>
			</Link>
			<Switch>
				<Route exact path="/">
					<Home headerTitle="Welcome!" />
				</Route>
				<Route path="/getGames">
					<TopGames headerTitle="Top Viewed Games Currently on Twitch" />
				</Route>
				<Route path="/getUser">
					<FindChannels />
				</Route>
				<Route path="/getMedia">
					<MediaPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

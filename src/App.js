import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Works from './pages/Works';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		console.log('new page');
	}, []);
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/works' element={<Works />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

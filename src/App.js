import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Join from "./pages/Join";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Join />} />
				<Route path='' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

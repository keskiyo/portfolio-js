import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './utils/scrollToTop'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import Contacts from './pages/Contacts'

import './styles/main.css'

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Navbar />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/project/:id' element={<ProjectPage />} />
					<Route path='/сontacts' element={<Contacts />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	)
}

export default App

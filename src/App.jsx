import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import WishesPage from './pages/WishesPage'
import FortunePage from './pages/FortunePage'
import LixiPage from './pages/LixiPage'
import ChecklistPage from './pages/ChecklistPage'
import FloatingElements from './components/FloatingElements'
import GoldenParticles from './components/GoldenParticles'
import MusicPlayer from './components/MusicPlayer'

function App() {
    return (
        <Router>
            <div className="min-h-screen w-full relative">
                {/* Background Image - bg1.jpg */}
                <div
                    className="fixed inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/images/bg2.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                {/* Floating decorative elements */}
                <FloatingElements />
                <GoldenParticles />
                <MusicPlayer />

                {/* Main Content */}
                <div className="relative z-10 w-full min-h-screen">
                    <Navigation />

                    <main className="pt-24 md:pt-28 pb-24 md:pb-8">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/wishes" element={<WishesPage />} />
                            <Route path="/fortune" element={<FortunePage />} />
                            <Route path="/lixi" element={<LixiPage />} />
                            <Route path="/checklist" element={<ChecklistPage />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    )
}

export default App

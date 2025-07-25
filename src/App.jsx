import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar'
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Skills from './components/Skills';
import FadeInSection from './components/FadeInSection';
import Services from './components/Services';
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {

  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <FadeInSection><Hero /></FadeInSection>
      </div>
      <div style={{ backgroundColor: "#C0BCB4" }}>
        <FadeInSection><Philosophy /></FadeInSection>
      </div>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <FadeInSection><Skills /></FadeInSection>
      </div>
      <div style={{ backgroundColor: "#C0BCB4" }}>
        <FadeInSection><Services /></FadeInSection>
      </div>
      <div style={{ backgroundColor: "#1F2937" }}>
        <FadeInSection><Contacts /></FadeInSection>
      </div>
      <Footer />
    </>
  )
}

export default App

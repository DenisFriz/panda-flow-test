import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import WhyBliss from './components/WhyBliss/WhyBliss.jsx';
import BlissHappens from './components/BlissHappens/BlissHappens.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import GettingWork from './components/GettingWork/GettingWork.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyBliss />
        <BlissHappens />
        <GettingWork />
        <Testimonials />
      </main>
    </>
  );
}

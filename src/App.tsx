import { Home } from './screens.tsx/Home';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom'
import { Resources } from './screens.tsx/Resources';
import { Contact } from './screens.tsx/Contact';


function App() {
  return (
    <div className='container mt-10'>
      <header className='flex justify-between items-center mb-5'>
        <img className='w-20' src="images/vector-abstract-company-logo-template-design-illustration.jpg " alt="Logo du Site" srcSet="" />
        <nav className='flex justify-end'>
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/'>Accueil</NavLink> <br />
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/resources'>Ressources</NavLink> <br />
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/contact'>Contact</NavLink>
        </nav>
      </header>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      <footer>

      </footer>
    </div>
  );
}

export default App;

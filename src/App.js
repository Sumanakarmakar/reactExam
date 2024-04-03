import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Common/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import Category from './Pages/Category';
import Footer from './Common/Footer';
import CategorySingle from './Pages/CategorySingle';
import Loader from './Common/Loader';

function App() {
  return (
    <div className="App">
      <Loader/>
      <ToastContainer/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/log_in' element={<Login/>} />
          <Route path='/register_page' element={<Register/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/blog_details/:id' element={<BlogDetails/>} />
          <Route path='/category' element={<Category/>} />
          <Route path='/category_details/:id' element={<CategorySingle/>} />
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

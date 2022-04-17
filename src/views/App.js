import './App.scss';
import Nav from './Navigation/Nav';
import TodoList from './TodoList/TodoList';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Users from './Users/Users';
import DetailUser from './Users/DetailUser';
import NotFound from './NotFound';

function App() {

  return (
    <>
        <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/users/:id" element={<DetailUser />} />
      </Routes>
    </>
  );
}

export default App;

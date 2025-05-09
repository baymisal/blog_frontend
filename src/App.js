import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./components/App.css";
import Welcome from "./components/Welcome";
import Bloglist from "./components/Bloglist";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./Admin/Admin.css";
import ReadAdmin from "./Admin/ReadAdmin";
// import EditAdmin from "./Admin/EditAdmin";
import AdminDash from "./Admin/AdminDash";

import "./Author/Author.css";
import Create from "./Author/Create";
import Edit from "./Author/Edit";
import ViewList from "./Author/ViewList";
import ViewComment  from "./Author/ViewComment ";
import AuthorDash from "./Author/AuthorDash";

import "./Guest/Guest.css";
import Login from "./Guest/Login"; 
import Register from './Guest/Register'; 
import ViewBlog from "./Guest/ViewBlog";
import CardDetail from "./Guest/CardDetail";

import ProtectedRoute from "./ProRoute/ProtectedRoute"; 

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/blogs" element={<Bloglist />} />
          <Route path="/guest" element={<Login />} />
          <Route path="/viewblog" element={<ViewBlog />} />
          <Route path="/carddetail/:id" element={<CardDetail />} />
          <Route path="/register" element={<Register />} /> 


         {/*  Protected Admin Routes */}
         <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminDash />} />
            <Route path="/admin/viewlist" element={<ViewList />} />
          <Route path="/admin/readadmin" element={<ReadAdmin />} />
          <Route path="/admin/editadmin/:blogId" element={<Edit />} />

          {/* <Route path="/admin/editadmin" element={<EditAdmin />} /> */}
        </Route>



          {/*  Protected Author Routes */}
          <Route element={<ProtectedRoute allowedRoles={["author"]} />}>
            <Route path="/author" element={<AuthorDash />} />
            <Route path="/author/createblog" element={<Create />} />
            <Route path="/author/viewlist" element={<ViewList />} />
            <Route path="/author/viewcomments/:blogId" element={<ViewComment />} />
            <Route path="/edit/:blogId" element={<Edit />} />
          </Route>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;

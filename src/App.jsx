// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Sidebar from "./Sidebar";
// import Register from "./components/Register";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//     <Router>
//       <div className="wrapper">
//         <Navbar />
//         <div className="content">
//           <Routes>
//             {/* Define routes for different components */}
//             <Route path="/" element={<Header />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>

//     </>
//   );
// }

// export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Body from "./Body";
// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Sidebar from "./components/Sidebar";
// import Visa from "./components/Visa";
// import  Media from "./components/MediaNet";
// import  Deutsche from "./components/Deutsche";
// import  BNY from "./components/BNY";
// import Register from "./components/Register";

// import Microsoft from "./components/Microsoft";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TopicPage from "./components/TopicPage";
// import QuestionPage from "./components/QuestionPage";
// import { useState } from "react";  // Import useState to manage sidebar state

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);  // Manage sidebar state

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);  // Toggle sidebar state
//   };

//   return (
//     <>
//       <Router>
//         {/* <div className="wrapper"> */}
//           <Navbar />
//           {/* Pass the toggleSidebar function to Sidebar */}
//           <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//           <div
//             // className="content"
//             // style={{
//             //   marginLeft: sidebarOpen ? "270px" : "0px",  // Adjust content margin
//             //   padding: "20px",
//             //   transition: "margin-left 0.3s ease",  // Smooth transition
//             // }}

//           >
//             <Body></Body>
//             <Routes>
//               {/* <Route path="/" element={<Header />} /> */}
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               {/* Define route for topics and questions */}
//               <Route path="/topic/" element={<Visa />} />
//               <Route path="/topic/media" element={<Media />} />
//               <Route path="/topic/deutsche" element={<Deutsche />} />
//               <Route path="/topic/Microsoft" element={<Microsoft/>} />
//               <Route path="/topic/BNY" element={<BNY/>} />
//               <Route path="/topic/:topicName" element={<TopicPage />} />
//               {/* <Route path="/topic/:topicName/:questionName" element={<QuestionPage />} /> */}
//             </Routes>
//           </div>

//           <Footer />
//         {/* </div> */}
//       </Router>
//     </>
//   );
// }

// export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";
// // <<<<<<< HEAD
// // =======
// // import Visa from "./components/Visa";
// // import  Media from "./components/MediaNet";
// // import  Deutsche from "./components/Deutsche";
// // import  BNY from "./components/BNY";
// // import Register from "./components/Register";

// // import Microsoft from "./components/Microsoft";
// import Salesforce from "./components/Salesforce";
// import Cisco from "./components/Cisco";
// import Amazon from "./components/Amazon";
// import Google from "./components/Google";
// import WellsFargo from "./components/WellsFargo";
// import UnifyApps from "./components/UnifyApps";
// // >>>>>>> 03037414b9fcb18d975739cd78f1bece9a9ec985
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react"; // Import useState to manage sidebar state

// import Body from "./Body";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Visa from "./components/Visa";
// import Media from "./components/MediaNet";
// import Deutsche from "./components/Deutsche";
// import BNY from "./components/BNY";
// import Microsoft from "./components/Microsoft";
// import TopicPage from "./components/TopicPage";

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false); // Manage sidebar state

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen); // Toggle sidebar state
//   };

//   return (
// // <<<<<<< HEAD
//     // <Router>
//     //   {/* Main wrapper with flexbox */}
//     //   <div className="app-wrapper">
//     //     <Navbar />
//     //     <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//     //     <div className="content">
//     //       <Body></Body>
//     //       <Routes>
//     //         {/* <Route path="/" element={<Header />} />  */}
//     //         <Route path="/login" element={<Login />} />
//     //         <Route path="/register" element={<Register />} />
//     //         <Route path="/topic/" element={<Visa />} />
//     //         <Route path="/topic/media" element={<Media />} />
//     //         <Route path="/topic/deutsche" element={<Deutsche />} />
//     //         <Route path="/topic/Microsoft" element={<Microsoft />} />
//     //         <Route path="/topic/BNY" element={<BNY />} />
//     //         <Route path="/topic/:topicName" element={<TopicPage />} />
//     //       </Routes>
//     //     </div>
//     //     <Footer />
//     //   </div>
//     // </Router>
// // =======
//     <>
//       <Router>
//         {/* <div className="wrapper"> */}
//           {/* <Navbar />
//           {/* Pass the toggleSidebar function to Sidebar */}
//           {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />  */} */}
//           <div
//             // className="content"
//             // style={{
//             //   marginLeft: sidebarOpen ? "270px" : "0px",  // Adjust content margin
//             //   padding: "20px",
//             //   transition: "margin-left 0.3s ease",  // Smooth transition
//             // }}
//           >
//              <Body></Body>
//             <Routes>
//               {/* <Route path="/" element={<Header />} /> */}
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               {/* Define route for topics and questions */}
//               <Route path="/topic/" element={<Visa />} />
//               <Route path="/topic/media" element={<Media />} />
//               <Route path="/topic/deutsche" element={<Deutsche />} />
//               <Route path="/topic/Unifyapps" element={<UnifyApps />} />
//               <Route path="/topic/Salesforce" element={<Salesforce/>} />
//               <Route path="/topic/Cisco" element={<Cisco/>} />
//               <Route path="/topic/Microsoft" element={<Microsoft/>} />
//               <Route path="/topic/Amazon" element={<Amazon/>} />
//               <Route path="/topic/Google" element={<Google/>} />
//               <Route path="/topic/WellsFargo" element={<WellsFargo/>} />
//               <Route path="/topic/BNY" element={<BNY/>} />
//               <Route path="/topic/:topicName" element={<TopicPage />} />
//               {/* <Route path="/topic/:topicName/:questionName" element={<QuestionPage />} /> */}
//             </Routes>
//           </div>

//           <Footer />
//         {/* </div> */}
//       </Router>
//     </>
// // >>>>>>> 03037414b9fcb18d975739cd78f1bece9a9ec985
//   );
// }

// export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react"; // Import useState to manage sidebar state

// Import components
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Visa from "./components/Visa";
import Media from "./components/MediaNet";
import Deutsche from "./components/Deutsche";
import BNY from "./components/BNY";
import Microsoft from "./components/Microsoft";
import Salesforce from "./components/Salesforce";
import Cisco from "./components/Cisco";
import Amazon from "./components/Amazon";
import Google from "./components/Google";
import WellsFargo from "./components/WellsFargo";
import UnifyApps from "./components/UnifyApps";
import TopicPage from "./components/TopicPage";
import Intuit from "./components/Intuit";
import MasterCard from "./components/MasterCard";
import UiPath from "./components/UiPath";
import Jlr from "./components/Jlr";


function App() {
  // const [sidebarOpen, setSidebarOpen] = useState(false); // Manage sidebar state

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen); // Toggle sidebar state
  // };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) // Click is outside sidebar
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    
    <Router>
      {/* Main wrapper with flexbox */}
      <div className="app-wrapper">
        {/* Navbar component */}
        <Navbar />

        {/* Sidebar component */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div
          className="content"
          style={{
            marginLeft: isSidebarOpen ? "270px" : "0px", // Adjust content margin based on sidebar state
            padding: "0px",
            transition: "margin-left 0.3s ease", // Smooth transition
          }}
        >
          {/* Routes for different pages */}
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
            <Route path="/topic" element={<Visa />} />
            <Route path="/topic/media" element={<Media />} />
            <Route path="/topic/deutsche" element={<Deutsche />} />
            <Route path="/topic/Unifyapps" element={<UnifyApps />} />
            <Route path="/topic/Salesforce" element={<Salesforce />} />
            <Route path="/topic/Cisco" element={<Cisco />} />
            <Route path="/topic/Microsoft" element={<Microsoft />} />
            <Route path="/topic/Amazon" element={<Amazon />} />
            <Route path="/topic/Google" element={<Google />} />
            <Route path="/topic/WellsFargo" element={<WellsFargo />} />
            <Route path="/topic/BNY" element={<BNY />} />
            <Route path="/topic/:topicName" element={<TopicPage />} />
            <Route path="/topic/UiPath" element={<UiPath/>} />
              <Route path="/topic/MasterCard" element={<MasterCard/>} />
              <Route path="/topic/Intuit" element={<Intuit />} />
              <Route path="/topic/Jlr" element={<Jlr />} />
          </Routes>
        </div>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

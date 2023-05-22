import PostPanel from "./components/PostPanel";
import SidePanel from "./components/SidePanel";
import TrendingBar from "./components/TrendingBar";

function App() {
  return (
    <div className="row g-0 vh-100 justify-content-center bg-black ">
      {/* Side Panel */}
      <div className="col-3 text-white border-end border-dark-subtle  ">
        <SidePanel/>
      </div>
     {/* Main Area */}
      <div className="col-5 pb-5 bg-black vh-100 overflow-y-scroll ">
        <PostPanel/>
      </div>
      <div className="col-3 border-start border-dark-subtle">
          <TrendingBar/>
      </div>
     </div>
     
    
    // <div className="position-relative">
    //   {/* Side Panel */}
    //   <div className="w-25 bg-black bg-gradient text-white vh-100 position-fixed">
    //     <SidePanel/>
    //   </div>
    //  {/* Main Area */}
    //  <div className=" container w-75 bg-dark vh-100 position-absolute end-0">
    //     <div className="row bg-dark">
    //       <div className="col-8 pb-5 bg-gradient">
    //         <PostPanel/>
    //       </div>
    //       <div className="col-4 bg-black bg-gradient position-fixed end-0 w-25 vh-100">
    //         <TrendingBar/>
    //       </div>
          
    //     </div>
    //  </div>
    // </div>
  );
}

export default App;

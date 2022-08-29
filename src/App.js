// Parent Component
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainAlbums from "./components/Albums/MainAlbums";
import MainLayout from "./components/Layout/MainLayout";
import Post from "./components/Post/Post";

const App = () => {
  // const [getLimit, setlimit] = useState(1);
  // const [getMyName, setMyName] = useState("Ronaldo Widianto");
  // const inputNameRef = useRef(getMyName);
  // useEffect(() => {
  //   console.log("render ketika browser dibuka satu kali saja");
  //   setMyName(inputNameRef.current.value);
  // }, [getLimit]);
  return (
    <>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>HOMEPAGE</h1>} />
            <Route path="/albums" element={<MainAlbums />} />
            <Route path="/posts" element={<Post />} />
            <Route
              path="/*"
              element={
                <h1 className="text-center text-danger">404 NOT FOUND</h1>
              }
            />
          </Routes>
        </BrowserRouter>
      </MainLayout>
      {/* <center>
        {getMyName}
        {getLimit}
        <br />
        <input ref={inputNameRef} defaultValue={inputNameRef.current} />
        <button onClick={() => setlimit((prev) => prev + 1)}>
          Naikkan Limit
        </button>
        <button onClick={() => setlimit((prev) => prev - 1)}>
          Turunkan Limit
        </button>
        <Testing title="Haloo Bang" description="apaan sih bang dodo hahehe" />
      </center> */}
    </>
  );
};

export default App;
// function testing() {
//   return <h1>testing</h1>;
// }

// class App extends React.Component {
//   componentWillMount() {
//     console.log("will mount");
//   }
//   componentDidMount() {
//     console.log("did mount");
//   }
//   render() {
//     return (
//       <React.Fragment>
//         {testing()}
//         <h2>dfashdjfhash</h2>
//       </React.Fragment>
//     );
//   }
// }

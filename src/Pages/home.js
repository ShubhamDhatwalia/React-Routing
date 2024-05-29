import {Outlet, Link } from "react-router-dom";

function Home(){
    return(
        <>

        <h2>Home</h2>
        <Link to="/blogs">Click Here</Link>

        <Outlet/>
        </>
    );
};

export default Home;
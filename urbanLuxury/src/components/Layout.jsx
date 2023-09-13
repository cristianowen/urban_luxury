import { Link, Outlet} from "react-router-dom";

const Layout = ()=>{
    return(
        <>
        <nav>
            <Link to = "/Causas">Causas</Link>
            <Link to = "/Soluciones">Soluciones</Link>
            <Link to = "/Donaciones">Donaciones</Link>
        </nav>
        <Outlet/>
        </>
    )
}
export default Layout
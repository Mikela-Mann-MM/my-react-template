import { useLocation } from 'react-router';
import LogoutButton from './LogoutButton';
import Navigation from './Navigation'

export default function Header(){
    const location  = useLocation();

    //console.log(location.pathname);

    /* return location.pathname === '/login' ? null : (
        <header>
        <Navigation />
        <LogoutButton />
        <h1>My App</h1>
        </header>
    ) */

    /* conditional rendering of Navigation and LogoutButton  */
    return (
        <header>
        <h1>My App</h1>
        { location.pathname !== '/login' && (  
            <>     
            <Navigation />
            <LogoutButton />
            </>
        )}        
        </header>
        )
    }

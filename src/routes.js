import NotFound from './components/NotFound.svelte';
import Footer from './components/Footer.svelte';
import Header from './components/Header.svelte';
import Nav from './components/Nav.svelte';
import Home from './components/Home.svelte';
import Team from './components/Team.svelte';
import Partners from './components/Partners.svelte';

let routes
routes = new Map()
routes.set('/team', Team);
routes.set('/community', Partners);
routes.set('/partners', Partners);
routes.set('/', Home)


// Catch-all, must be last
routes.set('*', NotFound)

export default routes

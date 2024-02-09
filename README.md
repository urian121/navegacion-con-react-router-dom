## Implementando Navegación en ReactJS con react-router-dom

##### El proyecto consiste en crear una aplicación web utilizando ReactJS y la librería 'react-router-dom' para la gestión de la navegación. Con 'react-router-dom', podemos crear rutas dinámicas en nuestra aplicación React, lo que nos permite cambiar entre diferentes componentes o páginas de forma fluida sin necesidad de recargar la página completa.

### Pasos para Implementar react-router-dom

1.  ##### Instalar `react-router-dom` usando npm o yarn

        npm install react-router-dom

2.  ##### Configuración de Rutas

    En tu archivo src/App.js (o donde quieras configurar las rutas), importa las dependencias necesarias
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

3.  ##### Envuelve tu aplicación con el componente Router

        <Router>
        	<Switch>
        		{/* Define tus rutas aquí */}
        	</Switch>
        </Router>

4.  ##### Definición de Rutas:

    Utiliza el componente Route para definir las rutas y los componentes asociados a ellas dentro del componente Switch.
    <Route exact path="/" element={<Inicio />} />
    <Route path="/acerca" element={<AcercaDe />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route element={PaginaNoEncontrada} />

5.  ##### Creación de Componentes

    Crea los componentes que representarán las diferentes páginas de tu aplicación, como Inicio, AcercaDe, Contacto, etc.

6.  ##### Navegación
    Utiliza los componentes Link o NavLink proporcionados por `react-router-dom` para la navegación entre las distintas rutas.
    import { Link } from 'react-router-dom';
    <Link to="/acerca">Acerca de</Link>

##### Con estos pasos, habrás implementado la navegación utilizando 'react-router-dom' en tu aplicación ReactJS. ¡Disfruta explorando las posibilidades que ofrece para crear una experiencia de usuario fluida y dinámica!

##### React Router

React Router es la librería más popular para la gestión de rutas en un proyecto de React, esta tiene tres componentes esenciales:

    <BrowserRouter/> → Conecta nuestra aplicación a la URL del navegador, es decir mantiene la interfaz de usuario en sincronía con la URL del navegador mediante la API History de HTML5.
    <Route/> → Representa una ruta en el árbol, necesita al menos las siguientes propiedades path y element, para representar una ruta.
    <Routes/> → Genera un árbol de rutas y a partir de este nos permite reemplazar la vista con el componente que coincide con la URL de nuestra barra de navegación y nos va a renderizar solamente dicho componente.

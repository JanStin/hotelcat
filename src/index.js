// import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './theme/fonts.sass';
import './theme/global.sass';
// import jQuery from "jquery";
// import popper from 'popper.js';
// import bootstrap from 'bootstrap';
// import owlCarousel from "owl.carousel";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import 'owl.carousel';
// import 'bootstrap/dist/css/bootstrap.css';
// require ('bootstrap/dist/js/bootstrap.min.js');
// require ('bootstrap/dist/css/bootstrap.css');
// import popper from 'popper.js';
// import bootstrap from 'bootstrap';
// require ''
// import 'bootstrap';

// require('owl.carousel/dist/owl.carousel');


// Подключение всех SASS и js файлов из components
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}


requireAll(require.context('./components', true, /\.(sass)$/));
requireAll(require.context('./components', true, /\.(jsx?)$/));
requireAll(require.context('./pages', true, /\.(jsx?)$/));


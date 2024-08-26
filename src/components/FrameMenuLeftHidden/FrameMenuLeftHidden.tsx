import image_profile from '../../assets/images/image-profile.png';

const FrameMenuLeftHidden = () => {

    return <>
        <div className="menu-left hidden">
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-home"></i>
                <p>Principal</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-fire"></i>
                <p>Tendencias</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-stack"></i>
                <p>Suscriptiones</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-youtube-play"></i>
                <p>Originals</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-video_library"></i>
                <p>Bibioteca</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-stack"></i>
                <p>Historial</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-film"></i>
                <p>Tus videos</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-stack"></i>
                <p>Tus películas</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-clock2"></i>
                <p>Ver más tarde</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-stack"></i>
                <p>Mostrar más</p>
            </a>
            <p className="section-tittle">suscripciones</p>
            <a href="" className="menu-left-item">
                <img src={image_profile} alt="" className="image-profile-suscription" />
                <p>Canal 1</p>
            </a>
            <a href="" className="menu-left-item">
                <img src={image_profile} alt="" className="image-profile-suscription" />
                <p>Canal 2</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-stack"></i>
                <p>Explorar canales</p>
            </a>
            <p className="section-tittle">más de youtube</p>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-stack"></i>
                <p>Videojuegos</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-feed"></i>
                <p>En vivo</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-stack"></i>
                <p>Aprendizaje</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-cog"></i>
                <p>Configuración</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-flag"></i>
                <p>Historial de denuncias</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-help"></i>
                <p>Ayuda</p>
            </a>
            <a href="" className="menu-left-item">
                <i className="icon-menu-left icon-message-square"></i>
                <p>Enviar comentarios</p>
            </a>
            <div className="section-tittle conditions">
                <a href="" className="condition">Acerca de</a>
                <a href="" className="condition">Prensa</a>
                <a href="" className="condition">Derechos de autor</a>
                <a href="" className="condition">Comunícate con nosotros</a>
                <a href="" className="condition">Creadores</a>
                <a href="" className="condition">Publicidad</a>
                <a href="" className="condition">Desarrolladores</a> <br /><br />
                <a href="" className="condition">Condiciones</a>
                <a href="" className="condition">Privacidad</a>
                <a href="" className="condition">Política y seguridad</a>
                <a href="" className="condition">Cómo funciona YouTube</a>
                <a href="" className="condition">Prueba funciones nuevas</a>
            </div>
            <div className="copyright">
                <i className="icon-copyright icon-stack"></i>
                <p className="text-copyright">2020 Google LLC</p>
            </div>
        </div>
    </>
}
export default FrameMenuLeftHidden;
import image_profile from '../../assets/images/image-profile.png';

const FrameMenuProfileHidden = () => {

    return <>
        <div className="menu-profile hidden">
            <div className="account">
                <img src={image_profile} alt="" className="image-profile" />
                <p className="name-account">Pedro Enrique</p>
                <p className="email-account">pvecaceres@gmail.com</p>
                <p className="admin">Administra tu Cuenta de Google</p>
            </div>
            <div className="options-account-container">
                <div className="account-options">
                    <a href="" className="account-options-item">
                        <i className="icon-account-options icon-user-square"></i>
                        <p>Tu canal</p>
                    </a>
                    <a href="" className="account-options-item">
                        <i className="icon-account-options icon-currency-dollar"></i>
                        <p>Compras y membresías</p>
                    </a>
                    <a href="" className="account-options-item">
                        <i className="icon-account-options icon-cog"></i>
                        <p>YouTube Studio</p>
                    </a>
                    <a href="" className="account-options-item">
                        <i className="icon-account-options icon-user-square"></i>
                        <p>Cambiar de cuenta</p>
                    </a>
                    <a href="" className="account-options-item">
                        <i className="icon-account-options icon-exit_to_app"></i>
                        <p>Salir</p>
                    </a>
                </div>
                <div className="config-global">
                    <a href="" className="config-global-item">
                        <i className="icon-config-global icon-stack"></i>
                        <p>Aspecto: Tema del dispositivo</p>
                    </a>
                    <a href="" className="config-global-item">
                        <i className="icon-config-global icon-language"></i>
                        <p>Idiona: Español latinoamericano</p>
                    </a>
                    <a href="" className="config-global-item">
                        <i className="icon-config-global icon-sphere"></i>
                        <p>Ubicación: Colombia</p>
                    </a>
                    <a href="" className="config-global-item">
                        <i className="icon-config-global icon-cog"></i>
                        <p>Configuración</p>
                    </a>
                    <a href="" className="config-global-item">
                        <i className="icon-config-global icon-stack"></i>
                        <p>Tus datos en YouTube</p>
                    </a>
                    <a href="" className="config-global-item">
                        <i className="icon-config-global icon-help"></i>
                        <p>Ayuda</p>
                    </a>
                    <a href="" className="config-global-item">
                        <i className="icon-config-global icon-message-square"></i>
                        <p>Enviar comentarios</p>
                    </a>
                    <a href="" className="config-global-item">
                        <i className="icon-config-global icon-stack"></i>
                        <p>Combinaciones de teclas</p>
                    </a>
                </div>
                <p className="restrict">Modo restringido: desactivado</p>
            </div>
        </div>
    </>
}
export default FrameMenuProfileHidden;
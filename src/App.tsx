
import { FaArrowRight, FaFilePdf } from 'react-icons/fa6';
import './App.css'
import fotoPerfil from './assets/foto-perfil.jpeg'
import avatarPerfil from './assets/avatar.png'
import miniaturaLya from './assets/miniatura-lya.png';
import miniaturaAlochat from './assets/miniatura-alochat.png';
import miniaturaPreguntame from './assets/miniatura-preguntame.png';
import { FaDatabase, FaLaptopCode, FaServer, FaTools, FaLinkedin } from "react-icons/fa"
import { GiMustache } from 'react-icons/gi';
import { SiDotnet, SiJavascript } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BeatLoader } from "react-spinners";
import cvFile from './assets/MURUA_THOMAS_CV.pdf';

function App() {
  const goToLink = (link: any) => {
    window.open(link, '_blank')
  } 

  const descargarCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "MURUA_THOMAS_CV.pdf";
    link.click();
  };

  const [cargando, setCargando] = useState(false);
  const [camposVacios, setCamposVacios] = useState(false);

  const handleSubmitForm = (e:any) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value;
    const correo = (form.elements.namedItem("correo") as HTMLInputElement).value;
    const propuesta = (form.elements.namedItem("propuesta") as HTMLTextAreaElement).value;

    if(!nombre.trim() || !correo.trim() || !propuesta.trim()){
      setCamposVacios(true);
      return;
    }

    setCamposVacios(false);
    setCargando(true);

    emailjs.sendForm(
      "service_re5hepl", 
      "template_7zn2tvq",
      form,
      "Qx1J0ya5G-D9Wg_-W"
    ).then(
      (result) => {
        console.log("Mensaje enviado correctamente", result.text);
        setTimeout(() => {
          toast.success("Mensaje enviado con exito!");
          setCargando(false)
          form.reset();
        }, 1500)
      },
      (error) => {
        toast.error("Error al enviar el mensaje. Intente nuevamente mas tarde.");
        console.log("Error al enviar el mensaje", error.text);
        setCargando(false);
      }
    )
  }
  

  return (
    <div className='total-container'>


{    /* ============ HEADER ============  */}

      <div className='header'>
        <div className='header-user-brand'>
          <h1>Murua Thomas</h1>
          <p>DESARROLLADOR FULLSTACK</p>
        </div>
        <div className='header-buttons'>
          <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="#about-me">SOBRE MÍ</a></li>
            <li><a href="#technologies">TECNOLOGÍAS</a></li>
            <li><a href="#projects">PROYECTOS</a></li>
            <li><a href="#contacto">CONTACTO</a></li>
          </ul>
        </div>
      </div>


    {/* ============ USUARIO ============  */}

<div className='total'>
      <div className='seccion user-presentation'>
        <div className='user-presentation-section'>
          <div className='user-card'>
            <h1 className='separado'>WANTED</h1> 
            <hr />
            <p className='subtitulo remarcarClaro separado'>HIRED or FIRED</p>
            <hr />
            <img src={fotoPerfil} alt="" />
            <p className='name-card'>THOMAS "EL DEV DE TEXAS" MURUA</p>
            <p className='subtitulo remarcarClaro separado'>DESARROLLO FULLSTACK</p>
            <hr />
            <p>REWARD</p>
          </div>
          <div className='user-info'>
            <h1>El <span className='remarcarOro2'>Nuevo</span> Backero del Condado</h1>
            <h3 className='separado'>FRONTEND · BACKEND · BASE DE DATOS</h3>
            <p>
              Recién llegado al condado, este <span className='remarcarOro2'>backquero</span> valentía ha logrado. 
              Junto a su teclado y café, no hay desafíos que no pueda vencer. 
              Especializado en desarrollo backend y frontend, domina <span className='remarcarOro2'>POO</span>, <span className='remarcarOro2'>base de datos</span> y construcción de <span className='remarcarOro2'>aplicaciones web</span>. 
              <br />
              <br />
              El programador más suelto del oeste, maneja distintas tecnologías y resuelve problemas con <span className='remarcarOro2'>lógica</span> y <span className='remarcarOro2'>precisión</span>.
              <br />
              Prefiere el trabajo en grupo antes que la soledad del desierto, enfrentando cada desafío hasta verlo resuelto. 
              <br />
              <br />
              Porque en este pueblo los problemas no se esquivan, se <span className='remarcarOro2'>resuelven</span>.
            </p>

          </div>
        </div>
      </div>

      <div id='about-me' className="divider">
        <div className="divider-line"></div>
        <div className="divider-orn">✦ ✦ ✦</div>
        <div className="divider-line"></div>
      </div>

    <div className='about-me-container'>
        <div className='title-section'>
          <p>★ PERFIL ★</p>
          <h1>Sobre Mí</h1>
        </div>
      <div className='about-me-avatar-info-container'>
        <div className='avatar-info-container'>
          <div className='info-container'>
            <h1><span className='remarcarOro'>Thomas Murua</span></h1>
            <p className='about-me-text-container'>
              ¡Hola! Soy <span className='remarcarOro2'>desarrollador web fullstack</span> enfocado en la programación backend, utilizando tecnologías
              como <span className='remarcarOro2'><code>Java/Spring-MVC, C#/.NET y Node.js</code></span>. Me centro mucho en entender la lógica de un proyecto. 
              Luego la aplico con <span className='remarcarOro2'>buenas prácticas de programación, seguridad y testing <code>(JUnit/XUnit)</code></span>, 
              manteniendo código bajo principios <span className='remarcarOro2'>SOLID</span>.
              <br />
              <br />
              También disfruto aplicar <span className='remarcarOro2'>diseño atractivo y responsive</span> para los usuarios, desarrollando una UX profesional 
              que genere una buena primera impresión al cliente. Utilizo tecnologías como 
              <span className='remarcarOro2'> <code>Angular/TypeScript, React, Thymeleaf y JavaScript</code></span>. 
              <br />
              <br />
              Me gusta conocer y aprender nuevas tecnologías. Disfruto los retos, ya que los considero un activo
              importante para el <span className='remarcarOro2'>aprendizaje y crecimiento</span> como programador. Actualmente estoy cursando mi último año 
              de <span className='remarcarOro2'>Tecnicatura en Desarrollo Web</span>, complementando mis prácticas con fundamentos académicos.
              <br />
              <br />
              Me caracterizo por <span className='remarcarOro2'>trabajar en equipo</span>, asumir responsabilidades y aportar soluciones claras en entornos colaborativos. 
              Estoy abierto a <span className='remarcarOro2'>nuevas oportunidades laborales o proyectos freelance</span>. 
              <br />
              Si desea tenerme en cuenta, <a className='goToContacto' href="#contacto">¡no dude en enviarme su propuesta!</a>
            </p>
          </div>
        <img src={avatarPerfil} alt="" />
        </div>
      </div>
    </div>


      <div id='technologies' className="divider">
        <div className="divider-line"></div>
        <div className="divider-orn">✦ ✦ ✦</div>
        <div className="divider-line"></div>
      </div>
    
    
    {/* ============ TECNOLOGIAS ============  */}


      <div className='technologies'>
        <div className='title-section'>
          <p>★ ARSENAL ★</p>
          <h1>Tecnologías</h1>
          <p className='subtitle'>Tecnologías y Herramientas que manejo con destreza</p>
        </div>

        <div className='technologies-card-container'>
          <div className='technologie-card-container'>
            <div className='title-with-icon'>
              <FaLaptopCode className="icon-title" color="#E34F26" size={30} />
              <h3>Frontend</h3>
            </div>
            <div className='technologies-card'>
                {/* <div className='technologie'>
                  <i className="devicon-html5-plain colored"></i>
                  <p>HTML5</p>
                  </div>
                  <div className='technologie'>
                  <i className="devicon-css3-plain colored"></i>
                  <p>CSS3</p>
                  </div> */}
                <div className='technologie'>
                  <SiJavascript color="#F7DF1E" size={18} />  
                  <p>JavaScript</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-angularjs-plain colored"></i>
                  <p>Angular</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-react-original colored"></i>
                  <p>React</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-bootstrap-plain colored"></i>
                  <p>Bootstrap</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-typescript-plain colored"></i>
                  <p>TypeScript</p>
                </div>
            </div>  
          </div>

          <div className='technologie-card-container'>
            <div className='title-with-icon'>
              <FaServer className="icon-title" color="#68A063" size={30} />
              <h3>Backend</h3>
            </div>
            <div className='technologies-card'>
              <div className='technologie'>
                  <i className="devicon-java-plain colored"></i>
                  <p>Java</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-php-plain colored"></i>
                  <p>PHP</p>
                </div>
                <div className='technologie'>
                  <SiDotnet size={18} color="#512BD4" />
                  <p>.NET</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-csharp-plain colored"></i>
                  <p>C#</p>
                </div>
                <div className='technologie'>
                  <SiJavascript color="#F7DF1E" size={18} />  
                  <p>JavaScript</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-nodejs-plain colored"></i>
                  <p>Node.js</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-express-original "></i>
                  <p>Express</p>
                </div>
            </div>  
          </div>

          <div className='technologie-card-container'>
            <div className='title-with-icon'>
              <FaDatabase className="icon-title" color="#4479A1" size={30} />
              <h3>Base de datos</h3>
            </div>
            <div className='technologies-card'>
                <div className='technologie'>
                  <i className="devicon-mysql-plain colored"></i>
                  <p>MySQL</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-postgresql-plain colored"></i>
                  <p>PostgreSQL</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-prisma-original colored"></i>
                  <p>Prisma</p>
                </div>
            </div>  
          </div>

          <div className='technologie-card-container'>
            <div className='title-with-icon'>
              <FaTools className="icon-title" color="#F0C060" size={30} />
              <h3>Herramientas</h3>
            </div>
            <div className='technologies-card'>
              <div className='technologie'>
                  <i className="devicon-git-plain colored"></i>
                  <i className="devicon-github-original "></i>
                  <p>Git/GitHub</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-docker-plain colored"></i>
                  <p>Docker</p>
                </div>
                <div className='technologie'>
                  <i className="devicon-postman-plain colored"></i>
                  <p>Postman</p>
                </div>
            </div>  
          </div>

        </div>
      </div>
      <div  className="divider">
        <div className="divider-line"></div>
        <div className="divider-orn">✦ ✦ ✦</div>
        <div id='projects' className="divider-line"></div>
      </div>


    {/* ============ PROYECTOS ============  */}


      <div className='projects'>
        <div className='title-section'>
          <p>★ HISTORIAL ★</p>
          <h1>Proyectos Hechos</h1>
          <p className='subtitle'>Mis aventuras y creaciones en el lejano oeste digital</p>
        </div>

      <div className='total-container-projects'>
        <div className='projects-card-container'>
          <div className='project-container'>
            <img src={miniaturaLya} alt="" />
            <div className='context-project'>
              <div className='info-project'>
                <p className='subtitulo-title'>TIENDA ONLINE</p>
                <h2 className='titulo remarcarTexto'>Luz y Armonía</h2>
                <p className='subtitulo texto-descriptivo'>
                  Luz & Armonía es un e-commerce desarrollado con Angular y Node.js para la venta de velas, difusores y body splash. 
                  Incluye catálogo con buscador, carrito, compras con Mercado Pago, historial, favoritos y comentarios. 
                  Cuenta además con un panel de administración para gestionar productos, stock y pedidos.
                </p>
              </div>
              <hr />
              <div className='technologies-applied'>
                <div className='technologie'>
                    <i className="devicon-angularjs-plain colored"></i>
                    <p>Angular</p>
                </div>
                
                <div className='technologie'>
                    <i className="devicon-nodejs-plain colored"></i>
                    <p>Node.js</p>
                </div>

                <div className='technologie'>
                    <i className="devicon-postgresql-plain colored"></i>
                    <p>PostgreSQL</p>
                </div>

                <div className='technologie'>
                    <i className="devicon-prisma-original colored"></i>
                    <p>Prisma</p>
                </div>
                <div className='technologie'>
                    <i className="devicon-express-original "></i>
                    <p>Express</p>
                  </div>
              </div>
              <div className='action-buttons'>
                <button
                  onClick={() => goToLink("https://github.com/TomasZ-png/Luz-y-armonia-Angular-Node-Project")}
                  ><i className="devicon-github-original"></i> <p>Ver en GitHub</p></button>
                {/* <button><FaDesktop /> <p>Ir a la página</p></button> */}
              </div>
            </div>
          </div>

          <div className='project-container'>
            <img src={miniaturaAlochat} alt="" />
            <div className='context-project'>
              <div className='info-project'>
                <p className='subtitulo-title'>CHAT ONLINE</p>
                <h2 className='titulo remarcarTexto'>AloChat</h2>
                <p className='subtitulo texto-descriptivo'>
                  AloChat es una aplicación de mensajería en tiempo real que permite agregar contactos mediante número de teléfono 
                  y comunicarse en chats individuales o grupales. 
                  Soporta envío de mensajes e imágenes, con una interfaz moderna y dinámica orientada a una experiencia fluida.
                </p>
              </div>
              <hr />
              <div className='technologies-applied'>
                <div className='technologie'>
                  <i className="devicon-react-original colored"></i>
                  <p>React</p>
                </div>
                
                <div className='technologie'>
                    <i className="devicon-nodejs-plain colored"></i>
                    <p>Node.js</p>
                </div>

                <div className='technologie'>
                    <i className="devicon-postgresql-plain colored"></i>
                    <p>PostgreSQL</p>
                </div>
              </div>
              <div className='action-buttons'>
                <button
                  onClick={() => goToLink("https://github.com/TomasZ-png/chat-project-react")}                
                  ><i className="devicon-github-original"></i> <p>Ver en GitHub</p></button>
                {/* <button onClick={() => goToLink(url_chat_project)}><FaDesktop /> <p>Ir a la página</p></button> */}
              </div>
            </div>
          </div>
          <div className='project-container'>
            <img src={miniaturaPreguntame} alt="" />
            <div className='context-project'>
              <div className='info-project'>
                <p className='subtitulo-title'>VIDEOJUEGO</p>
                <h2 className='titulo remarcarTexto'>Preguntame</h2>
                <p className='subtitulo texto-descriptivo'>
                  Preguntame es una aplicación web en PHP inspirada en Preguntados, donde el usuario responde preguntas por categorías 
                  mediante una ruleta para avanzar de nivel. Incluye perfil con estadísticas y ubicación,
                  sugerencia y reporte de contenido, y un panel de administración con métricas, gráficos y reportes en PDF.
                </p>
              </div>
              <hr />
              <div className='technologies-applied'>
                <div className='technologie'>
                  <i className="devicon-php-plain colored"></i>
                  <p>PHP</p>
                </div>
                
                <div className='technologie'>
                  <GiMustache color="#B84C1A" size={20} />                  
                  <p>Mustache</p>
                </div>

                <div className='technologie'>
                  <SiJavascript color="#F7DF1E" size={18} />  
                  <p>JavaScript</p>
                </div>

                <div className='technologie'>
                  <i className="devicon-mysql-plain colored"></i>
                  <p>MySQL</p>
                </div>

              </div>
              <div className='action-buttons'>
                <button
                  onClick={() => goToLink("https://github.com/TomasZ-png/PW2_PREGUNTADOS")}                
                ><i className="devicon-github-original"></i> <p>Ver en GitHub</p></button>
                {/* <button><FaDesktop /> <p>Ir a la página</p></button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-orn">✦ ✦ ✦</div>
        <div className="divider-line"></div>
      </div>


    {/* ============ CONTACTO ============  */}



      <div id='contacto' className='contact'>
        <div className='title-section'>
          <p>★ MENSAJERIA ★</p>
          <h1>Contacto</h1>
          <p className='subtitle'>Enviá tu telegrama o propuesta al sheriff del código</p>
        </div>

        <div className='contact-container'>
          <div className='contact-subcontainer'>
            <div className='telegrama'>
              <h1 className='separado titulo'>TELEGRAMA</h1> 
              <p className='debajoTitulo subtitulo remarcarClaro separado'>OFICINA DE CORREO DEL OESTE - 1876</p>
              <hr />
              <form onSubmit={handleSubmitForm}>
                <label htmlFor="name" className='separado'>TU NOMBRE:</label>
                <input id='name' type="text" name='nombre' placeholder='Ej: Jesse James'/>
                <label htmlFor="email" className='separado'>TU CORREO:</label>
                <input id='email' type="email" name='correo' placeholder='Ej: jjames@gmail.com'/>
                <label htmlFor="text" className='separado'>TU PROPUESTA:</label>
                <textarea name="propuesta" id="text" placeholder='Ej: Tengo un puesto/proyecto para usted...'></textarea>
                {camposVacios && (
                  <p className='error'>*Todos los campos son obligatorios</p>
                )}
                {cargando ?(
                  <div className='loader'>
                    <BeatLoader color="#5C3318" />
                  </div>
                ) : (
                  <button type='submit' className='titulo separado'>
                    ENVIAR TELEGRAMA
                  </button>
                )}
                
                <ToastContainer position="bottom-left" autoClose={4000}/>
              </form>
            </div>
            <div className='contacts-container'>
              <h2 className='titulo'>Conoceme mas en <span className='remarcarOro'>Mis Redes Sociales</span></h2>
              <div className='contacts-section'>
                
                <div onClick={() => goToLink("mailto: muruathomasn@gmail.com")} className='ucontact-container'>
                  <div className='first-section-contact'>
                    <MdEmail  color="#D44638" size={25} />
                    <div className='info-title-contact'>
                      <p className='title-contact separado'>EMAIL</p>
                      <p className='info-contact'>Mi correo electrónico laboral</p>
                    </div>
                  </div>
                  <FaArrowRight className='arrow-contact' size={30} color="rgba(212,168,75,0.2)" />
                </div>

                <div onClick={() => (goToLink("https://www.linkedin.com/in/thomas-murua-278a83261/"))} className='ucontact-container'>
                  <div className='first-section-contact'>
                    <FaLinkedin color="#0A66C2" size={25} />
                    <div className='info-title-contact'>
                      <p className='title-contact separado'>LINKEDIN</p>
                      <p className='info-contact'>Mi perfil de LinkedIn</p>
                    </div>
                  </div>
                  <FaArrowRight className='arrow-contact' size={30} color="rgba(212,168,75,0.2)" />
                </div>
              
                <div onClick={() => goToLink("https://github.com/TomasZ-png")} className='ucontact-container'>
                  <div className='first-section-contact'>
                    <i className="devicon-github-original" style={{fontSize: "25px", color: "rgb(179, 2, 164)"}}></i>
                    <div className='info-title-contact'>
                      <p className='title-contact separado'>GITHUB</p>
                      <p className='info-contact'>Mi perfil personal de GitHub</p>
                    </div>
                  </div>
                  <FaArrowRight className='arrow-contact' size={30} color="rgba(212,168,75,0.2)" />
                </div>

                <div onClick={descargarCV} className='ucontact-container'>
                  <div className='first-section-contact'>
                    <FaFilePdf color="#FF0000" size={25} />
                    <div className='info-title-contact'>
                      <p className='title-contact separado'>CURRICULUM</p>
                      <p className='info-contact'>Descargar mi curriculum vitae</p>
                    </div>
                  </div>
                  <FaArrowRight className='arrow-contact' size={30} color="rgba(212,168,75,0.2)" style={{ transform: "rotate(90deg)"}}/>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default App

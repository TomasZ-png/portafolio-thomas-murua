
import './App.css'
import fotoPerfil from './assets/foto-perfil.png'
import { FaDatabase, FaLaptopCode, FaServer, FaTools } from "react-icons/fa"

function App() {

  return (
    <div className='total-container'>
      <div className='header'>
        <div className='header-user-brand'>
          <h1>Murua Thomas</h1>
          <p>DESARROLLADOR FULLSTACK</p>
        </div>
        <div className='header-buttons'>
          <ul>
            <li><a href="#">SOBRE MÍ</a></li>
            <li><a href="#technologies">TECNOLOGÍAS</a></li>
            <li><a href="#">PROYECTOS</a></li>
            <li><a href="#">CONTACTAME</a></li>
          </ul>
        </div>
      </div>
      <div id='about-me' className='user-presentation'>
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
            <h3 className='separado'>FRONTEND · BACKEND · DATABASES</h3>
            <p>
              Recien llegado al condado, este <span className='remarcarOro2'>backquero</span> valentia ha logrado. 
              Junto a su teclado y café, no hay desafíos que no pueda vencer. 
              Especializado en desarrollo backend y frontend, domina <span className='remarcarOro2'>POO</span>, <span className='remarcarOro2'>base de datos</span> y construcción de <span className='remarcarOro2'>aplicaciones web</span>. 
              <br />
              <br />
              El programador mas suelto del oeste, maneja distintas tecnologías y resuelve problemas con <span className='remarcarOro2'>lógica</span> y <span className='remarcarOro2'>precisión</span>.
              <br />
              Prefiere el trabajo en grupo antes que la soledad del desierto, enfrentando cada desafío hasta verlo resuelto. 
              <br />
              <br />
              Porque en este pueblo los problemas no se esquivan, se <span className='remarcarOro2'>resuelven</span>.
            </p>
          </div>
        </div>
      </div>

      <div id='technologies' className="divider">
        <div className="divider-line"></div>
        <div className="divider-orn">✦ ✦ ✦</div>
        <div className="divider-line"></div>
      </div>

      <div className='technologies'>
        <div className='title-section'>
          <p>★ ARSENAL ★</p>
          <h1>Tecnologías</h1>
        </div>

        <div className='technologies-card-container'>
          <div className='technologie-card-container'>
            <div className='title-with-icon'>
              <FaLaptopCode className="icon-title" color="#E34F26" size={30} />
              <h3>Frontend</h3>
            </div>
            <div className='technologies-card'>
                <div className='technologie'>
                  <p>HTML5</p>
                </div>
                <div className='technologie'>
                  <p>CSS3</p>
                </div>
                <div className='technologie'>
                  <p>Angular</p>
                </div>
                <div className='technologie'>
                  <p>React</p>
                </div>
                <div className='technologie'>
                  <p>Boostrap</p>
                </div>
                <div className='technologie'>
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
                  <p>Java</p>
                </div>
                <div className='technologie'>
                  <p>Php</p>
                </div>
                <div className='technologie'>
                  <p>C#</p>
                </div>
                <div className='technologie'>
                  <p>Node.js</p>
                </div>
                <div className='technologie'>
                  <p>Express</p>
                </div>
            </div>  
          </div>

          <div className='technologie-card-container'>
            <div className='title-with-icon'>
              <FaDatabase className="icon-title" color="#4479A1" size={30} />
              <h3>Databases</h3>
            </div>
            <div className='technologies-card'>
                <div className='technologie'>
                  <p>MySQL</p>
                </div>
                <div className='technologie'>
                  <p>PostgreSQL</p>
                </div>
                <div className='technologie'>
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
                  <p>Git/GitHub</p>
                </div>
                <div className='technologie'>
                  <p>Docker</p>
                </div>
                <div className='technologie'>
                  <p>Postman</p>
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

      <div className='projects'>

      </div>
      <div className='contact'>

      </div>
    </div>
  )
}

export default App

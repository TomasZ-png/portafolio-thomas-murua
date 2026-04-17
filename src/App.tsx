
import './App.css'
import fotoPerfil from './assets/foto-perfil.png'

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
            <li>SOBRE MÍ</li>
            <li>HABILIDADES</li>
            <li>PROYECTOS</li>
            <li>CONTACTAME</li>
          </ul>
        </div>
      </div>
      <div className='user-presentation'>
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

      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-orn">✦ ✦ ✦</div>
        <div className="divider-line"></div>
      </div>

      <div className='technologies'>

      </div>
      <div className='projects'>

      </div>
      <div className='contact'>

      </div>
    </div>
  )
}

export default App

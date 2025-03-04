import './Box.css'


function Box ({data}) {
    return (
      <>
      {
          data.map((elem, index) => {
              return (
                <div className="box">
                  <div className="box-item" key={index}>
                      <img className='img' src={`https://smartcode.am/public/image/courses/${elem.img}.svg`} />
                      <h3 className='title'>{elem.title}</h3>
                      <h4 className='dasntac'>Դասընթաց</h4>
                      <a  classNamehref="dasntac">Դիտել</a>
                  
                  </div>

                  </div>
              )
          })
      }
  </>
    );
  };

export default Box







import './Box.css'


const Box = (props) => {
    

    return(
        <div className='box-holder' >
<h1> {props.el.title}</h1>
        </div>
    )
}

export default Box
import './Box.css'


const Box = (props) => {
    

    return(
        <div className='box-holder' >
<h3> {props.el.title}</h3>
        </div>
    )
}

export default Box
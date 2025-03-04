
import Box from './Box/Box'
import './Middle.css'

const Middle = ({data}) => {

    return (
        
        <div className="mid-holder">
            <div className="second-text">
                <h1>Ծրագրավորման դասնթացներ</h1>
                <h3 className="text2">Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</h3>
            </div>

            <div className="mid-part2">

                <div className="boxs">
                    <div className="item">
                       <Box  data={data} />
                       </div>
                       <div className="lessons-img">
                    <img src="https://smartcode.am/public/image/per4.svg" />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Middle  
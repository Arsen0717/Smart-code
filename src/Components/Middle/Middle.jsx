import Box from "../Box/Box"


const Middle = (props) => {

    return (
        
        <div className="mid-holder">
            <div className="second-text">
                <h1>Ծրագրավորման դասնթացներ</h1>
                <h3 className="text2">Ծրագրավորման դասնթացներ</h3>
            </div>

            <div className="mid-part2">

                <div className="boxs">
                      {
                        props.data.map((el) => {
                        return <Box el={el}/>
                        })
                      }
                </div>
            </div>
        </div>



    )
}

export default Middle  
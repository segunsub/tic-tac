import Square from "./Square"

function Board() {
    return (
        <>
            <div className="border-row">
                <Square sqr='0'/>
                <Square sqr='1'/>
                <Square sqr='2'/>
            </div>
            <div className="border-row">
                 <Square sqr='3'/>
                 <Square sqr='4'/>
                 <Square sqr='5'/>
            </div>
            <div className="border-row">
                  <Square sqr='6'/>
                  <Square sqr='7'/>
                  <Square sqr='8'/>
            </div>
        </>
    )
}

export default Board

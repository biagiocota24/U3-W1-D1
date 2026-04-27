import React from "react";

class ImgComponents extends React.Component {
    render(){
        return(
            <img src={this.props.src} alt={this.props.alt} />
        )
    }
}

export default ImgComponents
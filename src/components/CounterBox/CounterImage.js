import React from 'react';

class CounterImage extends React.Component{
    render() {
        return (
            <div className="counter-image">
                <img alt="Counter.svg" src={this.props.imageSrc}></img>
            </div>
        );
    }
}

export default CounterImage;
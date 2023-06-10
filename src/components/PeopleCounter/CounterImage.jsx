import {Component} from 'react';

class CounterImage extends Component{
    render() {
        return (
            <div className="counter-image">
                <img alt="Counter.svg" src={this.props.imageSrc}></img>
            </div>
        );
    }
}

export default CounterImage;
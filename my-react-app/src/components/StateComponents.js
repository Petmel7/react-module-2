import { Component } from "react";

export class StateComponents extends Component {

    static defaultProps = {
        title: 'Default props title'
    }

constructor(props) {
    super(props);

    this.state = {
        counter: 0,
    }
}

    render() {

        const { title } = this.props;
        const { counter } = this.state;

        return (
            <>
                <h1>hello Class Components</h1>
                <h2>
                    {/* {this.state.counter} */}
                    {counter}
                    {/* {this.props.title} */}
                    {title}
                </h2>
            </>
        )
    }
}

// export default StateComponents;
import React from "React"

class ClassApp extends React.Component {
    state = {
        num: 0
    }
    componentDidMount() {
        console.log("mounted");
        this.setState({num: this.state.num + 1 });
    }
    componentDidUpdate() {
        console.log("updated")
    }
    render() {
        return (
            <div>
                <h1>class app</h1>
                <h2>{this.state.num}</h2>
                <button onClick={() => this.setState({num: this.state.num +1 })}></button>
            </div>
        )
    }
}

export default ClassApp
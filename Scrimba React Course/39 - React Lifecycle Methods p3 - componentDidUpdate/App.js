import React from "react"
import randomcolor from "randomcolor"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    /**
     * Called on first mount.
     */
    componentDidMount() {
        console.log("Mounted")
    }
    
    /**
    * Called after render() after every .state change.
    * IMPORTANT - using this.setState() in this method, without wrapping it in a conditional, will result in an infinite loop.
    */
    componentDidUpdate(prevProps, prevState) {
        console.log("Did Update")

        //SOLUTION - only run the color change logic if prev Count differs from current count. Aka, only run the color change code once, even though this method will be called twice during the increment() logic execution.
        // This works because the first time the this method is called, we changed the count. The second time this method is called, we changed the color, but not the count. So prevState.count and this.state.count will be equal.
        if (prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
    }
    
    /**
    * Called after every .state change.
    */
    render() {
        console.log("Render")
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
            </div>
        )
    }
}

export default App
import React, {Component} from "react"

// https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    /*
    * Runs once after the component first renders (mounts).
    * Does not run on rerendering, because component did not unmount and remount.
    * Common use case: GET the data needed to correctly display.
    */
    componentDidMount() {
        
    }

    /*
    * Runs the first time this component is mounted.
    * Runs every time this component recieves props.
    * Runs every time a parent component passes props to a child component.
    * This is deprecated and removed in React 17 
    */
    componentWillRecieveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
            //do something important
        }

    }

    /*
    * React often re-renders unnecessarily. This method gives the dev control to do so when applicable.
    * Return true if want to update.
    * Return false if don't need to update.
    */
    shouldComponentUpdate() {

    }

    /*
    * Place to teardown or cleanup code before component disappears.
    * Common Use Case: set up an event listener in componentDidMount(), need to remove here.
    */
    componentWillUnmount() {

    }
    
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App
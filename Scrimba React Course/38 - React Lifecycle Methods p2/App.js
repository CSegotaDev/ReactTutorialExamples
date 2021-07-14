import React, {Component} from "react"

// https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    /***************
    * CHANGED METHOD
    * **************
    * Added 'static'
    * Return the new, updated state based upon the props
    * React team discourages the use of this method.
    * https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    * https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    */
    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
    }

    /***************
    * NEW METHOD
    * **************
    * create a backup of the current way things are
    * https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    */
    getSnapshotBeforeUpdate() {

    }

    /************************************
    * REMOVED && DEPRECATED IN REACT 16.3
    ************************************/
    // componentWillMount() {

    // }
    
    /*
    * Runs once after the component first renders (mounts).
    * Does not run on rerendering, because component did not unmount and remount.
    * Common use case: GET the data needed to correctly display.
    */
    componentDidMount() {
        
    }

    /************************************
    * REMOVED && DEPRECATED IN REACT 16.3
    ************************************/
    // componentWillRecieveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         //do something important
    //     }

    // }

    /*
    * React often re-renders unnecessarily. This method gives the dev control to do so when applicable.
    * Return true if want to update.
    * Return false if don't need to update.
    */
    shouldComponentUpdate() {

    }

    /************************************
    * REMOVED && DEPRECATED IN REACT 16.3
    ************************************/
    // componentWillUpdate() {

    // }

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
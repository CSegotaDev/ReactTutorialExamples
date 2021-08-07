import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            dietaryRestrictions: {
                vegetarian: false,
                kosher: false,
                glutenFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState(() => {
            return {
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" 
                        name="firstName" 
                        value={this.state.firstName}       
                        onChange={this.handleChange}/>
                    <br />
                    <input 
                        placeholder="Last Name" 
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}/>
                    <br />
                    <input 
                        placeholder="Age"
                        name="age"
                        value={this.state.age}
                        type="number"
                        onChange={this.handleChange}/>
                    <br />
                    
                    <label>Male</label>
                    <input 
                        type="radio" 
                        name="gender" 
                        onChange={this.handleChange} 
                        value="male"
                        checked={this.state.gender === "male"}/>
                    <label> Female</label>
                    <input 
                        type="radio" 
                        name="gender" 
                        onChange={this.handleChange} 
                        value="female"
                        checked={this.state.gender === "female"}/>
                    <br />
                    
                    <label>Locations</label>
                    <select name="location" value={this.state.location} onChange={this.handleChange}>
                        <option value="Mexico">Mexico</option>
                        <option value="Canada">Canada</option>
                        <option value="Chile">Chile</option>
                    </select>
                    <br />
                    
                    <p>Dietary Restrictions (check all that apply):</p>
                    <input name="dietaryRestrictions.vegetarian" 
                        type="checkbox" 
                        checked={this.state.dietaryRestrictions.vegetarian} 
                        onChange={this.handleChange}/>
                    <label> Vegetarian</label>
                    <br/>
                    <input type="checkbox"
                        name="kosher"
                        checked={this.state.kosher}
                        onChange={this.handleChange}/>
                    <label> Kosher</label>
                    <br/>
                    <input type="checkbox"
                        name="glutenFree"
                        value={this.state.glutenFree}
                        onChange={this.handleChange}/>
                    <label> Gluten-free</label>
                    
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {`${this.state.firstName} ${this.state.lastName}`}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.vegetarian ? 'vegetarian; ' : ''}
                    {this.state.kosher ? 'kosher; ' : ''}
                    {this.state.glutenFree ? 'gluten-free; ' : ''}
                </p>
            </main>
        )
    }
}

export default App

import React, { Component } from 'react'

export class AddTodo extends Component {
state={

    title: ''

}
    onChange = (e) => this.setState({
            title: e.target.value 
    });


    render() {
        return (
            <div>
                <form style={{ display: 'flex'}}>
                    <input 
                        type="text"
                        name="title"
                        style = {{flex: ' 10',padding : '5px'}}
                        placeholder="Add todo"
                        vlue= {this.state.title}
                        onChange= {this.OnChange}
                         />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{fllex:1}}
                        />
                </form>
            </div>
        )
    }
}

export default AddTodo

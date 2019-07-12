import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todos extends Component {
  render(){
    return(
      <ul className="Todos">
        { this.props.props.todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(Todos)  //connect para conectar nosso componente no redux
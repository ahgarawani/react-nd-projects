import './App.css'
import NavBar from './components/NavBar'
import ListPosts from './components/ListPosts'
import { Route } from 'react-router-dom'
import { React, Component } from 'react'
import { connect } from 'react-redux'

import { receiveAllCategories } from './actions/categories'

class App extends Component {

  componentDidMount(){
    this.props.getCategories()
  }

  render() {
    const { categories } = this.props
    
    return (
      <div className="App">
        <NavBar categories={categories}/>
        <Route key='root' exact path='/'>
          <ListPosts key='root' title='Home' categoryId='root'/>
        </Route>
        {categories.map((category) => (
          <Route key={category.path} exact path={`/${category.path}`}>
            <ListPosts key={category.path} title={category.name} categoryId={category.path}/>
          </Route>
        ))}
        <Route key='create' exact path='/create'>
          <ListPosts key='create' title='Create a Post' categoryId='create'/>
        </Route>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.displayedCategories.map(category => ({
      name: category.name.charAt(0).toUpperCase() + category.name.slice(1),
      path: category.path
    }))
  }
}

function mapDispatchToProps(dispatch) {
  return {
      getCategories: () => (dispatch(receiveAllCategories()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
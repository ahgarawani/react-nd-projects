import { React, Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    const { categories } = this.props

    return (
      <div className='navbar'>
        <nav>
          <NavLink exact key='root' className='nav-category' to='/' activeClassName='active-category'>
            Home
          </NavLink>
          {categories.map((category) => (
            <NavLink key={category.path} className='nav-category' to={`/${category.path}`} activeClassName='active-category'>
              {category.name}
            </NavLink>
          ))}
          <NavLink key='create' className='nav-category' to='/create' activeClassName='active-category'>
            Create a Post
          </NavLink>
        </nav>
      </div>
    )
  }
}

export default NavBar
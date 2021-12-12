import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachblog} = props
  const {id, title, description, publishedDate, author} = eachblog
  return (
    <Link to={`/blogs/${id}`}>
      <li className="blog-item">
        <div className="title-container">
          <h1>{title}</h1>
          <p>{publishedDate}</p>
          <p>{description}</p>
          <p>{author}</p>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem

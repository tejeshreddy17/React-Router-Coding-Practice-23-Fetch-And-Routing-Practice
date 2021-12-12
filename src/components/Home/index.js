import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import BlogItem from '../BlogItem'

import UserInfo from '../UserInfo'

class Home extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount = () => {
    this.gettingBlogs()
  }

  gettingBlogs = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachData => ({
      author: eachData.author,
      avatarUrl: eachData.avatar_url,
      id: eachData.id,
      imageUrl: eachData.image_url,
      title: eachData.title,
    }))
    console.log(formattedData)
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(eachblog => (
            <BlogItem eachblog={eachblog} key={eachblog.id} />
          ))
        )}
      </div>
    )
  }
}

export default Home

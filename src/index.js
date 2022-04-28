import Post from './post'
import json from './assets/json'
import WebpackLogo from './assets/webpack-logo.png'
import './styles/styles.css'

const post = new Post('Webpack post title', WebpackLogo)
console.log(post.toString())
console.log('JSON', json)
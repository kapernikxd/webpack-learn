import Post from './Post'
import json from './assets/json'
import './styles/styles.css'
import jpg from './assets/Screenshot_3.png'

const post = new Post('Webpack Post Title', jpg)

console.log('Post to string:', post.toString())

console.log('JSON:', json)
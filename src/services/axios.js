import axios from 'axios'

const getAllPicture = () => axios.get('https://vichi-project-meln.herokuapp.com/api/photos')

const fetch = {
    getAllPicture
} 

export default fetch
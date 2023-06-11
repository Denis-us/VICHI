import axios from 'axios'

const getAllPicture = () => axios.get('https://vichi-project-meln.herokuapp.com/api/photos')
// const getOneProject = () => axios.get('https://vichi-project-meln.herokuapp.com/api/photos')

const fetch = {
    getAllPicture,
    // getOneProject
} 

export default fetch
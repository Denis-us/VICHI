import axios from 'axios'

const getAllPicture = () => axios.get('https://vichi-project-meln.herokuapp.com/api/photos')
// const getOneProject = () => axios.get('https://vichi-project-meln.herokuapp.com/api/photos')
const googleDriveFiles = () => axios.get('https://vichi-project-meln.herokuapp.com/api/google-drive/callback')

const fetch = {
    getAllPicture,
    // getOneProject,
    googleDriveFiles
} 

export default fetch
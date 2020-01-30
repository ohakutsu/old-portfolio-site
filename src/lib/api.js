import axios from 'axios'

const apiUrl = 'https://us-central1-ohakutsuportfolio.cloudfunctions.net'

export default class Api {
  static async getProfileData () {
    const response = await axios.get(`${apiUrl}/profile`)
    const data = response.data

    if (data.status_code === 200) {
      const { imageUrl: imageSrc, desc: description } = data.data.profile
      return { imageSrc, description }
    } else {
      return { imageSrc: undefined, description: undefined }
    }
  }

  static getPostsData () {

  }
}

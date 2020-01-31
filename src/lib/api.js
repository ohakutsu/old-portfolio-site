import axios from 'axios'

const apiUrl = 'https://us-central1-ohakutsuportfolio.cloudfunctions.net'

export default class Api {
  static async getProfileData () {
    const profilePromise = axios.get(`${apiUrl}/profile`)
    const linksPromise = axios.get(`${apiUrl}/links`)

    const profileResponse = await profilePromise
    const linksResponse = await linksPromise

    const profileData = profileResponse.data
    const linksData = linksResponse.data

    let imageSrc, description
    let snsLinks = []

    if (profileData.status_code === 200) {
      const { imageUrl, desc } = profileData.data.profile
      imageSrc = imageUrl
      description = desc
    }
    if (linksData.status_code === 200) {
      const { links } = linksData.data
      snsLinks = links
    }

    return { imageSrc, description, snsLinks }
  }

  static getPostsData () {

  }
}

import axios from 'axios'

export default class Api {
  static async getProfileData () {
    const apiUrl = 'https://us-central1-ohakutsuportfolio.cloudfunctions.net'

    const profilePromise = axios.get(`${apiUrl}/profile`)
    const linksPromise = axios.get(`${apiUrl}/links`)

    const profileResponse = await profilePromise
    const linksResponse = await linksPromise

    let imageSrc, description, snsLinks

    if (profileResponse.status === 200) {
      const profileData = profileResponse.data

      const { imageUrl, desc } = profileData.data.profile
      imageSrc = imageUrl
      description = desc
    }
    if (linksResponse.status === 200) {
      const linksData = linksResponse.data

      const { links } = linksData.data
      snsLinks = links
    }

    return { imageSrc, description, snsLinks }
  }

  static async getPostsData () {
    const apiUrl = 'https://qiita.com/api/v2/items?page=1&per_page=5&query=qiita+user%3Aohakutsu'

    const response = await axios.get(apiUrl)

    let posts

    if (response.status === 200) {
      const data = response.data

      posts = data.map(d => {
        const date = d.created_at
        const title = d.title
        const provider = 'Qiita'
        const link = d.url

        return { date, title, provider, link }
      })
    }

    return { posts }
  }
}

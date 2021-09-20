import http from '../http-common.js'

class TutorialDataService {
  getAll () {
    return http.get('/tutorials')
  }

  create (data) {
    return http.post('/tutorials', data)
  }

}

export default new TutorialDataService()

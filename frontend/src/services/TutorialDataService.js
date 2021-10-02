import http from '../http-common.js'

class TutorialDataService {
  getAll () {
    return http.get('/tutorials')
  }

  delete () {
    return http.get('/tutorials/$id')
  }

  create (data) {
    return http.post('/tutorials', data)
  }

}

export default new TutorialDataService()

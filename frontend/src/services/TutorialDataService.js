import http from '../http-common.js'

class TutorialDataService {
  getAll () {
    return http.get('/tutorials')
  }

  delete () {
    return http.get('/tutorials/$id')
  }


 

}

export default new TutorialDataService()

import http from '../http-common.js'

class TutorialDataService {
  getAll () {
    return http.get('/tutorials')
  }

 

}

export default new TutorialDataService()

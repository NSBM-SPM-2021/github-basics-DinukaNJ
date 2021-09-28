import http from '../http-common.js'

class TutorialDataService {
  getAll () {
    return http.get('/tutorials')
  }

  delete () {
    return http.get('/tutorials/$id')
  }

  add () {
    return http.get('/addtutorials')
  }


 

}

export default new TutorialDataService()

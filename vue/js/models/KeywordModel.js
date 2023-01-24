export default {
    data: [
      {keyword: '귀여운 명수'}, 
      {keyword: '까칠한 명수'}, 
      {keyword: '신이난 명수'},
      {keyword: '라푼젤 명수'},
    ],
  
    list() {
      return new Promise(res => {
        setTimeout(() => {
          res(this.data)
        }, 200)
      })
    }
  }
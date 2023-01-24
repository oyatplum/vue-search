const data = [
    {
      id: 1,
      name: '늦은 명수',
      image: 'https://www.kocca.kr/trend/vol14/img/s132/img_01.png'
    },
    {
      id: 2,
      name: '이득 명수',
      image: 'https://blog.kakaocdn.net/dn/dkIDYn/btq7qv71JNR/5krwWyLflHqAKpYGQ5hL80/img.jpg'
    }
  ]
  
  export default {
    list(query) {
      return new Promise(res => {
        setTimeout(()=> {
          res(data)
        }, 200);
      })
    }
  }
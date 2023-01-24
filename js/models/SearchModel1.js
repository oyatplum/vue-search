const data = [
    {
      id: 1,
      name: '덩실 명수',
      image: 'https://pbs.twimg.com/media/BzJV3hICIAEAf06.jpg:large'
    },
    {
      id: 2,
      name: '코오오올 명수',
      image: 'http://ccimg.hellomarket.com/images/2018/item/s9/02/13/14/2820_2978110_1.jpg?size=s6'
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
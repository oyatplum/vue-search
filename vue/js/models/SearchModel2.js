const data = [
    {
      id: 1,
      name: '정색 명수',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZYGD8kZ3O_kZFEqydHVv5z5OPqYT7MpyyQ&usqp=CAU'
    },
    {
      id: 2,
      name: '어쩔 명수',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCq0TrABu3rj2zuQfTMdHUmCRHisXR-HE3Q&usqp=CAU'
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
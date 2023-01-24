const data = [
    {
      id: 1,
      name: '개신난 명수',
      image: 'https://i.pinimg.com/736x/54/c5/c2/54c5c25cbdd9bdd194f4518a84f50b69.jpg'
    },
    {
      id: 2,
      name: '대박 명수',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XHj4-b_jQDllkTPqyk-FHsRRLXM2gvPaRA&usqp=CAU'
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
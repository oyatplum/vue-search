const data = [
    {
      id: 1,
      name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
      image: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbnkoAN%2FbtrD8NQilmP%2F4cu1H0kAzzWXBhp2jmWgJ0%2Fimg.jpg'
    },
    {
      id: 2,
      name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
      image: 'https://mblogthumb-phinf.pstatic.net/MjAyMTEyMDZfMjAg/MDAxNjM4NzU3ODM5Njc2.0PINUt2ERbuGVNCdq57Zjj98NdVZogc28bwm215i0Acg.HlNctFLrW2eEiGPMnhqKzdSK2c5w6itaF19qw90sjAog.PNG.superkitchen_kr/%25EC%258A%2588%25ED%258D%25BC%25ED%2582%25A4%25EC%25B9%259C_%25ED%2599%2588%25ED%258C%258C%25ED%258B%25B0%25EC%2584%25B8%25ED%258A%25B8_2.png?type=w800'
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
const data = [
    {
      id: 1,
      name: '어질 명수',
      image: 'https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTJfMTg5/MDAxNjEzMTE1NDM1MzM3.htyjVvyWtaBlrGP_DMOAGZzHUXsRnFvaFMoJFTWFKe4g.k5C40_rZ2T5HxAcsg-da4MVvafSow_NsIrQ1hdgAsacg.JPEG.min_jung1231/IMG_6856.JPG?type=w800'
    },
    {
      id: 2,
      name: '대단 명수',
      image: 'https://mblogthumb-phinf.pstatic.net/20131010_24/draffinew_1381399603529QEYQb_JPEG/iPhone_7.jpg?type=w2'
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
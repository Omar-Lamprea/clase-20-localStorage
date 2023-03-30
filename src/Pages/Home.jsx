import React from 'react'

const Home = () => {

  const urlImages = [
    {
      id:1,
      url: "https://www.xtrafondos.com/wallpapers/morty-enojado-8637.jpg"
    },
    {
      id:2,
      url: "https://www.xtrafondos.com/wallpapers/cabezas-de-rick-and-morty-8452.jpg"
    },
    {
      id:3,
      url: "https://www.xtrafondos.com/wallpapers/rick-y-bender-6479.jpg"
    }
  ]

  const addFav = (e) =>{
    const id = e.target.id
    const card = urlImages.find( img => img.id == id)

    if(!localStorage.getItem('favorites')){
      localStorage.setItem('favorites', JSON.stringify([card]))
    }else{
      const list = JSON.parse(localStorage.getItem('favorites'))
      const exist = list.find( img => img.id == id)
      // console.log(exist);
      if(!exist){
        list.push(card)
        localStorage.setItem('favorites', JSON.stringify(list))
      }
    }
    
  }

  return (
    <div className='container-images'>
      {urlImages.map(img => {
        return(
          <div key={img.id} className="card-img">
            <img src={img.url} alt="" />
            <button onClick={addFav} id={img.id}>agregar a ⭐️</button>
          </div>
        )
      })}
    </div>
  )
}

export default Home
import React, { useEffect } from 'react'
import { useGlobalStates } from '../Context/Context'

const Favorites = () => {

  const {setfavoriteList, favoriteList} = useGlobalStates()

  const favorites = JSON.parse(localStorage.getItem('favorites'))

  // useEffect(()=>{
  //   console.log(favorites);
  // },[favorites])

  const deleteFav = (e) =>{
    const id = e.target.id
    const toDelete = favorites.findIndex(img => img.id == id)
    favorites.splice(toDelete, 1)
    console.log(favorites);
    localStorage.setItem('favorites', JSON.stringify(favorites))
    setfavoriteList(!favoriteList)
  }

  

  return (
    <div className='container-images'>
      {favorites.map(img => {
        return(
          <div key={img.id} className="card-img">
            <p>favorite: {img.id}</p>
            <img src={img.url} alt="" />
            <button onClick={deleteFav} id={img.id}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Favorites
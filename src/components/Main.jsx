import { useContext, useEffect, useState } from 'react'
import { FetchContext } from '../context/fetch'
import './Main.css'

const Main = () => {
  const [results, setResults] = useContext(FetchContext)
  const [userData, setUserData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [description, setDescription] = useState({boo: false, user: []})
  const filter = userData.filter(
    user => user.name.first.includes(inputValue))
  
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
      .then(res => res.json())
      .then(data => {
        setUserData([...data.results])
        setResults([...data.results])
      })
  }, [])

  const search = () => {
    fetch(`https://randomuser.me/api/?results=20`)
      .then(res => res.json())
      .then(data => {
        setUserData([...userData, ...data.results])
        setResults([...results, ...data.results])
      })
  }
  
  return (
    <main id="main">
      <div className='search'>
        <input
          type='text'
          name='search'
          placeholder="Enter a name..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          />
        <button
          name="search"
          >
          <img src='http://cdn.onlinewebfonts.com/svg/img_372499.png' alt='lupa'/>
        </button>
      </div>
      
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { 
            filter.map(({ name, gender, dob, id, picture, email, phone, nat, location}, index) => {
              const dobDate = dob.date.slice(0,10)
  
              return(
                <tr 
                  key={id.value == null? index: id.value}
                  onClick={() => setDescription(prev => {
                    return {
                      ...prev,
                      boo: true,
                      user: [name, gender, dobDate, picture, email, phone, nat, location, id]
                    }
                  })}
                  >
                  <td>{name.first}</td>
                  <td>{gender}</td>
                  <td>{dobDate}</td>
                  <td>Pending</td>
                </tr>
                )
              }
            )
          }
        </tbody>
      </table>

      <button onClick={search} className='loading-more'>
        <img src="https://i.pinimg.com/originals/8e/8b/8f/8e8b8fea6c962ebffaa411e5ba947ea8.png" alt="mais" />
        <h3>
          Loading more...
        </h3>
      </button>

      {
        description.boo == true &&
        <div id='container-description'
          onClick={() => setDescription(prev => {
            return {
              ...prev,
              boo: false
            }  
          })}
          >
          <div className='box-description'>
            <div className='indentify'>
              <img src={description.user[3].large} alt="foto do usuário"/>
              <h1>{description.user[0].title +' '}
                {description.user[0].first +' '}
                {description.user[0].last}</h1>
            </div>

            <div className='p-description'>

              <p>Email: {description.user[4]}</p>
              
              <p>Gender: {description.user[1].toUpperCase()}</p>
              
              <p>{description.user[1] == 'male'? 'nascido' : 'nascida'} em {description.user[2]}</p>

              <p>Telefone: {description.user[5]}</p>

              <p>Nacionalidade: {description.user[6]}</p>

              <p>Endereço <br /> 
                -- City: {description.user[7].city}<br/>
                -- Rua: {description.user[7].street.name}<br/>
                -- Número: {description.user[7].street.number}
              </p>

              <p>ID: {description.user[8].value || description.user[8].name}</p>
              
            </div>
          </div>
        </div>
      }
      
    </main>
  )
}

export default Main
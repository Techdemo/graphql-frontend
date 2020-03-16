import React, { useEffect } from 'react'
import { useAuth } from '../../Context/AuthContext';

import { Title, Container, PersonDetailList, PersonDetail } from './styled';

const AccountPage = () => {
  const [user, setUser] = React.useState('')
  const {
    userId
  } = useAuth()

  useEffect(() => {
    const url = 'http://localhost:3001/graphql'
    const requestBody = {
      query: `
        query {
          user(id: "${userId}") {
            age
            name
            city
          }
        }
        `
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        throw new Error('Error')
      }
    })
    .then(data => {
      setUser(data.data.user)
    })
  }, [userId])
  console.log("user", user)
  return (
    <Container>
      <Title>My Account</Title>
      {user ? (
        <PersonDetailList>
          <PersonDetail>Name: {user.name}</PersonDetail>
          <PersonDetail>Age: {user.age}</PersonDetail>
          <PersonDetail>City: {user.city}</PersonDetail>
        </PersonDetailList>
      ): <p>loading</p>}
    </Container>
  )
}

export default AccountPage
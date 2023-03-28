import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import BaseApp from '../Core/Base';

const EditUser = ({ user, setUser }) => {
  const [name, setName] = useState("");
  const [idx, setIdx] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [batch, setBatch] = useState("");

  const { id } = useParams();
  const history = useHistory()

  const selectedUser = user.find((per) => per.id === id);

  useEffect(() => {
    setIdx(selectedUser.id)
    setName(selectedUser.name)
    setEmail(selectedUser.email)
    setAge(selectedUser.age)
    setBatch(selectedUser.batch)

  }, []);

  //
  const updateUser = () => {
    // step 1 : collecting new data
    const editIndex = user.findIndex(per => per.id === id)
    console.log(editIndex)
    //chnaged data in the input field
    const editedData = {
      id: idx,
      name,
      email,
      age,
      batch
    }
    //updating the user
    user[editIndex] = editedData
    setUser([...user]);
    history.push("/");
  }

  return (
    <BaseApp
      title={" edit-profile"}
    >

      <div className="text-areas">

        <TextField
          id="fullwidth"
          label="id"
          variant="outlined"
          value={idx}
          onChange={(event) => setIdx(event.target.value)}
        />


        <TextField
          id="fullwidth"
          label="name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)} />

        <TextField
          id="fullwidth"
          label="email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)} />


        <TextField
          id="fullwidth"
          label="age"
          variant="outlined"
          value={age}
          onChange={(event) => setAge(event.target.value)} />

        <TextField
          id="fullwidth"
          label="batch"
          variant="outlined"
          value={batch}
          onChange={(event) => setBatch(event.target.value)} />

        <Button
          variant="contained"
          color="success"
          onClick={updateUser}>
          Edit
        </Button>

      </div>

      
    </BaseApp>
  )
}

export default EditUser
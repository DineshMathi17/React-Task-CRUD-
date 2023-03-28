import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export function AddUser({ user, setUser }) {
    const history = useHistory()

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState();
    const [batch, setBatch] = useState("");

    const addNewUser = () => {
        const newUser = {
            id,
            name,
            email,
            batch,
            age
        }
        console.log(newUser)
        setUser([...user, newUser])
        history.push("/")
    }

    return (
        <BaseApp
            title={"Create User"}
        >

            <div className="text-areas">


                <TextField
                    id="fullwidth"
                    label="id"
                    variant="outlined"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                />




                <TextField
                    id="fullwidth"
                    label="name"
                    variant="outlined"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />



                <TextField
                    id="fullwidth"
                    label="email"
                    variant="outlined"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />



                <TextField
                    id="fullwidth"
                    label="age"
                    variant="outlined"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />





                <TextField
                    id="fullwidth"
                    label="batch"
                    variant="outlined"
                    value={batch}
                    onChange={(event) => setBatch(event.target.value)} />

                <Button
                 variant="contained" 
                 color="success" 
                 onClick={addNewUser}>
                    Add
                </Button>

            </div>

            
        </BaseApp>
    )
}
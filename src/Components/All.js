
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import axios from 'axios';
import Card from './Card';
import './All.scss';


const All = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/articles", {})
            .then(response => {
                var currentNotes = [...response.data.data];
                console.log(currentNotes);
                setNotes([...currentNotes]);
                console.log(notes.length);// this is not useful, read below why

                //This is event loop shit. Bas remember that
                // any setstate in a function is equivalent to running it last no matter where it's placed
                // And consoling values of state after update should be done in a use effect
                // Not immediately after the set state
                //And consoling values of state after update should be done in a use effect
                //Not immediately after the set state


            }).catch(err => {
                console.log(err.message);
            })
    }, [])

    useEffect(() => {
        console.log(notes);
    }, [notes])

    return (
        <Card className='all'>
            <Grid container spacing={2}>
                {notes.map(note => (
                    <Grid item
                        key={note.id}
                        xs={4}
                        sx={{
                            margin: 2,
                            textAlign: 'center'
                        }}>
                        <Paper elevation={4}>
                            <h3>{note.title}</h3>
                            <p>
                                {note.description}
                            </p>
                            <DeleteOutlined />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Card>
    )
}

export default All

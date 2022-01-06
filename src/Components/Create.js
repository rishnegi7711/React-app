import React, { useState } from 'react';
import { Button, TextField, Typography } from "@mui/material";
import Axios from 'axios';
import Card from './Card';
import './Create.scss';



const Create = () => {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [isTitleError, setIsTitleError] = useState(false)
    const [isDetailError, setIsDetailError] = useState(false)

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        setIsTitleError(false);
    }

    const detailChangeHandler = (event) => {
        setDetail(event.target.value);
        setIsDetailError(false);
    }

    const validateTitleHandler = () => {
        if (title.trim().length === 0) {
            setIsTitleError(true)
        } else {
            setIsTitleError(false)
        }
    }

    const validateDetailHandler = () => {
        if (detail.trim().length === 0) {
            setIsDetailError(true)
        } else {
            setIsDetailError(false)
        }
    }

    const dateHandler = () => {
        const d = new Date();
        return (d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
    }
    const idHandler = () => {
        return (Math.floor(Math.random() * 1000));
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        var currentDate = dateHandler();
        var currentId = idHandler();
        if (!isTitleError && !isDetailError) {
            Axios.post("http://localhost:3000/article", { id: currentId, title: title, description: detail, date: currentDate })
                .then(response => {
                    console.log(response.status + ' ' + response.message)
                }).catch(err => {
                    console.log("Error  code: " + err.status + " Error Message: " + err.message)
                })
        } else {
            console.log('something went wrong')
        }
    }


    return (
        <Card className='create'>
            <Typography variant='h5'>Create Note</Typography>
            <form className='form'>
                <TextField
                    label='Note Title'
                    value={title}
                    variant='outlined'
                    fullWidth
                    required
                    color='primary'
                    sx={{ marginTop: '20px', marginBottom: '20px' }}
                    onChange={titleChangeHandler}
                    onBlur={validateTitleHandler}
                    error={isTitleError}
                >
                </TextField>
                <TextField
                    label='Note Details'
                    value={detail}
                    variant='outlined'
                    fullWidth
                    required
                    multiline
                    rows={4}
                    color='primary'
                    sx={{ marginTop: '20px', marginBottom: '20px' }}
                    onChange={detailChangeHandler}
                    onBlur={validateDetailHandler}
                    error={isDetailError}
                >
                </TextField>
                <Button variant='contained' sx={{ margin: 'auto' }} onClick={formSubmitHandler}>Submit</Button>
            </form>

        </Card>
    )

}

export default Create;
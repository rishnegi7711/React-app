import React, { useState } from 'react';
import Card from './Card';
import { Button, TextField, Typography } from "@mui/material";
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

    const formSubmitHandler = (event) => {
        event.preventDefault()
        if (isTitleError == '') {
            setIsTitleError(true)
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
                <Button variant='contained' sx={{ margin: 'auto' }} onSubmit={formSubmitHandler}>Submit</Button>
            </form>

        </Card>
    )

}

export default Create;
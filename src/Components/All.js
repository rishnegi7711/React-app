import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import Card from './Card';
import './All.scss';

const All = () => {
  const [notes, setNotes] = useState([]);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [noteId, setNoteId] = useState();
  const [isEditModeActive, setisEditModeActive] = useState(false);
  const [activeEditNoteId, setIsActiveEditNoteId] = useState();
  const [activeEditTitle, setIsActiveEditTitle] = useState();
  const [activeEditDescription, setIsActiveEditDescription] = useState();

  const onEditButtonClick = (title, description) => {
    setIsActiveEditTitle(title);
    setIsActiveEditDescription(description);
  };

  const titleEditor = (event) => {
    setIsActiveEditTitle(event.target.value);
  };

  const descriptionEditor = (event) => {
    setIsActiveEditDescription(event.target.value);
  };

  const editModeActivate = (id) => {
    setIsActiveEditNoteId(id);
    setisEditModeActive(true);
  };

  const editModeDeactivate = () => {
    setIsActiveEditNoteId('');
    setisEditModeActive(false);
  };

  const mouseEnterHandler = (id) => {
    setNoteId(id);
    setMouseEnter(true);
  };
  const mouseExitHandler = () => {
    setNoteId('');
    setMouseEnter(false);
  };

  const getInitialData = () => {
    axios
      .get('http://localhost:3000/articles')
      .then((response) => {
        var currentNotes = [...response.data.data];
        console.log(currentNotes);
        setNotes([...currentNotes]);
        console.log(notes.length);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const callDeleteNoteApi = () => {
    axios
      .delete(`http://localhost:3000/article/${noteId}`)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          getInitialData();
        }
      })
      .catch((err) => console.log(err.message));
  };

  const callEditNoteApi = () => {
    axios
      .patch(`http://localhost:3000/article/${activeEditNoteId}`, {
        title: activeEditTitle,
        description: activeEditDescription,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log('Edit was a success');
          setisEditModeActive(false);
          getInitialData();
        } else {
          console.log('Failure, patch not successfull');
        }
      });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Card className="all">
      <Grid container>
        {notes.map((note) => (
          <Grid
            item
            key={note.id}
            xs={12}
            sx={{
              textAlign: 'center',
            }}
          >
            <Paper
              elevation={4}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                alignItems: 'center',
                height: '45px',
              }}
              onMouseEnter={() => mouseEnterHandler(note.id)}
              onMouseLeave={mouseExitHandler}
            >
              {isEditModeActive && note.id === activeEditNoteId ? (
                <TextField value={activeEditTitle} onChange={titleEditor} />
              ) : (
                <h3>{note.title}</h3>
              )}
              {isEditModeActive && note.id === activeEditNoteId ? (
                <TextField value={activeEditDescription} onChange={descriptionEditor} />
              ) : (
                <p>{note.description}</p>
              )}

              <div style={{ width: '100px' }}>
                {mouseEnter && note.id === noteId && (
                  <>
                    <DeleteOutlined onClick={callDeleteNoteApi} fontSize="medium" sx={{ cursor: 'pointer' }} />
                    {isEditModeActive ? (
                      <HighlightOffIcon onClick={() => editModeDeactivate(note.id)} sx={{ cursor: 'pointer' }} />
                    ) : (
                      <ModeEditIcon
                        onClick={() => { editModeActivate(note.id); onEditButtonClick(note.title, note.description) }}
                        sx={{ cursor: 'pointer' }}
                      />
                    )}
                    {isEditModeActive && note.id === activeEditNoteId && (
                      <CheckIcon onClick={callEditNoteApi} sx={{ cursor: 'pointer' }} />
                    )}
                  </>
                )}
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default All;

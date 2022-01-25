import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import Card from './Card';
import './All.scss';
import { callDeleteNoteApi, callEditNoteApi, callInitialDataApi } from '../Api';

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

  const getInitialData = async () => {
    const response = await callInitialDataApi();
    var currentNotes = [...response.data.data];
    setNotes([...currentNotes])
  }

  const deleteNoteApi = async () => {
    const { status } = await callDeleteNoteApi(noteId);
    if (status === 200) getInitialData();
  };

  const editNoteApi = async () => {
    const body = { id: activeEditNoteId, title: activeEditTitle, description: activeEditDescription }
    const { status } = await callEditNoteApi(body);
    if (status === 200) {
      getInitialData();
      editModeDeactivate(activeEditNoteId);
    }
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
                <TextField value={activeEditTitle} onChange={(event) => setIsActiveEditTitle(event.target.value)} />
              ) : (
                <h3>{note.title}</h3>
              )}
              {isEditModeActive && note.id === activeEditNoteId ? (
                <TextField value={activeEditDescription} onChange={(event) => setIsActiveEditDescription(event.target.value)} />
              ) : (
                <p>{note.description}</p>
              )}

              <div style={{ width: '100px' }}>
                {mouseEnter && note.id === noteId && (
                  <>
                    <DeleteOutlined onClick={deleteNoteApi} fontSize="medium" sx={{ cursor: 'pointer' }} />
                    {isEditModeActive ? (
                      <HighlightOffIcon onClick={() => editModeDeactivate(note.id)} sx={{ cursor: 'pointer' }} />
                    ) : (
                      <ModeEditIcon
                        onClick={() => { editModeActivate(note.id); onEditButtonClick(note.title, note.description) }}
                        sx={{ cursor: 'pointer' }}
                      />
                    )}
                    {isEditModeActive && note.id === activeEditNoteId && (
                      <CheckIcon onClick={editNoteApi} sx={{ cursor: 'pointer' }} />
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

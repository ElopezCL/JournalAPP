import React from 'react'
import { AppTheme } from '../../theme'
import { AppRouter } from '../../router/AppRouter'
import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { ImageGalery } from '../components'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
          {/* <Typography>JournalApp AQUI ESTOY</Typography> */}
          <NothingSelectedView/>
          <IconButton
          size='large'
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ':hover': {backgroundColor: 'error.main', opacity: 0.9},
            position:"fixed",
            right: 50,
            bottom: 50
          }}
          >
            <AddOutlined sx={{fontSize: 30}}/>
          </IconButton>
          <NoteView/>
          <ImageGalery/>
    </JournalLayout>
  
  )
}

import React from 'react'
import { AppTheme } from '../../theme'
import { AppRouter } from '../../router/AppRouter'
import { Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
          {/* <Typography>JournalApp AQUI ESTOY</Typography> */}
          <NothingSelectedView/>
          <NoteView/>
    </JournalLayout>
  
  )
}

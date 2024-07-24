import React from 'react'
import Grid from '@mui/material/Grid'
import { StarOutline } from '@mui/icons-material'
import { Typography } from '@mui/material'
export const NothingSelectedView = () => {
  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{mineHeight: 'calc(100vh -110px)', backgroundColor: 'primary.main', borderRadius: 5}}

    >
        <Grid item xs={12}>
                <StarOutline sx={{fontSize: 100, color: 'white'}}/>
        </Grid>
        <Grid item xs={12}>
            <Typography color="white" variant='h5'>Selecciona o Crea una entrada / nota</Typography>
        </Grid>

    </Grid>
  )

}

import { useEffect, useState } from 'react'
import { Card, Grid, Typography } from '@mui/material'
import { IScoreRequest, getAllAppScores } from '../../api/scoreApi'
import { ProjectName } from '../../App'
import IndexForm from './IndexForm'
import Indexx from './indexx'
import '../style/Index.css'

function IndexPage() {
    const [scoresList, setScoresList] = useState<IScoreRequest[]>([])

    useEffect(() => {
        getAllAppScores(ProjectName).then((result) => {
            setScoresList(result!)
        })
    }, [])

    return (
        //<section className='background'></section>
        <Grid className='background' container>
            <Grid item xs={6}>
                <Card >
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Typography fontFamily={'Gloria Hallelujah'} variant="h1">Tetris</Typography>
                        <IndexForm />
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center'}}>
                <Card style={{ height: '100%' }}>
                    <Indexx scoreLists={scoresList} />
                </Card>
            </Grid>
        </Grid>

    );
}

export default IndexPage

import React from 'react'
import {
    Card,
    useMediaQuery
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import './skillBar.scss'

const useStyles = makeStyles({

    skillsBar: {
      width: '600px',
      ['@media (max-width:1024px)']: {
        width: '80%'
      },
      borderRadius: '10px',
      padding: '25px 30px',
      margin: '50px 0px 0px 0px'
    },
    bar: {
        margin: '20px 0',
    },
    info: {
        '& span': {
            fontSize: '17px',
            fontWeight: '500'
        }
    },
    progressLine: {
        position: 'relative',
        height: '10px',
        width: '100%',
        background: '#f0f0f0',
        transform: 'scaleX(0)',
        animation: 'animate 1s cubic-bezier(1,0,0.5,1) forwards',
        '& span': {
            height: '100%',
            width: '80%',
            background: '#007DD2',
            borderRadius: '5px',
            position: 'absolute',
        },
    },
});

const SkillsBar = () => {

    const classes = useStyles();

    const skills = [
        {
            name: 'HTML5',
            porcent: '80%'
        },
        {
            name: 'CSS3',
            porcent: '70%'
        },
        {
            name: 'SASS',
            porcent: '50%'
        },
        {
            name: 'JavaScript',
            porcent: '60%'
        },
        {
            name: 'React',
            porcent: '75%'
        },
        {
            name: 'Next',
            porcent: '35%'
        },
        {
            name: 'Python',
            porcent: '30%'
        }
    ]

  return (
    <section className='skills-container' id="skills">
        <Card className={classes.skillsBar}>
            {
                skills.map((item) => (
                    <div className={classes.bar}>
                        <div className={classes.info}>
                            <span>{item.name}</span>
                        </div>
                        <div className='progressLine'><span style={{ width: item.porcent}}></span></div>
                    </div>
                ))
            }
        </Card>
    </section>
  )
}

export default SkillsBar
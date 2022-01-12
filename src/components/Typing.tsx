import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typingText: {
            paddingLeft: theme.spacing(0.5)
        },
        typingDot: {
            display: 'inline-block',
            verticalAlign: 'middle',
            width: '4px',
            height: '4px',
            margin: '0px 2px',
            background: theme.palette.primary.main,
            borderRadius: '50%',
            opacity: '0',
            animation: '$loadingFade 1s infinite',
            "&:nth-child(1)": {
                animationDelay: '0s'
            },
            "&:nth-child(2)": {
                animationDelay: '0.2s'
            },
            "&:nth-child(3)": {
                animationDelay: '0.4s'
            }
        },
        '@keyframes loadingFade': {
            '0%': {
                opacity: 0
            },
            '50%': {
                opacity: 0.8
            },
            '100%': {
                opacity: 0
            }
        }
    }),
);

type TypingProps = {
    message: string;
}

export default function Typing(props: TypingProps) {
    const classes = useStyles();
    return (
        <Typography color='primary' variant='body2'>
            <span className={classes.typingDot} />
            <span className={classes.typingDot} />
            <span className={classes.typingDot} />
            <span className={classes.typingText}>{props.message}</span>
        </Typography>
    );
}
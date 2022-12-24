import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootContact: {
      padding: theme.spacing(0.2),
      paddingLeft: theme.spacing(2),
      "& span": {
        float: "right",
        color: theme.palette.text.secondary,
        fontSize: "0.8rem"
      },
      "& $message": {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.text.primary
      },
      "& $firstMessage": {
        borderTopRightRadius: theme.spacing(2.4),
        //borderTopLeftRadius: theme.spacing(2.4),
        marginTop: theme.spacing(2.4)
      },
      "& $lastMessage": {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: theme.spacing(2.4),
        marginBottom: theme.spacing(2.4)
      }
    },
    rootUser: {
      padding: theme.spacing(0.2),
      paddingRight: theme.spacing(2),
      justifyContent: "flex-end",
      "& span": {
        float: "right",
        color: "#D9DEEC",
        fontSize: "0.8rem"
      },
      "& $message": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      },
      "& $firstMessage": {
        borderTopLeftRadius: theme.spacing(2.4),
        //borderTopRightRadius: theme.spacing(2.4),
        marginTop: theme.spacing(2.4)
      },
      "& $lastMessage": {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: theme.spacing(2.4),
        marginBottom: theme.spacing(2.4)
      }
    },
    rootNotify: {
      justifyContent: "center",
      "& > *": {
        //padding: `0px ${theme.spacing(1)}`,
        borderRadius: theme.spacing(2.4),
        fontWeight: 500
      }
    },
    message: {
      //maxWidth: "55%",
      //minWidth: "50%",
      width: "55%",
      [theme.breakpoints.down("sm")]: {
        width: "75%"
      },
      borderRadius: theme.spacing(1.2),
      padding: theme.spacing(1.8)
    },
    firstMessage: {},
    lastMessage: {},

    file: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      cursor: "pointer"
    },
    header: {
      flex: "0 0 100%",
      overflow: "hidden",
      fontWeight: "bold"
    },
    body: {
      flex: "1 1 auto",
      wordBreak: "break-word",
      overflow: "hidden"
    },
    status: {
      paddingLeft: theme.spacing(1),
      flex: "1 1 auto",
      alignSelf: "flex-end"
    },
    statusImage: {
      fontSize: "1rem",
      marginRight: theme.spacing(0.5),
      verticalAlign: "middle"
    }
  })
);

import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    rootContact: {
      padding: 1,
      paddingLeft: theme.spacing(2),
      "& span": {
        float: "right",
        color: theme.palette.text.secondary,
        fontSize: "0.8rem"
      },
      "& $message": {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.text.primary,
        borderTopRightRadius: theme.spacing(3),
        borderBottomRightRadius: theme.spacing(3)
      },
      "& $firstMessage": {
        borderTopLeftRadius: theme.spacing(3),
        marginTop: 10
      },
      "& $lastMessage": {
        borderTopRightRadius: theme.spacing(3),
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: theme.spacing(3),
        marginBottom: 10
      }
    },
    rootUser: {
      padding: 1,
      paddingRight: theme.spacing(2),
      justifyContent: "flex-end",
      "& span": {
        float: "right",
        color: "#D9DEEC",
        fontSize: "0.8rem"
      },
      "& $message": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderTopLeftRadius: theme.spacing(3),
        borderBottomLeftRadius: theme.spacing(3)
      },
      "& $firstMessage": {
        borderTopRightRadius: theme.spacing(3),
        marginTop: 10
      },
      "& $lastMessage": {
        borderTopLeftRadius: theme.spacing(3),
        borderBottomRightRadius: 0,
        marginBottom: 10
      }
    },
    rootNotify: {
      justifyContent: "center",
      "& > *": {
        //padding: `0px ${theme.spacing(1)}`,
        borderRadius: theme.spacing(3),
        fontWeight: 500
      }
    },
    message: {
      //maxWidth: "55%",
      //minWidth: "50%",
      maxWidth: "65%",

      [theme.breakpoints.down("md")]: {
        maxWidth: "95%"
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "85%"
      },
      borderRadius: theme.spacing(0.6),
      padding: theme.spacing(0.9),
      paddingLeft: theme.spacing(1.8),
      paddingRight: theme.spacing(1.8)
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

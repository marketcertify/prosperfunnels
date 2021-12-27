import { Grid, Button, Typography, useMediaQuery, CircularProgress, Snackbar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

import { useState } from "react";

import theme from "../../styles/theme"

import clsx from "clsx"


import axios from "axios"

const useStyles = makeStyles({
    mainContainer : {
        height : "13rem",
        [theme.breakpoints.down("md")] : {
            height : "auto"
        },
        width : "100%",
        backgroundColor : theme.palette.secondary.main
    },
    heading : {
        fontSize : "3rem",
        fontWeight : 500
    },
    Containergap : {
        paddingLeft: "7rem",
        [theme.breakpoints.down("md")]: {
            paddingLeft : 0
        }
    },
    text: {
        display : "flex",
        justifyContent : "center",
        fontSize : "1.5rem",
        [theme.breakpoints.down("sm")]: {
            padding: ".5rem"
        }
    },
    inlineGap : {
        marginTop :"1rem"
        },
    inputContainer : {
        marginTop : "1rem",
        width : "25rem",
        height : "2.2rem",
        [theme.breakpoints.down("sm")]  : {
            width: "13rem"
        }
    },
    input : {
        width: "100%",
        color: "#fff",
        fontSize : "1.5rem",
        height : "100%",
        backgroundColor: "#434343",
        border : "none",
        borderRadius : "3px",
        padding: "8px",
        outline : "none",
        "&::placeholder" : {
            color: "#fff",
            fontWeight :400,
            fontSize : "1.2rem"
        },
        "&::label" : {
            color: "#fff",
            fontSize: "1.5rem"
        },
    },
    btnText : {
        fontSize : "1.5rem",
        textTransform: "none",
        color: "#fff",
    },
    btn : {
        width : "100%",
        height : "100%",
        backgroundColor : "black",
        "&:hover" : {
            backgroundColor : "#434343"
        }
    },
    btnContainer : {
        marginTop: "1rem",
        width: "25rem",
        height: "3rem",
        [theme.breakpoints.down("sm")] : {
            width: "100%"
        },
        [theme.breakpoints.down("md")] : {
            paddingBottom: "1rem"
        }
    }
})

const NewsLatter = ({ setSnackBarMessage, setSnackBarColor, setShowSnackBar }) => {
    const classes = useStyles()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isPost, setIsPost] = useState(false)

    const matchesMD = useMediaQuery(th => theme.breakpoints.down("md"))


    const handlePostData = () => {
        setIsPost(true)
        axios.post("https://marketcertify.herokuapp.com/data/post", {
            email: email,
            name: name
        }).then(res => {
            setIsPost(false)
            setShowSnackBar(true)
            setSnackBarColor("green")
            setSnackBarMessage("Name and Email successfully uploaded")
        }).catch(error => {
            setIsPost(false)
            setShowSnackBar(true)
            setSnackBarColor("red")
            setSnackBarMessage("Error uploading name and email please try again letter")
        })
    }

    return (
        <Grid container classes={{root: classes.mainContainer}}>
            <Grid 
            item 
            container 
            lg={7} 
            direction="column" 
            justifyContent="center" 
            alignItems={matchesMD ? "center" : "flex-start"}
            classes={{root: classes.Containergap}}
            >
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant='h1' classes={{root : classes.heading}}> 
                  Join my Inner Circle
                    </Typography>
                </Grid>
                <Grid item classes={{root: classes.inlineGap}}> 
                    <Typography variant="h1" align={matchesMD ? "center" : undefined}  classes={{root: classes.text}}>
                      The Inner Circle is where I share the latest strategies, tactics and tools that is currently working in Digital Marketing for me. These include case studies, reports and cheatsheets.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container direction="column" lg={5} md={12} justifyContent="center" alignItems="center">
                <Grid item classes={{root: classes.inputContainer}}>
                    <input className={classes.input}  placeholder="Name"  type="name" value={name} onChange={e => setName(e.target.value)}/>
                </Grid>
                <Grid  item classes={{root: clsx ( 
                    [classes.inputContainer, classes.inlineGap]
                    )}}>
                    <input className={classes.input}  placeholder="Email"  type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </Grid>
                <Grid item classes={{root: classes.btnContainer}}>
                    <Button disabled={!name || !email } onClick={handlePostData} variant="contained" classes={{root: classes.btn}}>
                        { isPost ? <CircularProgress color="secondary" /> : (
                            <Typography  classes={{root: classes.btnText}}>
                                Join Now
                            </Typography>
                        )}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default  NewsLatter

import accBack from '../img/accountbackground.jpg'

const color1="#ffb0a9"
const color2="#f9d678"
const color3="#b6ddda"
const color4="#01877e"
const color5="#13313d"

const Style={
    a:{
        textDecoration:"none",
        color:"unset",
    },
    h1:{
        margin:"0"
    },
    p:{
        margin:"0"
    },
    header:{
        height:"50px",
        lineHeight:"50px",
        title:{
            margin:"0 auto",
            h1:{margin:"0"}
        },
        icon:{
            width:"30px",
            height:"30px",
            margin: "10px",
            cursor:"pointer",
            '&:hover':{
                color:color3
            }
        },
        list:{
            position: "absolute",
            background: "white",
            width: "125px",
            height: "max-content",
            top: "55px",
            right: "5px",
            textAlign: "center",
            borderRadius: "5px",
            boxShadow: '1px 1px 3px grey',
            "opacity": "0",
            transition:"all 0.25s",
            text:{
                cursor:"pointer",
                margin:"0",
                '&:hover':{
                    background:"lightgrey",
                    color:"white",
                    transition:"all 0.25s",
                }
            }

        }
    },
    narbar:{
        height:"100vh",
        position:"fixed",
        width:"0",
        top:"0",
        transition:"all 0.5s",
        overflow:"hidden",
        paddingTop:"50px",
        title:{
            padding:"10px 5px",
            boxSizing:"border-box",
            cursor:"pointer",
            textAlign:"center",
            '&:hover':{
                background:"whitesmoke",
                color:"grey"
            }
        }
    },
    cover:{
        background:"whitesmoke",
        img:{
            width:"100%",
        }
    },
    news:{
        padding:"50px 10px",
        maxWidth:"700px",
        margin:"auto",
        titlesTop:{
            margin:"10px",
            height:"50px",
            boxSizing:"border-box",
            '@media (min-width:600px)':{
                lineHeight:"50px",
                borderBottom:"1px solid lightgrey",
            },
            date:{
                fontSize:"15px",
                width:"100%",
            },
            title:{
                fontSize:"18px",
                fontWeight:"500",
            },
            content:{
                fontSize:"15px",
            }
        },

    },
    book:{
        maxWidth:"1200px",
        margin:"auto",
        box:{
            boxSizing:'border-box',
            padding:"5%",
            title:{
                textAlign:"center",
                margin:"0"
            },
            imgbox:{
                img:{
                    width:"100%"
                }
            }
        }
    },
    user:{
        width:"100%",
        height:"100vh",
        padding:"75px 5%",
        BoxIn:{
            width:"80%",
            minHeight:"400px",
            boxShadow:"3px 3px 5px grey",
            margin:"auto",
            textAlign:"center",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            background:`url(${accBack}) no-repeat center`,
            backgroundSize:"cover",
        },
        BoxDetail:{
            width:"100%",
            maxWidth:"375px",
            height:"100%",
            margin:"auto 0 auto auto",
        },
        input:{
            width:"80%",
            height:"40px",
            fontSize:"17px",
            margin:"10px auto",
            background:"rgba(255,255,255,0.2)",
            border:"none",
            color:color5,
            '&:focus':{
                outline:"none",
                background:"rgba(255,255,255,0.5)"
            }
        },
        button:{
            width:"50%",
            height:"40px",
            margin:"20px auto 10px",
        },

        h1:{
            margin:"0",
            color:color5,
        },
        ptext:{
            margin: "10px auto",
            fontSize:"12px",
            color:color5,
        },
    },
    userPage:{
        userNarbar:{
            width:"max-content",
            margin:"0 5% 0 auto",
            BoxIn:{
                margin:"0px",
                boxSizing:"border-box",
                cursor:"pointer"
            },
            ptext:{
                width:"100px",
                textAlign:"center",
                padding:"5px",
                fontWeight:"bold",
                margin:"0"
            },
            h3:{
                margin:"0"
            }
        },
        userContent:{
            width:"90%",
            margin:"auto",
            minHeight:"100vh",
            h2:{
                margin:"0"
            }
        }
    },
    popup:{
        position:"absolute",
        top:"50px",
        width:"100%",
        background:color3,
        color:"white",
        transition:"all 0.5s",
        overflow:"hidden",
        lineHeight:"50px",
        textAlign:"center",
    },
}

export default Style
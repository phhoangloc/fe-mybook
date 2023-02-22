
const color1="#ffb0a9"
const color2="#f9d678"
const color3="#b6ddda"
const color4="#01877e"
const color5="#13313d"

const Style={
    a:{
        textDecoration:"none",
        color:"unset"
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
                    background:"black",
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
    }
}

export default Style
import { margin } from '@mui/system'
import accBack from '../img/accountbackground.jpg'

const color1 = "#ffb0a9"
const color2 = "#f9d678"
const color3 = "#b6ddda"
const color4 = "#01877e"
const color5 = "#13313d"

const Style = {
    fontSize: "15px",
    a: {
        textDecoration: "none",
        color: "unset",
    },
    h1: {
        margin: "0",
    },
    p: {
        margin: "0",
    },
    header: {
        height: "50px",
        lineHeight: "50px",
        fontSize: "15px",
        title: {
            margin: "0 auto",
            height: "50px",
            h1: { margin: "0", fontSize: "1.75rem" }
        },
        div: {
            height: "100%",
        },
        img: {
            cursor: "pointer",
            width: "30px",
            height: "30px",
            padding: "5px",
            margin: "5px",
            borderRadius: "50%",
            '&:hover': {
                background: color3,
            }
        },
        icon: {
            width: "30px",
            height: "30px",
            margin: "10px",
            cursor: "pointer",
            '&:hover': {
                color: color3
            }
        },
        list: {
            position: "absolute",
            background: "white",
            width: "125px",
            height: "max-content !important",
            top: "55px",
            right: "5px",
            textAlign: "center",
            borderRadius: "5px",
            boxShadow: '1px 1px 5px',
            "opacity": "0",
            transition: "all 0.25s",
            text: {
                cursor: "pointer",
                margin: "0",
                '&:hover': {
                    background: "lightgrey",
                    color: "white",
                    transition: "all 0.25s",
                }
            }

        }
    },
    narbar: {
        height: "100vh",
        position: "fixed",
        width: "0",
        top: "0",
        transition: "all 0.5s",
        overflow: "hidden",
        paddingTop: "50px",
        title: {
            padding: "10px 5px",
            boxSizing: "border-box",
            cursor: "pointer",
            textAlign: "center",
            '&:hover': {
                background: "whitesmoke",
                color: "grey"
            }
        }
    },
    cover: {
        background: "whitesmoke",
        img: {
            width: "100%",
        }
    },
    news: {
        padding: "50px 10px",
        maxWidth: "700px",
        margin: "auto",
        titlesTop: {
            margin: "10px",
            height: "50px",
            boxSizing: "border-box",
            '@media (min-width:600px)': {
                lineHeight: "50px",
                borderBottom: "1px solid lightgrey",
            },
            date: {
                fontSize: "15px",
                width: "100%",
            },
            title: {
                fontSize: "18px",
                fontWeight: "500",
            },
            content: {
                fontSize: "15px",
            }
        },

    },
    book: {
        maxWidth: "1200px",
        margin: "auto",
        box: {
            boxSizing: 'border-box',
            padding: "5%",
            title: {
                textAlign: "center",
                margin: "0"
            },
            imgbox: {
                img: {
                    width: "100%",
                }
            }
        }
    },
    homepage: {
        width: "100%",
        height: "100vh",
        padding: "50px 0",
        BoxIn: {
            width: "80%",
            minHeight: "400px",
            boxShadow: "3px 3px 5px grey",
            margin: "0px auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: `url(${accBack}) no-repeat center`,
            backgroundSize: "cover",
            h1: {
                margin: "0",
                color: color5,
            },
        },
        BoxDetail: {
            width: "100%",
            maxWidth: "375px",
            height: "100%",
            margin: "auto 0 auto auto",
        },
        input: {
            width: "80%",
            height: "40px",
            fontSize: "17px",
            margin: "10px auto",
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: color5,
            '&:focus': {
                outline: "none",
                background: "rgba(255,255,255,0.5)"
            }
        },
        button: {
            width: "50%",
            height: "40px",
            margin: "20px auto 10px",
        },
        ptext: {
            margin: "10px auto",
            fontSize: "12px",
            color: color5,
        },
        BoxBookDetail: {
            width: "100%",
            minHeight: "100vh",
            padding: "0",
            maxWidth: "900px",
            margin: "auto",
            textAlign: "center",
            BoxIn: {
                margin: "0 auto",
                background: "whitesmoke",
                padding: "5%",
                color: color5,
                boxShadow: "3px 3px 5px grey",
                input: {
                    width: "90%",
                    height: "30px",
                    margin: "0 5% 10px",
                    fontSize: "15px",
                    border: "none",
                    borderBottom: `1px solid ${color5}`,
                    '&:focus': {
                        outline: "none",
                        borderBottom: "2px solid",
                    }
                },
                textarea: {
                    width: "90%",
                    height: "200px",
                    margin: "0 5% 10px",
                    fontSize: "15px",
                    fontFamily: "math",
                    '&:focus': {
                        outline: "none",
                    }
                },
                button: {
                    width: "100px",
                    height: "30px",
                    margin: "20px",
                },
                img: {
                    width: "100%",
                    maxWidth: "275px"
                },
                svg: {
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    padding: "5px",
                    border: "1px solid",
                    opacity: "0.5",
                    color: color5,
                    cursor: "pointer",
                    margin: "20px 5px ",
                    '&:hover': {
                        opacity: "1",
                    }
                }
            }
        },

    },
    userPage: {
        width: "100%",
        minHeight: "100vh",
        padding: "5px",
        BoxIn: {
            width: "100%",
            minHeight: "100vh",
            borderRadius: "5px",
        },
        narbar: {
            width: "max-content",
            margin: "0 0 0 auto",
            title: {
                width: "100px",
                textAlign: "center",
                padding: "10px 0",
                marginLeft: "5px",
                cursor: "pointer",
                ptext: {
                    margin: "0px",
                },

            }
        },
        content: {
            h1: {
                textAlign: "center"
            },
            book: {
                width: "100%",
                margin: "auto",
                maxWidth: "600px",
                boxSizing: "border-box",
                padding: " 0 10px",
                title: {
                    borderBottom: "1px solid",
                    margin: "20px 0",
                    padding: "5px 0",
                    width: "100%",
                    h3: {
                        margin: " 0 0",
                        width: "calc(100% - 60px)",
                        textAlign: "left"
                    },
                    svg: {
                        cursor: "pointer",
                        '&:hover': {
                            color: color3
                        }
                    },

                },
                button: {
                    width: "max-content",
                    border: "1px solid",
                    padding: "5px 10px",
                    boxShadow: "1px 1px 5px",
                    cursor: "pointer",
                }
            }
        },
        profile: {
            maxWidth: "900px",
            margin: "auto",
            boxSizing: "border-box",
            padding: "10px",
            imgBox: {
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "white",
                margin: "25px auto",
                border: "1px solid",
                position: "relative",
                overflow: "hidden",
                svg: {
                    position: "absolute",
                    right: "15%",
                    bottom: "15%",
                    cursor: "pointer",
                    color: "grey",
                    border: "1px solid",
                    borderRadius: "50%",
                    padding: "5px",
                    transition: "all 0.25s",
                    background: "white",
                    '&:hover': {
                        color: color5,
                        transform: "scale(1.1)"
                    }
                },
                img: { width: "100%" },
            },
            Box: {
                textAlign: "left",
                boxSizing: "border-box",
                padding: "20px 5%",
                button: { width: "100px", padding: "5px 10px", margin: " 10px auto" },
                h2: {
                    textAlign: "center",
                },
                h3: {
                    margin: "5px 0",
                    borderBottom: "1px solid",
                    display: "flex",
                    span: {
                        fontWeight: "400",
                        width: "100px",
                    },
                    position: "relative",

                    svg: {
                        position: "absolute",
                        top: "5px",
                        right: "0px",
                        cursor: "pointer",
                        color: color3,
                        '&:hover': {
                            color: color5,
                        }
                    },
                    input: { width: "100%", maxWidth: "375px" },
                }
            }
        }
    },
    popup: {
        position: "absolute",
        top: "50px",
        width: "100%",
        background: color3,
        color: "white",
        transition: "all 0.5s",
        overflow: "hidden",
        lineHeight: "50px",
        textAlign: "center",
        button: {
            width: "100px",
            margin: "0 5px",
            background: "white",
            padding: "5px 0",
            cursor: "pointer",
            '&:active': {
                background: color3,
                color: color3,
            }
        }
    },
}

export default Style
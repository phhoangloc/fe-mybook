const color1="#ffb0a9"
const color2="#f9d678"
const color3="#b6ddda"
const color4="#01877e"
const color5="#13313d"

const Theme={
    light:{
        mode:"light",
        background:"white",
        color:color5,
        boxIn:{
            background:color4,
            color:"white"
        },
        login:{
            background:color1,
        },
        user:{
            narbar:{
                background:"whitesmoke",
                color:color5
            },
            content:{
                background:"whitesmoke",
                color:color5
            }
        }
    },
    dark:{
        mode:"dark",
        background:color5,
        color:"white",
        boxIn:{
            background:"white",
            color:color4
        },
        login:{
            background:"whitesmoke",
        },
        user:{
            narbar:{
                background:"whitesmoke",
                color:color5
            },
            content:{
                background:"whitesmoke",
                color:color5
            }
        } 
    }
}

export default Theme

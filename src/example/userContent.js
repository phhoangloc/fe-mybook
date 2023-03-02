
import React, { useRef, useState } from 'react'
import { Grid } from '@mui/material'
import {Link} from 'react-router-dom'
import Style from '../asset/style'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import store from '../redux/store';
import { setSlugInput } from '../redux/reducer/slugInputReducer';
import AuthenUserApi from '../api/authenUser';
import { setPopUp } from '../redux/reducer/popUpReducer';
import { setEdit } from '../redux/reducer/editReducer';
import noAvata from '../asset/img/loginavata.png'
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
export const UserContent = (props) => {

    const { i, data } = props
    
    const imgPreview = data && data.infor &&  data.infor.avata

    const [fullnameE, setFullnameE] = useState(false)
    const [addressE, setAddressE] = useState(false)
    const [PhoneE, setPhoneE] = useState(false)

    const [avata, setAvata] = useState()
    const [fullname, setFullname] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [savebutton,setSaveButton]=useState(false)

    const userbooks = data && data.books
    
    const ClickDelete = async (id) => {
        const result = await AuthenUserApi.DeleteBook(id)
        if(result.success){
            store.dispatch(setPopUp({status:"open", success: result.success, message:result.message}))
            setTimeout(() => {
              store.dispatch(setPopUp({ status:"close", msg: "" }))
              window.location.href="/"
          }, 1000)
          }else{
            store.dispatch(setPopUp({status:"open", success: result.success, message:result.message}))
            setTimeout(() => {
              store.dispatch(setPopUp({ status:"close", msg: "" }))
          }, 1000)
        }
    }

    const returnbooks = userbooks && userbooks.map((item, index) =>
        <Grid container sx={[Style.userPage.content.book.title]}
            key={index}><input type="checkbox" />
            <h3>{item.name}</h3>
            <Link style={Style.a} to={'/book/' + item.slug}><EditIcon onClick={() => store.dispatch(setEdit(true))} /></Link>
            <DeleteIcon onClick={()=>ClickDelete(item._id)} />
        </Grid>
    )

    const openSlugModel = () => {
        store.dispatch(setSlugInput("100px"))
    }

    const [imgPre,setImgPre]=useState()
    const [file,setFile]=useState()
    const avataImg = useRef()
    
    const changeAvata = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            reader.readAsDataURL(file);
            reader.onloadend = function() {
                setImgPre(reader.result);
                setFile(file)
            }
        }
    }
    
    const infor = {
        avata,fullname,address,phone
    }
    const updateProfile = async () => {
        const img = file &&  await AuthenUserApi.UpdateAvata(file)
        infor.avata=img
        img?infor.avata=img:infor.avata=data.infor.avata
        console.log(infor)
    }
    return (
    <Grid sx={[Style.userPage.content]}>
        {i === 0 ?
            <Grid container sx={Style.userPage.profile}>
                <Grid item xs={12} sm={4}>
                    <Grid sx={Style.userPage.profile.imgBox}>
                    <img src={imgPre || 'http://localhost:4000/img/bookcover/' + imgPreview || noAvata} />
                    <input type="file" ref={avataImg} style={{ display: "none" }} onChange={(e) => { changeAvata(e); setSaveButton(true)}} ></input>
                    <EditIcon onClick={() => avataImg.current.click()}></EditIcon>
                    </Grid>
                </Grid>
                <Grid item sx={Style.userPage.profile.Box}xs={12} sm={8}>
                    <h2>{data && data.username}</h2>
                    {fullnameE ?
                            <h3>
                                <span>fullname</span>
                                <input defaultValue={fullname} onChange={(e)=>setFullname(e.target.value)} />
                                <CheckIcon style={{ right: "25px" }} onClick={() => { setFullnameE(false); setSaveButton(true)}}/>
                                <CancelIcon onClick={() => { setFullnameE(false); setFullname(data.infor.fullname)}}/>
                            </h3> :
                            <h3>
                                <span>fullname</span>
                                {fullname || (data && data.infor.fullname)}
                                <EditIcon onClick={() => { setFullnameE(true); fullname?setFullname(fullname):setFullname(data.infor.fullname)}} />
                            </h3>}
                    {addressE ?
                            <h3>
                                <span>address</span>
                                <input defaultValue={address} onChange={(e)=>setAddress(e.target.value)} />
                                <CheckIcon style={{ right: "25px" }} onClick={() => { setAddressE(false); setSaveButton(true)}}/>
                                <CancelIcon onClick={() => { setAddressE(false); setAddress(data.infor.address)}}/>
                            </h3> :
                            <h3>
                                <span>address</span>
                                {address || (data && data.infor.address)}
                                <EditIcon onClick={() => { setAddressE(true); address?setAddress(address):setAddress(data.infor.address)}} />
                            </h3>}
                    {PhoneE ?
                            <h3>
                                <span>phone</span>
                                <input defaultValue={phone || (data && data.infor && data.infor.phone)} onChange={(e)=>setPhone(e.target.value)}/>
                                <CheckIcon style={{ right: "25px" }} onClick={() => { setPhoneE(false); setSaveButton(true)}}/>
                                <CancelIcon onClick={() => { setPhoneE(false); setPhone(data.infor.address)}}/>
                            </h3> :
                            <h3>
                                <span>phone</span>
                                {phone || (data && data.infor && data.infor.phone)}
                                <EditIcon onClick={() => { setPhoneE(!PhoneE); phone?setPhone(address):setPhone(data.infor.phone)}} />
                            </h3>} 
                        {savebutton ? <button onClick={() => updateProfile()}>save</button> : null}
                </Grid>
            </Grid>:null}
        {i===1?
            <Grid sx={[Style.userPage.content.book]}>
                    <h2>Book</h2>
                    <h3 style={Style.userPage.content.book.button} onClick={()=>openSlugModel()}>Sell book</h3>
            {returnbooks}
            </Grid>:null}
    </Grid>
    )
}


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

    const [fullnameE, setFullnameE] = useState(false)
    const [addressE, setAddressE] = useState(false)
    const [PhoneE, setPhoneE] = useState(false)

    const [fullname, setFullname] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [savebutton,setSaveButton]=useState(false)

    const userbooks = data && data.books
    const infor = data && data.infor
    const imgPreview = data && data.infor &&  data.infor.avata
    
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
        store.dispatch(setEdit(true))
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
    
    const updateProfile = async () => {
        const img = file && await AuthenUserApi.UpdateAvata(file)
        const body = {
            avata: img || (infor && infor.avata),
            fullname: fullname || (infor && infor.fullname),
            address: address || (infor && infor.address),
            phone: phone || (infor && infor.phone),
            
        }
        const result = await AuthenUserApi.UpdateProfileInfor(body)
        if (result.success) {
            store.dispatch(setPopUp({ status: "open", success: result.success, message: result.msg }))
            setTimeout(() => {
                store.dispatch(setPopUp({ status: "close", msg: "" }))
            }, 2000)
        } else {
            store.dispatch(setPopUp({ status: "open", success: result.success, message: result.msg }))
            setTimeout(() => {
                store.dispatch(setPopUp({ status: "close", msg: "" }))
            }, 2000)
        }
    }

    return (
    <Grid sx={[Style.userPage.content]}>
        {i === 0?<h1>you re not login</h1>:null}
        {i === 1 ?
            <Grid container sx={Style.userPage.profile}>
                <Grid item xs={12} sm={4}>
                    <Grid sx={Style.userPage.profile.imgBox}>
                    <img src={imgPre || 'http://localhost:4000/img/avata/' + imgPreview || noAvata} />
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
                                <CancelIcon onClick={() => { setFullnameE(false); setFullname(infor && infor.fullname)}}/>
                            </h3> :
                            <h3>
                                <span>fullname</span>
                                {fullname || (infor && infor.fullname) || null}
                                <EditIcon onClick={() => { setFullnameE(true); fullname?setFullname(fullname):setFullname(infor && infor.fullname)}} />
                            </h3>}
                    {addressE ?
                            <h3>
                                <span>address</span>
                                <input defaultValue={address} onChange={(e)=>setAddress(e.target.value)} />
                                <CheckIcon style={{ right: "25px" }} onClick={() => { setAddressE(false); setSaveButton(true)}}/>
                                <CancelIcon onClick={() => { setAddressE(false); setAddress(infor && infor.address)}}/>
                            </h3> :
                            <h3>
                                <span>address</span>
                                {address || (infor && infor.address)}
                                <EditIcon onClick={() => { setAddressE(true); address?setAddress(address):setAddress(infor && infor.address)}} />
                            </h3>}
                    {PhoneE ?
                            <h3>
                                <span>phone</span>
                                <input defaultValue={phone || (data && data.infor && data.infor.phone)} onChange={(e)=>setPhone(e.target.value)}/>
                                <CheckIcon style={{ right: "25px" }} onClick={() => { setPhoneE(false); setSaveButton(true)}}/>
                                <CancelIcon onClick={() => { setPhoneE(false); setPhone(infor && infor.phone)}}/>
                            </h3> :
                            <h3>
                                <span>phone</span>
                                {phone || (infor && data.infor.phone)}
                                <EditIcon onClick={() => { setPhoneE(!PhoneE); phone?setPhone(address):setPhone(infor && infor.phone)}} />
                            </h3>} 
                        {savebutton ? <button onClick={() => updateProfile(data._id)}>save</button> : null}
                </Grid>
            </Grid>:null}
        {i === 2?
            <Grid sx={[Style.userPage.content.book]}>
                    <h2>Book</h2>
                    <h3 style={Style.userPage.content.book.button} onClick={()=>openSlugModel()}>Sell book</h3>
            {returnbooks}
            </Grid>:null}
    </Grid>
    )
}

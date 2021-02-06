import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth, provider} from '../../localfirebase'
import {useStateValue} from '../../StateProvider'
import {actionTypes} from '../../reducer'

function Login() {
    // eslint-disable-next-line
    const [{user},dispatch] = useStateValue()
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(res=>{
            console.log(res)
            dispatch({
                type: actionTypes.SET_USER,
                user: res.additionalUserInfo.profile //payload
            })
        })
        .catch(e=>{
            if(e.code === 'auth/popup-closed-by-user'){
                return
            }else{
                alert(e.message)
            }
        })
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                alt=''
                />
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
                alt=''
                />
            </div>
            <Button type='submit' onClick={signIn}>
                Sign Up via Facebook 
            </Button>
        </div>
    )
}

export default Login

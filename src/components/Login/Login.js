import React from 'react'
import './Login.css'
import {auth, provider} from '../../localfirebase'

function Login() {

    const signInWithFB = () =>{
        auth.signInWithPopup(provider)
        .then((res)=>{
            const response = res.additionalUserInfo.profile
            const obj = {
                name: response.name,
                first_name: response.first_name,
                last_name: response.last_name,
                profileImage: response.picture.data.url,
                id: response.id
            }
            localStorage.setItem('currentUserInfo', JSON.stringify(obj))
        })
        .catch(e=>{
            alert(e.message)
        })
    }

    const signInAnonymously = () =>{
        auth.signInAnonymously()
        .then(()=>{
            const obj = {
                name: 'Anonymous User',
                first_name: 'Anonym',
                last_name: 'Anonymous',
                profileImage: 'https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/2375/cache/2021/02/spy-clipart-9-e1538678193587/2613749646.png',
                id: '01'
            }
            localStorage.setItem('currentUserInfo', JSON.stringify(obj))
        })
        .catch(e=>{
            alert(e.message)
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
            <button className='login__button login__button--blue' onClick={signInWithFB}>
                Sign In via Facebook 
            </button>
            <button className='login__button login__button--grey' onClick={signInAnonymously}>
                Sign In Anonymously
            </button>
        </div>
    )
}

export default Login

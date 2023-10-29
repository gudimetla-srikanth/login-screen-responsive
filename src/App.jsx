import React, { useState } from 'react'
import styled from 'styled-components'
import women from './assets/women.png'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function App() {
  const [showPassword, setShowPassword] = useState(false)
  const handle = () => {
    setShowPassword(prev => !prev)
  }
  return (
    <Div main>
      <Div left>
        <Img src={women} alt='hi'></Img>
      </Div>
      <Div right>
        <BoxDiv>
          <FlexDiv column>
            <NormalDiv>
              <H1>Login</H1>
            </NormalDiv>
            <FormTag>
              <NormalDiv login_content>
                <NormalDiv login>Login ID</NormalDiv>
                <NormalDiv><Input type='text' placeholder='Enter Login ID' name='loginId' /></NormalDiv>
              </NormalDiv>
              <NormalDiv login_content>
                <NormalDiv password>Password</NormalDiv>
                <NormalDiv pos><Input type={`${showPassword ? 'text' : 'password'}`} placeholder='Enter Password' name='password' />{showPassword ? <VisibilityIcon sx={{ position: "absolute", right: "5px", top: "5px" }} onClick={handle} /> : <VisibilityOffIcon sx={{ position: "absolute", right: "5px", top: "5px" }} onClick={handle} />}</NormalDiv>
              </NormalDiv>
              <NormalDiv check_flex>
                <NormalDiv>
                  <NormalDiv check_box>
                    <NormalDiv red><Input checkType type='checkbox' name='remember' /></NormalDiv> <NormalDiv re>Remember Me</NormalDiv>
                  </NormalDiv>
                  <NormalDiv check_box>
                    <NormalDiv><Input checkType type='checkbox' name='agree' /></NormalDiv> <NormalDiv re>Agree to</NormalDiv><NormalDiv yellow underline re>Terms & Conditions</NormalDiv>
                  </NormalDiv>
                </NormalDiv>
                <NormalDiv>
                  <NormalDiv yellow re>
                    Change Password
                  </NormalDiv>
                </NormalDiv>
              </NormalDiv>
              <NormalDiv btn>
                <Button>Login</Button>
              </NormalDiv>
              <NormalDiv register>
                <NormalDiv>Don't have an account?</NormalDiv><NormalDiv yellow>Register Here</NormalDiv>
              </NormalDiv>
            </FormTag>
          </FlexDiv>
        </BoxDiv>
      </Div>
    </Div>
  )
}

const NormalDiv = styled.div`
width:${props => props.login_content && '70%'};
width:${props => props.check_flex && '70%'};
display:${props => props.check_flex && 'flex'} ;
justify-content:${props => props.check_flex && 'space-between'};
display:${props => props.check_box && 'flex'} ;
align-items:${props => props.check_box && 'center'} ;
width:${props => props.btn && '50%'};
display:${props => props.register && 'flex'} ;
margin:5px;
font-weight:${props => props.register && 'bold'};
font-weight:${props => (props.login && 'bold') || (props.password && 'bold')};
color:${props => (props.yellow && 'yellow')};
cursor:${props => (props.yellow && 'pointer')};
text-decoration:${props => (props.underline && 'underline')};
position:${props => (props.pos && 'relative')};
display:${props => (props.hi && 'flex')};
justify-content:${props => (props.re && 'center')};
align-items:${props => (props.re && 'start')};
height:${props => (props.re && '23px')};
`
const Div = styled.div`
width:${props => props.main && '100vw'}
height:${props => props.main && '100vh'};
display:${props => props.main && 'flex'};
flex-wrap:${props => props.main && 'wrap'}
display:${props => (props.left && 'flex') || (props.right && 'flex')};
flex:${props => (props.left && '1') || (props.right && '1.5')};
height:${props => (props.left && '100vh') || (props.right && '100vh')};
justify-content:${props => (props.left && 'center') || (props.right && 'center')};
align-items:${props => (props.left && 'center') || (props.right && 'center')};
display:${props => props.right && 'flex'};
@media (max-width:670px){
  position:${props => props.left && 'absolute'};
  z-index:-1;
  width:${props => props.left && '200px'};
  height:${props => props.left && '200px'};
  left:0;
  right:0;
  top:30px;
  margin:auto;
}
`
const BoxDiv = styled.div`
width:95%;
height:95%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Img = styled.img`
width:90%;
height:90%;
`
const FlexDiv = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:${props => props.column && 'column'};
`

const H1 = styled.h1`
font-weight:bold`

const Input = styled.input`
width:${props => (props.checkType && '15px') || '100%'};
height:${props => (props.checkType && '15px') || '35px'};;
border-radius:3px;
border:2px solid gray;
outline:none;
padding:10px;
`
const Button = styled.button`
width:100%;
height:35px;
background-color:rgb(40, 101, 113);
border:none;
border-radius:3px;
color:white;
margin:10px;
cursor:pointer;
`

const FormTag = styled.form`
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
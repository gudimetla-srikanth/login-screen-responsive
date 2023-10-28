import React from 'react'
import styled from 'styled-components'
import women from './assets/women.png'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export default function App() {
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
            <NormalDiv login_content>
              <NormalDiv login>Login ID</NormalDiv>
              <NormalDiv><Input type='text' placeholder='Enter Login ID' /></NormalDiv>
            </NormalDiv>
            <NormalDiv login_content>
              <NormalDiv password>Password</NormalDiv>
              <NormalDiv pos><Input type='password' placeholder='Enter Password' /><VisibilityOffIcon sx={{ position: "absolute", right: "5px", top: "5px" }} /></NormalDiv>
            </NormalDiv>
            <NormalDiv check_flex>
              <NormalDiv>
                <NormalDiv check_box>
                  <NormalDiv><Input checkType type='checkbox' /></NormalDiv> <NormalDiv>Remember Me</NormalDiv>
                </NormalDiv>
                <NormalDiv check_box>
                  <NormalDiv><Input checkType type='checkbox' /></NormalDiv> <NormalDiv>Agree to</NormalDiv><NormalDiv yellow underline>Terms & Conditions</NormalDiv>
                </NormalDiv>
              </NormalDiv>
              <NormalDiv>
                <NormalDiv yellow>
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
font-weight:${props => props.login && 'bold' || props.password && 'bold'};
color:${props => props.yellow && 'yellow'};
cursor:${props => props.yellow && 'pointer'};
text-decoration:${props => props.underline && 'underline'};
position:${props => props.pos && 'relative'};
`
const Div = styled.div`
width:100vw;
height:100vh;
display:${props => props.main && 'flex'};
flex:${props => props.left && '0.6' || props.right && '1'};
display:${props => props.left && 'flex' || props.right && 'flex'};
justify-content:${props => props.left && 'center' || props.right && 'center'};
align-items:${props => props.left && 'center' || props.right && 'center'}
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
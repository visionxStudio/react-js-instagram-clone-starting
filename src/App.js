import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { Button, Input, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import Posts from './component/Posts/Posts';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  // functional states
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // this will run every single time the given variable changes
    db.collection('posts').onSnapshot(snapshot => {
      // every time some change happens in posts collection then fire the onSnapshot code
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id, 
          post:doc.data()
        }))
        )
    });
  }, []); 

  const signUp = (event) => {

  }
 
  return (
    <div className="app">
        {/* Modal */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}>
            <div  className={classes.paper}>
              <center>
                <img 
                  className="app_headerImage" 
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                  alt="instagram Logo" />

                  <Input 
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                  <Input 
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                  <Input 
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                    <Button onClick={signUp} >Sign Up</Button>
              </center>
            </div>
        </Modal>
      {/* Navigation header */}
      <div className="app__header">
        <img 
          className="app__headerImage" 
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram_logo" />
      </div>
      {/* posts */}
      { posts.map(({id, post}) => (
        <Posts  
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl} />
      )) }
    </div>
  );
}

export default App;


/*
  usecase of useEffect
  useEffect: runs a piece of code based on a specific condition
*/
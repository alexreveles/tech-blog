 function logout() {
    // const response = await fetch('/api/users/logout', {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' }
    // });
  
    // if (response.ok) {
    //     alert('login out')
    //   document.location.replace('/');
    // } else {
    //   alert(response.statusText);
    // }
    fetch('/api/users/logout', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' }
    })
    .then(function(){
        document.location.replace('/');
    })
    .catch(err => {
        console.log(err);
    })
  }
  
  document.querySelector("[href='/logout']").addEventListener('click', logout);
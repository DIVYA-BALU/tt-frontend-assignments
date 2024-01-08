function Change()
    {   const image=document.getElementById('img');
        const value=image.src;
        //console.log(value);
        if( value === 'http://127.0.0.1:5500/image/download.jpg')
        {  // console.log('if');
            image.src='image/img.jpg';
        }
        else
        {//console.log('else');
        image.src='image/download.jpg';
        }
    }

    function Hide()
    {  const image= document.getElementById('img');
       const button= document.getElementById('button');
       if(button.textContent==="click here to hide")
       {image.style.display="none";
       button.innerHTML="click here to show";
        }
        else
        {   Show();
        }
    }

    function Show()
    {
       document.getElementById('img').style.display="block";
       document.getElementById('button').innerHTML="click here to hide"
    }
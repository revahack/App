import React, {Fragment, useEffect} from "react";

const Install = () => {

    const showinstaller = () =>{
        document.getElementById("install_button_surface").style.display="block";
    }

    const closeinstaller = () =>{
        document.querySelector("install_button_surface").style.display="none";
    }

  const checkstandalone = () =>{
    console.log("Is is Installed??");
    if (window.matchMedia('(display-mode: standalone)').matches) {  
        closeinstaller();
        console.log('display-mode is standalone');
    }  
    else
        showinstaller();
  }

  useEffect(()=>{
    checkstandalone();
  })

  return(
    <Fragment>

        <h1 className="lg-0 sm-0 md-0">Hih</h1>

    </Fragment>
  );

}

export default Install;
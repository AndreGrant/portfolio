import React from "react";
import "../App.css"

function MyImage(){
    return(
        <div >
            <figure >
            <img className="my-image" src={"man.jpg"} />
            <figcaption className="image-caption">Andre Grant</figcaption>
            </figure>
            <p>Hello! I'm Andre, a current student a Burlington Code Academy; currently on my way to becoming a full-stack web developer. On the site you will learn more about me and follow along on my journey to achieve my goal and aspirations!</p>
        </div>
    )
}

export default MyImage;
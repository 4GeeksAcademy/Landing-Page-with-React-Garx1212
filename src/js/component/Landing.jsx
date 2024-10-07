import React from "react";
 
function Landing (){
    return(

        <div>
            <div className="card my-4 mx-3 p-5">
                <div className="card-body">
                    <h1>A Warm Welcome!</h1>
                    <p className="card-text">They briefly describe the contents of the page, and are shown in search results and in browser tabs. They help searchers to decide whether to click on the website or not. They're also known as Title tags, Meta titles and SEO titles. They should be around 60 characters long to avoid being truncated in search results.</p>
                </div>
                <div>
                    <a href="#" className="btn btn-primary mx-3 mb-3">
                        Call to action!
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Landing;
import React, { Component } from "react";

class About extends Component {

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>About</h1>
        <div>
          <p style={{textAlign: "left"}}>At the beginning of 2018, I had the idea to create an app that would have a summary of spaceflight news
            from various news sites.
            The app would not contain the articles themselves, but only the title and a link to the article, so I
            wouldn’t ‘steal’ the visitors from the site.
            <br/><br/>
            There are many news sites, some with an API, some have RSS feeds, but none of them are the same. For app
            development, this would result in lots of work on the app side, and this would not have been a good thing.
            For that reason I decided to build a service that would collect the metadata, and publish it through an API.
            While building the API, and inspired by Launch Library, I decided to plubish the API for other developers to
            use.
            <br/><br/>
            If you have any questions, don’t hesitate to contact me through social media and Discord, or mail
            me at <a href='mailto:derk@spaceflightnewsapi.net'>derk@spaceflightnewsapi.net</a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;

import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://images.unsplash.com/photo-1584095496545-cc72b2bb427c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
                profileSrc="https://avatars1.githubusercontent.com/u/22815703?s=400&u=fb2c7459799866053a727c93d4fe4559049e3bbe&v=4"
                title="Poirei Singha"
            />
            <Story
                image="https://images.unsplash.com/photo-1598310094778-9e29b926953c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                profileSrc="https://images.unsplash.com/profile-1590851687040-d95d060fde50image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                title="S Weber"
            />
            <Story
                image="https://images.unsplash.com/photo-1598476793884-0e7afd57b92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                profileSrc="https://images.unsplash.com/profile-1591624118149-82c320bd2285image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                title="John D"
            />
            <Story
                image="https://images.unsplash.com/photo-1598532213919-078e54dd1f40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                profileSrc="https://images.unsplash.com/profile-fb-1557234459-23079f85dea6.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                title="Irene Kredenets"
            />
            <Story
                image="https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://images.unsplash.com/profile-1533868995453-432e27628d0b?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                title="AC De Leon"
            />
        </div>
    );
}

export default StoryReel;

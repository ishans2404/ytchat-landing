import React from "react";
import "./index.css";
import ProjectCard from './components/ProjectCard'
import SkillCard from './components/SkillCard'
import AnimatedCursor from "react-animated-cursor"
import ParticlesComponent from "./components/particles"

function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#457cbe'
      }}
    />
    <>
      <ParticlesComponent id="particles" />
    </>
    <div>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle=""
        projectDesc="Transform the way you interact with YouTube content with YouTubeChat! Our innovative tool combines the power of AI with the engaging world of YouTube videos. Simply enter a video link, and watch as YouTubeChat provides insightful, interactive conversations about the content. Whether you're looking to dive deeper into a topic, clarify details, or just have a chat about what you've watched, YouTubeChat is your ultimate video companion. Enhance your viewing experience and unlock a new dimension of understanding with AI-driven conversations. Try it today and turn every video into a dynamic dialogue!"
        projectLink="https://github.com/ishans2404/ytchat"
        deployedProjectLink="https://shy-haze-2955.ploomberapp.io/"
        projectImg={require('./images/p4.png')}
      />
      <SkillCard id = 'skills' />
    </div>
    </>
  );
}

export default App;

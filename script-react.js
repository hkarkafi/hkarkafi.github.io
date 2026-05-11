const { useState } = React;

const ProjectCard = ({ title, description, link, tags, image }) => {
  return (
    <div className="glass-panel p-6">
      <div style={{ width: '100%', height: '180px', overflow: 'hidden', borderRadius: '12px', marginBottom: '1.5rem' }}>
        <img 
          src={image} 
          alt={title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <h3 className="carde-title">{title}</h3>
      <p className="bio-text" style={{ marginBottom: '1.2rem' }}>
        {description}
      </p>
      
      {tags && (
        <div className="tags-container" style={{ marginBottom: '1.2rem' }}>
          {tags.map((tag, index) => (
            <span key={index} className="skill-tag">{tag}</span>
          ))}
        </div>
      )}

      <a href={link} className="social-link" style={{ width: 'max-content', padding: '0 1.2rem', borderRadius: '20px' }}>
        <i className="fa-solid fa-link" style={{ marginRight: '8px' }}></i>
        Voir la démo
      </a>
    </div>
  );
};
function App() {
  const myProjects = [
    { 
        title: "EcoTravel", 
        description: "Plateforme de tourisme durable permettant de réserver des expériences écologiques avec une interface immersive et moderne. ", 
        link: "#",
        image: "ecotravel.png",
        tags: ["JavaScript", "CSS", "HTML","BOOTSTRAP"]
    },
    { 
        title: "Hide & Seek 2D", 
        description: "Jeu de cache-cache conçu en C++ avec la bibliothèque SFML, incluant une gestion des collisions.", 
        link: "#",
        image: "game.png", 
        tags: ["C++", "SFML"]
    }
  ];

  return (
    <div className="skills-grid"> 
      {myProjects.map((project, index) => (
        <ProjectCard 
          key={index}
          {...project} 
        />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-projects-root'));
root.render(<App />);
function Contact(){
return(
<div className="glass-panel input-container">
  <div className="input-grep">
    <label className="bio-text">Nom :</label>
      <input 
        type="text" 
        placeholder="Votre nom..." 
        id="nom"
        className="input" 
        style={{ width: '100%', marginTop: '0.5rem', background: 'rgba(255,255,255,0.1)',  color: 'white', padding: '10px' }}
      />
      <label className="bio-text">Email :</label>
      <input 
        type="text" 
        placeholder="Votre email..."
        id="email" 
        className="input" 
        style={{ width: '100%', marginTop: '0.5rem', background: 'rgba(255,255,255,0.1)',  color: 'white', padding: '10px' }}
      />
      <label className="bio-text">message :</label>
      <input 
        type="text" 
        placeholder="Votre message..." 
        id="message"
        className="input" 
        style={{ width: '100%', marginTop: '0.5rem', background: 'rgba(255,255,255,0.1)',  color: 'white', padding: '10px' }}
      />
  </div>
  <button className="social-link" id="btn-envoyer" style={{ width: 'max-content', padding: '0 1.2rem', borderRadius: '20px',margin:"5px",marginLeft:"20px",cursor: "pointer" }}>
    <i className="fa-regular fa-paper-plane"></i>
  </button>
</div>
);
};
const expRoot = ReactDOM.createRoot(document.getElementById('react-contact-root'));
expRoot.render(<Contact />);
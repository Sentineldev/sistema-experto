import "./styles/Filum-Card-Styles.css"


interface PropsFilum {
  nameFilum: string;
  image: string;
  description: string;
}

export function Filum({ nameFilum, image, description }: PropsFilum) {
  return (
    <div className="card">
      <div className="wallpaper">
        <img src={image} alt="Una imagen" />
      </div>
      <div className="box-area">
        <div className="overlay">
          <h3>{nameFilum}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

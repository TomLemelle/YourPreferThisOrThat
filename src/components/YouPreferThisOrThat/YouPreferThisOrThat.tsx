import { useDispatch, useSelector } from "react-redux";
import photos from "../../models/photos";
import styles from "./YouPreferThisOrThat.module.css";
import { RootState } from "../../store/store";
import { addChoice, gameOver } from "../../store/slices/userChoicesSlice";
import background from "../../assets/background.jpeg";
import { useEffect, useState } from "react";

const YouPreferThisOrThat: React.FC = () => {
  const dispatch = useDispatch();
  const userChoices = useSelector(
    (state: RootState) => state.userChoices.choices
  );
  const currentIndex = useSelector(
    (state: RootState) => state.userChoices.currentIndex
  );

  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const handleChoice = (chosenPhoto: string) => {
    dispatch(addChoice(chosenPhoto));
  };

  const colors = ["#B90001", "#D44225"];

  const handleGameOver = () => {
    setHoveredImage(null);
    dispatch(gameOver());
  };

  useEffect(() => {
    if (currentIndex === 0) {
    }
  }, []);

  if (currentIndex >= photos.length - 1) {
    return (
      <div
        className={styles.endMessage}
        style={{
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>Tous les choix ont ete faits !</h1>
        <p>Voici vos choix :</p>
        <div className={styles.recapContainer}>
          {userChoices.map((choice, index) => (
            <div
              key={index}
              className={styles.recapItem}
              onMouseEnter={() => setHoveredImage(choice)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {choice}
            </div>
          ))}
        </div>
        {hoveredImage && (
          <img
            src={photos.find((photo) => photo.name === hoveredImage)?.photo}
            alt={hoveredImage}
            className={styles.hoveredImage}
          />
        )}
        <button
          className={styles.gameOverButton}
          style={{ background: colors[0] }}
          onClick={handleGameOver}
        >
          Rejouer
        </button>
      </div>
    );
  }

  const previousChoice = userChoices[currentIndex - 1] || null;

  return (
    <div className={styles.youPreferThisOrThatContainer}>
      <div className={`${styles.split} ${styles.splitLeft}`}>
        <div className={styles.imageContainer}>
          <img
            src={
              previousChoice
                ? photos.find((photo) => photo.name === previousChoice)?.photo
                : photos[currentIndex]?.photo
            }
            alt={previousChoice || photos[currentIndex]?.name}
          />
          <div className={styles.overlay}>
            <button
              className={styles.chooseButton}
              style={{ background: colors[0] }}
              onClick={() =>
                handleChoice(previousChoice || photos[currentIndex]?.name)
              }
            >
              Choisir
            </button>
          </div>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={`${styles.split} ${styles.splitRight}`}>
        <div className={styles.imageContainer}>
          <img
            src={photos[currentIndex + 1]?.photo}
            alt={photos[currentIndex + 1]?.name}
          />
          <div className={styles.overlay}>
            <button
              className={styles.chooseButton}
              style={{ background: colors[1] }}
              onClick={() => handleChoice(photos[currentIndex + 1]?.name)}
            >
              Choisir
            </button>
          </div>
        </div>
      </div>
      <div className={styles.questionContainer}>
        <h1>
          Tu preferes{" "}
          <span style={{ color: colors[0] }}>
            {previousChoice || photos[currentIndex]?.name}
          </span>{" "}
          ou{" "}
          <span style={{ color: colors[1] }}>
            {photos[currentIndex + 1]?.name}
          </span>{" "}
          ?
        </h1>
      </div>
      <div className={styles.userChoicesContainer}>
        <div className={styles.userChoices}>
          {userChoices.map((choice, index) => (
            <div key={index} className={styles.userChoiceItem}>
              {choice}
            </div>
          ))}
        </div>
      </div>
      {hoveredImage && (
        <img
          src={photos.find((photo) => photo.name === hoveredImage)?.photo}
          alt={hoveredImage}
          className={styles.hoveredImage}
        />
      )}
      <div className={styles.madeByTomLemelle}>
        <a href="https://www.linkedin.com/in/tom-lemelle" target="_blank">
          Cree par Tom Lemelle
        </a>
      </div>
    </div>
  );
};

export default YouPreferThisOrThat;

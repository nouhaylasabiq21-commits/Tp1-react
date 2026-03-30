import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const liste1 = ['Pain', 'Lait', 'Oeufs'];
  const liste2 = ['Pommes', 'Bananes', 'Oranges'];

  return (
    <div>
      <h1>Exercice React</h1>

      <h2>Voitures</h2>
      <Voiture marque="Toyota" modele="Corolla" couleur="Blanche" />
      <Voiture marque="Renault" modele="Clio" couleur="Rouge" />
      <Voiture marque="BMW" modele="X5" couleur="Noire" />

      <h2>Liste 1</h2>
      <ListeCourses elements={liste1} />

      <h2>Liste 2</h2>
      <ListeCourses elements={liste2} />
    </div>
  );
}

export default App;
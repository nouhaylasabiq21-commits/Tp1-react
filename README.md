# 📘 TP React - Introduction aux composants

## 👩‍💻 Réalisé par

NOUHAYLA SABIQ

---

## 🎯 Objectif du TP

Ce TP a pour objectif de découvrir les bases de React :

* Création d’un projet React
* Utilisation des composants fonctionnels
* Passage de données avec les props
* Validation des props avec PropTypes
* Manipulation de listes dynamiques

---

## ⚙️ Étape 1 : Installation et démarrage du projet

### Installation des outils

* Installer Node.js (version LTS)
* Vérifier avec :

```bash
node -v
npm -v
```

### Création du projet

```bash
npx create-react-app tp-react
cd tp-react
npm start
```
---

## 🧩 Étape 2 : Création du composant HelloWorld

### Fichier : `HelloWorld.js`

```jsx
function HelloWorld() {
  return <h1>Hello World !</h1>;
}

export default HelloWorld;
```

### Utilisation dans `App.js`

```jsx
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
```

📸 Screenshot :
<img width="960" height="539" alt="1" src="https://github.com/user-attachments/assets/e2d1eb3a-80fc-42f9-87d0-82e9a4e5bde6" />


---

## 🧠 Étape 4 : Composant Profil avec props et PropTypes

### Installation

```bash
npm install prop-types
```

### Fichier : `Profil.js`

```jsx
import PropTypes from 'prop-types';

function Profil({ utilisateur, taille }) {
  return (
    <div>
      <img src={utilisateur.photo} width={taille} alt={utilisateur.nom} />
      <p>{utilisateur.nom}</p>
    </div>
  );
}

Profil.propTypes = {
  utilisateur: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  taille: PropTypes.number,
};

Profil.defaultProps = {
  taille: 100,
};

export default Profil;
```

### Utilisation dans `App.js`

```jsx
import Profil from './Profil';

function App() {
  const utilisateur = { nom: 'Emma', photo: '/user.png' };

  return (
    <div>
      <Profil utilisateur={utilisateur} taille={150} />
    </div>
  );
}
```

📸 Screenshot :
<img width="956" height="514" alt="2" src="https://github.com/user-attachments/assets/05fb2f2a-6d90-4eaf-88ee-456b61e9f0c3" />


---

## 🚗 Étape 5 : Exercice 1 - Composant Voiture

### Fichier : `Voiture.js`

```jsx
import PropTypes from 'prop-types';

function Voiture({ marque, modele, couleur }) {
  return (
    <p>
      Voiture : {marque} {modele}, Couleur : {couleur}
    </p>
  );
}

Voiture.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
};

export default Voiture;
```

---

## 🛒 Étape 5 : Exercice 2 - Liste dynamique

### Fichier : `ListeCourses.js`

```jsx
import PropTypes from 'prop-types';

function ListeCourses({ elements }) {
  return (
    <ul>
      {elements.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
}

ListeCourses.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListeCourses;
```

---

## 🔗 Utilisation finale dans `App.js`

```jsx
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const liste1 = ['Pain', 'Lait', 'Oeufs'];
  const liste2 = ['Pommes', 'Bananes', 'Oranges'];

  return (
    <div>
      <h2>Voitures</h2>
      <Voiture marque="Toyota" modele="Corolla" couleur="Blanche" />
      <Voiture marque="Renault" modele="Clio" couleur="Rouge" />
      <Voiture marque="BMW" modele="X5" couleur="Noire" />

      <h2>Listes de courses</h2>
      <ListeCourses elements={liste1} />
      <ListeCourses elements={liste2} />
    </div>
  );
}

export default App;
```

📸 Screenshot :

<img width="960" height="504" alt="3" src="https://github.com/user-attachments/assets/6925f502-21ac-44c0-8a07-e420b886f417" />

---

## ✅ Conclusion

Ce TP m’a permis de :

* Comprendre les composants React
* Utiliser les props pour passer des données
* Valider les données avec PropTypes
* Créer des interfaces dynamiques avec des listes

---

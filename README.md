## **TP 2 - Requêter une API publique**

### **Description**
Ce projet consiste à interagir avec l'API publique [jsonplaceholder](https://jsonplaceholder.typicode.com/) pour réaliser des requêtes HTTP et afficher les résultats. L'objectif est d'utiliser des outils modernes de développement en JavaScript pour tester et consigner les réponses.

---

### **Installation et utilisation**

#### **Prérequis**
- Node.js installé (v14 ou plus récent).
- Un terminal ou un éditeur de code (comme VS Code).

#### **Étapes**
1. Clone ce dépôt ou télécharge les fichiers.
2. Dans le dossier du projet, installe les dépendances :
   ```bash
   npm install
   ```
3. Lance le script pour tester les requêtes :
   ```bash
   node index.js
   ```

---

### **Fonctionnalités**

#### **Requêtes réalisées**
1. **Récupération de tous les commentaires** :
   - **Type** : GET
   - **URL** : `https://jsonplaceholder.typicode.com/comments`
   - **Résultat attendu** : Liste de tous les commentaires disponibles.

2. **Création d'une tâche (`todo`)** :
   - **Type** : POST
   - **URL** : `https://jsonplaceholder.typicode.com/todos`
   - **Body** :
     ```json
     {
       "title": "Nouvelle tâche",
       "completed": false,
       "userId": 1
     }
     ```
   - **Résultat attendu** : Objet représentant la tâche nouvellement créée.

3. **Modification d'un post existant** :
   - **Type** : PATCH
   - **URL** : `https://jsonplaceholder.typicode.com/posts/1`
   - **Body** :
     ```json
     {
       "title": "Titre mis à jour",
       "body": "Contenu modifié"
     }
     ```
   - **Résultat attendu** : Objet du post mis à jour avec les nouvelles données.

4. **Récupération des commentaires associés à un post spécifique** :
   - **Type** : GET
   - **URL** : `https://jsonplaceholder.typicode.com/posts/1/comments`
   - **Résultat attendu** : Liste des commentaires liés au post ayant l'ID 1.

5. **Récupération des photos d’un album spécifique** :
   - **Type** : GET
   - **URL** : `https://jsonplaceholder.typicode.com/albums/2/photos`
   - **Résultat attendu** : Liste des photos liées à l'album ayant l'ID 2.

---

### **Structure du projet**

```
tp2-jsonplaceholder/
├── node_modules/      # Dépendances Node.js
├── index.js           # Script principal contenant les requêtes
├── package.json       # Fichier de configuration du projet
├── README.md          # Documentation du projet
```

---

### **Exemple d'exécution**

#### **Extrait de la sortie dans le terminal :**
```bash
Commentaires : [ ... ]
Nouvelle tâche créée : { id: 201, title: 'Nouvelle tâche', completed: false, userId: 1 }
Post mis à jour : { id: 1, title: 'Titre mis à jour', body: 'Contenu modifié', ... }
Commentaires pour le post 1 : [ ... ]
Photos pour l'album 2 : [ ... ]
```

---

### **Dépannage**
- Si une erreur `ERR_REQUIRE_ESM` apparaît :
  - Assure-toi d'avoir modifié le fichier `package.json` pour inclure `"type": "module"`.
  - Vérifie que la bonne version de `node-fetch` est installée (v3 pour `import`, v2 pour `require`).
  
- Pour installer les dépendances :
  ```bash
  npm install node-fetch
  ```

---

### **Technologies utilisées**
- **Node.js** : Environnement JavaScript.
- **node-fetch** : Librairie pour effectuer des requêtes HTTP.

---

### **Auteurs**
- Réalisé par **[Ton Nom]** dans le cadre du TP 2 pour le module **"Concevoir une API en JavaScript"**.

---

Ce `README.md` contient toutes les informations nécessaires pour comprendre, installer, et exécuter le projet. N'hésite pas à me dire si tu souhaites ajouter ou modifier quelque chose ! 😊
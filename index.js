import fetch from "node-fetch";

// Reste du code...


// Requête GET sur les commentaires
async function getComments() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await response.json();
    console.log("Commentaires :", comments);
}

// Requête POST pour créer un todo
async function createTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Nouvelle tâche",
            completed: false,
            userId: 1
        })
    });
    const newTodo = await response.json();
    console.log("Nouvelle tâche créée :", newTodo);
}

// Requête PATCH pour modifier un post
async function updatePost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Titre mis à jour",
            body: "Contenu modifié"
        })
    });
    const updatedPost = await response.json();
    console.log("Post mis à jour :", updatedPost);
}

// Requête GET pour les commentaires d’un post spécifique
async function getCommentsForPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    const comments = await response.json();
    console.log("Commentaires pour le post 1 :", comments);
}

// Requête GET pour les photos d’un album spécifique
async function getPhotosForAlbum() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/2/photos");
    const photos = await response.json();
    console.log("Photos pour l'album 2 :", photos);
}

// Appels des fonctions
(async () => {
    await getComments();
    await createTodo();
    await updatePost();
    await getCommentsForPost();
    await getPhotosForAlbum();
})();

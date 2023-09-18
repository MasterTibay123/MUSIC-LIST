const musicList = [
    { title: "Awit Ng Anak", filePath: "https://drive.google.com/uc?id=188B9lilBdLG_GAC3c8sxHz4MUYMvqsv6" },
    { title: "Glowing Inside", filePath: "https://drive.google.com/uc?id=18BgnBntgAcIz5l6QHmGWy8dMzEHSGDuc" },
    { title: "I Can", filePath: "https://drive.google.com/uc?id=18Tw0jtdjuGFooI3-DUysy9bj7CE2SsFC" },
    { title: "Journey", filePath: "https://drive.google.com/uc?id=18ayE3cLZlSA2vCqIFcVSOB4KJS8uY5kE" },
    { title: "Kanlungan", filePath: "https://drive.google.com/uc?id=18fZ_MMkr5vhadvs9HiedMxjZ91kGmPte" },
    // Add more songs as needed
];

let title_el = document.querySelector("title");
const musicListElement = document.getElementById('musicList');
const audioPlayer = document.getElementById('audioPlayer');
const currentSongElement = document.querySelector('#currentSong span');

// Populate the music list
musicList.forEach((music, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = music.title;

    listItem.addEventListener('click', () => {
        audioPlayer.src = music.filePath;
        audioPlayer.play();
        currentSongElement.textContent = music.title;

        if(title_el)
    title_el.innerHTML = "Song Title: " + title;
    });

    musicListElement.appendChild(listItem);
});

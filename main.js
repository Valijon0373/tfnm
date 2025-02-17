function showContent(matn) {
    let contentBox = document.getElementById('content-box');

    if (contentBox.classList.contains('show')) {
        contentBox.classList.remove('show'); // Agar ochiq bo‘lsa, yopiladi
    } else {
        contentBox.innerText = matn; // Matnni o‘zgartirish
        contentBox.classList.add('show'); // Ochish
    }
}


const BASE_URL = 'https://thatcopy.pw/catapi/restId/1';
const catBtn = document.getElementById('change-cat');
//const catImg = document.getElementById('cat');

const getCats = async () => {
    const data = await fetch(BASE_URL)
		.then((res) => res.json())
    .catch((e) => console.log(e));

return data.webpurl;
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};



//const btn = document.getElementById('change-cat');
catBtn.addEventListener('click', loadImg);

loadImg();
const pokemonCount: number = 24;

async function pokeApi(url: string): Promise<any> {
    let data: Response = await fetch(url);
    return await data.json();
}

const APP: HTMLElement | null = document.getElementById("app");
let html: string = '';

// Tạo một mảng chứa các chỉ số của các Pokémon từ 1 đến 24
const pokemonIndices: number[] = Array.from({ length: pokemonCount }, (_, index) => index + 1);

// Xáo trộn mảng để có thứ tự ngẫu nhiên
shuffle(pokemonIndices);

// Tạo một mảng lưu trữ các chỉ số của các Pokémon đã chọn
const selectedPokemonIndices: number[] = [];

// Chọn mỗi chỉ số đầu tiên từ mảng đã xáo trộn
pokemonIndices.forEach((index: number) => {
    selectedPokemonIndices.push(index);
    selectedPokemonIndices.push(index); // Thêm chỉ số một lần nữa để nhân đôi mỗi con Pokémon
});

// Lấy thông tin của các Pokémon được chọn và hiển thị trên trang web
selectedPokemonIndices.forEach((index: number) => {
    pokeApi(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(function(response: any) {
        html += `
        <div class="col-1 p-1">
            <div class="card shadow position-relative">
                <span class="position-absolute top-0">#${response.id}</span>
                <img src="${response.sprites.front_default}" alt="${response.name}">
            </div>
        </div>
        `;
        APP?.innerHTML = html;
    });
});

// Hàm xáo trộn mảng
function shuffle(array: any[]): void {    
    let currentIndex: number = array.length;
    let temporaryValue: any;
    let randomIndex: number;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}






const countdownMinutes: number = 10;
let countdownSeconds: number = countdownMinutes * 60;
let countdownInterval: NodeJS.Timeout | null = null;

function startCountdown() {
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    countdownSeconds--;
    if (countdownSeconds <= 0) {
        clearInterval(countdownInterval!);
        alert("Het thoi gian!");
        return;
    }

    const minutes = Math.floor(countdownSeconds / 60);
    const seconds = countdownSeconds % 60;
    const countdownDisplay: HTMLElement | null = document.getElementById("countdown");
    if (countdownDisplay) {
        countdownDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function resetCountdown() {
    clearInterval(countdownInterval!);
    countdownSeconds = countdownMinutes * 60 + 1 ; // Thiết lập lại thời gian về 10 phút
    updateCountdown(); // Cập nhật hiển thị đồng hồ đếm ngược
}

const startButton: HTMLElement | null = document.getElementById("startButton");
if (startButton) {
    startButton.addEventListener("click", () => {
        startCountdown();
    });
}

const cancelButton: HTMLElement | null = document.getElementById("cancelButton");
if (cancelButton) {
    cancelButton.addEventListener("click", () => {
        resetCountdown();
    });
}

const resetButton: HTMLElement | null = document.getElementById("resetButton");
if (resetButton) {
    resetButton.addEventListener("click", () => {
        countdownSeconds = countdownMinutes * 60 + 1;
        updateCountdown();
    });
}

// function getUserName(): string {
//     const usernameInput: HTMLInputElement | null = document.getElementById("usernameInput") as HTMLInputElement;
//     return usernameInput.value;
// }

// const submitButton: HTMLButtonElement | null = document.getElementById("submitUsername") as HTMLButtonElement;
// submitButton.addEventListener("click", function () {
//     const playerName: string = getUserName();
//     const greetingMessage: HTMLElement | null = document.getElementById("greetingMessage");
//     if (greetingMessage) {
//         greetingMessage.textContent = "Hello " + playerName + "!";
//     }
//     window.location.href = "index.html"; // Chuyển hướng tới trang greeting
// });

function getUserName(): string {
    const usernameInput: HTMLInputElement | null = document.getElementById("usernameInput") as HTMLInputElement;
    return usernameInput.value;
}

const submitButton: HTMLButtonElement | null = document.getElementById("submitUsername") as HTMLButtonElement;
submitButton.addEventListener("click", function () {
    const playerName: string = getUserName();
    localStorage.setItem("playerName", playerName); // Lưu tên người chơi vào localStorage
    window.location.href = "index.html"; // Chuyển hướng tới trang greeting
});
document.addEventListener("DOMContentLoaded", function () {
    const playerName: string | null = localStorage.getItem("playerName");
    const greetingMessage: HTMLElement | null = document.getElementById("greetingMessage");
    if (greetingMessage && playerName) {
        greetingMessage.textContent = "Hello " + playerName + "!";
    }
});


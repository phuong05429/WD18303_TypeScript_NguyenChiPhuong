"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const pokemonCount = 24;
function pokeApi(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield fetch(url);
        return yield data.json();
    });
}
const APP = document.getElementById("app");
let html = '';
// Tạo một mảng chứa các chỉ số của các Pokémon từ 1 đến 24
const pokemonIndices = Array.from({ length: pokemonCount }, (_, index) => index + 1);
// Xáo trộn mảng để có thứ tự ngẫu nhiên
shuffle(pokemonIndices);
// Tạo một mảng lưu trữ các chỉ số của các Pokémon đã chọn
const selectedPokemonIndices = [];
// Chọn mỗi chỉ số đầu tiên từ mảng đã xáo trộn
pokemonIndices.forEach((index) => {
    selectedPokemonIndices.push(index);
    selectedPokemonIndices.push(index); // Thêm chỉ số một lần nữa để nhân đôi mỗi con Pokémon
});
// Lấy thông tin của các Pokémon được chọn và hiển thị trên trang web
selectedPokemonIndices.forEach((index) => {
    pokeApi(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(function (response) {
        html += `
        <div class="col-1 p-1">
            <div class="card shadow position-relative">
                <span class="position-absolute top-0">#${response.id}</span>
                <img src="${response.sprites.front_default}" alt="${response.name}">
            </div>
        </div>
        `;
        APP === null || APP === void 0 ? void 0 : APP.innerHTML = html;
    });
});
// Hàm xáo trộn mảng
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}
const countdownMinutes = 10;
let countdownSeconds = countdownMinutes * 60;
let countdownInterval = null;
function startCountdown() {
    countdownInterval = setInterval(updateCountdown, 1000);
}
function updateCountdown() {
    countdownSeconds--;
    if (countdownSeconds <= 0) {
        clearInterval(countdownInterval);
        alert("Het thoi gian!");
        return;
    }
    const minutes = Math.floor(countdownSeconds / 60);
    const seconds = countdownSeconds % 60;
    const countdownDisplay = document.getElementById("countdown");
    if (countdownDisplay) {
        countdownDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}
function resetCountdown() {
    clearInterval(countdownInterval);
    countdownSeconds = countdownMinutes * 60 + 1; // Thiết lập lại thời gian về 10 phút
    updateCountdown(); // Cập nhật hiển thị đồng hồ đếm ngược
}
const startButton = document.getElementById("startButton");
if (startButton) {
    startButton.addEventListener("click", () => {
        startCountdown();
    });
}
const cancelButton = document.getElementById("cancelButton");
if (cancelButton) {
    cancelButton.addEventListener("click", () => {
        resetCountdown();
    });
}
const resetButton = document.getElementById("resetButton");
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
function getUserName() {
    const usernameInput = document.getElementById("usernameInput");
    if (usernameInput && usernameInput.value.trim() !== '') {
        return usernameInput.value;
    }
    else {
        return null; // Trả về null nếu input trống
    }
}
const submitButton = document.getElementById("submitUsername");
if (submitButton) {
    submitButton.addEventListener("click", function () {
        const playerName = getUserName();
        if (playerName) {
            localStorage.setItem("playerName", playerName);
            window.location.href = "index.html";
        }
        else {
            // Hiển thị thông báo lỗi nếu input trống
            const errorMessage = document.getElementById("errorMessage");
            if (errorMessage) {
                errorMessage.textContent = "Vui long nhap ten tai khoan !";
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const playerName = localStorage.getItem("playerName");
    const greetingMessage = document.getElementById("greetingMessage");
    if (greetingMessage && playerName) {
        greetingMessage.textContent = "Xin chao " + playerName + "!";
    }
});

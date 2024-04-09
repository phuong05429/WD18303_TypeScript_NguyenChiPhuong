"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// Hàm xáo trộn mảng sử dụng thuật toán Fisher-Yates
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// Gọi hàm shuffle để xáo trộn mảng pokemonIndices
shuffle(pokemonIndices);
// Tạo một mảng lưu trữ các chỉ số của các Pokémon đã chọn (gấp đôi mảng)
const selectedPokemonIndices = [];
pokemonIndices.forEach((index) => {
    selectedPokemonIndices.push(index);
    selectedPokemonIndices.push(index); // Thêm chỉ số một lần nữa để nhân đôi mỗi con Pokémon
});
// Tiếp tục xử lý các chỉ số đã gấp đôi để hiển thị trên trang web
selectedPokemonIndices.forEach((index) => {
    html += `
    <div class="col-1 p-1 ">
    <div class="card shadow position-relative card" onclick="startButtonClicked && showPokemonInfo(this, ${index})"></div>
</div>
    `;
});
APP === null || APP === void 0 ? void 0 : APP.innerHTML = html;
let previousPokemonId = null; // Lưu trữ ID của Pokémon trước đó
let previousCardElement = null; // Lưu trữ thẻ card trước đó
function showPokemonInfo(cardElement, index) {
    pokeApi(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(function (response) {
        // Nếu thẻ card trước đó đã được điền thông tin và không trùng với Pokémon hiện tại, thì trả về trạng thái ban đầu
        if (previousCardElement && previousPokemonId !== response.id) {
            previousCardElement.innerHTML = '';
        }
        // Hiển thị thông tin của Pokémon
        cardElement.innerHTML = `
        <span class="position-absolute top-0">#${response.id}</span>
        <img class="" src="${response.sprites.front_default}" alt="${response.name}">
        `;
        // Nếu ID của Pokémon hiện tại trùng với Pokémon trước đó, cập nhật previousCardElement và previousPokemonId
        if (previousPokemonId !== response.id) {
            previousCardElement = cardElement;
        }
        else {
            previousCardElement = null;
        }
        previousPokemonId = response.id;
    });
}
const countdownMinutes = 10;
let countdownSeconds = countdownMinutes * 60;
let isCountingDown = false;
let countdownInterval = null;
let startButtonClicked = false; // Biến để kiểm tra nút Start đã được click hay chưa
function startCountdown() {
    if (!isCountingDown) {
        countdownInterval = setInterval(updateCountdown, 1000);
        isCountingDown = true;
        startButtonClicked = true; // Đặt biến này thành true khi nút Start được click
    }
}
function stopCountdown() {
    clearInterval(countdownInterval);
    isCountingDown = false;
}
function updateCountdown() {
    countdownSeconds--;
    if (countdownSeconds <= 0) {
        clearInterval(countdownInterval);
        isCountingDown = false;
        alert("Hết thời gian!");
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
    countdownSeconds = countdownMinutes * 60 + 1;
    updateCountdown();
    isCountingDown = false;
    startButtonClicked = false; // Đặt biến này thành false khi nút Reset được click
}
const startButton = document.getElementById("startButton");
if (startButton) {
    startButton.addEventListener("click", () => {
        startCountdown();
    });
}
const stopButton = document.getElementById("stopButton");
if (stopButton) {
    stopButton.addEventListener("click", () => {
        stopCountdown();
    });
}
const resetButton = document.getElementById("resetButton");
if (resetButton) {
    resetButton.addEventListener("click", () => {
        resetCountdown();
        location.reload(); // Load lại trang khi nút Reset được click
    });
}
/*============================================================================================*/
function validateInput(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const usernameInput = document.getElementById("usernameInput");
        if (usernameInput && usernameInput.value.trim() !== '') {
            return originalMethod.apply(this, args);
        }
        else {
            const errorMessage = document.getElementById("errorMessage");
            if (errorMessage) {
                errorMessage.textContent = "Vui lòng nhập tên tài khoản!";
            }
            return null;
        }
    };
    return descriptor;
}
class YourClass {
    static submitUsername() {
        const instance = new YourClass();
        const playerName = instance.getUserName();
        if (playerName) {
            localStorage.setItem("playerName", playerName);
            window.location.href = "index.html";
        }
    }
    getUserName() {
        const usernameInput = document.getElementById("usernameInput");
        if (usernameInput && usernameInput.value.trim() !== '') {
            return usernameInput.value;
        }
        else {
            const errorMessage = document.getElementById("errorMessage");
            if (errorMessage) {
                errorMessage.textContent = "Vui lòng nhập tên tài khoản!";
            }
            return null;
        }
    }
}
__decorate([
    validateInput
], YourClass, "submitUsername", null);
const submitButton = document.getElementById("submitUsername");
if (submitButton) {
    submitButton.addEventListener("click", YourClass.submitUsername);
}
document.addEventListener("DOMContentLoaded", function () {
    const playerName = localStorage.getItem("playerName");
    const greetingMessage = document.getElementById("greetingMessage");
    if (greetingMessage && playerName) {
        greetingMessage.textContent = "Xin chào " + playerName + "!";
    }
});
/*============================================================================================*/
let score = 0; // Biến lưu trữ số điểm
let previousSelectedId = null; // Biến lưu trữ id của item trước đó
const scoreDisplay = document.getElementById("score");
if (scoreDisplay) {
    scoreDisplay.textContent = `${score}`;
}
function showPokemonInfo(cardElement, index) {
    pokeApi(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(function (response) {
        // Nếu thẻ card trước đó đã được điền thông tin và không trùng với Pokémon hiện tại, thì trả về trạng thái ban đầu
        if (previousCardElement && previousPokemonId !== response.id) {
            previousCardElement.innerHTML = '';
        }
        // Hiển thị thông tin của Pokémon
        cardElement.innerHTML = `
        <span class="position-absolute top-0">#${response.id}</span>
        <img class="" src="${response.sprites.front_default}" alt="${response.name}">
        `;
        // Kiểm tra nếu item hiện tại đã được chọn và không trùng với item trước đó
        if (previousSelectedId !== null && previousSelectedId === response.id) {
            // Tăng điểm lên 1
            score++;
            // Cập nhật hiển thị điểm
            const scoreDisplay = document.getElementById("score");
            if (scoreDisplay) {
                scoreDisplay.textContent = `${score}`;
            }
            // Reset lại biến lưu trữ id của item trước đó
            previousSelectedId = null;
        }
        else {
            // Lưu id của item hiện tại
            previousSelectedId = response.id;
        }
        // Nếu ID của Pokémon hiện tại trùng với Pokémon trước đó, cập nhật previousCardElement và previousPokemonId
        if (previousPokemonId !== response.id) {
            previousCardElement = cardElement;
        }
        else {
            previousCardElement = null;
        }
        previousPokemonId = response.id;
    });
}

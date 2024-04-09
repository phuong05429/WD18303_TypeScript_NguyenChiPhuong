var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var pokemonCount = 24;
function pokeApi(url) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, data.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
var APP = document.getElementById("app");
var html = '';
// Tạo một mảng chứa các chỉ số của các Pokémon từ 1 đến 24
var pokemonIndices = Array.from({ length: pokemonCount }, function (_, index) { return index + 1; });
// Xáo trộn mảng để có thứ tự ngẫu nhiên
shuffle(pokemonIndices);
// Tạo một mảng lưu trữ các chỉ số của các Pokémon đã chọn
var selectedPokemonIndices = [];
// Chọn mỗi chỉ số đầu tiên từ mảng đã xáo trộn
pokemonIndices.forEach(function (index) {
    selectedPokemonIndices.push(index);
    selectedPokemonIndices.push(index); // Thêm chỉ số một lần nữa để nhân đôi mỗi con Pokémon
});
// Lấy thông tin của các Pokémon được chọn và hiển thị trên trang web
selectedPokemonIndices.forEach(function (index) {
    pokeApi("https://pokeapi.co/api/v2/pokemon/".concat(index, "/")).then(function (response) {
        html += "\n        <div class=\"col-1 p-1\">\n            <div class=\"card shadow position-relative\">\n                <span class=\"position-absolute top-0\">#".concat(response.id, "</span>\n                <img src=\"").concat(response.sprites.front_default, "\" alt=\"").concat(response.name, "\">\n            </div>\n        </div>\n        ");
        APP === null || APP === void 0 ? void 0 : APP.innerHTML = html;
    });
});
// Hàm xáo trộn mảng
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}
var countdownMinutes = 10;
var countdownSeconds = countdownMinutes * 60;
var countdownInterval = null;
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
    var minutes = Math.floor(countdownSeconds / 60);
    var seconds = countdownSeconds % 60;
    var countdownDisplay = document.getElementById("countdown");
    if (countdownDisplay) {
        countdownDisplay.textContent = "".concat(minutes.toString().padStart(2, '0'), ":").concat(seconds.toString().padStart(2, '0'));
    }
}
function resetCountdown() {
    clearInterval(countdownInterval);
    countdownSeconds = countdownMinutes * 60 + 1; // Thiết lập lại thời gian về 10 phút
    updateCountdown(); // Cập nhật hiển thị đồng hồ đếm ngược
}
var startButton = document.getElementById("startButton");
if (startButton) {
    startButton.addEventListener("click", function () {
        startCountdown();
    });
}
var cancelButton = document.getElementById("cancelButton");
if (cancelButton) {
    cancelButton.addEventListener("click", function () {
        resetCountdown();
    });
}
var resetButton = document.getElementById("resetButton");
if (resetButton) {
    resetButton.addEventListener("click", function () {
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
    var usernameInput = document.getElementById("usernameInput");
    return usernameInput.value;
}
var submitButton = document.getElementById("submitUsername");
submitButton.addEventListener("click", function () {
    var playerName = getUserName();
    localStorage.setItem("playerName", playerName); // Lưu tên người chơi vào localStorage
    window.location.href = "index.html"; // Chuyển hướng tới trang greeting
});
document.addEventListener("DOMContentLoaded", function () {
    var playerName = localStorage.getItem("playerName");
    var greetingMessage = document.getElementById("greetingMessage");
    if (greetingMessage && playerName) {
        greetingMessage.textContent = "Hello " + playerName + "!";
    }
});

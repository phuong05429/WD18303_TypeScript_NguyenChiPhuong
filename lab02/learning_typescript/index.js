// const pokemon: number = 48;
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
// async function pokeApi(url: string){
//     let data: Response = await fetch("url");
//     return await data.json();
// }
// console.log(Math.floor(Math.random()*48)+1);
// const APP: HTMLElement | null = document.getElementById("app");
// let html: string = '';
// for(let index = 0 ; index < 48 ; index++){
//     const data: any = pokeApi(`https://pokeapi.co/api/v2/pokemon/$(Math.floor(Math.random()*48)+1)/`);
//     data.then(function(response: any){
//     html += `
//     <div class="col-1">
//                     <div class="card shadow position-relative">
//                         <span class="position-absolute top-0">#$${response.id}</span>
//                         <img src="${response.sprites.front_default}" alt="${response.name}">
//                     </div>
//                 </div>
//     `;
// APP?.innerHTML = html;
//     });
// }
var pokemon = 48;
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
console.log(Math.floor(Math.random() * 48) + 1);
var APP = document.getElementById("app");
var html = '';
for (var index = 0; index < 48; index++) {
    var randomPokemonIndex = Math.floor(Math.random() * 48) + 1;
    var data = pokeApi("https://pokeapi.co/api/v2/pokemon/".concat(randomPokemonIndex, "/"));
    data.then(function (response) {
        html += "\n        <div class=\"col-1 p-1\">\n            <div class=\"card shadow position-relative\">\n                <span class=\"position-absolute top-0\">#".concat(response.id, "</span>\n                <img src=\"").concat(response.sprites.front_default, "\" alt=\"").concat(response.name, "\">\n            </div>\n        </div>\n        ");
        APP === null || APP === void 0 ? void 0 : APP.innerHTML = html; // Di chuyển việc cập nhật HTML vào trong promise để đảm bảo dữ liệu đã được nhận trước khi cập nhật nội dung
    });
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

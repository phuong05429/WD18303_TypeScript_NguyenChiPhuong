const pokemonCount: number = 24;

async function pokeApi(url: string): Promise<any> {
    let data: Response = await fetch(url);
    return await data.json();
}

const APP: HTMLElement | null = document.getElementById("app");
let html: string = '';

// Tạo một mảng chứa các chỉ số của các Pokémon từ 1 đến 24
const pokemonIndices: number[] = Array.from({ length: pokemonCount }, (_, index) => index + 1);
// Hàm xáo trộn mảng sử dụng thuật toán Fisher-Yates
function shuffle(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Gọi hàm shuffle để xáo trộn mảng pokemonIndices
shuffle(pokemonIndices);

// Tạo một mảng lưu trữ các chỉ số của các Pokémon đã chọn (gấp đôi mảng)
const selectedPokemonIndices: number[] = [];
pokemonIndices.forEach((index: number) => {
    selectedPokemonIndices.push(index);
    selectedPokemonIndices.push(index); // Thêm chỉ số một lần nữa để nhân đôi mỗi con Pokémon

});

// Tiếp tục xử lý các chỉ số đã gấp đôi để hiển thị trên trang web
selectedPokemonIndices.forEach((index: number) => {
    html += `
    <div class="col-1 p-1 ">
    <div class="card shadow position-relative card" onclick="startButtonClicked && showPokemonInfo(this, ${index})"></div>
</div>
    `;
});

APP?.innerHTML = html;





let previousPokemonId: number | null = null; // Lưu trữ ID của Pokémon trước đó
let previousCardElement: HTMLElement | null = null; // Lưu trữ thẻ card trước đó



function showPokemonInfo(cardElement: HTMLElement, index: number) {
    pokeApi(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(function(response: any) {
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
        } else {
            previousCardElement = null;
        }
        
        previousPokemonId = response.id;
    });
}


const countdownMinutes: number = 10;
let countdownSeconds: number = countdownMinutes * 60;


let isCountingDown: boolean = false;
let countdownInterval: NodeJS.Timeout | null = null;
let startButtonClicked: boolean = false; // Biến để kiểm tra nút Start đã được click hay chưa

function startCountdown() {
    if (!isCountingDown) {
        countdownInterval = setInterval(updateCountdown, 1000);
        isCountingDown = true;
        startButtonClicked = true; // Đặt biến này thành true khi nút Start được click
    }
}

function stopCountdown() {
    clearInterval(countdownInterval!);
    isCountingDown = false;
}

function updateCountdown() {
    countdownSeconds--;
    if (countdownSeconds <= 0) {
        clearInterval(countdownInterval!);
        isCountingDown = false;
        alert("Hết thời gian!");
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
    countdownSeconds = countdownMinutes * 60 + 1;
    updateCountdown();
    isCountingDown = false;
    startButtonClicked = false; // Đặt biến này thành false khi nút Reset được click
}

const startButton: HTMLElement | null = document.getElementById("startButton");
if (startButton) {
    startButton.addEventListener("click", () => {
        startCountdown();
    });
}

const stopButton: HTMLElement | null = document.getElementById("stopButton");
if (stopButton) {
    stopButton.addEventListener("click", () => {
        stopCountdown();
    });
}

const resetButton: HTMLElement | null = document.getElementById("resetButton");
if (resetButton) {
    resetButton.addEventListener("click", () => {
        resetCountdown();
        location.reload(); // Load lại trang khi nút Reset được click
    });
}




/*============================================================================================*/

function validateInput(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const usernameInput: HTMLInputElement | null = document.getElementById("usernameInput") as HTMLInputElement;
        if (usernameInput && usernameInput.value.trim() !== '') {
            return originalMethod.apply(this, args);
        } else {
            const errorMessage: HTMLElement | null = document.getElementById("errorMessage");
            if (errorMessage) {
                errorMessage.textContent = "Vui lòng nhập tên tài khoản!";
            }
            return null;
        }
    };

    return descriptor;
}


class YourClass {
    @validateInput
    static submitUsername(): void {
        const instance = new YourClass();
        const playerName: string | null = instance.getUserName();
        if (playerName) {
            localStorage.setItem("playerName", playerName);
            window.location.href = "index.html";
        }
    }

    getUserName(): string | null {
        const usernameInput: HTMLInputElement | null = document.getElementById("usernameInput") as HTMLInputElement;
        if (usernameInput && usernameInput.value.trim() !== '') {
            return usernameInput.value;
        } else {
            const errorMessage: HTMLElement | null = document.getElementById("errorMessage");
            if (errorMessage) {
                errorMessage.textContent = "Vui lòng nhập tên tài khoản!";
            }
            return null;
        }
    }
}

const submitButton: HTMLButtonElement | null = document.getElementById("submitUsername") as HTMLButtonElement;
if (submitButton) {
    submitButton.addEventListener("click", YourClass.submitUsername);
}

document.addEventListener("DOMContentLoaded", function () {
    const playerName: string | null = localStorage.getItem("playerName");
    const greetingMessage: HTMLElement | null = document.getElementById("greetingMessage");
    if (greetingMessage && playerName) {
        greetingMessage.textContent = "Xin chào " + playerName + "!";
    }
});

/*============================================================================================*/


let score: number = 0; // Biến lưu trữ số điểm
let previousSelectedId: number | null = null; // Biến lưu trữ id của item trước đó
const scoreDisplay: HTMLElement | null = document.getElementById("score");
if (scoreDisplay) {
    scoreDisplay.textContent = `${score}`;
}
function showPokemonInfo(cardElement: HTMLElement, index: number) {
    pokeApi(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(function(response: any) {
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
            const scoreDisplay: HTMLElement | null = document.getElementById("score");
            if (scoreDisplay) {
                scoreDisplay.textContent = `${score}`;
            }
            // Reset lại biến lưu trữ id của item trước đó
            previousSelectedId = null;
        } else {
            // Lưu id của item hiện tại
            previousSelectedId = response.id;
        }
        
        // Nếu ID của Pokémon hiện tại trùng với Pokémon trước đó, cập nhật previousCardElement và previousPokemonId
        if (previousPokemonId !== response.id) {
            previousCardElement = cardElement;
        } else {
            previousCardElement = null;
        }
        
        previousPokemonId = response.id;
    });
}

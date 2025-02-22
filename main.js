//랜덤번호 지정
//유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!
//랜덤번호 > 유저번호 Up!!
//Reset 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다(더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깍지 않는다.

let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 3
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let answerArea =document.getElementById("answer-area")

//click 이라는 이벤트가 발생하면 play 함수 실행(함수도 매개변수 처럼 넘길수 있다다)
playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)

function pickRandomNum(){

        computerNum = Math.floor(Math.random() *100)+1
        console.log("정답",computerNum)
}

function play(){
    let userValue = userInput.value


    chances -- ;
    chanceArea.textContent= `남은기회:${chances}번` 
    console.log("chance",chances)

    answerArea.textContent=`정답:${computerNum}`

    if(userValue>computerNum){
        resultArea.textContent = "Down"
        console.log("Down")
    }else if(userValue<computerNum){
        resultArea.textContent = "UP"
        console.log("UP")
    }else{
        resultArea.textContent = "맞추셨습니다"
        console.log("맞추셨습니다")
    }

    if (chances <1){
        gameOver=true
        
    }
    if(gameOver== true){
        playButton.disabled =true
    }
}

function reset(){
    //user input창이 깨끗하게 정리되고
    userInput.value = ""
    //새로운 번호가 생성되고
    pickRandomNum()
    resultArea.textContent ="결과값이 여기 나옵니다"
    playButton.disabled =false
    chances=3
    chanceArea.textContent= `남은기회:${chances}번` 
}

pickRandomNum()
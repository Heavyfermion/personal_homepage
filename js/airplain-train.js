//게임 로직 

//게임 상태 
let gameState = {
    status : "false", //게임 시작 여부
    transport : "none", //선택한 교통편 종류
    destination: "none",
    currrentIdx: 0 //현재 역 변호
};

//교통편 도착 지점
let ktxStations = ["행신", "서울", "덕소", "청량리", "상봉", "양평", "만종", "횡성", "둔내", "평창", "진부", "강릉"]; //강릉선 - 강릉까지만 작성
let airPlainStations = ["김포 공항", "양양 공항"];
let destinations = ["대전역", "청주공항", "부산", "강릉"];

let setlectedIndex = 0;

//시작 화면 버튼 이벤트
$(".airplain").click(function(){
    alert("비행기를 선택하셨습니다!");

    gameState.status = "started";
    gameState.transport = "airplain";
    handleGameState(gameState);
})

$(".ktx").click(function(){
    alert("KTX를 선택하셨습니다!");

    gameState.status = "started";
    gameState.transport = "ktx";
    handleGameState(gameState);
})

function handleGameState(gameState){
    if(gameState.status === "started"){
        //게임이 시작하면 선택 관련 요소 숨기기
        $(".airplain").hide();
        $(".ktx").hide(); 
        $(".select-text").text("시작합니다.");
        
        setTimeout(function(){
            alert("목적지를 섞을게요!");
        }, 100);

        setTimeout(function(){
            selectedIndex = Math.floor(Math.random() * destinations.length);
            $(".select-text").text(`선택한 목적지는 ${destinations[selectedIndex]}입니다.`);
            gameState.destination = destinations[selectedIndex];
            gameState.status = "targetSelected";
        }, 200);
    }
}

function initGame(){

}

//게임 진행 
initGame();

var inwon;
// 인원수 설정하기
while(true){
    inwon = +prompt('게임 인원 (2 ~ 4명) ==> ');
    if(inwon>4 || inwon <2){
        alert('인원수가 올바르지 않습니다.');
    } else{
        break;
    }
}
// 게임 인원 시작 순서!!
var starting = Math.floor(Math.random()*inwon); 

var gamer = [];
var gun = [0,0,0,0,0,0];
alert('플레이어 이름을 등록합니다.');
for(var i=1; i<=inwon; i++){
    var name = prompt(`${i}번 플레이어 이름 : `);
    gamer.push(name);
}
alert(`[${gamer}] 참가!`);

// 총알 랜덤 인덱스에 배치하기(6개)
var bullet = +prompt('실탄 개수 (1 ~ 5개) ==>');
while(bullet!=0){
    var idx = Math.floor(Math.random()*6);
    if(gun[idx]===0){
        gun[idx]=1;
        bullet--;
    }
}

// starting 변수는 시작 index
// 게이머가 생존했을 경우 starting값을 증가시킴
// starting : 시작 인덱스(생존했을 경우 값을 증가시킴), gamer.length : 현재 남은 생존자 수
// ex) starting 2, 남은 생존자 수가 4명일 경우, 총알 4발           2%4 = 3번째 인덱스 gamer[2]     {가, 나, 다, 라}   
// 1. [다](생존) starting 3, 남은 생존자수 4, starting%남은 생존자 수  3%4 = 4번째 인덱스 gamer[3] {가, 나, 다, 라} 
// 2. [라](피격) starting 3, 남은 생존자수 3, starting%남은 생존자 수  3%3 = 0번째 인덱스  gamer[0] {가, 나, 다}
// 3. [가](피격) satrting 3, 남은 생존자수 2, starting%남은 생존자 수  3%2 = 1번째 인덱스  gamer[1] {나, 다}
// 4. [다](생존) starting 4, 남은 생존자수 2, starting%남은 생존자 수  4%2 = 0번째 인덱스  gamer[0] {나, 다}
// 5. [나](피격) starting 5, 남은 생존자수 1   ==> "단 한명만 살아남았습니다. 게임을 종료합니다"  {다}



// 총알이 모두 소진되거나, 최후의 1명이 생존했을 경우 게임 종료합니다.
alert(`총을 받았습니다. ${gamer[starting%gamer.length]}부터 시작합니다.`);
outer :for(var i=0; i<gun.length; i++){
    prompt(`[${gamer[starting%gamer.length]}님의 턴!] 탄창을 회전합니다.
    # 엔터를 누르면 격발합니다.`);
    //총알이 있을 때
    if(gun[i]===1){
        gun[i]=0;
        alert(`# 빵!! [${gamer[starting%gamer.length]}]님이 사망...RIP`);
        gamer.splice(starting%gamer.length,1);
    } else{
        alert(`...휴 ~~ 살았습니다.`);
        starting++;
    }
    
    if(gamer.length===1){
        alert(`# 단 한명만 살아남았습니다. 게임을 종료합니다
            # 최후 생존자: ${gamer}`);
        break outer;
    }
    if(!gun.includes(1)){
        alert(`# 총알이 모두 소진되었습니다. 게임을 종료합니다.
        # 생존한 인원 : [${gamer}]`)
        break outer;
    } 
}

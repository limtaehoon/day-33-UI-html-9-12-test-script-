var bigpic = document.querySelector("#cup");/*큰이미지 가져옴 */
var smallpic =document.querySelectorAll(".small");/*작은 이미지 가져옴 All로 전부 가져오기*/

for(var i=0; i<smallpic.length; i++){
    // var newPic = this.src;/*클릭 이벤트가 발생한 대상의 src 속성 저장*/
    // bigpic.setAttribute("src", newPic);/*newPic 값을 큰 이미지의 src 속성에 할당*/
    // smallpic[i].onclick = changePic;
     smallpic[i].addEventListener("click",changePic);    
}

function changePic(){
    var newPic = this.src;
    bigpic.setAttribute("src", newPic);
}

var isOpen = false;
var view = document.querySelector("#view");
view.addEventListener("click", function(){
    if(isOpen==false){
        isOpen==true;
        document.querySelector("#detail").style.display = "block";
        view.innerText = "상세 설명 닫기"
        isOpen = true;
    }
    else{
        document.querySelector("#detail").style.display = "none";
        view.innerText = "상세 설명 보기";
        isOpen==false;

    }

});
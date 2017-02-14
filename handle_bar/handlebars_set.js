/** * Created by njs2000 on 2017-02-13. */

//핸들바 템플릿 가져오기
var source = $("#entry-template").html();

//핸들바 조각 템플릿 가져오기
var partial = $("#partial-template").html();


//핸들바 템플릿 컴파일
var template = Handlebars.compile(source);

//핸들바 템플릿에 바인딩할 데이터
var data = {
	users: [
		{ name: "가나다", id: "aaa1", hobbys :['족구','농구','탁구']},
		{ name: "라마바", id: "aaa2", hobbys :['영화드라마','잠자기ㅋ']},
		{ name: "사아자", id: "aaa3", hobbys :['축구']},
		{ name: "차카타", id: "aaa4", hobbys :['농구']},
		{ name: "홍길동", id: "aaa5", hobbys :['배드민턴','탁구']},
		{ name: "이선", id: "aaa6", hobbys :['농구','탁구']},
		{ name: "장영", id: "aaa7", hobbys :['드라마보기','탁구']},
		{ name: "보고", id: "aaa8", hobbys :['축구']},
		{ name: "야이야", id: "aaa9", hobbys :['농구','수영']},
		{ name: "쿄쿄쿄", id: "aaa10", hobbys :['없어']}
	]
};

//조각 템플릿을 'commonHeader' 라는 이름으로 등록
Handlebars.registerPartial('commonHeader', partial);

Handlebars.registerHelper('email', function(id){
	return id + "@daum.net"
});

//핸들바 템플릿에 데이터를 바인딩해서 HTML 생성
var html = template(data);

//생성된 HTML을 DOM에 주입
$('body').append(html);
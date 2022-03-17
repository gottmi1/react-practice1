import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
  // children의 밸류는 항상 콘텐츠이다(오픈태그와 클로징태그 사이에 있는 것)
  // 컴포지션(컴포넌트를 모아서 인터페이스를 만드는 것)에선 props.children이 중요하다
};

export default Card;

// 웹개발 영역에서 Card라는 용어는 상자처럼 보이는 걸 의미함

// 여기서 한 건 재사용 가능한 Card컴포넌트를 만든 것
// 이 경우 코드 복제를 추출할 수 있기 떄문에 사용했다.

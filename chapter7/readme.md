# chapter7 인터페이스

* 인터페이스는 연관된 이름으로 객체 형태를 설명하는 또 다른 방법(vs type)
* 더 읽기 쉬운 오류 메세지, 더 빠른 컴파일러 성능, 클래스와의 더 나은 상호 운용성을 위해 선호

* type vs interface
    * https://levelup.gitconnected.com/typescript-should-i-use-types-or-interfaces-44dd44ae5180
    * https://www.totaltypescript.com/type-vs-interface-which-should-you-use
    * 고민을 해봅시다.

## 7.1 타입 별칭 vs 인터페이스

* 인터페이스는 속성 증가를 위해 병합을 사용 (이게 유용한건가는 고민..)
* 인터페이스는 클래스가 선언된 구조의 타입을 확인하는데 사용 가능 (클래스...)
* 타입 검사기에서 인터페이스가 더 빠르다.(타입 스크립트 버전이 올라가면서 성능차이는 미비)
* 오류 메시지는를 좀 더 쉽게 읽을 수 있다.
* 이 책에서는 인터페이스 사용을 권장. 다른 주장도 많음.. 결론은 팀에서 정한 방향으로 고고

## 7.2 속성 타입

* 객체의 모델링하는 역할로 사용

### 7.2.1 선택적 속성

### 7.2.2 읽기 전용 속성

* readonly 옵션은 타입 검사 시에만 체크한다.

### 7.2.3 함수와 메서드

* 기본 함수가 this 참조할 수 있다는 것을 알고 있다면 메서드를 함수를 사용하자.
* 반대의 경우는 속성 함수를 사용하자.
* 굳이 나눌필요가 있을까 혼란만 있을 듯. 하나로 통일해서 쓰는 것이 합리적으로 보임

### 7.2.4 호출 시그니처

### 7.2.5 인덱스 시그니처

## 7.3 인터페이스 확장

* 비슷한 인터페이스를 갖는 경우 같은 속성을 상위 인터페이스에 두고 그것을 확장해서 새로운 인터페이스를 생성하는 방법

## 7.4 인터페이스 병합

* 두 개의 인터페이스가 동일한 이름으로 동일한 스코프에 선언된 경우, 선언된 모든 필드를 포함하는 더 큰 인터페이스가 코드에 추가
* 동일한 인터페이스가 여러 곳에 선언되면 코드를 이해하기가 어려워지므로 가능하면 사용하지 말자.
* 외부 패키지 또는 window 같은 내장된 전역 인터페이스를 보강하는데 유용하다.


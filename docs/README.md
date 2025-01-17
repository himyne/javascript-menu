**요구 사항에 명시된 출력값 형식을 지키지 않을 경우 0점으로 처리**
**테스트가 실패할 경우 0점으로 처리**
package-lock.json 파일은 커밋하지 않는다.

## 입출력 요구 사항

### 입력

* 메뉴 추천을 받을 코치의 이름 입력 (토미, 제임스, 포코)
* 각 코치가 못먹는 메뉴를 입력

### 출력

* 서비스 시작 문구 출력
* 서비스 종료 문구 출력(메뉴 추천 결과)
* 에러 상황시 에러 문구 출력 ([ERROR]와 함께)

## 기능 목록

- [x] 서비스 시작 문구 출력
- [x] 메뉴 추천을 받을 코치의 이름을 콤마로 구분하여 입력받는다.
- [x] 코치 이름 유효성 검사
  - [x] 아무것도 입력되지 않으면 에러를 발생시킨다.
  - [x] 코치의 이름은 최소 2글자, 최대 4글자이다.
  - [x] 코치는 최소 2명 최대 5명까지 입력될 수 있다.
  - [x] 중복된 코치가 있으면 안된다.
- [x] 잘못 입력한 경우 에러를 발생시키고 메뉴 입력을 다시 받는다.
- [x] 월요일에 추천할 카테고리(일식1, 한식2, 중식3, 아시안4, 양식5)를 무작위로 정한다.
  - [ ] 한 주에 같은 카테고리는 최대 2회까지만 고를 수 있다.
- [x] 각 코치 별로 못 먹는 메뉴를 입력 받는다.
- [x] 못 먹는 메뉴 입력 유효성 검사
  - [x] 못 먹는 메뉴는 최소 0개에서 최대 2개여야 한다.
  - [x] 샘플 파일에 있는 메뉴여야 한다.
- [x] 각 코치가 먹을 메뉴를 추천한다.
  - [ ] 먹지 못하는 메뉴가 추천된 경우 다시 섞고 첫번째 shuffle 메서드의 첫번째 값을 사용한다.
  - [ ] 중복되지 않는 메뉴를 추천해야 한다.
- [ ] 메뉴 추천 결과를 출력한다.
  - [ ] 메뉴 추천 결과 테이블의 가장 첫번째 열을 출력(구분|월|화|수|목|금)
  - [ ] 카테고리 배열이나 객체를 인자로 받아서 출력
  - [ ] 각 코치의 이름과 월~금 메뉴를 하나의 배열로 받아서 출력
  - [ ] 코치 명수만큼 반복하여 출력
- [ ] 프로그램을 종료한다.


#### 실행 결과 예시

```
점심 메뉴 추천을 시작합니다.

코치의 이름을 입력해 주세요. (, 로 구분)
토미,제임스,포코

토미(이)가 못 먹는 메뉴를 입력해 주세요.
우동,스시

제임스(이)가 못 먹는 메뉴를 입력해 주세요.
뇨끼,월남쌈

포코(이)가 못 먹는 메뉴를 입력해 주세요.
마파두부,고추잡채

메뉴 추천 결과입니다.
[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]
[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]
[ 토미 | 쌈밥 | 김치찌개 | 미소시루 | 짜장면 | 팟타이 ]
[ 제임스 | 된장찌개 | 비빔밥 | 가츠동 | 토마토 달걀볶음 | 파인애플 볶음밥 ]
[ 포코 | 된장찌개 | 불고기 | 하이라이스 | 탕수육 | 나시고렝 ]

추천을 완료했습니다.
```

### 카테고리와 메뉴 요구 사항
#### 카테고리
```
일식: 규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼 - 1
한식: 김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음 - 2
중식: 깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채 - 3
아시안: 팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜 - 4
양식: 라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니 - 5
```
#### 메뉴
- Random.shuffle() 사용하여 메뉴를 섞고 첫 번째 값을 사용
```javascript
const menu = Randoms.shuffle(menus)[0];
```
* 임의로 메뉴의 순서 또는 데이터를 변경하면 안 된다.
   - `Randoms.shuffle()` 메서드의 인자로 전달되는 메뉴 데이터는, 최초에 제공한 목록을 그대로 전달해야 한다.
    - 코치에게 추천할 메뉴를 정할 때 이미 추천한 메뉴, 먹지 못하는 메뉴도 포함된 리스트를 전달해야 한다.
* 추천할 수 없는 메뉴인 경우 다시 섞은 후 첫 번째 값을 사용해야 한다.
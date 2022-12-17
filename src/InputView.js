const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoachNames(readCoachNamesCallback) {
    Console.readLine("코치의 이름을 입력해 주세요. (, 로 구분)\n", (name) => {
      readCoachNamesCallback(name);
    })
  }
}

module.exports = InputView;
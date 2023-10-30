import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constants.js';

const Input = {
  async getCarNamesFromUser() {
    const userInput = await Console.readLineAsync(MESSAGE.INPUT_CAR_NAME);
    return userInput;
  },
};

export default Input;

import isEven from "./modules/isEven.js";
import logger from "./modules/logger.js";

const number = 10;

logger("Checking the number...");

if (isEven(number)) {
    logger(number + " is Even");
} else {
    logger(number + " is Odd");
}
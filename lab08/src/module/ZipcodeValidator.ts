import { StringValidator } from "./StringValidator";
const numberRegexp = /^[0-9]+$/;
export class ZipcodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return s.length === 5 && numberRegexp.test(s);
    }
};
export { ZipcodeValidator as mainValidator};
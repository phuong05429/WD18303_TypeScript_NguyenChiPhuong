export class ParselntBasedzipcodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

export {ZipcodeValidator as RegExBasedZipCodeValidator} from './ZipcodeValidator';
import { createLocal } from '../create/local';
import { createUTC } from '../create/utc';
import { createInvalid } from '../create/valid';
import { isMoment } from './constructor';
import { min, max } from './min-max';
import { now } from './now';
import { matchOffset, matchShortOffset } from '../parse/regex';
import zeroFill from '../utils/zero-fill';
import momentPrototype from './prototype';

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone (input, format, locale, strict, offset) {
    if (arguments.length === 1) {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    if (typeof lastArg === 'number') {
        var hours =  Math.floor(lastArg / 60);
        var minutes = lastArg % 60;

        var finalOffset = zeroFill(hours, 2, true) + zeroFill(minutes, 2, false);
        input += finalOffset;
    } else if (typeof lastArg === 'string' &&
              (largeOffset.test(lastArg) || smallOffset.test(lastArg))) {
        input += lastArg;
    }

    var inputArg = [input];
    var otherArgs = Array.prototype.slice.call(arguments, 1, arguments.length - 1);

    return local__createLocal.apply(null, inputArg.concat(otherArgs)).parseZone();
}

export {
    now,
    min,
    max,
    isMoment,
    createUTC,
    createUnix,
    createLocal,
    createInZone,
    createInvalid,
    momentPrototype
};

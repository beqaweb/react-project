import {filterBySearch} from '..';

describe('filter by search', () => {
    describe('when the inputSearch value coincides with the subject of one mail', () => {
        it('should return mails with the same inputSearch value and subject of one mail  ', () => {
            const mails = [
                {
                    from: 'testOne@test.test',
                    subject: 'test Subject One',
                    message: 'test Message One'
                },
                {
                    from: 'testTwo@test.test',
                    subject: 'test Subject Two',
                    message: 'test Message Two'
                },
                {
                    from: 'testThree@test.test',
                    subject: 'test Subject Three',
                    message: 'test Message Three'
                }
            ];
            const input = filterBySearch(mails, 'Subject Two');
            const output = [
                {
                    from: 'testTwo@test.test',
                    subject: 'test Subject Two',
                    message: 'test Message Two'
                }
            ];
            expect(input).toEqual(output);
        });
    });

    describe('when the inputSearch value coincides with the message of one mail', () => {
        it('should return mails with the same inputSearch value and message of one mail  ', () => {
            const mails = [
                {
                    from: 'testOne@test.test',
                    subject: 'test Subject One',
                    message: 'test Message One'
                },
                {
                    from: 'testTwo@test.test',
                    subject: 'test Subject Two',
                    message: 'test Message Two'
                },
                {
                    from: 'testThree@test.test',
                    subject: 'test Subject Three',
                    message: 'test Message Three'
                }
            ];
            const input = filterBySearch(mails, 'Message Three');
            const output = [
                {
                    from: 'testThree@test.test',
                    subject: 'test Subject Three',
                    message: 'test Message Three'
                }
            ];
            expect(input).toEqual(output);
        });
    });

    describe('when the inputSearch value coincides with the sender of one mail', () => {
        it('should return mails with the same inputSearch value and sender of one mail  ', () => {
            const mails = [
                {
                    to: 'testOne@test.test',
                    subject: 'test Subject One',
                    message: 'test Message One'
                },
                {
                    to: 'testTwo@test.test',
                    subject: 'test Subject Two',
                    message: 'test Message Two'
                },
                {
                    to: 'testThree@test.test',
                    subject: 'test Subject Three',
                    message: 'test Message Three'
                }
            ];
            const input = filterBySearch(mails, 'testOne@test.test', 'to');
            const output = [
                {
                    to: 'testOne@test.test',
                    subject: 'test Subject One',
                    message: 'test Message One'
                }
            ];
            expect(input).toEqual(output);
        });
    });
});

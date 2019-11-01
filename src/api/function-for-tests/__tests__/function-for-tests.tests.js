import {functionForTests} from '..';

describe('function for tests', () => {
    describe('when user list have one user online', () => {
        it('should return list with online user', () => {
            const input = functionForTests(
                [
                    {
                        name: 'Saha',
                        isOnline: true
                    },
                    {
                        name: 'Natasha',
                        isOnline: false
                    },
                    {
                        name: 'Roma',
                        isOnline: false
                    }
                ]
            );
            const output = [
                {
                    name: 'Saha',
                    isOnline: true
                }
            ];
            expect(input).toEqual(output);
        });
    });
});

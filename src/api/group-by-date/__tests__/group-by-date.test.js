import {groupByDate} from '..';

describe('Group by date', () => {
    describe('when mail was sent today', () => {
        it('should return group list with group "Today" ', () => {
            const today = new Date();
            const input = groupByDate([
                {
                    date: today,
                    message: 'test'
                }
            ]);
            const output = [
                ['Today',
                    [
                        {
                            date: today,
                            message: 'test'
                        }
                    ]
                ]
            ];
            expect(input).toEqual(output);
        });
    });

    describe('when mail was sent yesterday', () => {
        it('should return group list with group "Yesterday" ', () => {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const input = groupByDate([
                {
                    date: yesterday,
                    message: 'test'
                }
            ]);
            const output = [
                ['Yesterday',
                    [
                        {
                            date: yesterday,
                            message: 'test'
                        }
                    ]
                ]
            ];
            expect(input).toEqual(output);
        });
    });
});

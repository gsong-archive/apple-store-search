'use strict';

import serviceClass from './service';
describe('service', () => {

    it('should check service', function () {
        var s1 = new serviceClass();
        expect(s1.queryParams).toEqual({ media: 'all', term: '' });
    });
});
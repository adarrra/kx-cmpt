/*
* Copyright (C) <%=year%> <%=company%>. All rights reserved.
* Author <%=author%> <<%=mail%>>, <%=company%> <%=companySite%>.
*/
import angular from 'angular';
import mod from '<%=path%>/module';

export const fullName = 'ks<%=usedName%>';

mod.component(fullName, {
    template: require('./<%=fsName%>.html'),
    bindings: {
        SOMEBIND: '<'
    },
    controller: <%=usedName%>Ctrl
});

<%=usedName%>Ctrl.$inject = [
    require('app/core/useful_srv').fullName,
];

function <%=usedName%>Ctrl(uf) {
    const $ctrl = angular.extend(this, {
    });
}

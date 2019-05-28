app.factory('firstService', ['$q', '$http', function ($q, $http) {
    var get = function () {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: 'https://api.stag.talentscreen.io/v1/jobs/AWqewqFCQtBMaOzmzOkM?authentication=false',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (result) {
            d.resolve(result.data);

        })
        return d.promise;
    }

    return {
        getRequest: get
    }
}]).factory('secondService', ['$q', '$http', function ($q, $http) {
    var get = function () {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: 'https://api.stag.talentscreen.io/v1/jobs/AWna7xm1QtBMaOzmzL2N?authentication=false',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (result) {
            console.log("aaa",result);
            d.resolve(result.data);
        })
        return d.promise;
    }

    return {
        getRequest: get
    }

}]).factory('thirdService', ['$q', '$http', function ($q, $http) {
    var post = function (body) {
        var data = JSON.stringify(body);
        console.log(data);
        var d = $q.defer();
        $http({
            method: 'POST',
            url: 'localhost:2020/v1/Login',
            body: data,
            headers: {
                'x-access-key': 'cixn5bd2l000080u0fy940dtm',
                'content-type': 'application/json'
            }
        }).then(function (result) {
            d.resolve(result.data);
        })
        return d.promise;
    }

    return {
        postRequest: post
    }

}])












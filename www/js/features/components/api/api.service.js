angular
	.module('myWatchList.component.api')
	.service('api', ApiService);

function ApiService($http) {
	
	function getShow() {
		return $http.get('http://api.tvmaze.com/schedule')
        .then(function(resp) {

        	console.log(resp.data);
        
        	return {
        		show: resp.data[0].show.name,
                        episodeName: resp.data[0].name,
                        season: resp.data[0].season,
                        episodeNumber: resp.data[0].number,
                        airDate: resp.data[0].airdate,
                        airTime: resp.data[0].airtime,
                        genres: resp.data[0].show.genres,
                        profilePicture: decodeURIComponent(resp.data[0].show.image.medium),
                        id: resp.data[0].id
        	};
        });
	}

	return {
		show: getShow
	}
}
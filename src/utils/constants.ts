const GOOGLE_API_KEY = 'AIzaSyBjOg-nxuRW0lCoCm5No8VjRXUgXSi2JDw';
export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API = '/api/complete/search?client=firefox&ds=yt&q=';
export const YOUTUBE_SEARCH_LIST_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=' + GOOGLE_API_KEY;
import wepy from 'wepy'
import {PLAY_MODE, STORE_KEY, MAX_SAVE_LEN} from './const'

export default class LocalMusicInfo {

	static saveSongInfo(songId, musicInfo) {
      var songIds = wepy.getStorageSync(STORE_KEY.SONG_IDS);
      var songIdsArray = [];
      var hasSongId = false;
      if (songIds) {
        songIdsArray = JSON.parse(songIds);
        var i = songIdsArray.length-1;
        for (; i >= 0; i--) {
          if (songIdsArray[i] == songId) {
            hasSongId = true;
            break;
          }
        }

        if (!hasSongId) {
          if (songIdsArray.length >= MAX_SAVE_LEN.LEN) {
            var songIdRemove = songIdsArray.pop();
            wepy.removeStorageSync(songIdRemove);
          }
          songIdsArray.push(songId);
        }
      } else {
        songIdsArray.push(songId);
      }

      wepy.setStorage({
        key: STORE_KEY.SONG_IDS,
        data: JSON.stringify(songIdsArray),
      });
      wepy.setStorage({
        key: songId,
        data: JSON.stringify(musicInfo),
      });
    }

    static getNextSongInfo(songId) {
      var songIds = wepy.getStorageSync(STORE_KEY.SONG_IDS);
      var songIdsArray = [];
      var hasSongId = false;
      if (songIds) {
        songIdsArray = JSON.parse(songIds);
        var i = 0;
        for (; i <= songIdsArray.length-1; i++) {
          if (songIdsArray[i] == songId) {
            hasSongId = true;
            break;
          }
        }

        if (hasSongId) {
        	if (i >= songIdsArray.length-1) {
        		i = 0;
        		return songIdsArray[0];
        	} else {
        		return songIdsArray[i + 1];
        	}
        }
      }

      if (songIdsArray.length > 0) {
      	return songIdsArray[0];
      }

      return songId;
    }

    static getPreSongInfo(songId) {
	  var songIds = wepy.getStorageSync(STORE_KEY.SONG_IDS);
      var songIdsArray = [];
      var hasSongId = false;
      if (songIds) {
        songIdsArray = JSON.parse(songIds);
        var i = 0;
        for (; i <= songIdsArray.length-1; i++) {
          if (songIdsArray[i] == songId) {
            hasSongId = true;
            break;
          }
        }

        if (hasSongId) {
        	if (i > 0) {
        		return songIdsArray[i-1];
        	} else {
        		return songIdsArray[i];
        	}
        }
      }

      if (songIdsArray.length > 0) {
      	return songIdsArray[0];
      }

      return songId;
    }

    static getSaveSongList() {
      var songIds = wepy.getStorageSync(STORE_KEY.SONG_IDS);
      var songIdsArray = JSON.parse(songIds);
      return songIdsArray;
    }

    static getSongInfo(songId) {
      var songInfoStr = wepy.getStorageSync(songId);
      var songInfo = JSON.parse(songInfoStr);
      return songInfo;
    }

    static removeSongInfo(songId, successCallback) {
      var songIds = wepy.getStorageSync(STORE_KEY.SONG_IDS);
      var songIdsArray = [];
      var hasSongId = false;
      if (songIds) {
        songIdsArray = JSON.parse(songIds);
        var i = 0;
        for (; i <= songIdsArray.length-1; i++) {
          if (songIdsArray[i] == songId) {
            hasSongId = true;
            break;
          }
        }

        if (hasSongId) {
        	songIdsArray.splice(i, 1);
        	wepy.removeStorageSync(songId);
        	wepy.setStorageSync(STORE_KEY.SONG_IDS, JSON.stringify(songIdsArray));
        }
      }
    }

}
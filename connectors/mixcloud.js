'use strict';

Connector.playerSelector = '.player';

Connector.artistSelector = '.current-artist span';

Connector.trackSelector = '.current-track';

Connector.isPlaying = () => $('.player-control').hasClass('pause-state');

Connector.isStateChangeAllowed = () => {
	// Mixcloud player hides artist and track elements while seeking the stream,
	// and we should not update state in such case.
	return Connector.getArtist() && Connector.getTrack();
};

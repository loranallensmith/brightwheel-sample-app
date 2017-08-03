const UI = require('brightwheel');

// Define components

// Window
let mainWindow = new UI.Window({
  attriubutes: {
    id: 'mainWindow'
  }
}, []);
console.log(mainWindow.properties);

let mainWindowContent = new UI.WindowContent({
  x: {
    id: 'mainWindowContent'
  }
}, []);

// Toolbars

// Top
let mainHeaderToolbar = new UI.Toolbar({
  attributes: {
    id: 'mainHeaderToolbar'
  },
  classNames: ['draggable'],
  title: 'Musico',
  type: 'header'
}, []);

// Bottom
let mainFooterToolbar = new UI.Toolbar({
  attributes: {
    id: 'mainFooterToolbar'
  },
  type: 'footer'
}, []);

// Toolbar Buttons

// Button Group
let playControlButtonGroup = new UI.ButtonGroup({
  attributes: {
    id: 'playControlButtonGroup'
  }
}, []);

// Play Toggle
let playToggleButton = new UI.Button({
  attributes: {
    id: 'playToggleButton'
  },
  icon: 'play',
}, []);

// Previous Track
let previousTrackButton = new UI.Button({
  attributes: {
    id: 'previousTrackButton'
  },
  icon: 'to-start',
}, []);

// Next Track
let nextTrackButton = new UI.Button({
  attributes: {
    id: 'nextTrackButton'
  },
  icon: 'to-end',
}, []);


// Panes

// PaneGroup
let mainWindowPaneGroup = new UI.PaneGroup({
  attributes:  {
    id: 'mainWindowPaneGroup'
  }
}, []);

// Sidebar
let mainWindowSidebar = new UI.Pane({
  attributes:  {
    id: 'mainWindowSidebar'
  },
  classNames: ['padded-vertically'],
  sidebar: true,
  size: 'one-fourth'
}, []);

// Sources in sidebar
let sourceNavGroup = new UI.NavGroup({
  attributes: {
    id: 'sourceNavGroup'
  }
}, []);

// Artist
let mainWindowArtistPane = new UI.Pane({
  attributes: {
    id: 'mainWindowArtistPane'
  },
  size: 'one-fourth'
}, []);

// Album
let mainWindowAlbumPane = new UI.Pane({
  attributes: {
    id: 'mainWindowAlbumPane'
  },
  size: 'one-fourth'
}, []);

// Track
let mainWindowTrackPane = new UI.Pane({
  attributes: {
    id: 'mainWindowTrackPane'
  },
  size: 'one-fourth'
}, []);


// Create nav items for each source
  let musicLibrarySourceNavItem = new UI.NavGroupItem({
    attributes: {
      id: 'musicLibrarySourceNavItem'
    },
    icon: 'note-beamed',
    text: 'Music Library'
  }, []);

  let lastfmSourceNavItem = new UI.NavGroupItem({
    attributes: {
      id: 'lastfmSourceNavItem'
    },
    icon: 'lastfm',
    text: 'Last.fm'
  }, []);

  let rdioSourceNavItem = new UI.NavGroupItem({
    attributes: {
      id: 'rdioSourceNavItem'
    },
    icon: 'rdio',
    text: 'Rdio'
  }, []);

  let spotifySourceNavItem = new UI.NavGroupItem({
    attributes: {
      id: 'spotifySourceNavItem'
    },
    icon: 'spotify',
    text: 'Spotify'
  }, []);

  let soundcloudSourceNavItem = new UI.NavGroupItem({
    attributes: {
      id: 'soundcloudSourceNavItem'
    },
    icon: 'soundcloud',
    text: 'SoundCloud'
  }, []);



function buildUI() {

  // Assemble UI

  // Add header toolbar to window
  mainWindow.children.push(mainHeaderToolbar);

  // Add play control button group to toolbar
  mainHeaderToolbar.children.push(playControlButtonGroup);

  // Add buttons to play control button group
  playControlButtonGroup.children.push(previousTrackButton, playToggleButton, nextTrackButton);

  // Add window content to window
  mainWindow.children.push(mainWindowContent);

  // Add pane group to window content
  mainWindowContent.children.push(mainWindowPaneGroup);

  // Add panes to pane group
  mainWindowPaneGroup.children.push(
    mainWindowSidebar,
    mainWindowArtistPane,
    mainWindowAlbumPane,
    mainWindowTrackPane
  );

  // Add Source NavGroup to Sidebar
  mainWindowSidebar.children.push(sourceNavGroup);

  // Add footer toolbar to window
  mainWindow.children.push(mainFooterToolbar);

  // Append the NavItems to Sidebar
  sourceNavGroup.children.push(musicLibrarySourceNavItem);
  sourceNavGroup.children.push(lastfmSourceNavItem);
  sourceNavGroup.children.push(rdioSourceNavItem);
  sourceNavGroup.children.push(spotifySourceNavItem);
  sourceNavGroup.children.push(soundcloudSourceNavItem);

  // Update everything
  mainWindow.update(mainWindow.properties, mainWindow.children);

  // Add elements to DOM
  let pageBody = document.querySelector('body');
  pageBody.insertBefore(mainWindow.element, pageBody.firstChild)
}


buildUI();

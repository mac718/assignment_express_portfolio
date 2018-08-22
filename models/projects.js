var Project = function(name, tech, description, repoLink, image, details) {
  this.name = name;
  this.tech = tech;
  this.description = description;
  this.repoLink = repoLink;
  this.image = image;
  this.details = details;
}

var projects = [
  new Project('Royalty Free Music Player', ['JavaScript', 'Jquery', 'HTML', 'CSS', 'SASS'], 
              'A JQuery based music player for Royalty Free Music', 
              'https://github.com/mac718/assignment_royalty_free_music_player',
              '../images/RFMS.png', 
              ['Play and pause songs by clicking on the song or the play/pause button in the footer',
              'View song details in the footer']),
  new Project('OdinBook', ['Ruby', 'Ruby on Rails', 'SQL', 'Bootstrap', 'Omniauth'],
              'A Facebook clone built with Ruby on Rails.','https://github.com/mac718/odin-facebook',
              '../images/Odinbook.png', ['Creat an account', 'Sign in and out', 'Get friend requests',
              'Add friends', 'Decline Friends', 'Create/edit their profile',
              'Upload photos to their photo gallery', 'View their feed on their home or profile page', 
              'Make posts and comment on posts', 'Like and unlike posts, comments, and photos', 
              'Sign in with their Facebook account'])
]

module.exports = { Project, projects }
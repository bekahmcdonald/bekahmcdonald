/* eslint-disable */
import amplitude from 'amplitude-js'

if (process.browser) {

  var projects = document.querySelectorAll('.js-project');
  var socialIcons = document.querySelectorAll('.js-social-icon');
  var emailLinks = document.querySelectorAll('.js-email');

  amplitude.getInstance().init(`${process.env.NUXT_ENV_AMPLITUDE_API_KEY}`)
  amplitude.getInstance().logEvent('Entered homepage')

  // Add event tracking to projects
  projects.forEach((project) => {
    project.addEventListener('click', function (e) {
      var project = e.currentTarget.dataset.project;
      amplitude.getInstance().logEvent('Clicked on project', { project: `${project}` })
    });
  });

  // Add event tracking to social media
  socialIcons.forEach((icon) => {
    icon.addEventListener('click', function (e) {
      var icon = e.currentTarget.dataset.icon;
      amplitude.getInstance().logEvent('Clicked on social icon', { icon: `${icon}` })
    });
  });

  // Add event tracking to email address
  emailLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
      var location = e.currentTarget.dataset.location;
      amplitude.getInstance().logEvent('Clicked on email link', { location: `${location}` })
    })
  })
}

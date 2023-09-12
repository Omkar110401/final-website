import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mobileMenuActive = false;

  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
  showResumeDropdown: boolean = false;

  toggleResumeDropdown(event: Event) {
    // Prevent the event from propagating to parent elements (i.e., closing the menu)
    event.stopPropagation();
    this.showResumeDropdown = !this.showResumeDropdown;
  }

scrollToAboutMe() {
  const element = document.getElementById('about-me');
  if (element) {
    if (window.scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top first
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Wait for the scroll to top animation to finish
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

scrollToSkills() {
  const element = document.getElementById('skills');
  if (element) {
    if (window.scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top first
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Wait for the scroll to top animation to finish
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

scrollToInternship() {
  const element = document.getElementById('internship');
  if (element) {
    if (window.scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top first
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Wait for the scroll to top animation to finish
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

scrollToEducation() {
  const element = document.getElementById('education');
  if (element) {
    if (window.scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top first
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Wait for the scroll to top animation to finish
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

scrollToProjects() {
  const element = document.getElementById('project');
  if (element) {
    if (window.scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top first
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Wait for the scroll to top animation to finish
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

closeMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.remove('active');
    this.mobileMenuActive=false;
    // Remove the "clicked" class from the mobile menu icon
    const menuIcon = document.querySelector('.mobile-menu-icon');
    if (menuIcon) {
      menuIcon.classList.remove('clicked');
      this.mobileMenuActive=false;
    }
  }
}

// Event listener for mobile menu links
addMobileMenuLinkListeners() {
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-link');
  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Close the mobile menu when a link is clicked
      this.closeMobileMenu();
    });
  });
}

// Call the function to add event listeners when the component is initialized
ngOnInit() {
  this.addMobileMenuLinkListeners();
}
}

// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const messageItems = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');






// remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  });
};

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    if (item.id != 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'none';
    } else {
      document.querySelector('.notifications-popup').style.display = 'block';
      document.querySelector('#notifications .notification-count').style.display = 'none';
    }
  });
});

// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    messageItems.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase(); // Use querySelector instead of querySelectorAll
        if (name.indexOf(val) !== -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    });
};

// Attach event listener for input change
messageSearch.addEventListener('input', searchMessage);

// Highlight
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0.1rem 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

// THEME/DISPLAY CUSTOMIZATION
// opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
// closes modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme'))
        themeModal.style.display = 'none';
}

//close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);



/// FONTS

// Remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  });
};

fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector(); // Remove active class from all font size selectors

    let fontSize;
    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      document.documentElement.style.setProperty('--sticky-top-left', '5.4rem');
      document.documentElement.style.setProperty('--sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      document.documentElement.style.setProperty('--sticky-top-left', '5.4rem');
      document.documentElement.style.setProperty('--sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
      document.documentElement.style.setProperty('--sticky-top-left', '-2rem');
      document.documentElement.style.setProperty('--sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
      document.documentElement.style.setProperty('--sticky-top-left', '-5rem');
      document.documentElement.style.setProperty('--sticky-top-right', '-25rem');
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px';
      document.documentElement.style.setProperty('--sticky-top-left', '-12rem');
      document.documentElement.style.setProperty('--sticky-top-right', '-35rem');
    }

    // Set font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;

    // Add active class to the clicked font size selector
    size.classList.add('active');
  });
});

// remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
      colorPicker.classList.remove('active');
  });
};


// change primary colors
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
      let primary;
      // change primary colors
      changeActiveColorClass();

      if (color.classList.contains('color-1')) {
          primaryHue = 252;
      } else if (color.classList.contains('color-2')) {
          primaryHue = 52;
      } else if (color.classList.contains('color-3')) {
          primaryHue = 352;
      } else if (color.classList.contains('color-4')) {
          primaryHue = 152;
      } else if (color.classList.contains('color-5')) {
          primaryHue = 202;
      }
      color.classList.add('active');
      root.style.setProperty('--primary-color-hue', primaryHue);
  });
});

// Theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Changes background color
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

// Event listener for background color change
bg1.addEventListener('click', () => {
  // Add active class to bg1
  bg1.classList.add('active');

  // Remove active class from the others
  bg2.classList.remove('active');
  bg3.classList.remove('active');

  // Remove customized changes from local storage
  window.location.reload();
});


bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // Add active class
    bg2.classList.add('active');

    // Remove active class from the others
    bg1.classList.remove('active');
    bg3.classList.remove('active');

    changeBG();
});

// Event listener for background color change
bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  // Add active class to Bg3
  bg3.classList.add('active');

  // Remove active class from others
  bg1.classList.remove('active');
  bg2.classList.remove('active');

  // Call function to change background
  changeBG();
});









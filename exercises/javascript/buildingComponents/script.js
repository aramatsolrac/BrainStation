class Header {
    constructor(header) {
        this.header = header;
    }

    render() {
        return `
        <header id="header">
        <nav id="nav-bar" class="header-item header-left">
          <a>Home</a> |
          <a>About</a> |
          <a>Contact</a>
        </nav>
        <div class="header-item logo">
          Logo
        </div>
        <div class="header-item header-right">
          User:
          <a>John Smith</a> |
          <a>Logout</a>
        </div>
    </header>`;
    }
}

class Hero {
    constructor(hero) {
        this.hero = hero;
    }

    render() {
        return `
        <section class="hero">
            <div>
              <h2 class="hero-title">Hero Title</h2>
              <h3 class="hero-tagline">Tag Line</h3>
            </div>
        </section>`;
    }
}


class MainContent {
    constructor(main) {
        this.main = main;
    }

    render() {
        return `
    <main>
      <section class="card-list">
        <div class="card">
          <div class="card__content">
            Content
          </div>
          <h4 class="card__title">
            Title
          </h4>
        </div>
      </section>
      <section class="activity-list">
        <div>
          <h3>Activity Feed</h3>
          <div class="activity">
            Activity
          </div>
        </div>
      </section>
    </main>`;
    }
}


class Footer {
    constructor(footer) {
        this.footer = footer;
    }

    render() {
        return `
        <footer>
        <section class="footer footer-left">
          Left Footer
        </section>
        <section class="footer footer-center">
          Center Footer
        </section>
        <section class="footer footer-right">
          Right Footer
        </section>
      </footer>`;
    }
}

let bootstrap = document.getElementById('main');
let header = new Header()
let hero = new Hero();
let mainContent = new MainContent();
let footer = new Footer();
bootstrap.innerHTML = `${header.render()} ${hero.render()} ${mainContent.render()} ${footer.render()}`;
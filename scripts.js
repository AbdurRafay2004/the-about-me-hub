
document.addEventListener("DOMContentLoaded", function() {
  // Hamburger menu logic
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navLinksItems = document.querySelectorAll("#nav-links a");
  
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("collapsed");
    });
    
    // Close menu when clicking on links (for mobile)
    navLinksItems.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 720) {
          navLinks.classList.add("collapsed");
        }
      });
    });
  }

  // Dark mode toggle
  const darkBtn = document.getElementById("dark-toggle");
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
    document.body.classList.add('dark');
  }
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  // Portfolio category filter
  const filterBtns = document.querySelectorAll(".portfolio-filters button");
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener("click", function() {
        filterBtns.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        document.querySelectorAll(".card[data-category]").forEach(card=>{
          if(cat === "all" || card.getAttribute("data-category") === cat) {
            card.style.display = "";
            card.classList.add("fade-in");
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }
});

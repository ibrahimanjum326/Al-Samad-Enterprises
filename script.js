
        function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("active");
    }

    // Hide the loader when page is fully loaded
    (function () {
      const loader = document.getElementById('page-loader');

      // If page already loaded, hide quickly
      if (document.readyState === 'complete') {
        loader.classList.add('hidden');
      } else {
        // Wait for load event
        window.addEventListener('load', () => {
          // fade out
          loader.classList.add('hidden');
        });
      }
        window.addEventListener("load", () => {
    document.getElementById("page-loader").classList.add("hidden");
  });
    })();
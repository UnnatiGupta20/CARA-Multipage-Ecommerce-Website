🛍️ Cara - MUltipage E-Commerce Website
Cara is a responsive, modern, and stylish fashion e-commerce website built using HTML, CSS, and JavaScript. The project includes a homepage, shop, blog, about, contact, cart, and product details pages with interactive features like product filtering, image previews, and an "Add to Cart" functionality using localStorage.

🚀 Features
✅ Responsive UI for all screen sizes

🛒 Add to Cart functionality with localStorage

📦 Cart page that updates quantity and calculates subtotal

🛍️ Product listing with featured & new arrivals

🖼️ Product details page with image preview and size selector

📨 Newsletter sign-up

📱 Mobile-friendly navigation menu

🌐 Multiple pages (Home, Shop, Blog, About, Contact, Cart)

🧰 Tech Stack
Frontend: HTML5, CSS3, JavaScript (Vanilla)

Icons: Remix Icon

Fonts: Google Fonts

Responsive Design: Media Queries

📂 Folder Structure
markdown
Copy
Edit
Cara/
│
├── index.html
├── shop.html
├── blog.html
├── about.html
├── contact.html
├── cart.html
├── sproduct.html
├── style.css
├── script.js
└── Assets/
  
💡 How It Works
When the user clicks the cart icon on any product, product details (image, name, price, quantity) are stored in localStorage.

On the cart.html page, the script dynamically loads all items from localStorage and displays them in a table.

If the product already exists, its quantity is incremented instead of duplicating the row.


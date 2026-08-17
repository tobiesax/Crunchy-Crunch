"use client";

import { useEffect, useState } from "react";

const looks = [
  { name: "Amber Blazer", type: "Outerwear", price: "R3,200", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=90" },
  { name: "Onyx Midi Dress", type: "Dresses", price: "R2,800", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=90" },
  { name: "Noir Wide Leg Trousers", type: "Bottoms", price: "R1,950", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=90" },
  { name: "Gold Evening Gown", type: "Occasionwear", price: "R5,400", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=90" },
];

function Icon({ name }: { name: string }) {
  const p = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "search") return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>;
  if (name === "heart") return <svg {...p}><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>;
  if (name === "user") return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0Z"/></svg>;
  if (name === "scissors") return <svg {...p}><circle cx="6" cy="7" r="3"/><circle cx="6" cy="17" r="3"/><path d="m8.7 8.4 11.3 6.4M8.7 15.6 20 9.2"/></svg>;
  if (name === "truck") return <svg {...p}><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>;
  if (name === "fabric") return <svg {...p}><path d="m4 4 4 2 4-2 4 2 4-2v16l-4-2-4 2-4-2-4 2Z"/><path d="m4 12 4-2 4 2 4-2 4 2"/></svg>;
  return <svg {...p}><path d="M12 3v18M5 8h14M7 3h10M7 21h10"/></svg>;
}

export default function Storefront() {
  const [menu, setMenu] = useState(false);
  const [bag, setBag] = useState(0);
  const [notice, setNotice] = useState(0);
  useEffect(() => { if (!notice) return; const t = setTimeout(() => setNotice(0), 2400); return () => clearTimeout(t); }, [notice]);
  const add = () => { setBag(v => v + 1); setNotice(1); };
  return <div className="vonga">
    <div className="v-top"><span>◆ &nbsp; BESPOKE TAILORING</span><span>◆ &nbsp; MADE TO MEASURE</span><span>◆ &nbsp; PRETORIA BOUTIQUE</span><span>◆ &nbsp; NATIONWIDE DELIVERY</span><span>◆ &nbsp; FREE DELIVERY OVER R1500</span></div>
    <header className="v-header">
      <a className="v-logo" href="#">VONGA</a>
      <button className="v-menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu"><i/><i/></button>
      <nav className={menu ? "open" : ""}>{["New Arrivals","Collections","Bespoke","Lookbook","About","Contact"].map(x => <a key={x} href={`#${x.toLowerCase().replace(" ", "-")}`} onClick={() => setMenu(false)}>{x}</a>)}</nav>
      <div className="v-tools"><button><Icon name="search"/></button><button><Icon name="heart"/></button><button><Icon name="user"/></button><button className="bag" onClick={() => setNotice(2)}>Bag ({bag})</button></div>
    </header>

    <main>
      <section className="v-hero">
        <div className="hero-copy"><p>New Collection 2026</p><h1>Wear<br/>Your<br/><em>Story.</em></h1><div className="mini-rule"/><span>Bespoke fashion crafted for<br/>the woman who commands<br/>every room.</span><div className="hero-buttons"><a href="#new-arrivals">Shop New Arrivals</a><a href="#lookbook">View Lookbook</a></div></div>
        <div className="hero-model" role="img" aria-label="Vonga ivory tailoring campaign"/>
        <div className="scroll-mark">SCROLL</div><button className="disc" aria-label="Play collection film"><b>▶</b><span>DISCOVER THE COLLECTION • </span></button>
      </section>

      <section className="arrivals" id="new-arrivals">
        <div className="arrival-intro"><p>Shop the latest</p><h2>New<br/>Arrivals</h2><a href="#all">View all</a></div>
        <div className="product-row">{looks.map((item) => <article key={item.name}><div className="product-photo"><img src={item.image} alt={item.name}/><span>New</span><button onClick={add}>+</button></div><h3>{item.name}</h3><p>{item.type}</p><b>{item.price}</b></article>)}</div>
      </section>

      <section className="philosophy"><strong>VONGA</strong><i/><div><blockquote>Elegance is not about being noticed —<br/>it’s about being remembered.</blockquote><span>The Vonga Philosophy</span></div></section>

      <section className="collections" id="collections">
        <article><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85" alt="A private tailoring appointment"/><h3>Bespoke Collection</h3><p>Made-to-measure. Made for you.</p><a href="#bespoke">Discover bespoke</a></article>
        <article><img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=85" alt="Women's tailoring"/><h3>Womenswear</h3><p>Timeless pieces for every moment.</p><a href="#new-arrivals">Shop now</a></article>
        <article><img src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=1000&q=85" alt="Occasion wear"/><h3>Occasion Wear</h3><p>For life's most unforgettable moments.</p><a href="#occasion">Explore</a></article>
      </section>

      <section className="experience"><div className="experience-title"><h2>The Vonga<br/>Experience</h2><span>Why choose us</span></div>{[["dress","Bespoke Tailoring","Every garment crafted to your exact measurements."],["fabric","Premium Fabrics","Sourced globally. Chosen consciously."],["scissors","Fast Turnaround","Ready-to-wear dispatched within 48 hours."],["truck","Nationwide Delivery","Free delivery on orders over R1500."]].map(x=><article key={x[1]}><Icon name={x[0]}/><b>{x[1]}</b><p>{x[2]}</p></article>)}</section>

      <section className="appointment" id="bespoke"><div><h2>Need something unique?</h2><p>Book a private fitting with our designer.</p><button onClick={() => setNotice(3)}>Schedule appointment</button></div></section>

      <section className="lookbook" id="lookbook"><div><p>From the lookbook</p><h2>Style. Story. Soul.</h2><a href="#lookbook">View Lookbook</a></div><div className="look-strip"><img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1400&q=85" alt="Vonga lookbook editorial"/></div></section>
    </main>

    <footer><div className="newsletter"><p>Be the first to know</p><span>Sign up for early access, new arrivals<br/>and exclusive offers.</span><form onSubmit={e => {e.preventDefault(); setNotice(4)}}><input aria-label="Email address" placeholder="Your email address" type="email" required/><button>Subscribe</button></form></div><div className="footer-brand"><b>VONGA</b><em>Elegance Redefined.</em><span>◎ &nbsp; f &nbsp; ♪ &nbsp; ◉</span></div><div className="footer-links"><div><b>Shop</b><a>New Arrivals</a><a>Dresses</a><a>Outerwear</a><a>Occasion Wear</a></div><div><b>Help</b><a>Size Guide</a><a>Shipping</a><a>Returns</a><a>Contact Us</a></div><div><b>Visit us</b><a>Pretoria Boutique</a><a>Waterkloof Glen</a><a>Pretoria, South Africa</a></div></div><div className="copyright">© 2026 VONGA. All rights reserved. <span>Privacy Policy &nbsp;&nbsp; Terms &amp; Conditions &nbsp;&nbsp; Cookie Policy</span></div></footer>
    {notice > 0 && <div className="v-toast">{notice === 1 ? "Added to your bag" : notice === 2 ? (bag ? `${bag} item${bag > 1 ? "s" : ""} in your bag` : "Your bag is currently empty") : notice === 3 ? "Appointment request received" : "Welcome to the Vonga list"}</div>}
  </div>;
}

# Testimonials Section Integration Guide

## Overview
This guide explains how to integrate the professional Testimonials section into your Trafo Data landing page. The section features an infinite scrolling carousel with smooth animations, glassmorphism card design, and full accessibility support.

## Files Created
```
📁 pages/
  └── testimonials.html (standalone preview version)
📁 assets/
  ├── css/index/
  │   └── testimonials.css (modular CSS)
  ├── script/index/
  │   └── testimonials.js (carousel controller)
```

---

## Integration Steps

### Step 1: Update CSS Imports
In **`assets/css/index/main.css`**, add the testimonials CSS import:

```css
@import url(../common.css);
@import url(./header.css);
@import url(./sidebar.css);
@import url(./hero.css);
@import url(./hero-2.css);
@import url(./why-choose-us.css);
@import url(./about.css);
@import url(./services.css);
@import url(./testimonials.css);  /* ← ADD THIS LINE */
@import url(./contact.css);
@import url(./footer.css);
```

### Step 2: Update Navigation Links
In **`index.html`**, add testimonials link to both desktop and mobile navigation:

**Desktop Navigation:**
```html
<li class="nav-item">
    <a class="nav-link" href="#testimonials">Testimonials</a>
</li>
```

**Mobile Navigation (sidebar):**
```html
<li class="nav-item">
    <a class="nav-link" href="#testimonials">Testimonials</a>
</li>
```

### Step 3: Add HTML Section
Insert the testimonials section in **`index.html`** (recommended placement: after "Our Services" section and before "Contact Us" section):

```html
<!-- === Testimonials Section === -->
<section class="container-fluid" id="testimonials" aria-labelledby="testimonials-title">
    <div class="container">
        <div class="testimonials-header">
            <span class="title">TESTIMONIALS</span>
            <h2 id="testimonials-title">Trusted by Traffic Engineering Professionals Worldwide</h2>
            <p style="font-size: 1.1rem; color: var(--color-text-medium); max-width: 600px; margin: 0 auto;">
                Delivering accurate traffic survey data across international projects.
            </p>
        </div>

        <!-- Carousel Wrapper -->
        <div class="testimonials-carousel-wrapper" role="region" aria-label="Customer testimonials carousel">
            <!-- Fade Overlay Left -->
            <div class="fade-left" aria-hidden="true"></div>

            <!-- Carousel -->
            <div class="testimonials-carousel" id="testimonials-carousel" role="presentation">
                <!-- Testimonial 1 -->
                <article class="testimonial-card">
                    <span class="sr-only">5 star rating</span>
                    <span class="stars" aria-hidden="true">★★★★★</span>
                    <i class="bi bi-quote quote-icon" aria-hidden="true"></i>
                    <p class="testimonial-content">
                        "Prakash and his team consistently delivered accurate traffic survey data within the agreed timescales. Their communication was excellent throughout the project, and the quality of the results exceeded our expectations."
                    </p>
                    <div class="testimonial-client">
                        <div class="client-avatar" aria-hidden="true">T</div>
                        <div class="client-info">
                            <span class="client-name">Traffic Consultancy</span>
                            <span class="client-company">United Kingdom</span>
                        </div>
                    </div>
                </article>

                <!-- Testimonial 2 -->
                <article class="testimonial-card">
                    <span class="sr-only">5 star rating</span>
                    <span class="stars" aria-hidden="true">★★★★★</span>
                    <i class="bi bi-quote quote-icon" aria-hidden="true"></i>
                    <p class="testimonial-content">
                        "We were impressed by the team's attention to detail and ability to handle complex traffic count requirements. The data was well organized, reliable, and delivered on schedule."
                    </p>
                    <div class="testimonial-client">
                        <div class="client-avatar" aria-hidden="true">T</div>
                        <div class="client-info">
                            <span class="client-name">Transportation Planning Firm</span>
                            <span class="client-company">USA</span>
                        </div>
                    </div>
                </article>

                <!-- Testimonial 3 -->
                <article class="testimonial-card">
                    <span class="sr-only">5 star rating</span>
                    <span class="stars" aria-hidden="true">★★★★★</span>
                    <i class="bi bi-quote quote-icon" aria-hidden="true"></i>
                    <p class="testimonial-content">
                        "The manual traffic counts were completed to a very high standard. The team was responsive, professional, and flexible when project requirements changed."
                    </p>
                    <div class="testimonial-client">
                        <div class="client-avatar" aria-hidden="true">R</div>
                        <div class="client-info">
                            <span class="client-name">Road Safety Consultant</span>
                            <span class="client-company">Australia</span>
                        </div>
                    </div>
                </article>

                <!-- DUPLICATE CARDS (Required for seamless infinite scroll) -->
                <article class="testimonial-card">
                    <span class="sr-only">5 star rating</span>
                    <span class="stars" aria-hidden="true">★★★★★</span>
                    <i class="bi bi-quote quote-icon" aria-hidden="true"></i>
                    <p class="testimonial-content">
                        "Prakash and his team consistently delivered accurate traffic survey data within the agreed timescales. Their communication was excellent throughout the project, and the quality of the results exceeded our expectations."
                    </p>
                    <div class="testimonial-client">
                        <div class="client-avatar" aria-hidden="true">T</div>
                        <div class="client-info">
                            <span class="client-name">Traffic Consultancy</span>
                            <span class="client-company">United Kingdom</span>
                        </div>
                    </div>
                </article>

                <article class="testimonial-card">
                    <span class="sr-only">5 star rating</span>
                    <span class="stars" aria-hidden="true">★★★★★</span>
                    <i class="bi bi-quote quote-icon" aria-hidden="true"></i>
                    <p class="testimonial-content">
                        "We were impressed by the team's attention to detail and ability to handle complex traffic count requirements. The data was well organized, reliable, and delivered on schedule."
                    </p>
                    <div class="testimonial-client">
                        <div class="client-avatar" aria-hidden="true">T</div>
                        <div class="client-info">
                            <span class="client-name">Transportation Planning Firm</span>
                            <span class="client-company">USA</span>
                        </div>
                    </div>
                </article>

                <article class="testimonial-card">
                    <span class="sr-only">5 star rating</span>
                    <span class="stars" aria-hidden="true">★★★★★</span>
                    <i class="bi bi-quote quote-icon" aria-hidden="true"></i>
                    <p class="testimonial-content">
                        "The manual traffic counts were completed to a very high standard. The team was responsive, professional, and flexible when project requirements changed."
                    </p>
                    <div class="testimonial-client">
                        <div class="client-avatar" aria-hidden="true">R</div>
                        <div class="client-info">
                            <span class="client-name">Road Safety Consultant</span>
                            <span class="client-company">Australia</span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Fade Overlay Right -->
            <div class="fade-right" aria-hidden="true"></div>
        </div>

        <!-- Controls -->
        <div class="carousel-controls">
            <button class="carousel-pause-btn" id="carousel-pause-btn" aria-pressed="false" aria-label="Pause testimonials carousel">
                <i class="bi bi-pause-fill"></i>
                <span>Pause</span>
            </button>
        </div>
    </div>
</section>
```

### Step 4: Add JavaScript
In **`index.html`**, add the testimonials script import in the `<script>` section at the bottom:

```html
<!-- === Custom Scripts === -->
<script src="./assets/script/index/main.js" type="module"></script>
<script src="./assets/script/index/testimonials.js"></script>  <!-- ← ADD THIS LINE -->
```

---

## Features

### 🎨 Design Features
- **Glassmorphism Cards**: Modern frosted glass effect with backdrop blur
- **Gradient Background**: Subtle gradient with brand colors
- **Responsive Layout**: Desktop, tablet, and mobile optimized
- **Smooth Animations**: CSS transforms and transitions for fluid motion
- **Hover Effects**: Scale-up animation with yellow border glow

### ⚡ Functionality
- **Infinite Scroll**: Seamless looping animation (60s cycle)
- **Auto-Play**: Continuously scrolls from right to left
- **Pause on Hover**: Animation pauses when user hovers over carousel
- **Touch Support**: Pauses on touch devices, resumes on touch end
- **Manual Control**: Pause/Resume button for accessibility
- **Smooth Loop**: No visible jumps or gaps

### ♿ Accessibility
- **ARIA Labels**: Proper semantic HTML with ARIA attributes
- **Keyboard Navigation**: Space key to pause/resume button
- **Screen Reader Support**: Screen reader only text for ratings
- **Focus Visible**: Clear focus indicators on interactive elements
- **Reduced Motion**: Respects user's motion preferences
- **Semantic HTML**: Uses `<article>`, `<section>` tags

### 📱 Responsive
- **Desktop**: 350px card width
- **Tablet**: 300px card width
- **Mobile**: Full viewport width minus padding
- **Fade Overlays**: Adaptive fade zone width

---

## Customization

### Change Animation Speed
In **`testimonials.css`**, modify the animation duration:

```css
.testimonials-carousel {
    animation: scroll-left 60s linear infinite;  /* Change 60s to your desired duration */
}

@keyframes scroll-left {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-50% - 12px));  /* Adjust gap as needed */
    }
}
```

### Add More Testimonials
1. Add new testimonial card in the first half of carousel
2. Add duplicate card in the second half for seamless scrolling
3. Ensure you maintain 50/50 split between original and duplicate cards

### Change Colors
In **`testimonials.css`**, the component uses CSS variables from `:root`:
```css
--color-primary: #0B3F8A;        /* Primary blue */
--color-accent: #FFC72C;         /* Accent yellow */
--color-text-dark: #1E293B;      /* Dark text */
--color-text-medium: #64748B;    /* Medium text */
```

### Modify Gap Between Cards
In **`testimonials.css`**:
```css
.testimonials-carousel {
    gap: 24px;  /* Change this value */
}
```

---

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

---

## Performance Notes
- Uses CSS animations (GPU accelerated)
- Smooth 60fps on modern devices
- Minimal JavaScript footprint
- Optimized for Core Web Vitals

---

## Testing Checklist
- [ ] Desktop view (1920px+)
- [ ] Tablet view (768px-1024px)
- [ ] Mobile view (320px-480px)
- [ ] Hover pause/resume on desktop
- [ ] Touch pause/resume on mobile
- [ ] Pause button functionality
- [ ] Navigation link works
- [ ] Keyboard navigation (Tab, Space)
- [ ] Screen reader compatibility
- [ ] Reduced motion preference respected

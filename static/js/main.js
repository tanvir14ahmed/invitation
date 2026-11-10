/**
 * Midnight Celestial Wedding Reception Invitation
 * Soft Authentic Shehnai Audio & Mobile-First Interactive Suite
 * Couple: Tanvir Ahmed & Afsa Jahan Rimi
 */

document.addEventListener('DOMContentLoaded', () => {
    initEnvelope();
    initCelestialStarfield();
    initCountdown();
    initSoftSanaiMelody();
    initBlessingsCounter();
    initCalendarAndCopy();
    initRSVP();
    initTiltEffect();
    initSatisfyingScroll();
    initPaletteSelector();
    initMobileQuickBar();
});

/* ==========================================================================
   1. Interactive Wax Seal & Envelope (Touch & Mobile Optimized)
   ========================================================================== */
function initEnvelope() {
    const envelopeOverlay = document.getElementById('envelopeOverlay');
    const waxSeal = document.getElementById('waxSeal');
    const openBtn = document.getElementById('openInvitationBtn');
    const mainContent = document.getElementById('mainContent');
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const replayBtn = document.getElementById('replayEnvelopeBtn');

    function openEnvelope() {
        if (!envelopeOverlay) return;

        // Mobile haptic vibration
        if ('vibrate' in navigator) {
            navigator.vibrate([40, 60, 40]);
        }

        // Start the soft traditional Sanai wedding melody
        if (window.sanaiEngine) {
            window.sanaiEngine.start();
        }

        // Fold envelope flap and slide card
        envelopeWrapper.classList.add('envelope-open');

        // Burst of Celestial Starlight Confetti
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 120,
                spread: 85,
                origin: { y: 0.58 },
                colors: ['#F4D068', '#FFFFFF', '#1E2A5E', '#E2E8F0', '#4C1D95', '#FFDF78']
            });
        }

        // Trigger shooting star
        if (window.spawnMeteor) {
            window.spawnMeteor();
            setTimeout(window.spawnMeteor, 350);
        }

        // Fade out overlay and reveal main invitation
        setTimeout(() => {
            envelopeOverlay.classList.add('opacity-0', 'pointer-events-none');
            mainContent.classList.remove('opacity-0', 'translate-y-8');
            mainContent.classList.add('opacity-100', 'translate-y-0');

            document.body.classList.remove('overflow-hidden');

            setTimeout(() => {
                envelopeOverlay.classList.add('hidden');
            }, 850);
        }, 1100);
    }

    if (waxSeal) {
        waxSeal.addEventListener('click', openEnvelope);
        waxSeal.addEventListener('touchend', (e) => {
            e.preventDefault();
            openEnvelope();
        });
    }

    if (openBtn) {
        openBtn.addEventListener('click', openEnvelope);
    }

    if (replayBtn) {
        replayBtn.addEventListener('click', () => {
            envelopeOverlay.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });

            requestAnimationFrame(() => {
                envelopeOverlay.classList.remove('opacity-0', 'pointer-events-none');
                envelopeWrapper.classList.remove('envelope-open');
            });
        });
    }
}

/* ==========================================================================
   2. Soft Authentic Sanai (Shehnai) Audio Engine
   ========================================================================== */
function initSoftSanaiMelody() {
    const audioEl = document.getElementById('weddingAudio');
    const audioToggleBtn = document.getElementById('audioToggleBtn');
    const audioIcon = document.getElementById('audioIcon');
    const visualizer = document.getElementById('audioVisualizer');

    let isPlaying = false;

    if (audioEl) {
        // Enforce exact 50% volume for soft soothing playback
        audioEl.volume = 0.50;
        audioEl.addEventListener('play', () => {
            audioEl.volume = 0.50;
            isPlaying = true;
            updateUI(true);
        });
        audioEl.addEventListener('pause', () => {
            isPlaying = false;
            updateUI(false);
        });
        audioEl.addEventListener('ended', () => {
            audioEl.currentTime = 0;
            audioEl.volume = 0.50;
            audioEl.play().catch(() => {});
        });
    }

    function startAudio() {
        if (!audioEl) return;
        audioEl.volume = 0.50;
        audioEl.play().then(() => {
            audioEl.volume = 0.50;
            isPlaying = true;
            updateUI(true);
        }).catch((err) => {
            console.log("Audio unlock required gesture:", err);
            isPlaying = false;
            updateUI(false);
        });
    }

    function stopAudio() {
        if (!audioEl) return;
        audioEl.pause();
        isPlaying = false;
        updateUI(false);
    }

    function toggleAudio() {
        if (!audioEl) return;
        if (isPlaying || !audioEl.paused) {
            stopAudio();
        } else {
            startAudio();
        }
    }

    function updateUI(playing) {
        if (visualizer) {
            if (playing) {
                visualizer.classList.remove('sound-paused');
            } else {
                visualizer.classList.add('sound-paused');
            }
        }
        if (audioIcon) {
            audioIcon.textContent = playing ? '🪈' : '✕';
        }
    }

    window.sanaiEngine = {
        start: startAudio,
        stop: stopAudio,
        toggle: toggleAudio,
        isPlaying: () => isPlaying
    };

    if (audioToggleBtn) {
        audioToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if ('vibrate' in navigator) navigator.vibrate(20);
            toggleAudio();
        });
    }
}

/* ==========================================================================
   3. Midnight Celestial Starfield, Constellations & Touch Interactive Sparkles
   ========================================================================== */
function initCelestialStarfield() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const isMobile = width < 768;
    const count = isMobile ? 48 : 85;
    const stars = [];

    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.6 + 0.4,
            alpha: Math.random() * 0.8 + 0.2,
            twinkleSpeed: Math.random() * 0.02 + 0.006,
            vx: (Math.random() - 0.5) * 0.18,
            vy: -(Math.random() * 0.2 + 0.04),
            isGold: Math.random() > 0.65
        });
    }

    // Meteors
    const meteors = [];

    function spawnMeteor() {
        const startX = Math.random() * width * 0.85;
        const startY = Math.random() * (height * 0.35);
        const length = Math.random() * 80 + 60;
        const speed = Math.random() * 10 + 9;
        const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.15;

        meteors.push({
            x: startX,
            y: startY,
            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,
            length: length,
            alpha: 1,
            fade: Math.random() * 0.035 + 0.02
        });
    }

    window.spawnMeteor = spawnMeteor;
    setInterval(() => {
        if (Math.random() > 0.45) spawnMeteor();
    }, 4500);

    let pointerX = width / 2;
    let pointerY = height / 2;

    function handlePointer(x, y) {
        pointerX = x;
        pointerY = y;
    }

    window.addEventListener('mousemove', (e) => handlePointer(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            handlePointer(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Constellation lines
        for (let i = 0; i < stars.length; i++) {
            for (let j = i + 1; j < stars.length; j++) {
                const dist = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
                if (dist < (isMobile ? 70 : 85)) {
                    const lineAlpha = (1 - dist / (isMobile ? 70 : 85)) * 0.14;
                    ctx.beginPath();
                    ctx.moveTo(stars[i].x, stars[i].y);
                    ctx.lineTo(stars[j].x, stars[j].y);
                    ctx.strokeStyle = `rgba(244, 208, 104, ${lineAlpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        // Stars
        stars.forEach((s) => {
            s.y += s.vy;
            s.x += s.vx;

            s.alpha += s.twinkleSpeed;
            if (s.alpha >= 1 || s.alpha <= 0.2) s.twinkleSpeed = -s.twinkleSpeed;

            if (s.y < -5) { s.y = height + 5; s.x = Math.random() * width; }
            if (s.x < -5) s.x = width + 5;
            if (s.x > width + 5) s.x = -5;

            const dx = pointerX - s.x;
            const dy = pointerY - s.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 90) {
                s.x -= (dx / dist) * 0.5;
                s.y -= (dy / dist) * 0.5;
            }

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = s.isGold ? `rgba(244, 208, 104, ${s.alpha})` : `rgba(226, 232, 240, ${s.alpha})`;
            ctx.fill();
        });

        // Meteors
        for (let i = meteors.length - 1; i >= 0; i--) {
            const m = meteors[i];
            m.x += m.dx;
            m.y += m.dy;
            m.alpha -= m.fade;

            if (m.alpha <= 0) {
                meteors.splice(i, 1);
                continue;
            }

            const gradient = ctx.createLinearGradient(
                m.x, m.y,
                m.x - (m.dx / 12) * m.length,
                m.y - (m.dy / 12) * m.length
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${m.alpha})`);
            gradient.addColorStop(0.3, `rgba(244, 208, 104, ${m.alpha * 0.8})`);
            gradient.addColorStop(1, `rgba(76, 29, 149, 0)`);

            ctx.beginPath();
            ctx.moveTo(m.x, m.y);
            ctx.lineTo(
                m.x - (m.dx / 12) * m.length,
                m.y - (m.dy / 12) * m.length
            );
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.6;
            ctx.stroke();
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================================================
   4. Live Countdown Timer (Target: 12th Dec 2026 13:30)
   ========================================================================== */
function initCountdown() {
    const targetElement = document.getElementById('countdownTarget');
    if (!targetElement) return;

    const targetDateStr = targetElement.dataset.target || '2026-12-12T13:30:00';
    const targetTime = new Date(targetDateStr).getTime();

    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minutesEl = document.getElementById('countMinutes');
    const secondsEl = document.getElementById('countSeconds');

    function update() {
        const now = new Date().getTime();
        const diff = targetTime - now;

        if (diff <= 0) {
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

/* ==========================================================================
   5. Interactive Blessings & Confetti Cannon
   ========================================================================== */
function initBlessingsCounter() {
    const sendLoveBtn = document.getElementById('sendLoveBtn');
    const blessingsCountEl = document.getElementById('blessingsCount');

    function triggerBlessing(e) {
        if ('vibrate' in navigator) navigator.vibrate(35);

        let blessings = parseInt(localStorage.getItem('wedding_blessings_tanvir_afsa') || '356', 10);
        blessings++;
        localStorage.setItem('wedding_blessings_tanvir_afsa', blessings);

        if (blessingsCountEl) {
            blessingsCountEl.textContent = blessings;
            blessingsCountEl.classList.add('scale-125', 'text-amber-400');
            setTimeout(() => {
                blessingsCountEl.classList.remove('scale-125', 'text-amber-400');
            }, 300);
        }

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 65,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#F4D068', '#FFFFFF', '#1E2A5E', '#E2E8F0', '#4C1D95']
            });
            confetti({
                particleCount: 65,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#F4D068', '#FFFFFF', '#1E2A5E', '#E2E8F0', '#4C1D95']
            });
        }

        const clientX = e?.clientX || window.innerWidth / 2;
        const clientY = e?.clientY || window.innerHeight / 2;
        spawnFloatingHeart(clientX, clientY);

        // Bubu & Dudu Happy Reaction on Blessings
        const bubuBlessingImg = document.getElementById('bubuBlessingImg');
        const bubuBlessingNote = document.getElementById('bubuBlessingNote');
        if (bubuBlessingImg) {
            bubuBlessingImg.classList.add('scale-125', '-translate-y-2');
            if (bubuBlessingNote) bubuBlessingNote.textContent = 'Bubu & Dudu send you big love! 💖🥰';
            setTimeout(() => {
                bubuBlessingImg.classList.remove('scale-125', '-translate-y-2');
            }, 600);
        }

        if (window.spawnMeteor) window.spawnMeteor();
    }

    if (sendLoveBtn) {
        sendLoveBtn.addEventListener('click', triggerBlessing);
    }

    window.triggerMobileBlessing = triggerBlessing;

    let blessings = parseInt(localStorage.getItem('wedding_blessings_tanvir_afsa') || '356', 10);
    if (blessingsCountEl) blessingsCountEl.textContent = blessings;

    function spawnFloatingHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '✨💖✨';
        heart.className = 'fixed pointer-events-none select-none text-2xl transition-all duration-1000 ease-out z-50';
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.transform = `translate(-50%, -50%) scale(0.6)`;
        heart.style.opacity = '1';
        document.body.appendChild(heart);

        requestAnimationFrame(() => {
            const randomX = (Math.random() - 0.5) * 140;
            heart.style.transform = `translate(calc(-50% + ${randomX}px), -130px) scale(1.3)`;
            heart.style.opacity = '0';
        });

        setTimeout(() => heart.remove(), 1050);
    }
}

/* ==========================================================================
   6. Calendar (.ics & Google) & Copy Venue Address
   ========================================================================== */
function initCalendarAndCopy() {
    const copyBtn = document.getElementById('copyAddressBtn');
    const toast = document.getElementById('toast');

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            if ('vibrate' in navigator) navigator.vibrate(25);
            const address = copyBtn.dataset.address || 'The Grand Hall Convention Center (Level-4), Hasnat Square, 231/7 BB Road, Chashara, Narayanganj';
            navigator.clipboard.writeText(address).then(() => {
                showToast('Venue address copied to clipboard!');
            }).catch(() => {
                showToast('Address: ' + address);
            });
        });
    }

    const downloadIcsBtn = document.getElementById('downloadIcsBtn');
    if (downloadIcsBtn) {
        downloadIcsBtn.addEventListener('click', () => {
            if ('vibrate' in navigator) navigator.vibrate(25);
            const eventDetails = {
                title: "Royal Wedding Reception - Tanvir Ahmed & Afsa Jahan Rimi",
                description: "Join us in celebrating the royal wedding reception of Tanvir Ahmed & Afsa Jahan Rimi at The Grand Hall Convention Center, Chashara, Narayanganj.",
                location: "The Grand Hall Convention Center (Level-4), Hasnat Square, 231/7 BB Road, Chashara, Narayanganj",
                start: "20261212T073000Z", // 1:30 PM BST (UTC+6) = 07:30 UTC
                end: "20261212T120000Z"    // 6:00 PM BST
            };

            const icsContent = [
                "BEGIN:VCALENDAR",
                "VERSION:2.0",
                "PRODID:-//Tanvir and Afsa Royal Wedding Reception//EN",
                "BEGIN:VEVENT",
                `SUMMARY:${eventDetails.title}`,
                `DESCRIPTION:${eventDetails.description}`,
                `LOCATION:${eventDetails.location}`,
                `DTSTART:${eventDetails.start}`,
                `DTEND:${eventDetails.end}`,
                "STATUS:CONFIRMED",
                "END:VEVENT",
                "END:VCALENDAR"
            ].join("\r\n");

            const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.setAttribute("download", "Tanvir_and_Afsa_Wedding_Reception.ics");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('Calendar invite (.ics) downloaded!');
        });
    }

    function showToast(msg) {
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
        toast.classList.add('opacity-100', 'translate-y-0');

        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
            toast.classList.remove('opacity-100', 'translate-y-0');
        }, 3200);
    }
}

/* ==========================================================================
   7. Database-Free RSVP (WhatsApp & Direct Contacts)
   ========================================================================== */
function initRSVP() {
    const form = document.getElementById('rsvpForm');
    const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
    if (!form) return;

    function buildRSVPMessage() {
        const name = document.getElementById('rsvpName')?.value.trim() || 'Guest';
        const attendance = form.querySelector('input[name="attendance"]:checked')?.value || 'Attending';
        const guests = document.getElementById('rsvpGuests')?.value || '1';
        const note = document.getElementById('rsvpNote')?.value.trim() || 'Heartiest congratulations and prayers for Tanvir & Afsa!';

        const text = `🌌 *Royal Wedding Reception RSVP - Tanvir & Afsa*\n\n` +
                     `👤 *Guest Name:* ${name}\n` +
                     `✨ *Attendance:* ${attendance}\n` +
                     `👥 *Number of Guests:* ${guests}\n` +
                     `💌 *Duas & Wishes:* ${note}\n\n` +
                     `_Date: Saturday, 12th December 2026 at 1:30 PM_\n` +
                     `_Venue: The Grand Hall Convention Center, Chashara, Narayanganj_`;

        return { text };
    }

    if (sendWhatsAppBtn) {
        sendWhatsAppBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if ('vibrate' in navigator) navigator.vibrate(30);
            const phone = sendWhatsAppBtn.dataset.phone || '8801823555505';
            const { text } = buildRSVPMessage();
            const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phone.replace(/[^0-9]/g, ''))}&text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        });
    }
}

/* ==========================================================================
   8. 3D Tilt Effect on Desktop / Smooth Scale on Mobile Touch
   ========================================================================== */
function initTiltEffect() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.45s ease';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });
}

/* ==========================================================================
   9. Satisfying Scroll Steps & Scroll Progress Bar
   ========================================================================== */
function initSatisfyingScroll() {
    const progressBar = document.getElementById('scrollProgressBar');
    const mobileBar = document.getElementById('mobileQuickBar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;

        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        if (mobileBar) {
            if (scrollTop > 220) {
                mobileBar.classList.remove('translate-y-24', 'opacity-0');
                mobileBar.classList.add('translate-y-0', 'opacity-100');
            } else {
                mobileBar.classList.add('translate-y-24', 'opacity-0');
                mobileBar.classList.remove('translate-y-0', 'opacity-100');
            }
        }
    }, { passive: true });

    // Satisfying Spring Reveal via IntersectionObserver
    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                if (Math.random() > 0.65 && window.spawnMeteor) {
                    window.spawnMeteor();
                }

                stepObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px'
    });

    document.querySelectorAll('.reveal-step').forEach((el, index) => {
        el.style.transitionDelay = `${(index % 3) * 100}ms`;
        stepObserver.observe(el);
    });
}

/* ==========================================================================
   10. Interactive Palette Swatch Selector
   ========================================================================== */
function initPaletteSelector() {
    const swatches = document.querySelectorAll('.palette-swatch');
    const tipBox = document.getElementById('paletteTipBox');
    const tipText = document.getElementById('paletteTipText');

    const tips = {
        '#0A0E23': 'Midnight Obsidian: Tailored black-tie suits, deep dark sherwanis, or regal velvet sarees.',
        '#F4D068': 'Celestial Gold: Shimmering zardozi, golden silk borders, metallic accents, and warm gold jewelry.',
        '#1E2A5E': 'Royal Sapphire: Deep majestic blue lehengas, midnight suits, and royal ethnic ensembles.',
        '#E2E8F0': 'Starlight Silver: Ethereal silver zari, moonlight georgette, diamond accents, and subtle pastels.',
        '#4C1D95': 'Nebula Amethyst: Rich royal plum or jewel-toned velvet gowns and festive traditional attires.'
    };

    swatches.forEach((swatch) => {
        function activateSwatch() {
            if ('vibrate' in navigator) navigator.vibrate(20);
            swatches.forEach(s => s.classList.remove('ring-4', 'ring-amber-400', 'scale-110'));
            swatch.classList.add('ring-4', 'ring-amber-400', 'scale-110');
            const color = swatch.dataset.color;
            if (tipBox && tipText && tips[color]) {
                tipText.textContent = tips[color];
                tipBox.classList.remove('opacity-0');
            }
        }

        swatch.addEventListener('click', activateSwatch);
        swatch.addEventListener('touchend', (e) => {
            e.preventDefault();
            activateSwatch();
        });
    });
}

/* ==========================================================================
   11. Mobile Quick Bottom Action Bar & Modal
   ========================================================================== */
function initMobileQuickBar() {
    const mobileCallBtn = document.getElementById('mobileCallBtn');
    const callModal = document.getElementById('callModal');
    const closeCallModalBtn = document.getElementById('closeCallModalBtn');
    const mobileBlessingBtn = document.getElementById('mobileBlessingBtn');

    if (mobileCallBtn && callModal) {
        mobileCallBtn.addEventListener('click', () => {
            if ('vibrate' in navigator) navigator.vibrate(25);
            callModal.classList.remove('hidden');
        });
    }

    if (closeCallModalBtn && callModal) {
        closeCallModalBtn.addEventListener('click', () => {
            callModal.classList.add('hidden');
        });
        callModal.addEventListener('click', (e) => {
            if (e.target === callModal) callModal.classList.add('hidden');
        });
    }

    if (mobileBlessingBtn) {
        mobileBlessingBtn.addEventListener('click', (e) => {
            if (window.triggerMobileBlessing) {
                window.triggerMobileBlessing(e);
            }
        });
    }
}

(async function () {
	const sessionKey = "__wfGeoWalkthroughShown";

	// Trigger only on iplocation.com
	if (
		!(
			window.location.hostname === "www.iplocation.com" ||
			window.location.hostname === "iplocation.com"
		)
	) {
		return;
	}

	// Only show once per session
	if (sessionStorage.getItem(sessionKey) === "true") return;
    sessionStorage.setItem(sessionKey, "true");
    
    const svgLogoString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 250" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
    <path d="M870 34.9703L870 215.029C870 239.229 893.947 256.363 916.33 247.736C965.249 228.881 1000 181.04 1000 124.998C1000 68.9582 965.249 21.117 916.33 2.26154C912.323 0.717594 908.262 1.30468e-06 904.302 6.12299e-07C886.139 -0.00351153 870 15.1026 870 34.9703Z" fill="url(#paint0_linear_16929_41007_tour)"></path>
    <path d="M870 201.488C890.876 201.488 909.776 192.919 923.47 179.084C937.162 165.253 945.645 146.122 945.645 125.072C945.645 82.9373 911.713 48.6601 870 48.6601L870 201.488Z" fill="currentColor" fill-opacity="0.25"></path>
    <path d="M736.398 200.834C704.684 200.834 682.462 177.749 682.462 144.74C682.462 111.3 704.252 88.2154 735.535 88.2154C767.465 88.2154 787.745 109.574 787.745 142.799V150.781L707.488 150.997C709.43 169.767 719.354 179.259 736.829 179.259C751.284 179.259 760.777 173.65 763.797 163.51H788.177C783.646 186.811 764.229 200.834 736.398 200.834ZM735.751 109.79C720.217 109.79 710.724 118.204 708.135 134.169H761.64C761.64 119.498 751.5 109.79 735.751 109.79Z" fill="currentColor"></path>
    <path d="M587.126 165.668H612.153C612.369 174.945 619.272 180.77 631.354 180.77C643.651 180.77 650.34 175.808 650.34 168.041C650.34 162.647 647.535 158.764 638.042 156.606L618.841 152.076C599.64 147.761 590.363 138.7 590.363 121.656C590.363 100.729 608.054 88.2154 632.648 88.2154C656.596 88.2154 672.777 102.023 672.993 122.734H647.966C647.751 113.673 641.71 107.848 631.57 107.848C621.214 107.848 615.173 112.594 615.173 120.577C615.173 126.618 619.92 130.501 628.981 132.659L648.182 137.189C666.089 141.288 675.15 149.487 675.15 165.883C675.15 187.458 656.812 200.834 630.491 200.834C603.954 200.834 587.126 186.595 587.126 165.668Z" fill="currentColor"></path>
    <path d="M550.398 91.4517H576.718V198.029H552.339L550.398 183.79C543.925 193.93 530.118 200.834 515.879 200.834C491.284 200.834 476.829 184.222 476.829 158.117V91.4517H503.15V148.84C503.15 169.12 511.132 177.318 525.803 177.318C542.415 177.318 550.398 167.61 550.398 147.33V91.4517Z" fill="currentColor"></path>
    <path d="M400.915 91.4517H416.233V78.5071C416.233 49.5973 431.551 37.5156 454.636 37.5156C458.735 37.5156 463.697 37.7314 468.228 38.5943V61.0318H458.951C445.574 61.0318 442.338 67.9356 442.338 78.5071V91.4517H467.796V113.458H442.338V198.029H416.233V113.458H400.915V91.4517Z" fill="currentColor"></path>
    <path d="M309.184 198.029H284.805V37.5156H311.125V106.985C318.029 95.1194 332.268 87.9998 348.449 87.9998C378.869 87.9998 397.423 111.732 397.423 145.388C397.423 178.181 377.359 200.834 346.723 200.834C330.758 200.834 317.166 193.715 310.91 181.417L309.184 198.029ZM311.341 144.309C311.341 163.51 323.207 176.671 341.33 176.671C359.884 176.671 370.886 163.295 370.886 144.309C370.886 125.324 359.884 111.732 341.33 111.732C323.207 111.732 311.341 125.108 311.341 144.309Z" fill="currentColor"></path>
    <path d="M218.864 200.834C187.15 200.834 164.928 177.749 164.928 144.74C164.928 111.3 186.718 88.2154 218.001 88.2154C249.931 88.2154 270.211 109.574 270.211 142.799V150.781L189.954 150.997C191.896 169.767 201.82 179.259 219.296 179.259C233.751 179.259 243.243 173.65 246.264 163.51H270.643C266.112 186.811 246.695 200.834 218.864 200.834ZM218.217 109.79C202.683 109.79 193.191 118.204 190.602 134.169H244.106C244.106 119.498 233.966 109.79 218.217 109.79Z" fill="currentColor"></path>
    <path d="M34.5191 198.029L0 91.4517H27.3996L41.4229 137.19C43.7961 145.604 45.9535 154.881 47.8952 164.805C49.8369 154.449 51.7787 147.761 55.2306 137.19L69.9012 91.4517H96.6535L110.893 137.19C112.187 141.504 116.502 157.47 117.796 164.589C119.522 156.607 122.974 143.878 124.916 137.19L139.155 91.4517H166.986L130.094 198.029H105.499L90.8283 151.86C86.5135 137.837 84.1404 127.697 83.2774 122.303C82.1987 127.265 80.2569 134.816 74.8633 152.292L60.1927 198.029H34.5191Z" fill="currentColor"></path>
    <defs>
    <linearGradient id="paint0_linear_16929_41007_tour" x1="904.07" y1="303.509" x2="1073.41" y2="91.4966" gradientUnits="userSpaceOnUse">
    <stop stop-color="#760DFF"></stop>
    <stop offset="1" stop-color="#10CDFF"></stop>
    </linearGradient>
    </defs>
    </svg>`;

    const connectivitySVG = `
    <svg xmlns="http://www.w3.org/2000/svg" role="presentation" data-t="svg" data-t-ui="icon-appsConnectivity" viewBox="0 0 22 22" height="18px" width="18px" style="vertical-align: middle; margin-left: 4px;">
                <g data-t="icon-g-wrapper" transform="scale(0.9166666666666666)">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_18_2)">
                    <path d="M4.28931 0.722099C4.72503 1.10096 4.77111 1.7613 4.39225 2.19701C2.28547 4.61995 1.62355 7.86711 2.41275 10.8101C2.5623 11.3677 2.23145 11.9411 1.67377 12.0907C1.11609 12.2402 0.542757 11.9093 0.393204 11.3516C-0.569676 7.76106 0.235306 3.79116 2.81441 0.82504C3.19327 0.389329 3.8536 0.343241 4.28931 0.722099Z" fill="white"/>
                    <path d="M7.39473 5.12642C7.75288 4.67354 7.67608 4.01606 7.22319 3.65791C6.7703 3.29976 6.11283 3.37657 5.75468 3.82945C4.28715 5.68519 3.84819 8.08377 4.43164 10.2623C4.58101 10.82 5.15423 11.151 5.71197 11.0016C6.2697 10.8522 6.60075 10.2791 6.45137 9.72133C6.0334 8.16073 6.34991 6.44762 7.39473 5.12642Z" fill="white"/>
                    <path d="M15.7773 3.65791C15.3244 4.01606 15.2476 4.67354 15.6058 5.12642C16.6506 6.44762 16.9671 8.16073 16.5491 9.72133C16.3997 10.2791 16.7308 10.8522 17.2886 11.0016C17.8462 11.151 18.4194 10.82 18.5688 10.2623C19.1523 8.08377 18.7133 5.68519 17.2458 3.82945C16.8876 3.37657 16.2302 3.29976 15.7773 3.65791Z" fill="white"/>
                    <path d="M20.1824 0.82504C19.8035 0.389329 19.1432 0.343241 18.7075 0.722099C18.2718 1.10096 18.2257 1.7613 18.6046 2.19701C20.7114 4.61995 21.3733 7.86711 20.5841 10.8101C20.4346 11.3677 20.7653 11.9411 21.3231 12.0907C21.8807 12.2402 22.4541 11.9093 22.6037 11.3516C23.5665 7.76106 22.7615 3.79116 20.1824 0.82504Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5457 8.36313C12.5457 7.78574 12.0776 7.31767 11.5002 7.31767C10.9229 7.31767 10.4547 7.78574 10.4547 8.36313V13.5904H4.35086C3.79975 13.5904 3.32431 13.5904 2.93272 13.6224C2.5194 13.6561 2.1083 13.7307 1.71273 13.9323C1.12259 14.2329 0.642782 14.7128 0.342089 15.3028C0.140531 15.6984 0.0659742 16.1095 0.032205 16.5229C0.000210144 16.9145 0.000226345 17.3899 0.00024504 17.941V18.6489C0.000226345 19.2 0.000210144 19.6755 0.032205 20.067C0.0659742 20.4804 0.140531 20.8914 0.342089 21.287C0.642782 21.8772 1.12259 22.3569 1.71273 22.6576C2.1083 22.8592 2.5194 22.9337 2.93272 22.9675C3.32427 22.9995 3.79978 22.9995 4.35082 22.9995H18.6497C19.2008 22.9995 19.6762 22.9995 20.0678 22.9675C20.4811 22.9337 20.8921 22.8592 21.2877 22.6576C21.8779 22.3569 22.3577 21.8772 22.6584 21.287C22.86 20.8914 22.9345 20.4804 22.9683 20.067C23.0003 19.6755 23.0003 19.2 23.0002 18.6489V17.9409C23.0003 17.3899 23.0003 16.9145 22.9683 16.5229C22.9345 16.1095 22.86 15.6984 22.6584 15.3028C22.3577 14.7128 21.8779 14.2329 21.2877 13.9323C20.8921 13.7307 20.4811 13.6561 20.0678 13.6224C19.6762 13.5904 19.2007 13.5904 18.6496 13.5904H12.5457V8.36313ZM4.70479 17.2495C4.1274 17.2495 3.65933 17.7175 3.65933 18.2949C3.65933 18.8723 4.1274 19.3404 4.70479 19.3404H8.8866C9.464 19.3404 9.93206 18.8723 9.93206 18.2949C9.93206 17.7175 9.464 17.2495 8.8866 17.2495H4.70479Z" fill="white"/>
                    </g>
                    <defs><clipPath id="clip0_18_2"><rect width="23" height="23" fill="white"/></clipPath></defs>
                </svg>
                </g>
    </svg>
    `;

	const steps = [
		{
			id: "welcome",
			title: "Welcome to Region-Free Browsing ✈️",
			text: `
      You can see your current location based on your IP displayed right here on this site. <br><br>
      But guess what? That can change in a minute — <strong>no VPN</strong>, <strong>no browser extensions</strong>, <strong>no installs</strong>. <br><br>
      Stay with me, and I’ll show you how to switch your browsing region like magic — right from your browser using Webfuse. 🌍✨
    `,
			buttons: [
				{ text: "Let’s Go!", id: "next", type: "primary" },
				{ text: "Skip Tour", id: "skip-all", type: "secondary" },
			],
		},
		{
			id: "step-apps",
			title: "Step 1: Open the Apps Menu",
			text: "To get started, click the <strong>Apps</strong> tab in the top bar. This is where all available Webfuse features live.",
			targetSelector: "#wf-apps-button", // Adjust if actual DOM ID differs
			tooltipPosition: "bottom",
			buttons: [
				{ text: "Next", id: "next", type: "primary" },
				{ text: "Skip Tour", id: "skip-all", type: "secondary" },
			],
		},
		{
			id: "step-connectivity",
			title: "Step 2: Find the Connectivity App",
			text: `Scroll or search for the <strong>Connectivity</strong>${connectivitySVG} app. It lets you browse as if you're in another region — without VPNs or plugins.`,

			targetSelector: "[data-app-name='Connectivity']", // Confirm selector
			tooltipPosition: "bottom",
			buttons: [
				{ text: "Next", id: "next", type: "primary" },
				{ text: "Skip Tour", id: "skip-all", type: "secondary" },
			],
		},
		{
			id: "step-india",
			title: "Step 3: Choose Your Region 🌏",
			text: "Pick <strong>India</strong> from the dropdown to simulate browsing from that location. You’ll immediately see local content and IP-based results.",
			targetSelector: "#wf-connectivity-region-select", // Adjust to actual selector
			tooltipPosition: "bottom",
			buttons: [
				{ text: "Next", id: "next", type: "primary" },
				{ text: "Skip Tour", id: "skip-all", type: "secondary" },
			],
		},
		{
			id: "step-install",
			title: "Step 4: Install the App",
			text: "Once your region is selected, hit <strong>Install App</strong> to activate geo-browsing for this session.",
			targetSelector: "#wf-connectivity-install-button", // Adjust to real selector
			tooltipPosition: "bottom",
			buttons: [
				{ text: "Next", id: "next", type: "primary" },
				{ text: "Skip Tour", id: "skip-all", type: "secondary" },
			],
		},
		{
			id: "step-restart",
			title: "Step 5: Restart to Apply Settings",
			text: "Now restart the session to apply your new region settings. You’ll be browsing from India in seconds. 🧳",
			targetSelector: "#wf-restart-session-btn",
			tooltipPosition: "bottom",
			buttons: [
				{ text: "Finish", id: "finish", type: "primary" },
				{ text: "Skip Tour", id: "skip-all", type: "secondary" },
			],
		},
	];


	const style = `
    #geo-walkthrough-backdrop {
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: rgba(0, 0, 0, 0.45);
        z-index: 9998;
    }

    #geo-walkthrough-modal {
        position: fixed;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 12px;
        padding: 26px 22px 20px;
        width: 420px;
        max-width: 95%;
        font-family: system-ui, sans-serif;
        box-shadow: 0 10px 32px rgba(0,0,0,0.2);
        z-index: 9999;
        transition: all 0.3s ease;
        text-align: center;
    }

    #geo-walkthrough-modal h3 {
        margin-top: 0;
        font-size: 18px;
        color: #222;
    }

    #geo-walkthrough-modal div {
        font-size: 14.5px;
        color: #444;
        line-height: 1.5;
    }

    #geo-walkthrough-modal button {
        margin: 12px 8px 0 0;
        padding: 8px 16px;
        font-size: 14px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    #geo-walkthrough-modal button.primary {
        background-color: #007bff;
        color: #fff;
    }

    #geo-walkthrough-modal button.primary:hover {
        background-color: #005ec4;
    }

    #geo-walkthrough-modal button.secondary {
        background-color: #e0e0e0;
        color: #333;
    }

    #geo-walkthrough-modal button.secondary:hover {
        background-color: #c9c9c9;
    }
    
    #wf-tour-logo-container {
        width: 100%;
        text-align: center;
        margin-top: 10px; /* Space above the logo */
        margin-bottom: 5px; /* Space below the logo */
        line-height: 0; /* Helps to remove extra space if SVG is inline-block */
    }
    #wf-tour-logo-container svg {
        height: 20px; /* Adjust for desired smallness */
        width: auto; /* Maintain aspect ratio based on height */
        display: inline-block;
    }

    `;


	const styleTag = document.createElement("style");
	styleTag.textContent = style;
	document.head.appendChild(styleTag);

	const backdrop = document.createElement("div");
	backdrop.id = "geo-walkthrough-backdrop";
	const modal = document.createElement("div");
	modal.id = "geo-walkthrough-modal";

	document.body.appendChild(backdrop);
	document.body.appendChild(modal);

	let currentStep = 0;

	function renderStep() {
		const step = steps[currentStep];
		modal.innerHTML = `
      <h3>${step.title}</h3>
      <div style="margin-bottom: 16px;">${step.text}</div>
      <div>
        ${step.buttons
					.map(
						(btn) =>
							`<button class="${btn.type}" data-id="${btn.id}">${btn.text}</button>`
					)
					.join("")}
      </div>
      <div id="wf-tour-logo-container">
        ${svgLogoString}
      </div>

    `;
		attachButtonHandlers();
	}

	function attachButtonHandlers() {
		const buttons = modal.querySelectorAll("button");
		buttons.forEach((btn) => {
			btn.addEventListener("click", () => {
				const id = btn.getAttribute("data-id");
				if (id === "next") {
					currentStep++;
					if (currentStep < steps.length) {
						renderStep();
					} else {
						close();
					}
				} else if (id === "finish") {
					close();
				}
			});
		});
	}

	function close() {
		backdrop.remove();
		modal.remove();
		styleTag.remove();
	}

	renderStep();
})();

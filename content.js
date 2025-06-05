(async function () {
	if (
		window.location.hostname !== "www.iplocation.net" &&
		window.location.hostname !== "iplocation.net"
	)
		return;

	const storageKey = "__wfGeoOnboardingShown_v1";
	if (localStorage.getItem(storageKey) === "true") return;
	localStorage.setItem(storageKey, "true");

	const steps = [
		{
			text: "Welcome! Webfuse lets you simulate browsing from different regions without installing a VPN. It's great for testing regional content, streaming availability, or price comparisons.",
			image: null,
		},
		{
			text: "Step 1: Open the Webfuse side panel and click the 'Apps' icon.",
			image:
				"https://webfuse-static.s3.amazonaws.com/onboarding/geo_apps_click.png", // replace with real URL if needed
		},
		{
			text: "Step 2: In the Apps list, find and click on 'Connectivity'.",
			image:
				"https://webfuse-static.s3.amazonaws.com/onboarding/geo_connectivity_click.png",
		},
		{
			text: "Step 3: Select a region — for example, India — to simulate browsing from that location.",
			image:
				"https://webfuse-static.s3.amazonaws.com/onboarding/geo_choose_india.png",
		},
		{
			text: "Step 4: Click 'Install App'. Then restart the session for the changes to take effect.",
			image:
				"https://webfuse-static.s3.amazonaws.com/onboarding/geo_install_restart.png",
		},
		{
			text: "You're all set! You’re now browsing from your selected region. Close this guide and test region-based content live.",
			image: null,
		},
	];

	let currentStep = 0;

	const style = `
    #wf-geo-onboarding-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.4);
      z-index: 9998;
    }
    #wf-geo-onboarding-popup {
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 24px;
      border-radius: 10px;
      max-width: 420px;
      text-align: center;
      z-index: 9999;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      font-family: system-ui, sans-serif;
    }
    #wf-geo-onboarding-popup img {
      max-width: 100%;
      margin: 12px 0;
      border-radius: 8px;
    }
    #wf-geo-onboarding-popup p {
      font-size: 15px;
      line-height: 1.5;
    }
    #wf-geo-onboarding-popup button {
      margin: 8px 6px 0;
      padding: 6px 14px;
      font-size: 14px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }
    #wf-geo-onboarding-next { background: #007bff; color: white; }
    #wf-geo-onboarding-skip { background: #e0e0e0; }
  `;

	const styleTag = document.createElement("style");
	styleTag.textContent = style;
	document.head.appendChild(styleTag);

	const overlay = document.createElement("div");
	overlay.id = "wf-geo-onboarding-overlay";

	const popup = document.createElement("div");
	popup.id = "wf-geo-onboarding-popup";

	const updateStep = () => {
		const step = steps[currentStep];
		popup.innerHTML = `
      <p>${step.text}</p>
      ${
				step.image
					? `<img src="${step.image}" alt="Step ${currentStep + 1}">`
					: ""
			}
      <div>
        <button id="wf-geo-onboarding-skip">Skip</button>
        <button id="wf-geo-onboarding-next">${
					currentStep === steps.length - 1 ? "Finish" : "Next"
				}</button>
      </div>
    `;
		attachEvents();
	};

	const attachEvents = () => {
		document.getElementById("wf-geo-onboarding-next").onclick = () => {
			currentStep++;
			if (currentStep >= steps.length) {
				document.body.removeChild(overlay);
				document.body.removeChild(popup);
			} else {
				updateStep();
			}
		};
		document.getElementById("wf-geo-onboarding-skip").onclick = () => {
			document.body.removeChild(overlay);
			document.body.removeChild(popup);
		};
	};

	updateStep();
	document.body.appendChild(overlay);
	document.body.appendChild(popup);
})();

let provider, signer, contract;

const CONTRACT_ADDRESS = "0xDb9dC319f00f1a93EE59ff9F17D5D9E2c07f0E2d";

const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "_temperature",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_humidity",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			}
		],
		"name": "addSensorData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "producer",
				"type": "address"
			}
		],
		"name": "BatchCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "passed",
				"type": "bool"
			}
		],
		"name": "BatchInspected",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_quantity",
				"type": "uint256"
			}
		],
		"name": "createBatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_passed",
				"type": "bool"
			}
		],
		"name": "inspectBatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "registerDistributor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "registerProducer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "registerRetailer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "registerTransporter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			}
		],
		"name": "SensorDataRecorded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "batches",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "currentOwner",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "arrived",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "inspectionPassed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "distributors",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			}
		],
		"name": "getBatchHistory",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "batchId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "currentOwner",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "arrived",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "inspectionPassed",
						"type": "bool"
					}
				],
				"internalType": "struct FreshChain.Batch",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "temperature",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "humidity",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct FreshChain.SensorData[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct FreshChain.Ownership[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "listBatches",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "producers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "retailers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "transporters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

/* WALLET */
async function connectWallet() {
  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  const acc = await signer.getAddress();
  account.innerText = acc;

  const admin = await contract.owner();

  let role = "Unregistered / Customer";

  if (acc.toLowerCase() === admin.toLowerCase()) {
    role = "Administrator";
  } else if (await contract.producers(acc)) {
    role = "Producer";
  } else if (await contract.distributors(acc)) {
    role = "Distributor";
  } else if (await contract.transporters(acc)) {
    role = "Transporter";
  } else if (await contract.retailers(acc)) {
    role = "Retailer";
  }

  roleInfo.innerText = `Role: ${role}`;
}


/* LOAD BATCHES */
async function loadBatchIds() {
  try {
    const ids = await contract.listBatches();
    const select = document.getElementById("batchId");

    ids.forEach(id => {
      const opt = document.createElement("option");
      opt.value = id.toString();
      opt.textContent = id.toString();
      select.appendChild(opt);
    });

  } catch (e) {
    console.error("Batch list error:", e);
  }
}

window.addEventListener("load", () => {
  loadBatchIds();

  const tid = new URLSearchParams(location.search).get("trackId");
  if (tid) {
    batchId.value = tid;
    getHistory();
  }
});



/* ADMIN */
async function registerRole() {
  const map = {
    producer: contract.registerProducer,
    transporter: contract.registerTransporter,
    distributor: contract.registerDistributor,
    retailer: contract.registerRetailer
  };
  await (await map[adminRole.value](adminAddr.value)).wait();
  alert("Role registered");
}

/* PRODUCER */
async function createBatch() {
  await (await contract.createBatch(p_id.value, p_name.value, p_qty.value)).wait();
  alert("Batch created");
  loadBatches();
}

/* DISTRIBUTOR */
async function transferOwnership() {
  await (await contract.transferOwnership(d_id.value, d_to.value)).wait();
  alert("Ownership transferred");
}

/* TRANSPORTER */
async function addSensorData() {
  await (await contract.addSensorData(t_id.value, temp.value, hum.value, loc.value)).wait();
  alert("Sensor data recorded");
}

/* RETAILER */
async function inspectBatch() {
  await (await contract.inspectBatch(r_id.value, passed.value === "true")).wait();
  alert("Inspection completed");
}

/* PUBLIC VERIFY */
async function verifyBatch() {
  const data = await contract.getBatchHistory(publicTrackId.value);
  const replacer = (k, v) => typeof v === "bigint" ? v.toString() : v;
  result.innerText = JSON.stringify(data, replacer, 2);
}

/* SIGNED QR */
async function generateSignedQR() {
  try {
    if (!signer) {
      alert("Please connect your wallet first.");
      return;
    }

    if (!p_id.value) {
      alert("Please enter Batch ID first.");
      return;
    }

    const message = `FreshChain:${p_id.value}`;
    const sig = await signer.signMessage(message);

    // TRUE URL FOR GITHUB PAGES 
    const url =
      window.location.origin +
      "/FreshChain/index.html" +
      "?trackId=" +
      p_id.value +
      "&sig=" +
      sig;

    qrBox.innerHTML = "";
    new QRCode(qrBox, {
      text: url,
      width: 180,
      height: 180
    });

  } catch (err) {
    console.error(err);
    alert("QR generation failed: " + err.message);
  }
}
}
window.addEventListener("load", async () => {
  const params = new URLSearchParams(window.location.search);
  const tid = params.get("trackId");

  if (tid) {
    publicTrackId.value = tid;
    await verifyBatch();
  }
});

/* DARK MODE */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

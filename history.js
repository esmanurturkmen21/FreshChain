const CONTRACT_ADDRESS = "0x72C2beD81DA67915F553258776158D7cAFd37963";
const ABI = [
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

/* =========================================================
   FreshChain – Public History Viewer (Read-Only)
   ========================================================= */

const CONTRACT_ADDRESS = "0x72C2beD81DA67915F553258776158D7cAFd37963";

const ABI = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "_batchId", "type": "uint256" }
    ],
    "name": "getBatchHistory",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "batchId", "type": "uint256" },
          { "internalType": "string", "name": "productName", "type": "string" },
          { "internalType": "uint256", "name": "quantity", "type": "uint256" },
          { "internalType": "address", "name": "currentOwner", "type": "address" },
          { "internalType": "bool", "name": "arrived", "type": "bool" },
          { "internalType": "bool", "name": "inspectionPassed", "type": "bool" }
        ],
        "internalType": "struct FreshChain.Batch",
        "type": "tuple"
      },
      {
        "components": [
          { "internalType": "int256", "name": "temperature", "type": "int256" },
          { "internalType": "int256", "name": "humidity", "type": "int256" },
          { "internalType": "string", "name": "location", "type": "string" },
          { "internalType": "uint256", "name": "timestamp", "type": "uint256" }
        ],
        "internalType": "struct FreshChain.SensorData[]",
        "type": "tuple[]"
      },
      {
        "components": [
          { "internalType": "address", "name": "from", "type": "address" },
          { "internalType": "address", "name": "to", "type": "address" },
          { "internalType": "uint256", "name": "timestamp", "type": "uint256" }
        ],
        "internalType": "struct FreshChain.Ownership[]",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

/* DOM ELEMENTS */
const summaryDiv = document.getElementById("summary");
const sensorsDiv = document.getElementById("sensors");
const ownershipDiv = document.getElementById("ownership");

/* GET TRACK ID FROM QR */
const params = new URLSearchParams(window.location.search);
const batchId = params.get("trackId");

if (!batchId) {
  summaryDiv.innerHTML = "<p>Invalid or missing QR code.</p>";
  sensorsDiv.innerHTML = "";
  ownershipDiv.innerHTML = "";
  throw new Error("Batch ID not found in URL");
}

/* READ-ONLY PROVIDER (NO WALLET) */
const provider = new ethers.JsonRpcProvider(
  "https://sepolia.infura.io/v3/YOUR_INFURA_KEY"
);

const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

/* LOAD HISTORY */
async function loadHistory() {
  try {
    const [batch, sensors, ownerships] =
      await contract.getBatchHistory(batchId);

    /* PRODUCT SUMMARY */
    summaryDiv.innerHTML = `
      <p><b>Batch ID:</b> ${batch.batchId}</p>
      <p><b>Product Name:</b> ${batch.productName}</p>
      <p><b>Quantity:</b> ${batch.quantity}</p>
      <p><b>Current Owner:</b><br>${batch.currentOwner}</p>
      <p><b>Arrived:</b> ${batch.arrived ? "Yes" : "No"}</p>
      <p><b>Inspection Passed:</b> ${batch.inspectionPassed ? "Yes" : "No"}</p>
    `;

    /* SENSOR DATA */
    if (sensors.length === 0) {
      sensorsDiv.innerHTML = "<p>No sensor data recorded.</p>";
    } else {
      sensorsDiv.innerHTML = sensors.map(s => `
        <div class="card">
          <p><b>Temperature:</b> ${s.temperature} °C</p>
          <p><b>Humidity:</b> ${s.humidity} %</p>
          <p><b>Location:</b> ${s.location}</p>
          <p><b>Time:</b> ${new Date(Number(s.timestamp) * 1000).toLocaleString()}</p>
        </div>
      `).join("");
    }

    /* OWNERSHIP HISTORY */
    ownershipDiv.innerHTML = ownerships.map(o => `
      <div class="card">
        <p><b>From:</b><br>${o.from}</p>
        <p><b>To:</b><br>${o.to}</p>
        <p><b>Time:</b> ${new Date(Number(o.timestamp) * 1000).toLocaleString()}</p>
      </div>
    `).join("");

  } catch (err) {
    summaryDiv.innerHTML = "<p>Error loading product history.</p>";
    sensorsDiv.innerHTML = "";
    ownershipDiv.innerHTML = "";
    console.error(err);
  }
}

loadHistory();


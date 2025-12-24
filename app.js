let provider, signer, contract;

const CONTRACT_ADDRESS = "0x72C2beD81DA67915F553258776158D7cAFd37963";

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

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask required");
    return;
  }

  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  const acc = await signer.getAddress();
  account.innerText = acc;

  const admin = await contract.owner();
  let role = "Unregistered / Customer";

  if (acc.toLowerCase() === admin.toLowerCase()) role = "Administrator";
  else if (await contract.producers(acc)) role = "Producer";
  else if (await contract.distributors(acc)) role = "Distributor";
  else if (await contract.transporters(acc)) role = "Transporter";
  else if (await contract.retailers(acc)) role = "Retailer";

  roleInfo.innerText = "Role: " + role;
}

async function loadBatches() {
  const ids = await contract.listBatches();
  const selects = [batchSelect, d_id, t_id, r_id];

  selects.forEach(s => {
    s.innerHTML = '<option value="">Select Batch</option>';
  });

  ids.forEach(id => {
    selects.forEach(s => {
      const o = document.createElement("option");
      o.value = id.toString();
      o.textContent = id.toString();
      s.appendChild(o.cloneNode(true));
    });
  });
}

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

async function createBatch() {
  await (await contract.createBatch(p_id.value, p_name.value, p_qty.value)).wait();
  alert("Batch created");
  loadBatches();
}

async function transferOwnership() {
  await (await contract.transferOwnership(d_id.value, d_to.value)).wait();
  alert("Ownership transferred");
}

async function addSensorData() {
  await (await contract.addSensorData(t_id.value, temp.value, hum.value, loc.value)).wait();
  alert("Sensor data recorded");
}

async function inspectBatch() {
  await (await contract.inspectBatch(r_id.value, passed.value === "true")).wait();
  alert("Inspection completed");
}

/* QR → history.html */
function generateSignedQR() {
  if (!p_id.value) {
    alert("Enter Batch ID first");
    return;
  }
const basePath = window.location.pathname.replace("index.html", "");
  const url =
    window.location.origin +
    basePath +
    "history.html?trackId=" +
    p_id.value;  

  qrBox.innerHTML = "";
  new QRCode(qrBox, {
    text: url,
    width: 180,
    height: 180
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

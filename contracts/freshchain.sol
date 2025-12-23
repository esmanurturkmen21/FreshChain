// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
    FreshChain
    Blockchain-Based Food Traceability System
    Version 2 – Clean Academic Implementation
*/

contract FreshChain {

    /* =============================================================
                            ROLES
    ============================================================= */

    address public owner;

    mapping(address => bool) public producers;
    mapping(address => bool) public transporters;
    mapping(address => bool) public distributors;
    mapping(address => bool) public retailers;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only admin allowed");
        _;
    }

    modifier onlyProducer() {
        require(producers[msg.sender], "Only producer allowed");
        _;
    }

    modifier onlyTransporter() {
        require(transporters[msg.sender], "Only transporter allowed");
        _;
    }

    modifier onlyDistributor() {
        require(distributors[msg.sender], "Only distributor allowed");
        _;
    }

    modifier onlyRetailer() {
        require(retailers[msg.sender], "Only retailer allowed");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    /* =============================================================
                        DATA STRUCTURES
    ============================================================= */

    struct Batch {
        uint256 batchId;
        string productName;
        uint256 quantity;
        address currentOwner;
        bool arrived;
        bool inspectionPassed;
    }

    struct SensorData {
        int256 temperature;
        int256 humidity;
        string location;
        uint256 timestamp;
    }

    struct Ownership {
        address from;
        address to;
        uint256 timestamp;
    }

    /* =============================================================
                        STORAGE
    ============================================================= */

    mapping(uint256 => Batch) public batches;
    mapping(uint256 => SensorData[]) private sensorHistory;
    mapping(uint256 => Ownership[]) private ownershipHistory;

    uint256[] private batchIndex;

    /* =============================================================
                            EVENTS
    ============================================================= */

    event BatchCreated(uint256 batchId, string productName, address producer);
    event OwnershipTransferred(uint256 batchId, address from, address to);
    event SensorDataRecorded(uint256 batchId, string location);
    event BatchInspected(uint256 batchId, bool passed);

    /* =============================================================
                        ROLE REGISTRATION
    ============================================================= */

    function registerProducer(address _addr) external onlyOwner {
        producers[_addr] = true;
    }

    function registerTransporter(address _addr) external onlyOwner {
        transporters[_addr] = true;
    }

    function registerDistributor(address _addr) external onlyOwner {
        distributors[_addr] = true;
    }

    function registerRetailer(address _addr) external onlyOwner {
        retailers[_addr] = true;
    }

    /* =============================================================
                        CORE FUNCTIONS
    ============================================================= */

    function createBatch(
        uint256 _batchId,
        string calldata _productName,
        uint256 _quantity
    ) external onlyProducer {

        require(batches[_batchId].batchId == 0, "Batch already exists");

        batches[_batchId] = Batch({
            batchId: _batchId,
            productName: _productName,
            quantity: _quantity,
            currentOwner: msg.sender,
            arrived: false,
            inspectionPassed: false
        });

        batchIndex.push(_batchId);

        emit BatchCreated(_batchId, _productName, msg.sender);
    }

    function transferOwnership(
        uint256 _batchId,
        address _to
    ) external onlyDistributor {

        Batch storage b = batches[_batchId];
        require(b.batchId != 0, "Batch not found");

        ownershipHistory[_batchId].push(
            Ownership({
                from: b.currentOwner,
                to: _to,
                timestamp: block.timestamp
            })
        );

        b.currentOwner = _to;

        emit OwnershipTransferred(_batchId, msg.sender, _to);
    }

    function addSensorData(
        uint256 _batchId,
        int256 _temperature,
        int256 _humidity,
        string calldata _location
    ) external onlyTransporter {

        require(batches[_batchId].batchId != 0, "Batch not found");

        sensorHistory[_batchId].push(
            SensorData({
                temperature: _temperature,
                humidity: _humidity,
                location: _location,
                timestamp: block.timestamp
            })
        );

        emit SensorDataRecorded(_batchId, _location);
    }

    function inspectBatch(
        uint256 _batchId,
        bool _passed
    ) external onlyRetailer {

        Batch storage b = batches[_batchId];
        require(b.batchId != 0, "Batch not found");

        b.arrived = true;
        b.inspectionPassed = _passed;

        emit BatchInspected(_batchId, _passed);
    }

    /* =============================================================
                        READ-ONLY FUNCTIONS
    ============================================================= */

    function listBatches() external view returns (uint256[] memory) {
        return batchIndex;
    }

    function getBatchHistory(
        uint256 _batchId
    )
        external
        view
        returns (
            Batch memory,
            SensorData[] memory,
            Ownership[] memory
        )
    {
        return (
            batches[_batchId],
            sensorHistory[_batchId],
            ownershipHistory[_batchId]
        );
    }
}

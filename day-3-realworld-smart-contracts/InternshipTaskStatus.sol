// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract InternshipTaskStatus {

    struct Task {
        uint256 taskId;
        string taskName;
        string status;
    }

    mapping(uint256 => Task) public tasks;

    function addTask(
        uint256 _taskId,
        string memory _taskName,
        string memory _status
    ) public {

        tasks[_taskId] = Task(
            _taskId,
            _taskName,
            _status
        );
    }

    function updateTaskStatus(
        uint256 _taskId,
        string memory _newStatus
    ) public {

        tasks[_taskId].status = _newStatus;
    }

    function getTask(uint256 _taskId)
        public
        view
        returns (
            uint256,
            string memory,
            string memory
        )
    {

        Task memory t = tasks[_taskId];

        return (
            t.taskId,
            t.taskName,
            t.status
        );
    }
}
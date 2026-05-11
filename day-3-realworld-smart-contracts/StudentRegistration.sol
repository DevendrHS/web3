// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StudentRegistration {

    struct Student {
        string name;
        uint256 age;
        uint256 id;
        string course;
        uint256 classNumber;
        string phoneNo;
    }

    mapping(uint256 => Student) public students;

    function registerStudent(
        string memory _name,
        uint256 _age,
        uint256 _id,
        string memory _course,
        uint256 _classNumber,
        string memory _phoneNo
    ) public {

        require(students[_id].id == 0, "Student already registered");

        students[_id] = Student(
            _name,
            _age,
            _id,
            _course,
            _classNumber,
            _phoneNo
        );
    }

    function getStudent(uint256 _id)public
        view
        returns (Student memory)
    {

    
        return students[_id];
    }
}
package com.example.demo.services;

import com.example.demo.entity.Users;

import java.util.List;

public interface UserService {

    Users saveUser(Users users);

    List<Users> getUsers();

    Users getUserById(Integer id);

    Users updateUser(Users users);

    void deleteUser(Integer id);
}

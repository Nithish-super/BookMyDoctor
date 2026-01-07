package com.example.demo.controller;
import com.example.demo.entity.Users;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
@CrossOrigin(origins = "*")
public class UserController {

  UserService userService;

    public UserController(@Autowired UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/saveUser")
    public Users saveUser(@RequestBody Users users){  // public Users is a entity class Users
        return userService.saveUser(users);
    }

    @GetMapping("/getUsers")
    public List<Users> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/getUserById/{id}")
    public Users getUserById(@PathVariable Integer id){

        return userService.getUserById(id);
    }

    @GetMapping("/getUserByIdParem")
    public Users getUserByIdParem(@RequestParam(name="id") Integer id){
        return userService.getUserById(id);
    }

    @PutMapping("updateUser")
    public Users updateUser(@RequestBody Users users ){
        return userService.updateUser(users);
    }

    @DeleteMapping("deleteUser")
    public String deleteUser(@RequestParam(name="id") Integer id ){
         userService.deleteUser(id);
        return "delete successfully";
    }
}

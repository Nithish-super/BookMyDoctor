package com.example.demo.implementation;

import com.example.demo.entity.Users;
import com.example.demo.repo.UserRepo;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UserImp implements UserService {

    private UserRepo userRepo;

    public UserImp(@Autowired UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public Users saveUser( Users users)
    {
        return userRepo.save(users);
    }

    @Override
    public List<Users> getUsers()
    {
        return userRepo.findAll();
    }

    @Override
    public Users getUserById(Integer id)
    {
        return userRepo.findById(id).isPresent()?userRepo.findById(id).get():null;
    }

    @Override
    public Users updateUser(Users users) {
        return userRepo.save(users);   // if had data will alter or create new
    }

    @Override
    public void deleteUser(Integer id)
    {
       userRepo.deleteById(id);
    }
}

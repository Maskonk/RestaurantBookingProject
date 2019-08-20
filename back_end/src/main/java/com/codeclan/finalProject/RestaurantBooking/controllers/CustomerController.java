package com.codeclan.finalProject.RestaurantBooking.controllers;

import com.codeclan.finalProject.RestaurantBooking.models.Customer;
import com.codeclan.finalProject.RestaurantBooking.repositories.CustomerRepository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping(value = "/by-id")
    public List<Customer> customersByVisits() {
        return customerRepository.findByOrderById();
    }



}

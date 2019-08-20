package com.codeclan.finalProject.RestaurantBooking.controllers;

import com.codeclan.finalProject.RestaurantBooking.models.Table;
import com.codeclan.finalProject.RestaurantBooking.repositories.TableRepository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tables")
public class TablesController {

    @Autowired
    TableRepository tableRepository;

    @GetMapping(value = "/bigenough/{size}")
    public List<Table> findByCapacityGreaterThan(@PathVariable int size) {
        return tableRepository.findByCapacityGreaterThan(size);
    }


}

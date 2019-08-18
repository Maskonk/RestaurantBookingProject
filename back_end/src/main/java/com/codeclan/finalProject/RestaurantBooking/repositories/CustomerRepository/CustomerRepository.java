package com.codeclan.finalProject.RestaurantBooking.repositories.CustomerRepository;

import com.codeclan.finalProject.RestaurantBooking.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}

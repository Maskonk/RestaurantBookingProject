package com.codeclan.finalProject.RestaurantBooking.repositories.TableRepository;

import com.codeclan.finalProject.RestaurantBooking.models.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TableRepository extends JpaRepository<Table, Long> {

    List<Table> findByCapacityGreaterThanOrderByCapacity(int capacity);
}

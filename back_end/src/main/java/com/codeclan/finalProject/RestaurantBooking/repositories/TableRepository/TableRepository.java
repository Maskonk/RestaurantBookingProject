package com.codeclan.finalProject.RestaurantBooking.repositories.TableRepository;

import com.codeclan.finalProject.RestaurantBooking.models.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TableRepository extends JpaRepository<Table, Long> {
}

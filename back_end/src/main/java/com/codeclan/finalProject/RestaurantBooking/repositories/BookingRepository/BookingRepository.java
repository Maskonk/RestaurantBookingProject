package com.codeclan.finalProject.RestaurantBooking.repositories.BookingRepository;

import com.codeclan.finalProject.RestaurantBooking.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}

package com.codeclan.finalProject.RestaurantBooking.controllers;

import com.codeclan.finalProject.RestaurantBooking.models.Booking;
import com.codeclan.finalProject.RestaurantBooking.repositories.BookingRepository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping(value = "/date/{date}")
    public List<Booking> getBookingsByDate(@PathVariable String date) {
        return bookingRepository.findBookingByDate(date);
    }

    @GetMapping(value = "")
    public List<Booking> getBookings() {
        return bookingRepository.findByOrderByDateAsc();
    }

}

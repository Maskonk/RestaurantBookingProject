package com.codeclan.finalProject.RestaurantBooking.components;

import com.codeclan.finalProject.RestaurantBooking.models.Booking;
import com.codeclan.finalProject.RestaurantBooking.models.Customer;
import com.codeclan.finalProject.RestaurantBooking.models.Table;
import com.codeclan.finalProject.RestaurantBooking.repositories.BookingRepository.BookingRepository;
import com.codeclan.finalProject.RestaurantBooking.repositories.CustomerRepository.CustomerRepository;
import com.codeclan.finalProject.RestaurantBooking.repositories.TableRepository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    TableRepository tableRepository;

    @Autowired
    BookingRepository bookingRepository;


    public DataLoader() {

    }

    public void run(ApplicationArguments args){

        Customer customer = new Customer("Bob", "07999999999");

        customerRepository.save(customer);

        Customer customer2 = new Customer("Sam", "07888888888");

        customerRepository.save(customer2);

        Customer customer3 = new Customer("Jane", "07777777777");

        customerRepository.save(customer3);

        Customer customer4 = new Customer("Henry", "07121121121");
        customerRepository.save(customer4);



        Table table = new Table(4);
        tableRepository.save(table);

        Table table2 = new Table(2);
        tableRepository.save(table2);

        Table table3 = new Table(2);
        tableRepository.save(table3);

        Table table4 = new Table(4);
        tableRepository.save(table4);

        Table table5 = new Table(6);
        tableRepository.save(table5);


        Booking booking = new Booking("2019-08-18", "18:15", 4,
                "No Comment", customer, table);
        bookingRepository.save(booking);

        Booking booking2 = new Booking("2019-08-18", "18:15", 4,
                "No Comment", customer2, table4);
        bookingRepository.save(booking2);

        Booking booking3 = new Booking("2019-08-25", "18:15", 4,
                "No Comment", customer, table);
        bookingRepository.save(booking3);

        Booking booking4 = new Booking("2019-08-18", "18:15", 6,
                "No Comment", customer3, table5);
        bookingRepository.save(booking4);

        Booking booking5 = new Booking("2019-08-18", "18:15", 6,
                "No Comment", customer4, table2);
        bookingRepository.save(booking4);

    }

}

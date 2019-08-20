package com.codeclan.finalProject.RestaurantBooking;

import com.codeclan.finalProject.RestaurantBooking.models.Booking;
import com.codeclan.finalProject.RestaurantBooking.models.Customer;
import com.codeclan.finalProject.RestaurantBooking.models.Table;
import com.codeclan.finalProject.RestaurantBooking.repositories.BookingRepository.BookingRepository;
import com.codeclan.finalProject.RestaurantBooking.repositories.CustomerRepository.CustomerRepository;
import com.codeclan.finalProject.RestaurantBooking.repositories.TableRepository.TableRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RestaurantBookingApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	TableRepository tableRepository;

	@Autowired
	BookingRepository bookingRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void customerHasName() {
		Customer customer = new Customer("Bob", "07999999999");
		assertEquals("Bob", customer.getName());
	}

	@Test
	public void customerHasContact() {
		Customer customer = new Customer("Bob", "07999999999");
		assertEquals("07999999999", customer.getContact());
	}




	@Test
	public void customerCanBeSaved() {
		Customer customer = new Customer("Bob", "07999999999");
		assertEquals(null, customer.getId());
		customerRepository.save(customer);
		assertNotNull(customer.getId());
	}

	@Test
	public void tableHasCapacity() {
		Table table = new Table(4);
		assertEquals(4, table.getCapacity());
		assertEquals(null, table.getId());
	}

	@Test
	public void tableCanBeSaved() {
		Table table = new Table(4);
		assertEquals(null, table.getId());
		tableRepository.save(table);
		assertNotNull(table.getId());
	}

	@Test
	public void bookingHasAttributes() {
		Customer customer = new Customer("Bob", "07999999999");
		Table table = new Table(4);
		Booking booking = new Booking("2019-08-18", "18:15", 4,
				"No Comment", customer, table);
		assertEquals("2019-08-18", booking.getDate());
		assertEquals("18:15", booking.getTime());
		assertEquals(4, booking.getPartySize());
		assertEquals("No Comment", booking.getComments());
		assertEquals("Bob", booking.getCustomer().getName());
		assertEquals(4, booking.getTable().getCapacity());
		assertNull(booking.getId());
	}

	@Test
	public void bookingCanBeSaved() {
		Customer customer = new Customer("Bob", "07999999999");
		customerRepository.save(customer);
		Table table = new Table(4);
		tableRepository.save(table);
		Booking booking = new Booking("2019-08-18", "18:15", 4,
				"No Comment", customer, table);
		assertNull(booking.getId());
		bookingRepository.save(booking);
		assertNotNull(booking.getId());
	}



}

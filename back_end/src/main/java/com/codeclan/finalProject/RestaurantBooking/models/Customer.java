package com.codeclan.finalProject.RestaurantBooking.models;

import javax.persistence.*;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "customers")

public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "contact")
    private String contact;

    @Column(name = "no_of_visits")
    private int noOfVisits;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.REMOVE)
    private List<Booking> bookings;

    public Customer(String name, String contact) {
        this.name = name;
        this.contact = contact;
        this.noOfVisits = 0;
        this.bookings = new ArrayList<Booking>();
    }

    public Customer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public int getNoOfVisits() {
        return noOfVisits;
    }

    public void setNoOfVisits(int noOfVisits) {
        this.noOfVisits = noOfVisits;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}

package com.codeclan.finalProject.RestaurantBooking.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@javax.persistence.Table(name = "tables")
public class Table {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "capacity")
    private int capacity;

    @OneToMany(mappedBy = "table", cascade = CascadeType.REMOVE)
    private List<Booking> bookings;


    public Table(int capacity) {
        this.capacity = capacity;
        this.bookings = new ArrayList<Booking>();
    }

    public Table() {
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}

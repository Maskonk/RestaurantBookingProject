package com.codeclan.finalProject.RestaurantBooking.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "time")
    private String time;

    @Column(name = "party_size")
    private int partySize;

    @Column(name = "comments")
    private String comments;

    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name = "table_id", nullable = false)
    private com.codeclan.finalProject.RestaurantBooking.models.Table table;

    public Booking(String date, String time, int partySize, String comments, Customer customer,
                   com.codeclan.finalProject.RestaurantBooking.models.Table table) {
        this.date = date;
        this.time = time;
        this.partySize = partySize;
        this.comments = comments;
        this.customer = customer;
        this.table = table;
    }

    public Booking() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getPartySize() {
        return partySize;
    }

    public void setPartySize(int partySize) {
        this.partySize = partySize;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public com.codeclan.finalProject.RestaurantBooking.models.Table getTable() {
        return table;
    }

    public void setTable(com.codeclan.finalProject.RestaurantBooking.models.Table table) {
        this.table = table;
    }
}

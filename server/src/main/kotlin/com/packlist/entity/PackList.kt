package com.packlist.entity

import jakarta.persistence.*

@Entity
@Table(name = "Packlist")
data class PackList (
    @Id val username: String = "",
    @OneToMany
    val list: MutableList<Item> = mutableListOf<Item>()
)
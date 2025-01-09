package com.packlist.controller

import com.packlist.service.PackListService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController()
@RequestMapping("/api/v1/packlist")
class PackListController (val packListService: PackListService) {
    @GetMapping
    fun retrievePackList(@RequestParam("username", required = true) username: String) = packListService.retrievePackList(username)
}